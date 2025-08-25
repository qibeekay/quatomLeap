import React, { FormEvent, useState, useEffect } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import img1 from "../../assets/arrow.png";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ForgotPassword, ResetPassword, VerifyResetCode } from "../../api/auth";

const ResetPage = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Email, 2: Code, 3: Password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [codeLoading, setCodeLoading] = useState<boolean>(false);
  const [passwordLoading, setPasswordLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  // Auto-run verification when code is complete (6 digits)
  useEffect(() => {
    if (step === 2 && formData.code.length === 6) {
      handleVerifyCode();
    }
  }, [formData.code, step]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const success = await ForgotPassword({ email: formData.email });
      if (success) {
        setStep(2);
        toast.success("Reset code sent to your email");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to send reset code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (formData.code.length !== 6) return;

    setCodeLoading(true);
    try {
      const success = await VerifyResetCode({
        email: formData.email,
        code: formData.code,
      });
      if (success) {
        setStep(3);
        toast.success("Code verified successfully");
      }
    } catch (error: any) {
      toast.error(error.message || "Invalid verification code");
    } finally {
      setCodeLoading(false);
    }
  };

  const handlePasswordReset = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setPasswordLoading(true);
    try {
      const success = await ResetPassword({
        email: formData.email,
        code: formData.code,
        password: formData.password,
        cpassword: formData.confirmPassword,
      });
      if (success) {
        toast.success("Password reset successfully");
        navigate("/auth/login");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to reset password");
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="w-full relative min-h-screen">
      <div className="flex items-center justify-center h-full">
        {/* Background */}
        <div className="w-full relative min-h-screen hidden md:block bg-Form bg-cover">
          <div className="absolute top-0 w-full min-h-screen bg-gradient-to-t from-[#2B445D]/80 to-[#FA9938]/80"></div>
          <div className="relative min-h-screen flex items-end px-[4rem] py-[4rem]">
            <div className="">
              <p className="text-white text-[25px] font-bold">Join us today</p>
              <p className="text-white">
                To keep connected with us please login with your personal info
              </p>
              <div className="mt-7">
                <Link
                  to={"/auth/register"}
                  className="flex text-primary items-center gap-4"
                >
                  Create an account
                  <div className="">
                    <img src={img1} alt="" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex items-center justify-center w-full md:block h-full min-h-screen px-4 sm:px-10 md:px-0">
          <div className="w-full h-full min-h-screen flex items-center justify-center">
            <div className="md:px-[6rem] w-full max-w-[800px]">
              {/* Logo */}
              <div className="w-[7rem] aspect-square">
                <img className="w-full h-full" src={Logo} alt="Logo" />
              </div>

              {/* Header */}
              <div className="">
                <h1 className="text-primary font-bold text-[32px]">
                  Welcome To Quantum Leap Sport
                </h1>
                <p className="text-sm mt-4">
                  {step === 1 && "Enter your email to reset password"}
                  {step === 2 &&
                    "Enter the verification code sent to your email"}
                  {step === 3 && "Create your new password"}
                </p>
              </div>

              {/* Form */}
              <div className="">
                <form
                  className="flex flex-col mt-14 gap-4"
                  onSubmit={
                    step === 1
                      ? handleEmailSubmit
                      : step === 3
                      ? handlePasswordReset
                      : undefined
                  }
                >
                  {/* Email Input (Step 1) */}
                  {step === 1 && (
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-medium mb-1">
                        Email
                      </label>
                      <input
                        className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@gmail.com"
                      />
                    </div>
                  )}

                  {/* Code Input (Step 2) */}
                  {step === 2 && (
                    <div className="flex flex-col">
                      <label htmlFor="code" className="font-medium mb-1">
                        Verification Code
                      </label>
                      <input
                        className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        required
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        pattern="[0-9]{6}"
                      />
                      {codeLoading && (
                        <p className="text-sm text-gray-600 mt-1">
                          Verifying code...
                        </p>
                      )}
                    </div>
                  )}

                  {/* Password Inputs (Step 3) */}
                  {step === 3 && (
                    <>
                      <div className="flex flex-col relative">
                        <label htmlFor="password" className="font-medium mb-1">
                          New Password
                        </label>
                        <input
                          className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          placeholder="Enter new password"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute top-[50%] -translate-y-1/2 right-2 text-black/60"
                        >
                          {showPassword ? (
                            <IoEyeOffSharp size={25} />
                          ) : (
                            <IoEyeSharp size={25} />
                          )}
                        </button>
                      </div>

                      <div className="flex flex-col relative">
                        <label
                          htmlFor="confirmPassword"
                          className="font-medium mb-1"
                        >
                          Confirm Password
                        </label>
                        <input
                          className="px-[16px] py-[8px] rounded-lg border border-black placeholder:text-[#6B6B6B] placeholder:text-xs"
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute top-[50%] -translate-y-1/2 right-2 text-black/60"
                        >
                          {showConfirmPassword ? (
                            <IoEyeOffSharp size={25} />
                          ) : (
                            <IoEyeSharp size={25} />
                          )}
                        </button>
                      </div>
                    </>
                  )}

                  {/* Submit Buttons */}
                  {step === 1 && (
                    <button
                      type="submit"
                      className="bg-primary rounded-lg py-[14px] max-w-[188px] text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Reset Code"}
                    </button>
                  )}

                  {step === 3 && (
                    <button
                      type="submit"
                      className="bg-primary rounded-lg py-[14px] max-w-[188px] text-white"
                      disabled={passwordLoading}
                    >
                      {passwordLoading ? "Resetting..." : "Reset Password"}
                    </button>
                  )}

                  {/* Back to Login */}
                  <div className="w-full flex items-center justify-end">
                    <Link
                      to={"/auth/login"}
                      className="flex text-primary items-center gap-4"
                    >
                      Back to Login
                      <div className="">
                        <img src={img1} alt="" />
                      </div>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
