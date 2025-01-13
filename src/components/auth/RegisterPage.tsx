import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import img1 from "../../assets/arrow.png";
import Logo from "../../assets/logo.png";
import { FormEvent, useEffect, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { UserRegister, verifyMail } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [mail, setMail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    setVerifydata((prevData) => ({ ...prevData, email: formdata.email }));
    setStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePassword1Visibility = () => {
    setShowPassword1((prevState) => !prevState);
  };

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [verifydata, setVerifydata] = useState({
    email: "",
    verificationCode: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleVerifyChange = (event: any) => {
    const { name, value } = event.target;
    setVerifydata((prevVerifyData) => ({ ...prevVerifyData, [name]: value }));
  };

  // Validation states
  const isPasswordLongEnough = formdata.password.length >= 8;
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(formdata.password);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await UserRegister(formdata);
      if (res) {
        setTimeout(() => {
          handleNext();
        }, 1000);
      }
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch mail from localStorage when the component mounts
    const storedMail = localStorage.getItem("hopemail");
    if (storedMail) {
      setMail(storedMail);
    }
  }, []);

  // console.log(mail);

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading1(true);
    try {
      const res = await verifyMail(verifydata);
      if (res) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch {
    } finally {
      setIsLoading1(false);
    }
  };

  return (
    <div className="w-full relative min-h-screen">
      <div className="flex items-center justify-center">
        {/* bg */}
        <div className="w-full relative min-h-screen hidden md:block bg-Form bg-cover">
          <div className="absolute top-0 w-full min-h-screen bg-gradient-to-t from-[#2B445D]/80 to-[#FA9938]/80"></div>
          <div className="relative min-h-screen flex items-end px-[4rem] py-[4rem]">
            <div className="">
              <p className="text-white text-[25px] font-bold">Join us today</p>
              <p className="text-white">
                To keep connected with us please login with your personal info
              </p>
              <p className="text-white">your personal info</p>
              <div className="mt-7">
                <Link
                  to={"/auth/login"}
                  className="flex text-primary items-center gap-4"
                >
                  Already have an account Login
                  <div className="">
                    <img src={img1} alt="" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div className=" flex items-center justify-center w-full md:block h-full min-h-screen px-4 sm:px-10 md:px-0">
          <div className="w-full h-full min-h-screen flex items-center justify-center">
            <div className="md:px-[6rem] w-full max-w-[800px]">
              {/* logo */}
              <div className="w-[7rem] aspect-square">
                <img className="w-full h-full" src={Logo} alt="Logo" />
              </div>

              {/* header */}
              <div className="">
                <h1 className="text-primary font-bold text-[15px]">
                  Welcome To Quantum leap sport
                </h1>
                <p className="text-sm mt-4">Create An Account</p>
              </div>

              {/* form */}
              <div className=" overflow-hidden">
                <div
                  className={`transition-transform duration-500 ease-in-out absolute inset-0 ${
                    step === 1 ? "translate-x-0" : "-translate-x-full"
                  } ${
                    step > 1 ? "opacity-0 absolute" : "opacity-100 relative"
                  }`}
                >
                  <form
                    action=""
                    className="flex flex-col mt-14 gap-4 "
                    onSubmit={handleSubmit}
                  >
                    {/* name */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-medium mb-1">
                        Name
                      </label>
                      <input
                        className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                        type="text"
                        name="name"
                        value={formdata.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        id=""
                      />
                    </div>

                    {/* email */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-medium mb-1">
                        Email
                      </label>
                      <input
                        className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                        type="email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        required
                        placeholder="example@gmail.com"
                        id=""
                      />
                    </div>

                    {/* password */}
                    <div className="flex flex-col relative">
                      <label htmlFor="name" className="font-medium mb-1">
                        Password
                      </label>
                      <input
                        className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formdata.password}
                        onChange={handleChange}
                        required
                        id=""
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-[50%] right-2  text-black/60"
                      >
                        {showPassword ? (
                          <IoEyeOffSharp size={25} />
                        ) : (
                          <IoEyeSharp size={25} />
                        )}
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <small
                        className={` ${
                          isPasswordLongEnough
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        Password must be 8 characters or more
                      </small>
                      <small
                        className={` ${
                          hasSpecialCharacter
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        Password must contain special characters
                      </small>
                    </div>

                    {/* confirm password */}
                    <div className="flex flex-col relative">
                      <label htmlFor="name" className="font-medium mb-1">
                        Confirm Password
                      </label>
                      <input
                        className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                        type={showPassword1 ? "text" : "password"}
                        name="cpassword"
                        value={formdata.cpassword}
                        onChange={handleChange}
                        required
                        id=""
                      />
                      <button
                        type="button"
                        onClick={togglePassword1Visibility}
                        className="absolute top-[50%] right-2  text-black/60"
                      >
                        {showPassword1 ? (
                          <IoEyeOffSharp size={25} />
                        ) : (
                          <IoEyeSharp size={25} />
                        )}
                      </button>
                    </div>

                    <button className="bg-primary rounded-lg py-[14px] max-w-[188px]">
                      {isLoading ? "Loading..." : "Sign Up"}
                    </button>
                    <div className="w-full flex items-center justify-end">
                      <Link
                        to={"/auth/login"}
                        className="flex text-primary items-center gap-4"
                      >
                        Already have an account Login
                        <div className="">
                          <img src={img1} alt="" />
                        </div>
                      </Link>
                    </div>
                  </form>
                </div>

                <div
                  className={`transition-transform duration-500 ease-in-out absolute inset-0 ${
                    step === 2 ? "translate-x-0" : "-translate-x-full"
                  } ${
                    step > 2 ? "opacity-0 absolute" : "opacity-100 relative"
                  }`}
                >
                  <form action="" className="flex flex-col mt-14 gap-4">
                    {/* name */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-medium mb-1">
                        Name
                      </label>
                      <input
                        className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                        type="text"
                        name="verificationCode"
                        value={verifydata.verificationCode}
                        onChange={handleVerifyChange}
                        placeholder="Enter your code..."
                        required
                        id=""
                      />
                    </div>

                    <button
                      className="bg-primary rounded-lg py-[14px] max-w-[188px]"
                      onClick={handleVerify}
                    >
                      {isLoading1 ? "Loading..." : "Verify"}
                    </button>
                  </form>
                </div>

                <div>
                  {step > 1 && (
                    <button
                      onClick={handlePrev}
                      className="absolute top-4 font-semibold flex items-center gap-2"
                    >
                      <HiChevronLeft />
                      Previous
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
