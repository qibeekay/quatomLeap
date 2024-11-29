import axios from "axios";
import { toast } from "react-toastify";
import FormDataType from "../../utils/DeclareType";

const URL = import.meta.env.VITE_API_URL;
const bearer = import.meta.env.VITE_BEARER_TOKEN;

// upload user profile
// export const UploadBasketballProfile = async (userdata: {
//   usertoken: string;
//   full_name: string;
//   dob: string;
//   school_class: string;
//   image: string;
//   video: string[];
//   position: string;
//   contact_info: string;
//   height: number | null;
//   weight: number | null;
//   body_type: string;
//   speed: number | null;
//   agility: number | null;
//   strength: number | null;
//   coordination: number | null;
//   stamina: number | null;
//   gpa: number | null;
//   test_scores: File | null;
//   academic_interests: string;
//   academic_goals: string;
//   gender: [string];
//   level: [string];
//   character_personality: string[];
//   work_ethic: string[];
//   game_sense: string[];
//   sport_type: string;
//   threept: number | null;
//   perimeter: number | null;
//   ballhandling: number | null;
//   defense: number | null;
//   passing: number | null;
//   rebounding: number | null;
// }) => {
//   try {
//     const response = await axios.post(
//       `${URL}/profile/upload-profile.php`,
//       userdata,
//       {
//         headers: {
//           Authorization: `Bearer ${bearer}`,
//         },
//       }
//     );

//     console.log(response.data.status);
//     if (response.data.status === false) {
//       console.log("error");
//       toast.error(response.data.message);
//       return false;
//     } else {
//       console.log(response.data.message);
//       toast.success(response.data.message);
//       return true;
//     }
//   } catch (error: any) {
//     console.error("Upload Error", error);
//     throw new Error(error.response?.data?.message || "Failed to upload");
//   }
// };

export const UploadProfile = async (userdata: FormDataType) => {
  try {
    const response = await axios.post(
      `${URL}/profile/upload-profile.php`,
      userdata,
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      }
    );

    console.log(response.data.status);
    if (response.data.status === false) {
      const errorMessage =
        Array.isArray(response.data.errors) && response.data.errors[0]
          ? response.data.errors[0]
          : response.data.message || "Unknown error occurred";
      toast.error(errorMessage);
      return false;
    } else {
      console.log(response.data.message);
      toast.success(response.data.message);
      return true;
    }
  } catch (error: any) {
    console.error("Upload Error", error);
    throw new Error(error.response?.data?.message || "Failed to upload");
  }
};

export const GetProfileByCategory = async (userdata: {
  gender: string;
  level: string;
  sport_type: string;
}) => {
  try {
    const response = await axios.post(
      `${URL}/profile/get-profile-byCat.php`,
      userdata,
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      }
    );

    console.log(response.data.status);
    if (response.data.status === false) {
      console.log("error");
      toast.error(response.data.message);
      return false;
    } else {
      console.log(response.data.message);
      toast.success(response.data.message);
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Fetch Error", error);
    throw new Error(error.response?.data?.message || "Failed to fetch");
  }
};

export const GetUserProfile = async (usertoken: string) => {
  try {
    const response = await axios.get(
      `${URL}/profile/get-single-profile.php?usertoken=${usertoken}`,
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      }
    );

    console.log(response.data.status);
    if (response.data.status === false) {
      console.log("error");
      toast.error(response.data.message);
      return false;
    } else {
      console.log(response.data.message);
      // toast.success(response.data.message);
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Error Fetching", error);
    throw new Error(error.response?.data?.message || "Failed to fetch");
  }
};
