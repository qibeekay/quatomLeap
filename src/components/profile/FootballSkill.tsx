import React from "react";
import FormDataType from "../../utils/DeclareType";

interface Props {
  formdata: FormDataType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define the type for handleChange
}

const FootballSkill: React.FC<Props> = ({ formdata, handleChange }) => {
  return (
    <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
      <p className="header-2">Athlelic Skills</p>
      <p>On a scale of 1 - 10</p>

      <div className="flex gap-[2rem] flex-col md:flex-row md:gap-[10rem]">
        <div className="w-full flex flex-col gap-[2rem]">
          {/* Ball Control */}
          <div className="w-full">
            <label htmlFor="ballControl">Ball Control</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="ballcontrol"
                value={formdata.ballcontrol || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* Passing /*/}
          <div className="w-full">
            <label htmlFor="Passing">Passing</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="passing"
                value={formdata.passing || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* Shooting /*/}
          <div className="w-full">
            <label htmlFor="Shooting">Shooting</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="shooting"
                value={formdata.shooting || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[2rem]">
          {/* Dribbling */}
          <div className="w-full">
            <label htmlFor="Dribbling">Dribbling</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="dribbling"
                value={formdata.dribbling || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* First Touch */}
          <div className="w-full">
            <label htmlFor="First Touch">First Touch</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="firsttouch"
                value={formdata.firsttouch || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* Defending */}
          <div className="w-full">
            <label htmlFor="Defending">Defending</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="defense"
                value={formdata.defense || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballSkill;
