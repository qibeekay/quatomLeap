import React from "react";
import FormDataType from "../../../utils/DeclareType";

interface Props {
  profile: FormDataType | null;
}

const SkillsInfo = ({ profile }: Props) => {
  //   console.log(profile?.character_personality);
  const characterSkills = [
    { label: "Leadership Skills", value: "Leadership" },
    { label: "Teamwork", value: "Teamwork" },
    { label: "Sportsmanship", value: "Sportsmanship" },
    { label: "Maturity", value: "Maturity" },
    { label: "Goal Orientation", value: "Goal" },
  ];

  const workEthics = [
    { label: "Drive", value: "Drive" },
    { label: "Dedication", value: "Dedication" },
    { label: "Resilience", value: "Resilience" },
  ];

  const gameSenseSkills = [
    { label: "Decision-making", value: "Decision" },
    { label: "Awareness", value: "Awareness" },
    { label: "Positioning", value: "Positioning" },
    { label: "Anticipation", value: "Anticipation" },
  ];

  const isSkillAvailable = (skill: string) => {
    return profile?.character_personality.includes(skill);
  };
  const isWorkAvailable = (skill: string) => {
    return profile?.work_ethic.includes(skill);
  };
  const isgameAvailable = (skill: string) => {
    return profile?.game_sense.includes(skill);
  };
  return (
    <div className="w-full relative bg-[#2B445DE5] text-white">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* character and personality */}
          <div>
            <p className="text-left header-2 text-white">
              Character and Personality
            </p>

            <div className="flex flex-col gap-3 mt-7">
              {characterSkills.map((skill) => (
                <div className="flex items-center me-4" key={skill.value}>
                  <input
                    type="checkbox"
                    name="character_personality"
                    value={skill.value}
                    checked={isSkillAvailable(skill.value)}
                    className="h-6 w-6 border-2 accent-primary cursor-pointer"
                  />
                  <label className="ms-2 font-medium text-white text-[20px]">
                    {skill.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* work ethics */}
          <div>
            <p className="text-left header-2 text-white">Work Ethic</p>

            <div className="flex flex-col gap-3 mt-7">
              {workEthics.map((skill) => (
                <div className="flex items-center me-4" key={skill.value}>
                  <input
                    type="checkbox"
                    name="work_ethic"
                    value={skill.value}
                    checked={isWorkAvailable(skill.value)}
                    className="h-6 w-6 border-2 accent-primary cursor-pointer"
                  />
                  <label className="ms-2 font-medium text-white text-[20px]">
                    {skill.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* game sense */}
          <div>
            <p className="text-left header-2 text-white">Game Sense</p>

            <div className="flex flex-col gap-3 mt-7">
              {gameSenseSkills.map((skill) => (
                <div className="flex items-center me-4" key={skill.value}>
                  <input
                    type="checkbox"
                    name="game_sense"
                    value={skill.value}
                    checked={isgameAvailable(skill.value)}
                    className="h-6 w-6 border-2 accent-primary cursor-pointer"
                  />
                  <label className="ms-2 font-medium text-white text-[20px]">
                    {skill.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsInfo;
