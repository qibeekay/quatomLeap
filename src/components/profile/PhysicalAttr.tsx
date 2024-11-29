import React from "react";
import FormDataType from "../../utils/DeclareType";

interface Props {
  formdata: FormDataType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define the type for handleChange
}

const PhysicalAttr: React.FC<Props> = ({ formdata, handleChange }) => {
  return (
    <div className="max-w-[1440px] px-4 mx-auto">
      <p>Physical Attributes</p>

      <div className="flex gap-[2rem] flex-col md:flex-row md:gap-[10rem]">
        <div className="w-full flex flex-col gap-[2rem]">
          {/* height */}
          <div className="w-full">
            <label htmlFor="height">Height</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="height"
                value={formdata.height || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] border border-black rounded-lg w-full"
              />
            </div>
          </div>
          {/* bodyType */}
          <div className="w-full">
            <label htmlFor="bodyType">Body Type</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="body_type"
                value={formdata.body_type}
                onChange={handleChange}
                className="px-[16px] py-[8px] border border-black rounded-lg w-full"
              />
            </div>
          </div>

          {/* agility */}
          <div className="w-full">
            <label htmlFor="agility">Agility</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="agility"
                value={formdata.agility || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] border border-black rounded-lg w-full"
              />
            </div>
          </div>
          {/* coordination */}
          <div className="w-full">
            <label htmlFor="coordination">Coordination</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="coordination"
                value={formdata.coordination || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] border border-black rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[2rem]">
          {/* weight */}
          <div className="w-full">
            <label htmlFor="weight">Weight</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="weight"
                value={formdata.weight || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] border border-black rounded-lg w-full"
              />
            </div>
          </div>

          {/* speed */}
          <div className="w-full">
            <label htmlFor="speed">Speed</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="speed"
                value={formdata.speed || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] border border-black rounded-lg w-full"
              />
            </div>
          </div>

          {/* strength */}
          <div className="w-full">
            <label htmlFor="strength">Strength</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="strength"
                value={formdata.strength || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] border border-black rounded-lg w-full"
              />
            </div>
          </div>

          {/* stamina  */}
          <div className="w-full">
            <label htmlFor="stamina">Stamina</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="stamina"
                value={formdata.stamina || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] border border-black rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalAttr;
