import logo from "../../assets/footer-logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import app from "../../assets/app.png";
import google from "../../assets/googleplay.png";
import leftCircle from "../../assets/circleleft.png";
import circleright from "../../assets/circleright.png";
import PricingPlan from "./Choose";
import footer from "../../assets/showFooter.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId) => {
    navigate("/", { state: { sectionId } });
  };
  return (
    <footer
      className="relative py-32 bg-no-repeat bg-cover bg-top-right"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "top right",
        backgroundSize: "cover",
      }}
    >
      {/* <div className=" ">
        <div className="absolute top-[-30%] left-[-7%] z-10 ">
          <img src={leftCircle} alt="" />
        </div>
        <div className="absolute top-[-30%] right-[-7%] z-10 ">
          <img src={circleright} alt="" />
        </div>
      </div> */}
      <div className="container mx-auto px-6 lg:px-20 pt-48">
        <div className="mb-20">
          <h1 className="font-bold text-[30px] text-center  kumbh-sans text-[#FFFFFF]">
            {t("footer.title")}
          </h1>
          <div className="mt-9 flex justify-center ">
            <NavLink to="/login">
              <button className="py-4 px-6 bg-[#CBB702] text-white kumbh-sans font-normal uppercase rounded-full">
                {t("footer.getStarted")}
              </button>
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-12  justify-items-center">
          {/* Logo Section */}
          <div className="space-y-3">
            <img src={logo} alt="Youmina" className="h-[108.97px]" />
            <p className="kumbh-sans font-normal  text-base leading-[26px] text-[#FFFFFF] mt-16 text-center">
              {t("footer.aiEducation")}
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold montserrat text-white ">
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-3 space-y-4 text-sm">
              <li>
                <NavLink
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                  to="/"
                >
                  {" "}
                  {t("footer.home")}
                </NavLink>
              </li>
              <li>
                <a
                  onClick={() => handleNavigateToSection("how work")}
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                >
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigateToSection("choose")}
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                >
                  {t("footer.pricing")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigateToSection("choose")}
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                >
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold montserrat text-white ">
              {t("footer.policy")}
            </h3>
            <ul className="mt-3 space-y-4 text-sm">
              <li>
                <NavLink
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                  to="/privacy"
                >
                  {" "}
                  {t("footer.privacy")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                  to="/terms"
                >
                  {" "}
                  {t("footer.terms")}
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Social Media & Store Links */}
          <div>
            <h3 className="text-xl font-semibold montserrat text-white ">
              {t("footer.socialMedia")}
            </h3>
            <div className="flex items-center gap-6 mt-6">
              <div>
                <a href="https://www.facebook.com/" target="_blank">
                  {" "}
                  <FaFacebook className="text-white w-[24px] h-[24px]" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="text-white w-[24px] h-[24px]" />
                </a>
              </div>
              <div>
                <a href="https://x.com/" target="_blank">
                  <FaTwitter className="text-white w-[24px] h-[24px]" />
                </a>
              </div>
            </div>
            {/* app */}
          </div>
        </div>

        {/* Copyright Text */}
        {/* <div className="mt-6 text-center text-sm border-t border-white/20 pt-4 text-white">
          WayLearn Ai All Rights Reserved, 2025
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
