import React from "react";
import FormDataType from "../../utils/DeclareType";

interface Props {
  formdata: FormDataType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define the type for handleChange
}

const BasketballSkill: React.FC<Props> = ({ formdata, handleChange }) => {
  return (
    <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
      <p>Athlelic Skills</p>
      <p>On a scale of 1 - 10</p>

      <div className="flex gap-[2rem] flex-col md:flex-row md:gap-[10rem]">
        <div className="w-full flex flex-col gap-[2rem]">
          {/* passing */}
          <div className="w-full">
            <label htmlFor="passing">Passing</label>
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

          {/* 3pt Shooting /*/}
          <div className="w-full">
            <label htmlFor="3ptShooting">3pt Shooting</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="threept"
                value={formdata.threept || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* Perimeter Shots /*/}
          <div className="w-full">
            <label htmlFor="PerimeterShots">Perimeter Shots</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="perimeter"
                value={formdata.perimeter || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[2rem]">
          {/* ball handling */}
          <div className="w-full">
            <label htmlFor="ballHandling">Ball Handling</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="ballhandling"
                value={formdata.ballhandling || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* defense */}
          <div className="w-full">
            <label htmlFor="defense">Defense</label>
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

          {/* rebounding */}
          <div className="w-full">
            <label htmlFor="rebounding">Rebounding</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="rebounding"
                value={formdata.rebounding || ""}
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

export default BasketballSkill;
