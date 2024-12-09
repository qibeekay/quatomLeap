import img from ".././../assets/imgframe.png";
import img1 from ".././../assets/arrow-left.png";
import { FormEvent, useEffect, useState } from "react";
import AthleteInfo from "./AthleteInfo";
import PhysicalAttr from "./PhysicalAttr";
import AcademicPerformance from "./AcademicPerformance";
import { useLocation, useNavigate } from "react-router-dom";
import BasketballSkill from "./BasketballSkill";
import VolleyballSkill from "./VolleyballSkill";
import FootballSkill from "./FootballSkill";
import OtherSkills from "./OtherSkills";
import FormDataType from "../../utils/DeclareType";
import { UploadProfile } from "../../api/profile";
import { PaystackButton } from "react-paystack";
import usePaystack from "../../hooks/usePaystack";
import { GetUserdata } from "../../api/auth";
import LoginModal from "../externalComponents/LoginModal";

const CreateForm = () => {
  const location = useLocation();
  const [usertoken, setUsertoken] = useState("");
  const category = location.state?.category;
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const paymentType = "player";
  const { email, loading, message, config, handleSuccess, handleClose } =
    usePaystack(paymentType);

  useEffect(() => {
    // Fetch mail from localStorage when the component mounts
    const userToken = localStorage.getItem("hopettt")?.trim();
    if (userToken) {
      const cleanedUserToken = userToken.replace(/"/g, "");
      setUsertoken(cleanedUserToken);
    }

    if (!userToken) {
      setIsModalVisible(true);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    // Redirect to login or handle user action
    window.location.href = "/auth/login";
  };

  // fetch user data
  const getuser = async () => {
    // setIsLoading(true);

    const res = await GetUserdata(usertoken);
    console.log(res);
    setStatus(res.isPaid);
  };

  // fetch user on component mount
  useEffect(() => {
    if (usertoken) {
      getuser();
    }
  }, [usertoken]);

  // handle next form
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  // handle prev form
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const navigate = useNavigate();

  // set all form data
  const [formdata, setFormData] = useState<FormDataType>(() => {
    const savedData = localStorage.getItem("formdata");
    return savedData
      ? JSON.parse(savedData)
      : {
          usertoken: "",
          full_name: "",
          dob: "",
          school_class: "",
          image: "",
          video: [],
          position: "",
          contact_info: "",
          height: null,
          weight: null,
          body_type: "",
          speed: null,
          agility: null,
          strength: null,
          coordination: null,
          stamina: null,
          gpa: null,
          test_scores: null,
          academic_interests: "",
          academic_goals: "",
          gender: [],
          level: [],
          character_personality: [],
          work_ethic: [],
          game_sense: [],
          sport_type: "",
          passing: null,
          threept: null,
          perimeter: null,
          ballhandling: null,
          defense: null,
          rebounding: null,
          setting: null,
          spiking: null,
          blocking: null,
          serving: null,
          shooting: null,
          ballcontrol: null,
          firsttouch: null,
          dribbling: null,
        };
  });

  // Save formdata to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formdata", JSON.stringify(formdata));
  }, [formdata]);

  // handle form update and change
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = event.target;
    const { name, value, type } = target;
    if (type === "file" && "files" in target) {
      const files = (target as HTMLInputElement).files;
      if (files && files.length > 0) {
        const file = files[0];

        // Validate file types
        if (name === "image" && !file.type.match("image.*")) {
          alert("Please upload a valid image file (jpg, jpeg, png).");
          return;
        }
        if (
          name === "test_scores" &&
          !file.type.match("application/pdf") &&
          !file.type.match("application/msword") &&
          !file.type.match(
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          )
        ) {
          alert("Please upload a valid document file (pdf, doc, docx).");
          return;
        }

        // Read the file as a base64 string
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prevFormData: FormDataType) => ({
            ...prevFormData,
            [name]: reader.result as string, // Store base64 string
          }));
        };
        reader.readAsDataURL(file);
      }
    } else if (type === "radio") {
      // Check the name of the radio input to determine which field to update
      if (name === "gender") {
        setFormData((prevFormData: FormDataType) => ({
          ...prevFormData,
          gender: [value], // Update gender
        }));
      } else if (name === "level") {
        setFormData((prevFormData: FormDataType) => ({
          ...prevFormData,
          level: [value], // Update level
        }));
      }
    } else if ("checked" in target && target.type === "checkbox") {
      const checked = target.checked;
      setFormData((prevFormData: FormDataType) => {
        const currentArray = prevFormData[name] || [];
        if (checked) {
          return { ...prevFormData, [name]: [...currentArray, value] };
        } else {
          return {
            ...prevFormData,
            [name]: currentArray.filter((item: string) => item !== value),
          };
        }
      });
    } else {
      setFormData((prevFormData: FormDataType) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  // handle form upload
  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    const payload = { ...formdata, sport_type: category, usertoken: usertoken };
    setIsLoading(true);

    try {
      const res = await UploadProfile(payload);
      if (res) {
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      }
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <form action="" className="overflow-hidden relative">
        <div className="flex flex-col relative">
          {/* form 1 */}
          <div
            className={`transition-transform duration-500 ease-in-out inset-0 ${
              step === 1 ? "translate-x-0" : "-translate-x-full"
            } ${step > 1 ? "opacity-0 absolute" : "opacity-100 relative"}`}
          >
            {/* upload image */}
            <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
              <p className="text-left header-2 leading-10">
                Upload A Professional Picture With A White Background{" "}
              </p>

              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <label
                  htmlFor="image"
                  className="bg-[#E8E8E8] text-[#231F20] text-base rounded-lg w-full max-w-[486px] h-[379px] flex flex-col items-center justify-center cursor-pointer border-2 border-black border-dashed mt-10 font-[sans-serif]"
                >
                  <div>
                    <img src={img} alt="" />
                  </div>
                  Upload image
                  <input
                    type="file"
                    id="image"
                    name="image"
                    // value={formdata.image}
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>

                {formdata.image && (
                  <div className=" w-[10rem] aspect-square overflow-hidden object-cover">
                    <img
                      className="w-full h-full"
                      src={formdata.image}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>

            {/* athletes information */}
            <AthleteInfo formdata={formdata} handleChange={handleChange} />
          </div>

          {/* form 2 */}
          <div
            className={`transition-transform duration-500 ease-in-out  inset-0 ${
              step === 2 ? "translate-x-0 block" : "-translate-x-full hidden"
            } ${step > 2 ? "opacity-0 absolute" : "opacity-100 relative"}`}
          >
            {/* physical attribute */}
            <PhysicalAttr formdata={formdata} handleChange={handleChange} />
          </div>

          {/* form 3 */}
          <div
            className={`transition-transform bg-[#E8E8E8] duration-500 ease-in-out  inset-0 ${
              step === 3 ? "translate-x-0 block" : "-translate-x-full hidden"
            } ${step > 3 ? "opacity-0 absolute" : "opacity-100 relative"}`}
          >
            {/* academic performace */}
            <AcademicPerformance
              formdata={formdata}
              handleChange={handleChange}
            />

            {category === "basketball" ? (
              <BasketballSkill
                formdata={formdata}
                handleChange={handleChange}
              />
            ) : category === "volleyball" ? (
              <VolleyballSkill
                formdata={formdata}
                handleChange={handleChange}
              />
            ) : (
              <FootballSkill formdata={formdata} handleChange={handleChange} />
            )}
          </div>
        </div>

        {/* form 4 */}
        <div
          className={`transition-transform bg-white duration-500 ease-in-out  inset-0 ${
            step === 4 ? "translate-x-0 block" : "-translate-x-full hidden"
          } ${step > 4 ? "opacity-0 absolute" : "opacity-100 relative"}`}
        >
          <OtherSkills formdata={formdata} handleChange={handleChange} />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 py-[40px] flex items-center justify-between">
          {/* previous */}
          {step > 1 && (
            <button
              className="flex items-center justify-center py-[12px] w-[88px] bg-primary/60 rounded-[4px]"
              onClick={handlePrev}
            >
              <div>
                <img src={img1} alt="" />
              </div>
            </button>
          )}

          {/* next */}
          {step < 4 ? (
            <button
              className="bg-primary w-[300px] lg:w-[409px] font-semibold text-[#001F3D] rounded-lg py-[16px]"
              onClick={handleNext}
            >
              Next
            </button>
          ) : status === 1 ? (
            <button
              className="bg-primary w-[300px] font-semibold text-[#001F3D] rounded-lg py-[16px]"
              onClick={handleUpload}
            >
              {isLoading ? "Loading..." : "Submit Profile"}
            </button>
          ) : (
            <div>Please subcribe to upload</div>
          )}
        </div>
      </form>
      <>
        <PaystackButton
          {...config}
          text="Proceed"
          onSuccess={handleSuccess}
          onClose={handleClose}
          className="paystack-button"
        />
        {message && <p>{message}</p>}
      </>
      <LoginModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default CreateForm;
