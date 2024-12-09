import axios from "axios";
import { toast } from "react-toastify";

const URL = import.meta.env.VITE_API_URL;
const bearer = import.meta.env.VITE_BEARER_TOKEN;

// register user
export const CreateBlog = async (userdata: FormData) => {
  try {
    const response = await axios.post(`${URL}/blog/upload-blog.php`, userdata, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    console.log(response.data.status);
    if (response.data.status === false) {
      console.log("error");
      toast.error(response.data.message);
      return false;
    } else {
      console.log(response.data.message);
      toast.success(response.data.message);
      return true;
    }
  } catch (error: any) {
    console.error("Registration Error", error);
    throw new Error(error.response?.data?.message || "Failed to register");
  }
};

export const GetAllBlogs = async () => {
  try {
    const response = await axios.get(`${URL}/blog/get-all-blog.php`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

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

export const GetSingleBlog = async (excerpts: string) => {
  try {
    const response = await axios.get(
      `${URL}/blog/get-single-blog.php?excerpts=${excerpts}`,
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
