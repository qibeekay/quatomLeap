import axios from "axios";
import { toast } from "react-toastify";

const URL = import.meta.env.VITE_API_URL;
const bearer = import.meta.env.VITE_BEARER_TOKEN;

// register user
export const UserRegister = async (userdata: {
  name: string;
  email: string;
  password: string;
  cpassword: string;
}) => {
  try {
    const response = await axios.post(`${URL}/auths/register.php`, userdata, {
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
      localStorage.setItem("hopemail", userdata.email);
      localStorage.setItem("hopettt", response.data.data.usertoken);
      return true;
    }
  } catch (error: any) {
    console.error("Registration Error", error);
    throw new Error(error.response?.data?.message || "Failed to register");
  }
};

// verify mail
export const verifyMail = async (userdata: {
  email: string;
  verificationCode: string;
}) => {
  try {
    const response = await axios.post(
      `${URL}/auths/verify-mail.php`,
      userdata,
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      }
    );

    console.log(response.data.status);
    if (response.data.status === false) {
      toast.error(response.data.message);
      return false;
    }

    if (response.data.status === true) {
      toast.success(response.data.message);
      localStorage.setItem("hopettt", response.data.data.usertoken);
      localStorage.setItem("hopemail", userdata.email);
      return true;
    }
  } catch (error: any) {
    console.error("Verification Error", error);
    throw new Error(error.response?.data?.message || "Failed to verify");
  }
};

// verify mail
export const UserLogin = async (userdata: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${URL}/auths/login.php`, userdata, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    console.log(response.data.status);
    if (response.data.status === false) {
      toast.error(response.data.message);
      return false;
    }

    if (response.data.status === true) {
      toast.success(response.data.message);
      localStorage.setItem("hopettt", response.data.data.usertoken);
      return true;
    }
  } catch (error: any) {
    console.error("Login Error", error);
    throw new Error(error.response?.data?.message || "Failed to login");
  }
};

// get specific user data
export const GetUserdata = async (usertoken: string) => {
  try {
    const response = await axios.get(
      `${URL}/auths/get-single-user.php?usertoken=${usertoken}`,
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

// reset password
export const ForgotPassword = async (userdata: { email: string }) => {
  try {
    const response = await axios.post(
      `${URL}/auths/forgot-password.php`,
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
      localStorage.setItem("hopemail", userdata.email);
      return true;
    }
  } catch (error: any) {
    console.error("Reset Error", error);
    throw new Error(error.response?.data?.message || "Failed to register");
  }
};

// verify code
export const VerifyResetCode = async (userdata: {
  email: string;
  code: string;
}) => {
  try {
    const response = await axios.post(
      `${URL}/auths/verify-reset-code.php`,
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
      return true;
    }
  } catch (error: any) {
    console.error("Reset Code Error", error);
    throw new Error(error.response?.data?.message || "Failed to register");
  }
};

// reset password
export const ResetPassword = async (userdata: {
  email: string;
  code: string;
  password: string;
  cpassword: string;
}) => {
  try {
    const response = await axios.post(
      `${URL}/auths/reset-password.php`,
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
      localStorage.setItem("hopemail", userdata.email);
      return true;
    }
  } catch (error: any) {
    console.error("Reset Error", error);
    throw new Error(error.response?.data?.message || "Failed to register");
  }
};
