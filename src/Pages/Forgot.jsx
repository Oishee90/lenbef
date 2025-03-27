import bg from "../assets/signup.png";
import logo from "../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [forgot, setForgot] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); //useNavigate initialize

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!forgot) {
      setErrorMessage("Email field is required.");
      return;
    }

   

    navigate("/verification"); //Navigate to verification page
  };
  return (
    <div className="flex 2xl:flex-row flex-col justify-between items-center h-full 2xl:h-screen ">
      {/* Left Form Section */}
      <div className=" w-full 2xl:w-1/2 flex flex-col justify-center items-center  p-8 bg-gradient-to-b from-[#5BACDA] to-[#F2F2F2] h-full montserrat ">
        <img src={logo} alt="Logo" className=" mt-4 mb-4" />
        <h2 className="text-2xl lg:text-[38px] font-bold mt-6 mb-6">
          Welcome back!
        </h2>

        {/* New Password Input */}
        <div className=" w-1/2">
          <label className="block text-[#151515] font-medium text-base mb-2">
            Enter Your Maill
          </label>
          <div className="relative">
            <input
              type="email"
              value={forgot}
              onChange={(e) => setForgot(e.target.value)}
              placeholder="Enter new password"
              className="w-full p-2 border border-[#000000]  bg-transparent  montserrat placeholder:text-[#00000080] rounded-xl"
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
        <button
            onClick={handleSubmit}
          className="mt-8 w-full lg:w-1/2 p-2 border border-[#000000]  bg-[#1E3A8A] text-white font-bold  montserrat placeholder:text-[#00000080] rounded-xl"
        >
          Send OTP
        </button>
      </div>
      {/* Right Image Section */}
      <div className=" w-full 2xl:w-1/2  2xl:h-screen">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Forgot;
