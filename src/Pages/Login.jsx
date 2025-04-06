import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
// import { useLoginMutation } from "../../../api/postapi";
// import { useDispatch } from "react-redux";
// import { setToken } from "../../../redux/feature/auth/authSlice";
// import { auth } from "../../../Firebase/Firebase";
// import bg from "../assets/signup.png";
import logo from "../assets/loginlogo.png";
import leaf from "../assets/leaf.png";
import image from "../assets/logoimg.png";
import { FcGoogle } from "react-icons/fc";
const grades = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];
const gender2 = ["Male", "Female"]; // import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   const [login] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(" ");
  const [role, setRole] = useState("Admin");
  const [grade, setGrade] = useState("");

  const [showOptions, setShowOptions] = useState(false);
  const toggleDropdown = () => setShowOptions((prev) => !prev);
  const [gender, setGender] = useState("");
  const [showOptions1, setShowOptions1] = useState(false);

  const toggleDropdown1 = () => setShowOptions1((prev) => !prev);
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
          <div className=" flex flex-col justify-start items-start lg:pl-48 ">
            <h2 className="text-2xl    poppins  lg:text-[38px] font-bold mt-6 mb-2">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="w-2/3 space-y-3 mt-6">
              <div className="flex flex-col mt-2">
                <input
                  type="name"
                  name="name"
                  value={name}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Full Name "
                  className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Adress "
                  className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl"
                  required
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="text"
                  name="cell"
                  value={name}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Cell"
                  className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl"
                  required
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="text"
                  name="School"
                  value={name}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="School"
                  className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl"
                  required
                />
              </div>
              <div className="flex flex-col mt-2 relative">
                {/* Input with icon */}
                <div className="relative w-full">
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    onFocus={() => setShowOptions(true)}
                    onBlur={() => setTimeout(() => setShowOptions(false), 100)}
                    placeholder="Select Grade"
                    className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl "
                    required
                  />

                  {/* Icon button */}
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
                  >
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        showOptions ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown List */}
                {showOptions && (
                  <ul className="absolute z-10 bg-white border border-gray-300 rounded-xl mt-1 w-full max-h-48 overflow-y-auto shadow-md top-[60%]">
                    {grades
                      .filter((item) =>
                        item.toLowerCase().includes(grade.toLowerCase())
                      )
                      .map((item) => (
                        <li
                          key={item}
                          onMouseDown={() => setGrade(item)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-col mt-2 relative">
                {/* Input with icon for Gender */}
                <div className="relative w-full">
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    onFocus={() => setShowOptions1(true)}
                    onBlur={() => setTimeout(() => setShowOptions1(false), 100)}
                    placeholder="Select Gender"
                    className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl "
                    required
                  />

                  {/* Icon button for dropdown */}
                  <button
                    type="button"
                    onClick={toggleDropdown1}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
                  >
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        showOptions1 ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Gender Dropdown List */}
                {showOptions1 && (
                  <ul className="absolute z-10 bg-white border border-gray-300 rounded-xl mt-1 w-full max-h-48 overflow-y-auto shadow-md top-[60%]">
                    {gender2.map((item) => (
                      <li
                        key={item}
                        onMouseDown={() => setGender(item)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
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
        </div>
        {/* Right Image Section */}
        <div className=" w-full 2xl:w-1/2  relative left-[13%]">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
