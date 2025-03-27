import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import logo from "../../../assets/logo.png";
import { PiListStarFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
const SchoolSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  // console.log(user);
  const dropdownRef = useRef(null);

  const isActiveDashboard = location.pathname.startsWith("/dashboard/school");
  const isActiveStudent = location.pathname.startsWith("/dashboard/student");

  const isActiveRecomendation = location.pathname.startsWith(
    "/dashboard/recomendation"
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // Remove token from localStorage
    navigate("/login", { replace: true }); // Redirect to login page
  };
  return (
    <div className="bg-[#FFFFFF]  border-r-2  border-r-[#E8E8E8]   min-h-screen flex flex-col justify-between  open-sns">
      {/* Logo Section */}
      <div className="flex flex-col  py-4">
        <div className="flex px-6 items-center gap-2 pb-4 pt-2">
          <img src={logo} alt="Logo" className="h-[63px] w-[63px] mb-2 " />
          <h1 className=" montserrat text-[#222222] text-lg  font-medium whitespace-nowrap">
            WayLearn AI
          </h1>
        </div>
        {/* Menu Items */}
        <nav className="flex flex-col  text-[#364636]">
          <NavLink
            to="/dashboard/school"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium  p-2 pt-7">
              {/* Left Indicator Bar */}

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start gap-2 w-[250px] h-[50px]  p-5 text-centfer
                      ${
                        isActiveDashboard
                          ? "bg-[#10589E] text-[#FAF1E6] rounded-xl"
                          : "text-[#18181B]"
                      }`}
              >
                <GiTeacher className="w-[24px] h-[24px]  montserrat " />{" "}
                <h1 className=" font-medium montserrat   text-[14px]">
                  Teacher
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/student"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium  p-2 pt-2">
              {/* Left Indicator Bar */}

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start gap-2 w-[250px] h-[50px]  p-5 text-centfer
                      ${
                        isActiveStudent
                          ? "bg-[#10589E] text-[#FAF1E6] rounded-xl"
                          : "text-[#18181B]"
                      }`}
              >
                <PiStudentBold className="w-[24px] h-[24px]  montserrat " />{" "}
                <h1 className=" font-medium montserrat   text-[14px]">
                  Student View
                </h1>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/recomendation"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium  p-2 pt-2 ">
              {/* Left Indicator Bar */}

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start gap-4 w-[250px] h-[50px]  p-5 text-center
                      ${
                        isActiveRecomendation
                          ? "bg-[#10589E] text-[#FAF1E6] rounded-xl"
                          : "text-[#18181B]"
                      }`}
              >
                <PiListStarFill className="w-[24px] h-[24px]  " />{" "}
                <h1
                  className="montserrat font-medium
                    text-[14px]"
                >
                  Recomendation
                </h1>
              </div>
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div
        onClick={handleLogout}
        className="flex items-center space-x-3 p-2 text-red-600 cursor-pointer rounded-lg pb-10 pl-10"
      >
        <FaSignOutAlt />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default SchoolSidebar;
