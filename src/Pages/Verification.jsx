import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import bg from "../assets/signup.png";
import logo from "../assets/loginlogo.png";
import leaf from "../assets/leaf.png";
import { NavLink, useNavigate } from "react-router-dom";
import image from "../assets/logoimg.png";
import { useTranslation } from "react-i18next";

const Verification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const { t } = useTranslation();
  const navigate = useNavigate();
  // Handle input change
  const handleInputChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only numeric input

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      document.getElementById(`input-${index + 1}`).focus(); // Focus next input
    }
  };

  // Handle keydown for navigating between inputs
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !code[index]) {
      document.getElementById(`input-${index - 1}`).focus(); // Focus previous input
    }
  };

  // Handle paste event (only numeric values are allowed)
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").split("");
    if (
      pastedData.length === 4 &&
      pastedData.every((char) => /^\d$/.test(char))
    ) {
      setCode(pastedData);
    }
  };

  // Handle submit (Verification logic)
  const handleSubmit = () => {
    const otpCode = code.join(""); // Convert array to string
    if (otpCode.length === 4) {
      setSuccessMessage(t("verification.success"));
      setTimeout(() => {
        setSuccessMessage(""); // Clear message after a few seconds
      }, 3000);
      navigate("/setNew");
    } else {
      setSuccessMessage(t("verification.error"));
    }
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
              {t("verification.heading")}
            </h2>

            {/* OTP Input Fields */}
            <div
              className="flex justify-center space-x-3 mb-4 mt-6"
              onPaste={handlePaste}
            >
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 border border-[#5b8a1e] bg-[#E2E9E3] rounded-xl text-center text-lg placeholder:text-[#313131] focus:outline-none focus:ring-2 focus:ring-[#8ac43e]"
                />
              ))}
            </div>
            {/* Success/Error Message */}
            {successMessage && (
              <p className="mt-4 text-lg font-semibold">{successMessage}</p>
            )}
            {/* Verify Button */}
            <div className="flex justify-center items-center  w-1/2 ">
              <button
                onClick={handleSubmit}
                className="w-1/3 px-8 py-2 bg-[#317828] text-white p-2 rounded-xl montserrat font-bold mr-auto whitespace-nowrap"
              >
                {t("verification.continue")}
              </button>
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className=" w-full 2xl:w-1/2  relative left-[10%]">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Verification;
