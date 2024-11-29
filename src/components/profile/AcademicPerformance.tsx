import React from "react";
import FormDataType from "../../utils/DeclareType";

interface Props {
  formdata: FormDataType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define the type for handleChange
}

const AcademicPerformance: React.FC<Props> = ({ formdata, handleChange }) => {
  return (
    <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
      <p className="header-2 mb-[4rem]">Academic Performance</p>

      <div className="flex gap-[2rem] flex-col md:flex-row md:gap-[10rem]">
        <div className="w-full flex flex-col gap-[2rem]">
          {/* gpa */}
          <div className="w-full">
            <label htmlFor="gpa">GPA</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="gpa"
                value={formdata.gpa || ""}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* academic interest */}
          <div className="w-full">
            <label htmlFor="academicInterest">Academic Interest</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="academic_interests"
                value={formdata.academic_interests}
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[2rem]">
          {/* test score */}
          <div className="w-full">
            <label htmlFor="testScore">Standardized Test Scores</label>
            <div className="mt-[10px]">
              <input
                type="file"
                name="test_scores"
                onChange={handleChange}
                className="px-[16px] py-[8px] rounded-lg w-full"
              />
            </div>
          </div>

          {/* academic goal */}
          <div className="w-full">
            <label htmlFor="academicGoal">Academic Goals</label>
            <div className="mt-[10px]">
              <input
                type="text"
                name="academic_goals"
                value={formdata.academic_goals}
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

export default AcademicPerformance;
