import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetProfileByCategory } from "../../../api/profile";
import FormDataType from "../../../utils/DeclareType";
import img from "../../../assets/male.jpg";
import { HiX } from "react-icons/hi";
import Loader from "../../../utils/Loader";
import { GetUserdata } from "../../../api/auth";
import { PaystackButton } from "react-paystack";
import usePaystack from "../../../hooks/usePaystack";
import { toast } from "react-toastify";

interface Props {
  gender: string;
  level: string;
  category: string;
}

const ViewTalentsResult = ({ gender, level, category }: Props) => {
  const [nav, setNav] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState(0);
  const [usertoken, setUsertoken] = useState("");
  const [response, setResponse] = useState<FormDataType[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<FormDataType | null>(
    null
  );
  const paymentType = "scout";
  const { email, loading, message, config, handleSuccess, handleClose } =
    usePaystack(paymentType);

  useEffect(() => {
    // Fetch mail from localStorage when the component mounts
    const userToken = localStorage.getItem("hopettt")?.trim();
    if (userToken) {
      const cleanedUserToken = userToken.replace(/"/g, "");
      setUsertoken(cleanedUserToken);
    }
  }, []);

  const getuser = async () => {
    // setIsLoading(true);

    const res = await GetUserdata(usertoken);
    console.log(res);
    setStatus(res.isScoutPaid);
  };

  // fetch user on component mount
  useEffect(() => {
    if (usertoken) {
      getuser();
    }
  }, [usertoken]);

  const toggleNav = (profile: FormDataType | null) => {
    setSelectedProfile(profile);
    setNav(!nav);
  };

  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    sport_type: "",
    gender: [],
    level: [],
  });

  const handleUpload = async () => {
    const payload = {
      ...formdata,
      sport_type: category,
      gender: gender,
      level: level,
    };
    setIsLoading(true);

    try {
      const res = await GetProfileByCategory(payload);
      setResponse(res);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleUpload();
  }, []);

  const openProfile = (uuid: string) => {
    navigate(`/player-profile/${uuid}`, { state: { uuid } });
  };

  useEffect(() => {
    if (message) {
      // Trigger toast notification based on message content
      toast.info(message);
    }
  }, [message]);

  return (
    <div className="bg-white">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <div className="flex flex-col gap-[60px]">
          <div>
            <p className="header-2 capitalize">
              {gender === "male" ? "Men's" : "Women's"} {category}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 gap-y-20">
            {isLoading ? (
              <Loader />
            ) : response.length === 0 ? (
              <p>No data available</p>
            ) : (
              response?.map((list, index) => (
                <div
                  key={index}
                  className="max-w-[384px] h-[417px] rounded-2xl shadow-md overflow-hidden flex flex-col"
                >
                  <div className="overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-top"
                      src={list?.image || img} // Use fallback image if no image
                      alt={list?.full_name}
                    />
                  </div>
                  <button
                    className="hover:bg-primary bg-dark w-full flex items-center py-3 justify-center text-white hover:text-dark text-[20px] font-semibold"
                    onClick={() => toggleNav(list)}
                  >
                    <p>{list?.full_name}</p>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Modal */}
        {nav && selectedProfile && (
          <div className="w-full h-screen bg-black/35 left-0 top-0 fixed z-30 grid justify-center items-center">
            <div className="w-[300px] sm:w-[400px] md:w-[500px] bg-white p-6 flex flex-col items-center justify-center relative overflow-hidden rounded-2xl">
              <button onClick={() => toggleNav(null)}>
                <HiX size={30} className="absolute top-4 right-4" />
              </button>
              <div className="">
                <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[287px]">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={selectedProfile.image || img}
                    alt={selectedProfile.full_name}
                  />
                </div>

                <div className="px-4 pt-4">
                  <p className="text-xl font-semibold text-dark">
                    {selectedProfile.full_name}
                  </p>
                  <p className="text-primary text-sm">
                    {selectedProfile.position || "Position not available"}
                  </p>
                </div>

                <div className="px-4 py-4">
                  <p className="text-sm">
                    DOB: <span>{selectedProfile.dob || "N/A"}</span>
                  </p>
                  <p className="text-sm">
                    Height: <span>{selectedProfile.height || "N/A"}</span>
                  </p>
                  <p className="text-sm">
                    Weight: <span>{selectedProfile.weight || "N/A"}</span>
                  </p>
                  <p className="text-sm">
                    Class: <span>{selectedProfile.class || "N/A"}</span>
                  </p>
                </div>

                <div className="px-4">
                  {status === 1 ? (
                    <button
                      className="bg-primary rounded-lg py-[14px] w-[188px]"
                      onClick={() => {
                        openProfile(selectedProfile.usertoken);
                      }}
                    >
                      View Profile
                    </button>
                  ) : (
                    <PaystackButton
                      {...config}
                      text="Unlock For $200"
                      onSuccess={handleSuccess}
                      onClose={handleClose}
                      className="paystack-button bg-primary rounded-lg py-[14px] w-[188px]"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTalentsResult;
