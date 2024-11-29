import React from "react";
import FormDataType from "../../utils/DeclareType";

interface Props {
  formdata: FormDataType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define the type for handleChange
}

const VolleyballSkill: React.FC<Props> = ({ formdata, handleChange }) => {
  return (
    <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
      <p>Athlelic Skills</p>
      <p>On a scale of 1 - 10</p>

      <div className="flex gap-[2rem] flex-col md:flex-row md:gap-[10rem]">
        <div className="w-full flex flex-col gap-[2rem]">
          {/* passing */}
          <div className="w-full">
            <label htmlFor="passing">Passing(Bump)</label>
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

          {/* Serving /*/}
          <div className="w-full">
            <label htmlFor="Serving">Serving</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="serving"
                value={formdata.serving || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* Setting /*/}
          <div className="w-full">
            <label htmlFor="Setting">Setting</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="setting"
                value={formdata.setting || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[2rem]">
          {/* blocking */}
          <div className="w-full">
            <label htmlFor="blocking">Blocking</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="blocking"
                value={formdata.blocking || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* spiking */}
          <div className="w-full">
            <label htmlFor="spiking">Spiking</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="spiking"
                value={formdata.spiking || ""}
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

export default VolleyballSkill;
