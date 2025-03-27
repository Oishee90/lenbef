import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
// import { useLoginMutation } from "../../../api/postapi";
// import { useDispatch } from "react-redux";
// import { setToken } from "../../../redux/feature/auth/authSlice";
// import { auth } from "../../../Firebase/Firebase";
import bg from "../assets/signup.png";
import logo from "../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   const [login] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(" ");
  const [role, setRole] = useState("Admin");

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // ... (keep your existing Login.jsx code)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting login form");

    const dummyAccessToken = "dummy_token_123456789"; // Dummy Access Token

    const userData = {
      email: email,
      password: password,
      role: role,
      accessToken: dummyAccessToken,
    };

    // Store user and token in localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("accessToken", dummyAccessToken);

    console.log("User Data Saved:", userData);

    // Navigate based on role
    if (role === "Admin") {
      navigate("/dashboard/admin");
    } else if (role === "Principle") {
      navigate("/dashboard/school");
    } else {
      navigate("/dashboard"); // Default route
    }
  };

  //   auth submit
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await login({
  //         email: email,
  //         password: password,
  //       }).unwrap(); // Send request
  //       console.log("Login Response:", response);

  //       // Store token (adjust based on API response)
  //       localStorage.setItem("token", response.access_token);
  //       if (response.access_token) {
  //         // Dispatch action to store token in Redux
  //         dispatch(setToken(response.access_token));

  //         // Store token in localStorage
  //         localStorage.setItem("token", response.access_token);

  //         navigate("/");
  //       } else {
  //         throw new Error("No token returned in response.");
  //       }
  //       // Navigate to dashboard or home after login
  //       navigate("/");
  //     } catch (error) {
  //       console.error("Login failed:", error);
  //       setErrorMessage(
  //         error?.response?.data?.detail || "Login failed. Try again."
  //       );
  //     }
  //   };
  //   const handleGoogleLogin = async () => {
  //     const provider = new GoogleAuthProvider();

  //     try {
  //       setIsLoading(true);
  //       // Sign in with Google Popup
  //       const result = await signInWithPopup(auth, provider);

  //       // User Info from Google
  //       const user = result.user;
  //       console.log("Google Login Successful!");
  //       console.log("User Info:", user);

  //       // Assuming your API sends a token after Google login
  //       const token = user.accessToken; // Google sends an access token

  //       // Store the token in local storage and Redux
  //       localStorage.setItem("token", token);
  //       dispatch(setToken(token)); // Assuming Redux action 'setToken' is defined

  //       // Navigate to the home page or wherever you want
  //       navigate("/");
  //     } catch (err) {
  //       console.error("Google Login Error:", err);
  //       setError("Failed to login with Google. Please try again.");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
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
        <h2 className="text-2xl montserrat lg:text-[38px] font-bold mt-6 mb-2">
          Welcome back!
        </h2>
        <p className="text-base montserrat font-medium mt-6 mb-6">
          Enter your Credentials to access your account
        </p>
        <form onSubmit={handleSubmit} className="w-2/3 space-y-3 mt-6">
          <div className="flex flex-col mt-2">
            <label
              htmlFor="email"
              className="montserrat mb-2 font-semibold text-sm"
            >
              Email address
            </label>
            <input
              type="name"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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

          <div className="flex flex-col mt-2">
            <label
              htmlFor="role"
              className="montserrat mb-3 font-semibold text-sm"
            >
              Role
            </label>

            <select
              name="role"
              className="w-full p-2 border border-[#000000]  bg-transparent  montserrat placeholder:text-[#00000080] rounded-xl"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Principle">Principal</option>
              <option value="Teacher">Teacher</option>
              <option value="Parent">Student</option>
            </select>
          </div>

          <div className="flex justify-between items-center text-sm mb-9">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              Remember for 30 days
            </label>

            <NavLink
              to="/forgot"
              className="text-[#1E3A8A] hover:underline poppins "
            >
              Forgot Password?
            </NavLink>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E3A8A] text-white p-2 rounded-xl montserrat font-bold"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between gap-20 items-center mt-4">
          <button className="flex items-center mt-2 border border-[#D9D9D9] p-2  justify-center rounded-md montserrat font-medium">
            <FcGoogle className="text-xl mr-2" /> Sign up with Google
          </button>
          <button className="flex items-center mt-2 border border-[#D9D9D9] p-2  justify-center rounded-md montserrat font-medium">
            <FaApple className="text-xl mr-2" /> Sign in with Apple
          </button>
        </div>

        <p className=" mt-2">
          Don’t have an account?{" "}
          <NavLink to="/signUp" className="text-blue-600">
            Sign up
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

export default Login;
