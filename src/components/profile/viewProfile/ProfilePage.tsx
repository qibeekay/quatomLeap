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

const ProfilePage = () => {
  const [usertoken, setUsertoken] = useState("");
  const [profile, setProfile] = useState<FormDataType | null>(null);

  useEffect(() => {
    // Fetch mail from localStorage when the component mounts
    const userToken = localStorage.getItem("hopettt")?.trim();
    if (userToken) {
      const cleanedUserToken = userToken.replace(/"/g, "");
      setUsertoken(cleanedUserToken);
    }
  }, []);

  const getProfile = async () => {
    // setIsLoading(true);

    try {
      const res = await GetUserProfile(usertoken);
      setProfile(res);
      // if (res) {
      //   setTimeout(() => {
      //     navigate("/profile");
      //   }, 1000);
      // }
    } catch {
    } finally {
      // setIsLoading(false);
    }
  };

  console.log(usertoken);

  useEffect(() => {
    if (usertoken) {
      getProfile();
    }
  }, [usertoken]);

  return (
    <div>
      <ProfileHeader name={profile?.full_name} image={profile?.image} />
      <AthleteBasicInfo profile={profile} />
      <AcadInfo profile={profile} />
      <SkillsInfo profile={profile} />
      <YoutubeLink profile={profile} />
      <Footer />
    </div>
  );
};

export default ProfilePage;
