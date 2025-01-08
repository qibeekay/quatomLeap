import { useEffect, useState } from "react";
import {
  AcadInfo,
  AthleteBasicInfo,
  Footer,
  ProfileHeader,
  SkillsInfo,
  YoutubeLink,
} from "../../../components";
import { GetUserProfile } from "../../../api/profile";
import FormDataType from "../../../utils/DeclareType";
import { useLocation } from "react-router-dom";
import Loader from "../../../utils/Loader";
import { jsPDF } from "jspdf";
import base64Logo from "../../../assets/logo.png";

const ScoutViewPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  const [profile, setProfile] = useState<FormDataType | null>(null);

  const location = useLocation();
  const usertoken = location.state.uuid;

  const getProfile = async () => {
    setIsLoading(true);

    try {
      const res = await GetUserProfile(usertoken);
      setProfile(res);
    } catch {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (usertoken) {
      getProfile();
    }
  }, [usertoken]);

  const downloadPDF = () => {
    if (!profile) {
      console.error("Profile data is missing.");
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const imgWidth = 30;
    const imgHeight = 30;
    const logoX = 10;
    const logoY = 10;

    const preloadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Image load failed"));
      });
    };

    const addHeader = (doc: jsPDF) => {
      const logoX = 10;
      const logoY = 10;
      const imgWidth = 30;
      const imgHeight = 30;
      const textX = logoX + imgWidth + 5; // Text starts after the logo with a small gap
      const textY = logoY + imgHeight / 2 + 5; // Center align the text vertically with the logo

      doc.addImage(base64Logo, "JPEG", logoX, logoY, imgWidth, imgHeight);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Quantum Leap Sports Scouting", textX, textY, {
        align: "left",
      });

      // Add some vertical space after the header before the text starts
      return textY + 20; // Adjust this value to control the gap between the header and text
    };

    const generatePDFContent = async () => {
      try {
        // Preload images
        const profileImg = profile.image
          ? await preloadImage(profile.image)
          : null;

        // Add the first page with the header
        let currentY = addHeader(doc); // Capture the Y position where the header ends

        // Add contact info
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        const contactY = currentY + 10;
        doc.text("Website: Qlsportsonline.com", 10, contactY);
        doc.text("Phone: +234 703 116 3355", 10, contactY + 10);
        doc.text("Email: info@qlsportsonline.com", 10, contactY + 20);
        doc.addPage();

        // Re-add the header on the new page
        currentY = addHeader(doc);

        // Add profile content
        const addText = (text: string, yOffset = 10) => {
          if (currentY + yOffset > pageHeight - 20) {
            doc.addPage();
            currentY = addHeader(doc); // Re-add the header on the new page
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
          }
          currentY += yOffset;
          doc.text(text, 10, currentY);
        };

        // Add profile image if available
        if (profileImg) {
          doc.addImage(profileImg, "JPEG", 10, currentY + 10, 50, 50);
          currentY += 60;
        }

        // Add profile details
        doc.setFont("helvetica", "bold");
        addText("Athlete Information", 10);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        addText(`Name: ${profile.full_name || "N/A"}`);
        addText(`Date of Birth: ${profile.dob || "N/A"}`);
        addText(`Class/School: ${profile.school_class || "N/A"}`);
        addText(`Sport Type: ${profile.sport_type || "N/A"}`);
        addText(`Position: ${profile.position || "N/A"}`);
        addText(`Contact Info: ${profile.contact_info || "N/A"}`);

        // Physical Attributes
        doc.setFont("helvetica", "bold");
        addText("Physical Attributes", 10);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        addText(`Height: ${profile.height || "N/A"} cm`);
        addText(`Weight: ${profile.weight || "N/A"} kg`);
        addText(`Body Type: ${profile.body_type || "N/A"}`);
        addText(`Speed: ${profile.speed || "N/A"}`);
        addText(`Agility: ${profile.agility || "N/A"}`);
        addText(`Coordination: ${profile.coordination || "N/A"}`);
        addText(`Stamina: ${profile.stamina || "N/A"}`);
        addText(`Strength: ${profile.strength || "N/A "}`);

        // Athletic Skills
        doc.setFont("helvetica", "bold");
        addText("Athletic Skills", 10);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        // Check the sport type and add the corresponding skills
        if (profile.sport_type === "basketball") {
          addText(`Passing: ${profile.passing || "N/A"}`);
          addText(`Defense: ${profile.defense || "N/A"}`);
          addText(`Rebounding: ${profile.rebounding || "N/A"}`);
          addText(`Three-Point Shots: ${profile.threept || "N/A"}`);
          addText(`Ball Handling: ${profile.ballhandling || "N/A"}`);
          addText(`Perimeter Skills: ${profile.perimeter || "N/A"}`);
        } else if (profile.sport_type === "volleyball") {
          addText(`Blocking: ${profile.blocking || "N/A"}`);
          addText(`Passing: ${profile.passing || "N/A"}`);
          addText(`Serving: ${profile.serving || "N/A"}`);
          addText(`Setting: ${profile.setting || "N/A"}`);
          addText(`Spiking: ${profile.spiking || "N/A"}`);
        } else if (profile.sport_type === "football") {
          addText(`Passing: ${profile.passing || "N/A"}`);
          addText(`Tackling: ${profile.dribbling || "N/A"}`);
          addText(`Kicking: ${profile.firstouch || "N/A"}`);
          addText(`Catching: ${profile.shooting || "N/A"}`);
          addText(`Blocking: ${profile.ballhandling || "N/A"}`);
          addText(`Running: ${profile.ballcontrol || "N/A"}`);
        }

        // Academic Performance
        doc.setFont("helvetica", "bold");
        addText("Academic Performance", 10);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        addText(`GPA: ${profile.gpa || "N/A"}`);
        addText(`Academic Goals: ${profile.academic_goals || "N/A"}`);
        addText(`Academic Interests: ${profile.academic_interests || "N/A"}`);

        // Character & Personality
        doc.setFont("helvetica", "bold");
        addText("Character & Personality", 10);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        addText(`Traits: ${profile.character_personality || "N/A"}`);

        // Save the PDF
        doc.save(`${profile.full_name}_profile.pdf`);
      } catch (error) {
        console.error("Error generating PDF:", error);
      }
    };

    // Start generating the PDF
    generatePDFContent();
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProfileHeader name={profile?.full_name} image={profile?.image} />
          <AthleteBasicInfo profile={profile} />
          <AcadInfo profile={profile} />
          <SkillsInfo profile={profile} />
          <YoutubeLink profile={profile} />
          <Footer />

          {/* Download PDF Button */}
          {/* <button
            onClick={downloadPDF}
            style={{ margin: "20px", padding: "10px" }}
          >
            Download Profile as PDF
          </button> */}
        </>
      )}
    </div>
  );
};

export default ScoutViewPage;
