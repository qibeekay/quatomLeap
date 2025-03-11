import React from "react";
import FormDataType from "../../utils/DeclareType";

interface OtherSkillsProps {
  formdata: FormDataType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define the type for handleChange
}

const OtherSkills: React.FC<OtherSkillsProps> = ({
  formdata,
  handleChange,
}) => {
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

  // Function to handle change in video links
  const handleVideoChange = (index: number, value: string) => {
    const newVideoLinks = [...formdata.video];
    newVideoLinks[index] = value; // Update the specific index
    handleChange({
      target: {
        name: "video",
        value: newVideoLinks,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  // Function to add a new video link input
  const addVideoLink = () => {
    handleChange({
      target: {
        name: "video",
        value: [...formdata.video, ""], // Add a new empty string for the new input
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  // Function to remove a video link input
  const removeVideoLink = (index: number) => {
    const newVideoLinks = formdata.video.filter((_, i) => i !== index); // Remove the link at the specified index
    handleChange({
      target: {
        name: "video",
        value: newVideoLinks,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
      <div className="grid sm:grid-cols-2 gap-10">
        {/* character and personality */}
        <div>
          <p className="text-left header-2">Character and Personality</p>

          <div className="flex flex-col gap-3 mt-7">
            {characterSkills.map((skill) => (
              <div className="flex items-center me-4" key={skill.value}>
                <input
                  type="checkbox"
                  name="character_personality"
                  value={skill.value}
                  checked={formdata.character_personality.includes(skill.value)}
                  className="h-6 w-6 border-2 accent-primary cursor-pointer"
                  onChange={handleChange}
                />
                <label className="ms-2 font-medium text-[#838080] text-[20px]">
                  {skill.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* work ethics */}
        <div>
          <p className="text-left header-2">Work Ethic</p>

          <div className="flex flex-col gap-3 mt-7">
            {workEthics.map((skill) => (
              <div className="flex items-center me-4" key={skill.value}>
                <input
                  type="checkbox"
                  name="work_ethic"
                  value={skill.value}
                  checked={formdata.work_ethic.includes(skill.value)}
                  className="h-6 w-6 border-2 accent-primary cursor-pointer"
                  onChange={handleChange}
                />
                <label className="ms-2 font-medium text-[#838080] text-[20px]">
                  {skill.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* game sense */}
        <div>
          <p className="text-left header-2">Game Sense</p>

          <div className="flex flex-col gap-3 mt-7">
            {gameSenseSkills.map((skill) => (
              <div className="flex items-center me-4" key={skill.value}>
                <input
                  type="checkbox"
                  name="game_sense"
                  value={skill.value}
                  checked={formdata.game_sense.includes(skill.value)}
                  className="h-6 w-6 border-2 accent-primary cursor-pointer"
                  onChange={handleChange}
                />
                <label className="ms-2 font-medium text-[#838080] text-[20px]">
                  {skill.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* youtube video links */}
        <div>
          <p className="text-left header-2">YouTube Video Links</p>
          <p>Youtube shorts are not allowed *</p>
          {formdata.video.map((link, index) => (
            <div key={index} className="flex items-center mt-2">
              <input
                type="text"
                value={link}
                onChange={(e) => handleVideoChange(index, e.target.value)}
                className="border-2 border-gray-300 rounded-lg p-2 w-full"
                placeholder="Enter YouTube link"
              />
              <button
                type="button"
                onClick={() => removeVideoLink(index)}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addVideoLink}
            className="mt-4 bg-primary text-white rounded-lg py-2 px-4"
          >
            {formdata.video.length > 0 ? "Add Another Video Link" : "Add Link"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;
