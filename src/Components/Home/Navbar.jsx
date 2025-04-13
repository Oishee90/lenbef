import { useEffect, useState } from "react";
import logo from "../../assets/logo.webp";
import { TbWorld } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  console.log(t);
  const menuItems = [
    { name: t("navbar.home"), id: "home" },
    { name: t("navbar.about"), id: "about" },
    { name: t("navbar.resources"), id: "Resources" },
    { name: t("navbar.contact"), id: "Contact us" },
  ];
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.role) {
      setUserRole(storedUser.role);
    }
  }, []);

  useEffect(() => {
    const handleScrollEvent = () => {
      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleScroll = (id) => {
    if (id === "home") {
      navigate("/");
    }
    if (id === "Resources") {
      navigate("/resources");
    }
    if (id === "Contact us") {
      navigate("/contactus");
    }
    if (id === "about") {
      navigate("/about");
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  const handleDashboardRedirect = () => {
    console.log("oishe");
    if (userRole === "Admin") {
      navigate("/dashboard/admin");
    } else if (userRole === "student") {
      navigate("/dashboard/student");
    }
  };

  return (
    <div>
      <nav className="bg-white container mx-auto  rounded-full  text-white border border-[#BFD5BC] shadow-xl">
        <div className="container mx-auto flex justify-between items-center 2xl:py-4 px-6">
          {/*  Left: Logo */}
          <div className="text-xl md:text-3xl lg:text-4xl font-extrabold">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img src={logo} alt="" className="w-28 h-8" />
            </a>
          </div>

          {/* Center: Navigation Menu (Large Screen) */}
          <ul className="hidden lg:flex gflex items-center gap-20  list-none montserrat  font-medium text-lg text-[#222222] ">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className={`text-lg font-medium transition-all ${
                    activeSection === id
                      ? "main-color border-b-2 border-[#1E3A8A] "
                      : "hover:text-black"
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/*  Right: Log In & Sign Up (Large Screen) */}
          <div className="hidden lg:flex flex-row items-center gap-10">
            <div className="relative inline-block text-left">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 text-black"
              >
                <TbWorld /> {t("navbar.language")}{" "}
                <span className="text-sm">▼</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg z-10">
                  <ul className="flex flex-col">
                    <li
                      onClick={() => i18n.changeLanguage("en")}
                      className="hover:bg-blue-100 px-4 py-2 cursor-pointer"
                    >
                      English
                    </li>
                    <li
                      onClick={() => i18n.changeLanguage("am")}
                      className="hover:bg-blue-100 px-4 py-2 cursor-pointer"
                    >
                      Amharic
                    </li>
                    <li
                      onClick={() => i18n.changeLanguage("om")}
                      className="hover:bg-blue-100 px-4 py-2 cursor-pointer"
                    >
                      Oromo
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {userRole ? (
              <button
                onClick={handleDashboardRedirect}
                className="montserrat md:text-base rounded-3xl bg-[#317828] px-3 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-white"
              >
                {t("navbar.dashboard")}
              </button>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="montserrat md:text-base px-5 py-2.5 text-sm font-medium text-[#000000]"
                >
                  {t("navbar.login")}
                </NavLink>
                <NavLink
                  to="/signUp"
                  className="montserrat md:text-base rounded-3xl bg-[#317828] px-3 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-[#FFE500]"
                >
                  {t("navbar.signup")}
                </NavLink>
              </>
            )}
          </div>

          {/*  Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none text-black"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/*  Mobile Menu */}
      </nav>
      {isOpen && (
        <div className="lg:hidden mt-4  bg-[#f7fff4] rounded-tl-2xl rounded-br-2xl text-center p-4  container mx-auto m-4 absolute z-50">
          <ul className="flex flex-col gap-4">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    handleScroll(id);
                    setIsOpen(false);
                  }}
                  className="text-lg font-medium hover:text-gray-200 poppins"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-4">
            {userRole ? (
              <button
                onClick={() => {
                  handleDashboardRedirect();
                  setIsOpen(false);
                }}
                className="montserrat md:text-base px-5 py-2.5 text-sm font-medium text-white bg-[#317828] rounded-full"
              >
                {t("navbar.dashboard")}
              </button>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="montserrat md:text-base px-5 py-2.5 text-sm font-medium text-[#000000]"
                >
                  {t("navbar.login")}
                </NavLink>
                <div className="w-full justify-center">
                  <NavLink
                    to="/signUp"
                    className="montserrat md:text-base w-full text-center rounded-3xl bg-gradient-to-b from-[#00B2F7] via-[#1E3A8A] to-[#080F24] px-3 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-white"
                  >
                    {t("navbar.signup")}
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
