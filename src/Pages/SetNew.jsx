import bg from "../assets/signup.png";
import logo from "../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import leaf from "../assets/leaf.png";
import { NavLink, useNavigate } from "react-router-dom";
import image from "../assets/logoimg.png";
import { useTranslation } from "react-i18next";
const SetNew = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   // const [isModalOpen, setIsModalOpen] = useState(false);
  //   const applyFilters = (filterValue, event) => {
  //     console.log("Filter Value:", filterValue);
  //     console.log("Checked:", event.target.checked);
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (!email || !password || !role) {
  //       setErrorMessage("All fields are required.");
  //       return;
  //     }

  //     // Creating User Object
  //     const userData = {
  //       email: email,
  //       password: password,
  //       role: role,
  //     };

  //     // Saving User Data in Local Storage
  //     localStorage.setItem("user", JSON.stringify(userData));
  //     console.log("User Data Saved:", userData);

  //     // Clear the form
  //     setEmail("");
  //     setPassword("");
  //     setRole("");
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setErrorMessage(t("setNewPassword.allFieldsRequired"));
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(t("setNewPassword.passwordMismatch"));
      return;
    }

    setErrorMessage("");
    navigate("/success");
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
              {t("setNewPassword.resetPassword")}
            </h2>

            {/* New Password Input */}
            <div className=" w-1/2">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("setNewPassword.newPassword")}
                  className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[22%] text-[#575757]"
                >
                  {showPassword ? (
                    <FaRegEyeSlash className="w-[24px] h-[24px]" />
                  ) : (
                    <IoEyeOutline className="w-[24px] h-[24px]" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6 mt-9 w-1/2">
              <div className="relative ">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t("setNewPassword.reenterNewPassword")}
                  className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-[22%] text-[#575757]"
                >
                  {showConfirmPassword ? (
                    <FaRegEyeSlash className="w-[24px] h-[24px]" />
                  ) : (
                    <IoEyeOutline className="w-[24px] h-[24px]" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center mb-4">
                {errorMessage}
              </p>
            )}

            <div className="flex justify-center items-center  w-1/2 ">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-1/3 px-16 py-2 bg-[#317828] text-white p-2 rounded-xl montserrat font-bold mx-auto"
              >
                {t("setNewPassword.set")}
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

export default SetNew;
