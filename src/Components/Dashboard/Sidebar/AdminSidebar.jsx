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
import { useTranslation } from "react-i18next";
const AdminSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();
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
        <NavLink to="/">
          <div className="flex px-6 items-center gap-2 pb-4 pt-2">
            <img src={logo} alt="Logo" className="h-[63px] w-full mb-2 " />
          </div>
        </NavLink>
        {/* Menu Items */}
        <nav className="flex flex-col  text-[#364636] py-2 mt-4">
          <NavLink
            to="/dashboard/admin"
            className="flex items-center justify-between w-[280px] mb-1"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[50px] rounded-r-2xl ${
                  isActiveDashboard ? "bg-[#317828]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[50px] pl-[16px]
        ${
          isActiveDashboard
            ? "bg-[#317828] text-[#FAF1E6] rounded-xl mr-2"
            : "text-[#18181B]"
        }`}
              >
                <AiOutlineHome className="w-[20px] h-[20px]" />
                <h1 className="text-[16px] font-[500]">
                  {" "}
                  {t("adminPannel.dashboard")}
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/user"
            className="flex items-center justify-between w-[280px] mb-1"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[50px] rounded-r-2xl ${
                  isActiveUsers ? "bg-[#317828]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[50px] pl-[16px]
        ${
          isActiveUsers
            ? "bg-[#317828] text-[#FAF1E6] rounded-xl mr-2"
            : "text-[#18181B]"
        }`}
              >
                <FaUsers className="w-[20px] h-[20px]" />
                <h1 className="text-[16px] font-[500]">
                  {" "}
                  {t("adminPannel.userManagement")}
                </h1>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/subscription"
            className="flex items-center justify-between w-[280px] mb-1"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[50px] rounded-r-2xl ${
                  isActiveSubs ? "bg-[#317828]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[50px] pl-[16px]
        ${
          isActiveSubs
            ? "bg-[#317828] text-[#FAF1E6] rounded-xl mr-2"
            : "text-[#18181B]"
        }`}
              >
                <RiMoneyDollarCircleLine className="w-[20px] h-[20px] " />
                <h1 className="text-[16px] font-[500]">
                  {" "}
                  {t("adminPannel.subscription")}
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className="flex items-center justify-between w-[280px] mb-1"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[50px] rounded-r-2xl ${
                  isActiveSettings ? "bg-[#317828]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[50px] pl-[16px]
        ${
          isActiveSettings
            ? "bg-[#317828] text-[#FAF1E6] rounded-xl mr-2"
            : "text-[#18181B]"
        }`}
              >
                <FiSettings className="w-[20px] h-[20px]" />
                <h1 className="text-[16px] font-[500]">
                  {" "}
                  {t("adminPannel.settings")}
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
        <span> {t("adminPannel.logout")}</span>
      </div>
    </div>
  );
};

export default AdminSidebar;
