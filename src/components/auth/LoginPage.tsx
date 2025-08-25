import { FormEvent, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import img1 from "../../assets/arrow.png";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../../api/auth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await UserLogin(formdata);
      if (res) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full relative min-h-screen">
      <div className="flex items-center justify-center h-full">
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
                  to={"/auth/register"}
                  className="flex text-primary items-center gap-4"
                >
                  Create an account
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
                <h1 className="text-primary font-bold text-[32px]">
                  Welcome To Quantum leap sport
                </h1>
                <p className="text-sm mt-4">Create An Account</p>
              </div>

              {/* form */}
              <div className="">
                <form
                  action=""
                  className="flex flex-col mt-14 gap-4"
                  onSubmit={handleSubmit}
                >
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
                      className="absolute top-[50%] -translate-y-1/2 right-2  text-black/60"
                    >
                      {showPassword ? (
                        <IoEyeOffSharp size={25} />
                      ) : (
                        <IoEyeSharp size={25} />
                      )}
                    </button>
                    <div className="w-full mt-1">
                      <Link
                        to={"/auth/forgot-password"}
                        className="flex text-sm text-primary items-center gap-4"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <button className="bg-primary rounded-lg py-[14px] max-w-[188px]">
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                  <div className="w-full flex items-center justify-end">
                    <Link
                      to={"/auth/register"}
                      className="flex text-primary items-center gap-4"
                    >
                      Create an account
                      <div className="">
                        <img src={img1} alt="" />
                      </div>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
