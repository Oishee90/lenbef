import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import logo from "../../../assets/logo-lenbef.png";
import { PiListStarFill } from "react-icons/pi";
const AdminSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  // console.log(user);
  const dropdownRef = useRef(null);

  const isActiveDashboard = location.pathname.startsWith("/dashboard/admin");
  const isActiveUsers = location.pathname.startsWith("/dashboard/user");
  const isActiveAdmin = location.pathname.startsWith("/dashboard/makeAdmin");
  const isActiveSubs = location.pathname.startsWith("/dashboard/subscription");
  const isActiveSettings = location.pathname.startsWith("/dashboard/settings");

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
          <img src={logo} alt="Logo" className="h-[63px] w-full mb-2 " />
        </div>
        {/* Menu Items */}
        <nav className="flex flex-col  text-[#364636]">
          <NavLink
            to="/dashboard/admin"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium  p-2 pt-7">
              {/* Left Indicator Bar */}

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start gap-2 w-[250px] h-[50px]  p-5 text-centfer
                    ${
                      isActiveDashboard
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl"
                        : "text-[#18181B]"
                    }`}
              >
                <AiOutlineHome className="w-[24px] h-[24px]  montserrat " />{" "}
                <h1 className=" font-medium montserrat   text-[14px]">
                  Admin Dashboard
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/user"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium  p-2 pt-2">
              {/* Left Indicator Bar */}

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start gap-2 w-[250px] h-[50px]  p-5 text-centfer
                    ${
                      isActiveUsers
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl"
                        : "text-[#18181B]"
                    }`}
              >
                <FaUsers className="w-[24px] h-[24px]  montserrat " />{" "}
                <h1 className=" font-medium montserrat   text-[14px]">
                  User Management
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/makeAdmin"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium  p-2 pt-2">
              {/* Left Indicator Bar */}

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start gap-2 w-[250px] h-[50px]  p-5 text-centfer
                    ${
                      isActiveAdmin
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl"
                        : "text-[#18181B]"
                    }`}
              >
                <LuUserRoundPlus className="w-[24px] h-[24px]  montserrat " />{" "}
                <h1 className=" font-medium montserrat   text-[14px]">
                  Make Admin
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/subscription"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium  p-2 pt-2">
              {/* Left Indicator Bar */}

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start gap-2 w-[250px] h-[50px]  p-5 text-centfer
                    ${
                      isActiveSubs
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl"
                        : "text-[#18181B]"
                    }`}
              >
                <RiMoneyDollarCircleLine className="w-[24px] h-[24px]  montserrat " />{" "}
                <h1 className=" font-medium montserrat   text-[14px]">
                  Subscription
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-medium  p-2 pt-2">
              {/* Left Indicator Bar */}

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start gap-2 w-[250px] h-[50px]  p-5 text-centfer
                    ${
                      isActiveSettings
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl"
                        : "text-[#18181B]"
                    }`}
              >
                <FiSettings className="w-[24px] h-[24px]  montserrat " />{" "}
                <h1 className=" font-medium montserrat   text-[14px]">
                  Settings
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

export default AdminSidebar;
