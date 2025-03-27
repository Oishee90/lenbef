import bg from "../assets/signup.png";
import logo from "../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const SetNew = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // যদি সবকিছু ঠিক থাকে
    setErrorMessage("");
    navigate("/success");
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
            New Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full p-2 border border-[#000000]  bg-transparent  montserrat placeholder:text-[#00000080] rounded-xl"
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
        <div className="mb-6 mt-6 w-1/2">
          <label className="block text-[#515151] font-medium text-base mb-2">
            Confirm New Password
          </label>
          <div className="relative ">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              className="w-full p-2 border border-[#000000]  bg-transparent  montserrat placeholder:text-[#00000080] rounded-xl"
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

        {/* Confirm Password Button */}
        <button
          onClick={handleSubmit}
          className="w-full lg:w-1/2 p-2 border border-[#000000]  bg-[#1E3A8A] text-white font-bold  montserrat placeholder:text-[#00000080] rounded-xl"
        >
          Set
        </button>
      </div>
      {/* Right Image Section */}
      <div className=" w-full 2xl:w-1/2  2xl:h-screen">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SetNew;
