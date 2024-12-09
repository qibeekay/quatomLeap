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

const ScoutViewPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<FormDataType | null>(null);

  const location = useLocation();
  const usertoken = location.state.uuid;

  const getProfile = async () => {
    setIsLoading(true);

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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (usertoken) {
      getProfile();
    }
  }, [usertoken]);

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
        </>
      )}
    </div>
  );
};

export default ScoutViewPage;
