import React from "react";
import FormDataType from "../../utils/DeclareType";

interface Props {
  formdata: FormDataType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define the type for handleChange
}

const AthleteInfo: React.FC<Props> = ({ formdata, handleChange }) => {
  return (
    <div className="bg-[#2B445D]">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <p>Athletes Information</p>

        <div className="flex gap-[2rem] flex-col md:flex-row md:gap-[10rem]">
          <div className="w-full flex flex-col gap-[2rem]">
            {/* fullname */}
            <div className="w-full">
              <label htmlFor="fullName">Full Name</label>
              <div className="mt-[10px]">
                <input
                  type="text"
                  name="full_name"
                  value={formdata.full_name}
                  onChange={handleChange}
                  className="px-[16px] py-[8px] rounded-lg w-full"
                />
              </div>
            </div>

            {/* position */}
            <div className="w-full">
              <label htmlFor="fullName">Position</label>
              <div className="mt-[10px]">
                <input
                  type="text"
                  name="position"
                  value={formdata.position}
                  onChange={handleChange}
                  className="px-[16px] py-[8px] rounded-lg w-full"
                />
              </div>
            </div>

            {/* contact */}
            <div className="w-full">
              <label htmlFor="fullName">Contact Information</label>
              <div className="mt-[10px]">
                <input
                  type="text"
                  name="contact_info"
                  value={formdata.contact_info}
                  onChange={handleChange}
                  className="px-[16px] py-[8px] rounded-lg w-full"
                />
              </div>
            </div>

            {/* level */}
            <div className="w-full">
              <label htmlFor="">Level</label>
              <div className="grid grid-cols-2 gap-2 rounded-xl bg-gray-200 p-1 mt-[10px]">
                <div>
                  <input
                    type="radio"
                    name="level"
                    id="pro"
                    value="pro"
                    className="peer hidden"
                    onChange={handleChange}
                    // checked={formdata.gender.includes("male")}
                  />
                  <label
                    htmlFor="pro"
                    className="block cursor-pointer select-none hover:bg-primary hover:text-white rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:text-white"
                  >
                    Pro Athelete
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="level"
                    id="college"
                    value="college"
                    onChange={handleChange}
                    // checked={formdata.gender.includes("female")}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="college"
                    className="block cursor-pointer select-none hover:bg-primary hover:text-white rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:text-white"
                  >
                    College Athlete
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="level"
                    id="highschool"
                    value="highschool"
                    onChange={handleChange}
                    // checked={formdata.gender.includes("female")}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="highschool"
                    className="block cursor-pointer select-none hover:bg-primary hover:text-white rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:text-white"
                  >
                    Highschool Athlete
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-[2rem]">
            {/* dob of birth */}
            <div className="w-full">
              <label htmlFor="fullName">Date Of Birth</label>
              <div className="mt-[10px]">
                <input
                  type="text"
                  name="dob"
                  value={formdata.dob}
                  onChange={handleChange}
                  className="px-[16px] py-[8px] rounded-lg w-full"
                />
              </div>
            </div>

            {/* school / class */}
            <div className="w-full">
              <label htmlFor="">School / Class</label>
              <div className="mt-[10px]">
                <input
                  type="text"
                  name="school_class"
                  value={formdata.school_class}
                  onChange={handleChange}
                  className="px-[16px] py-[8px] rounded-lg w-full"
                />
              </div>
            </div>

            {/* gender */}
            <div className="w-full">
              <label htmlFor="">gender</label>
              <div className="grid grid-cols-2 gap-2 rounded-xl bg-gray-200 p-1 mt-[10px]">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    className="peer hidden"
                    onChange={handleChange}
                    // checked={formdata.gender.includes("male")}
                  />
                  <label
                    htmlFor="male"
                    className="block cursor-pointer select-none hover:bg-primary hover:text-white rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:text-white"
                  >
                    male
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleChange}
                    // checked={formdata.gender.includes("female")}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="female"
                    className="block cursor-pointer select-none hover:bg-primary hover:text-white rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:text-white"
                  >
                    female
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteInfo;
