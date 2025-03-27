import logo from "../../assets/footerlogo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import app from "../../assets/app.png";
import google from "../../assets/googleplay.png";
import leftCircle from "../../assets/circleleft.png";
import circleright from "../../assets/circleright.png";
import PricingPlan from "./Choose";
import footer from "../../assets/footerHome.png";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId) => {
    navigate("/", { state: { sectionId } });
  };
  return (
    <footer
      className="relative py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${footer})` }}
    >
      {/* <div className=" ">
        <div className="absolute top-[-30%] left-[-7%] z-10 ">
          <img src={leftCircle} alt="" />
        </div>
        <div className="absolute top-[-30%] right-[-7%] z-10 ">
          <img src={circleright} alt="" />
        </div>
      </div> */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 items-center">
          {/* Logo Section */}
          <div className="space-y-3">
            <img src={logo} alt="WayLearn AI" className="h-[108.97px]" />
            <p className="poppins font-normal  text-base leading-[22px] text-[#FFFFFF] mt-12">
              WayLearn AI - Smarter Learning, <br /> Faster Results!
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold montserrat text-white ">
              Company
            </h3>
            <ul className="mt-3 space-y-4 text-sm">
              <li>
                <NavLink
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                  to="/about"
                >
                  {" "}
                  About Us
                </NavLink>
              </li>
              <li>
                <a
                  onClick={() => handleNavigateToSection("how work")}
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                >
                  How to work?
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigateToSection("choose")}
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                >
                  Choose Your Plan
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold montserrat text-white ">
              Support
            </h3>
            <ul className="mt-3 space-y-4 text-sm">
              <li>
                <NavLink
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                  to="/resources"
                >
                  {" "}
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                  to="/contactus"
                >
                  {" "}
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-[#e4e4e4] montserrat leading-auto text-base"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media & Store Links */}
          <div>
            <h3 className="text-xl font-semibold montserrat text-white ">
              Connect with us
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
        <div className="mt-6 text-center text-sm border-t border-white/20 pt-4 text-white">
          WayLearn Ai All Rights Reserved, 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
