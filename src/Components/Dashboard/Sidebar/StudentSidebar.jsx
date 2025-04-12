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
import { MdAvTimer } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import { RiEnglishInput } from "react-icons/ri";
import { MdArticle } from "react-icons/md";
import { useTranslation } from "react-i18next";

const StudentSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  // console.log(user);
  const dropdownRef = useRef(null);

  const isActiveDashboard = location.pathname.startsWith("/dashboard/school");
  const isActiveAIAssistant = location.pathname.startsWith(
    "/dashboard/aiAssistant"
  );
  const isActiveEnglish =
    location.pathname.startsWith("/dashboard/english") ||
    location.pathname.startsWith("/dashboard/conversation");

  const isActiveArticle = location.pathname.startsWith("/dashboard/article");
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
        <div className="flex px-6 items-center gap-2 pb-4 pt-2 ">
          <img src={logo} alt="Logo" className="h-[63px] w-full mb-2 " />
        </div>
        {/* Menu Items */}
        <nav className="flex flex-col  text-[#364636]">
          <NavLink
            to="/dashboard/school"
            className="flex items-center justify-between w-[280px]"
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
                className={`flex items-center space-x-2 justify-start w-[250px] h-[50px] pl-[16px] p
                    ${
                      isActiveDashboard
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl mr-2 "
                        : "text-[#18181B]"
                    }`}
              >
                <MdAvTimer className="w-[18px] h-[18px]" />

                <h1 className="text-[16px] font-[500]">
                  {" "}
                  {t("dashboard.dashboard")}
                </h1>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/aiAssistant"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[60px] rounded-r-2xl ${
                  isActiveAIAssistant ? "bg-[#317828]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[50px] pl-[16px] 
                    ${
                      isActiveAIAssistant
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl"
                        : "text-[#18181B]"
                    }`}
              >
                <LuMessageCircle className="w-[18px] h-[18px]" />

                <h1 className="text-[16px] font-[500]">
                  {" "}
                  {t("dashboard.aiAssistant")}{" "}
                </h1>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/dashboard/english"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[50px] rounded-r-2xl ${
                  isActiveEnglish ? "bg-[#317828]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[50px] pl-[16px] p
                    ${
                      isActiveEnglish
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl mr-2 "
                        : "text-[#18181B]"
                    }`}
              >
                <div className="border font-bold">
                  <RiEnglishInput className="w-[18px] h-[18px]" />
                </div>

                <h1 className="text-[16px] font-[500]">
                  {" "}
                  {t("dashboard.englishProficiency")}{" "}
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/article"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[50px] rounded-r-2xl ${
                  isActiveArticle ? "bg-[#317828]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[50px] pl-[16px] p
                    ${
                      isActiveArticle
                        ? "bg-[#317828] text-[#FAF1E6] rounded-xl mr-2 "
                        : "text-[#18181B]"
                    }`}
              >
                <div className="border font-bold">
                  <MdArticle className="w-[18px] h-[18px]" />
                </div>

                <h1 className="text-[16px] font-[500]">
                  {t("dashboard.articleGenerator")}
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
        <span> {t("dashboard.logout")}</span>
      </div>
    </div>
  );
};

export default StudentSidebar;
