import bg from "../assets/signup.png";
import logo from "../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import leaf from "../assets/leaf.png";
import image from "../assets/logoimg.png";
import { useTranslation } from "react-i18next";

const Forgot = () => {
  const [forgot, setForgot] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); //useNavigate initialize
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!forgot) {
      setErrorMessage(t("forgot.emailRequired"));
      return;
    }

    navigate("/verification"); //Navigate to verification page
  };
  return (
    <div>
      <div className="flex 2xl:flex-row-reverse flex-col-reverse justify-between items-center min-h-screen bg-[#317828]">
        <NavLink to="/" className="absolute top-5 left-5 text-3xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </NavLink>
        {/* Left Form Section */}
        <div className="  w-full 2xl:w-7/8  montserrat bg-white rounded-l-[5.5rem] h-screen">
          <div className=" relative top-0 right-0  flex flex-col justify-center items-end">
            <img src={leaf} alt="" />
          </div>
          <div className=" flex flex-col justify-start items-start lg:pl-48 space-y-6 ">
            <h2 className="text-2xl    poppins  lg:text-[38px] font-bold mt-6 mb-2">
              {t("forgot.forgotPassword")}
            </h2>

            {/* New Password Input */}
            <div className=" w-1/2 mt-16 ">
              <div className="relative">
                <input
                  type="email"
                  value={forgot}
                  onChange={(e) => setForgot(e.target.value)}
                  placeholder={t("forgot.enterYourMail")}
                  className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center mb-4">
                {errorMessage}
              </p>
            )}

            {/* Confirm Password Button */}
            <div className="flex justify-center items-center  w-1/2 ">
              <button
                onClick={handleSubmit}
                className="w-1/3 px-8 py-2 bg-[#317828] text-white p-2 rounded-xl montserrat font-bold mx-auto whitespace-nowrap"
              >
                {t("forgot.sendOTP")}
              </button>
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className=" w-full 2xl:w-1/2  relative left-[13%]">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Forgot;
