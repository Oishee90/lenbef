import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import bg from "../assets/signup.png";
import logo from "../assets/loginlogo.png";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
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
      setSuccessMessage("✅ Verification Successful! Redirecting...");
      setTimeout(() => {
        setSuccessMessage(""); // Clear message after a few seconds
      }, 3000);
      navigate("/setNew");
    } else {
      setSuccessMessage("❌ Please enter a valid 4-digit code.");
    }
  };

  return (
    <div className="flex 2xl:flex-row flex-col justify-between items-center h-full 2xl:h-screen">
      {/* Left Form Section */}
      <div className="w-full 2xl:w-1/2 flex flex-col justify-center items-center p-8 bg-gradient-to-b from-[#5BACDA] to-[#F2F2F2] h-full montserrat">
        <img src={logo} alt="Logo" className="mb-4" />
        <h2 className="text-2xl lg:text-[38px] font-bold mt-6 mb-6">OTP</h2>

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
              className="w-12 h-12 border border-[#1E3A8A] bg-[#E2E9E3] rounded-xl text-center text-lg placeholder:text-[#313131] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleSubmit}
          className="w-full 2xl:w-1/2 py-2 bg-[#1E3A8A] text-white font-semibold rounded-full hover:opacity-90 transition h-[51px] mt-7"
        >
          VERIFY
        </button>

        {/* Success/Error Message */}
        {successMessage && (
          <p className="mt-4 text-lg font-semibold">{successMessage}</p>
        )}
      </div>

      {/* Right Image Section */}
      <div className="w-full 2xl:w-1/2 2xl:h-screen">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Verification;
