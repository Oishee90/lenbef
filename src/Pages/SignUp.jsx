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

const SignUp = () => {
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Create Object
  //   const userData = {
  //     email,
  //     firstname,
  //     lastname,
  //     password,
  //     role,
  //   };

  //   console.log("User Data:", userData);

  //   // Show SweetAlert
  //   Swal.fire({
  //     title: "Signup Successful!",
  //     text: "Your account has been created successfully.",
  //     icon: "success",
  //     confirmButtonText: "OK",
  //   });
  // };
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

            <form
              //  onSubmit={handleSubmit}
              className="w-2/3 space-y-3 mt-6"
            >
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
              <div className="flex flex-col mt-2">
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Password"
                  className="w-full p-2 border-b border-b-[#C5BDBD]  bg-transparent  montserrat placeholder:text-[#C5BDBD] rounded-b-xl"
                  required
                />
              </div>
              <div className="flex justify-center items-center  px- py-2">
                <button
                  type="submit"
                  className="w-2/3  bg-[#317828] text-white p-2 rounded-xl montserrat font-bold"
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="w-2/3 flex flex-col  justify-center items-center mt-4">
              <div className="flex items-center gap-1 text-[#C5BDBD]">
                <div className=" border border-[#C5BDBD] w-6"></div> <h1>OR</h1>{" "}
                <div className=" border border-[#C5BDBD] w-6"></div>
              </div>
              <button className="flex items-center mt-2 border border-[#D9D9D9] p-2  justify-center rounded-md montserrat font-medium">
                <FcGoogle className="text-xl mr-2" /> Sign up with Google
              </button>
              <p className=" mt-7  text-[#000000]">
                Already have an account?{" "}
                <NavLink to="/signUp" className="text-[#317828]">
                  Log In
                </NavLink>
              </p>
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

export default SignUp;
