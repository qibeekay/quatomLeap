import { useLocation, useNavigate } from "react-router-dom";
import football from "../../assets/bg-2.png";
import basketball from "../../assets/img/img12.jpg";
import volleyball from "../../assets/img/volley.jpg";

const TalentCategory = () => {
  const location = useLocation();
  const level = location.state?.category;

  const navigate = useNavigate();

  // Handle gender selection and navigation
  const handleGenderSelect = (gender: string, category: string) => {
    // Send gender, category, and current location (path) to the next page
    navigate("/talents-category", {
      state: {
        gender,
        category,
        level: level, // capturing current location
      },
    });
  };
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <div className="flex flex-col gap-[60px]">
          <div>
            <p className="header-2">Sport Categories</p>
          </div>

          {/* category */}
          <div>
            {/* basketball */}
            <div className="">
              {/* image */}
              <div className="relative flex gap-10 gap-y-28 items-center justify-center flex-wrap">
                <div className="w-full sm:w-[384px] h-[285px] rounded-lg relative">
                  <img
                    className="w-full h-full object-cover"
                    src={basketball}
                    alt=""
                  />
                  {/* bg */}
                  <div className="w-full sm:w-[384px] h-[285px] rounded-lg absolute top-0 bg-black/35"></div>

                  {/* text */}
                  <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 text-white text-[39px] font-bold">
                    Basketball
                  </p>

                  {/* gender */}
                  <div className="flex items-center justify-between px-6 mt-4">
                    {/* male */}
                    <button
                      onClick={() => {
                        handleGenderSelect("male", "basketball");
                      }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-3 aspect-square rounded-full bg-[#B2B2B2] group-hover:bg-primary"></div>
                      <p className="text-[#B2B2B2] group-hover:text-primary">
                        Male
                      </p>
                      <div className="w-[28px] h-[3px] bg-[#B2B2B2] group-hover:bg-primary rounded-t-lg"></div>
                    </button>

                    {/* female */}
                    <button
                      className="flex flex-col items-center group"
                      onClick={() => {
                        handleGenderSelect("female", "basketball");
                      }}
                    >
                      <div className="w-3 aspect-square rounded-full bg-[#B2B2B2] group-hover:bg-primary"></div>
                      <p className="text-[#B2B2B2] group-hover:text-primary">
                        Female
                      </p>
                      <div className="w-[28px] h-[3px] bg-[#B2B2B2] group-hover:bg-primary rounded-t-lg"></div>
                    </button>
                  </div>
                </div>

                {/* football */}
                <div className="w-full sm:w-[384px] h-[285px] rounded-lg relative">
                  <img
                    className="w-full h-full object-cover"
                    src={football}
                    alt=""
                  />
                  {/* bg */}
                  <div className="w-full sm:w-[384px] h-[285px] rounded-lg absolute top-0 bg-black/35"></div>

                  {/* text */}
                  <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 text-white text-[39px] font-bold">
                    Football
                  </p>

                  {/* gender */}
                  <div className="flex items-center justify-between px-6 mt-4">
                    {/* male */}
                    <button
                      className="flex flex-col items-center group"
                      onClick={() => {
                        handleGenderSelect("male", "football");
                      }}
                    >
                      <div className="w-3 aspect-square rounded-full bg-[#B2B2B2] group-hover:bg-primary"></div>
                      <p className="text-[#B2B2B2] group-hover:text-primary">
                        Male
                      </p>
                      <div className="w-[28px] h-[3px] bg-[#B2B2B2] group-hover:bg-primary rounded-t-lg"></div>
                    </button>

                    {/* female */}
                    <button
                      className="flex flex-col items-center group"
                      onClick={() => {
                        handleGenderSelect("female", "football");
                      }}
                    >
                      <div className="w-3 aspect-square rounded-full bg-[#B2B2B2] group-hover:bg-primary"></div>
                      <p className="text-[#B2B2B2] group-hover:text-primary">
                        Female
                      </p>
                      <div className="w-[28px] h-[3px] bg-[#B2B2B2] group-hover:bg-primary rounded-t-lg"></div>
                    </button>
                  </div>
                </div>

                {/* volleyball */}
                <div className="w-full sm:w-[384px] h-[285px] rounded-lg relative">
                  <img
                    className="w-full h-full object-cover"
                    src={volleyball}
                    alt=""
                  />
                  {/* bg */}
                  <div className="w-full sm:w-[384px] h-[285px] rounded-lg absolute top-0 bg-black/35"></div>

                  {/* text */}
                  <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 text-white text-[39px] font-bold">
                    Volleyball
                  </p>

                  {/* gender */}
                  <div className="flex items-center justify-between px-6 mt-4">
                    {/* male */}
                    <button
                      className="flex flex-col items-center group"
                      onClick={() => {
                        handleGenderSelect("male", "volleyball");
                      }}
                    >
                      <div className="w-3 aspect-square rounded-full bg-[#B2B2B2] group-hover:bg-primary"></div>
                      <p className="text-[#B2B2B2] group-hover:text-primary">
                        Male
                      </p>
                      <div className="w-[28px] h-[3px] bg-[#B2B2B2] group-hover:bg-primary rounded-t-lg"></div>
                    </button>

                    {/* female */}
                    <button
                      className="flex flex-col items-center group"
                      onClick={() => {
                        handleGenderSelect("female", "volleyball");
                      }}
                    >
                      <div className="w-3 aspect-square rounded-full bg-[#B2B2B2] group-hover:bg-primary"></div>
                      <p className="text-[#B2B2B2] group-hover:text-primary">
                        Female
                      </p>
                      <div className="w-[28px] h-[3px] bg-[#B2B2B2] group-hover:bg-primary rounded-t-lg"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCategory;
