import React from "react";
import { saveAs } from "file-saver";
import FormDataType from "../../../utils/DeclareType";

interface Props {
  profile: FormDataType | null;
}

const AcadInfo = ({ profile }: Props) => {
  const testScore = profile?.test_scores || ""; // Get test scores safely

  // Ensure the base64 string has the proper format
  const cleanBase64 = (str: string) => {
    // Remove the base64 prefix if it exists
    if (str.startsWith("data:application/pdf;base64,")) {
      return str.split(",")[1];
    }
    return str;
  };

  // Fix possible padding issues in the base64 string
  const fixBase64Padding = (base64: string) => {
    const missingPadding = base64.length % 4;
    if (missingPadding) {
      return base64 + "=".repeat(4 - missingPadding);
    }
    return base64;
  };

  const base64Pdf = cleanBase64(testScore);
  const fixedBase64Pdf = fixBase64Padding(base64Pdf);

  // Ensure the Base64 string is valid before proceeding
  let blob = new Blob([], { type: "application/pdf" });
  try {
    const decodedPdf = atob(fixedBase64Pdf);
    blob = new Blob(
      [new Uint8Array(decodedPdf.split("").map((char) => char.charCodeAt(0)))],
      {
        type: "application/pdf",
      }
    );
  } catch (error) {
    console.error("Failed to decode Base64 PDF:", error);
  }

  const fileName = "testscores.pdf"; // default file name

  const downloadPdf = () => {
    if (blob.size > 0) {
      saveAs(blob, fileName);
    } else {
      console.error("No valid PDF data to download.");
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <div className="flex gap-[10rem]">
          <div className="w-full flex flex-col gap-[2rem]">
            {/* GPA */}
            <div className="w-full">
              <label htmlFor="gpa">GPA</label>
              <div className="mt-[10px]">
                <div className="px-[16px] py-[8px] rounded-lg w-full border">
                  <p>{profile?.gpa}</p>
                </div>
              </div>
            </div>

            {/* Academic Interest */}
            <div className="w-full">
              <label htmlFor="academicInterest">Academic Interest</label>
              <div className="mt-[10px]">
                <div className="px-[16px] py-[8px] rounded-lg w-full border">
                  <p>{profile?.academic_interests}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[2rem]">
            {/* Test Score */}
            <div className="w-full">
              <label htmlFor="testScore">Standardized Test Scores</label>
              <div className="mt-[10px]">
                <div className="px-[16px] py-[8px] rounded-lg w-full border">
                  <p>
                    {testScore
                      ? "Test score available"
                      : "No test score available"}
                  </p>
                </div>
                {testScore && (
                  <button className="text-primary" onClick={downloadPdf}>
                    Download Test Score
                  </button>
                )}
              </div>
            </div>

            {/* Academic Goal */}
            <div className="w-full">
              <label htmlFor="academicGoal">Academic Goals</label>
              <div className="mt-[10px]">
                <div className="px-[16px] py-[8px] rounded-lg w-full border">
                  <p>{profile?.academic_goals}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcadInfo;
