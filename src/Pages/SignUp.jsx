import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import bg from "../assets/signup.png";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create Object
    const userData = {
      email,
      firstname,
      lastname,
      password,
      role,
    };

    console.log("User Data:", userData);

    // Show SweetAlert
    Swal.fire({
      title: "Signup Successful!",
      text: "Your account has been created successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="flex 2xl:flex-row flex-col justify-between items-center h-full 2xl:h-screen ">
      <NavLink
        to="/"
        className="absolute top-5 left-5 text-3xl text-[#1E3A8A] hover:text-blue-800"
      >
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
      <div className=" w-full 2xl:w-1/2 flex flex-col justify-center items-center  p-8 bg-gradient-to-b from-[#5BACDA] to-[#F2F2F2] h-full montserrat ">
        <img src={logo} alt="Logo" className=" mt-4 mb-4" />
        <h2 className="text-2xl lg:text-[38px] font-bold mt-6 mb-6">
          Create Your School Account
        </h2>
        <form onSubmit={handleSubmit} className="w-2/3 space-y-3 mt-6">
          <div className="flex flex-col mt-2">
            <label
              htmlFor="email"
              className="montserrat mb-2 font-semibold text-sm"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-[#000000]  bg-transparent  montserrat placeholder:text-[#00000080] rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="email"
              className="montserrat mb-3 font-semibold  text-sm"
            >
              School Name
            </label>
            <input
              type="text"
              name=" firstName"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="School Name"
              className="w-full p-2 border border-[#000000]  bg-transparent  montserrat placeholder:text-[#00000080] rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="montserrat mb-3 font-semibold text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="lastName"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-2 border border-[#000000]  bg-transparent  montserrat placeholder:text-[#00000080] rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="montserrat mb-3 font-semibold text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border border-[#000000]  bg-transparent  montserrat placeholder:text-[#00000080] rounded-xl"
              required
            />
          </div>

          <label className="flex items-center">
            <input type="checkbox" className="mr-2" required /> I agree to the
            terms & policy
          </label>
          <button
            type="submit"
            className="w-full bg-[#1E3A8A] text-white p-2 rounded-xl montserrat"
          >
            Signup
          </button>
        </form>
        <div className="flex items-center gap-5 justify-center mt-6">
          <div className=" border border-[#7A808C] w-[100.94px] "></div>
          <h1 className="text-[#283C63] text-sm leading-[150%] font-normal montserrat">
            Or login with
          </h1>
          <div className=" border border-[#7A808C] w-[100.94px]"></div>
        </div>
        <button className="flex items-center mt-2 border border-[#D9D9D9] p-2 w-80 justify-center rounded-md montserrat font-medium">
          <FcGoogle className="text-xl mr-2" /> Sign up with Google
        </button>
        <p className=" mt-2">
          Have an account?{" "}
          <NavLink to="/login" className="text-blue-600">
            Log in
          </NavLink>
        </p>
      </div>
      {/* Right Image Section */}
      <div className=" w-full 2xl:w-1/2  2xl:h-screen">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignUp;
