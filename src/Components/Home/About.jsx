/* eslint-disable no-irregular-whitespace */
import React from "react";
import about from "../../assets/about.png";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import about3 from "../../assets/about-4.png";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowForward } from "react-icons/md";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto pt-24 lg:pt-32 pb-24 flex lg:flex-row flex-col gap-10 lg:gap-24 items-center lg:items-start ">
      {/* content */}
      <div className="lg:w-1/2 w-full">
        <h1 className="text-[#317828] font-semibold text-[26px] poppins w-full  ">
          {t("about.title")} {/* Translated title */}
        </h1>
        <h3 className="text-[#141414] font-medium text-5xl leading-[60px] poppins mt-6  ">
          {t("about.subtitle")} {/* Translated subtitle */}
        </h3>
        <p className="text-[#1E1E1E] font-normal text-[17.79px] poppins mt-10 ">
          {t("about.paragraph1")} {/* Translated paragraph 1 */}
        </p>
        <p className="text-[#1E1E1E] font-normal text-[17.79px] poppins mt-5 ">
          {t("about.paragraph2")} {/* Translated paragraph 2 */}
        </p>
        <p className="text-[#1E1E1E] font-normal text-[17.79px] poppins mt-5 ">
          {t("about.paragraph3")} {/* Translated paragraph 3 */}
        </p>
        <p className="text-[#1E1E1E] font-normal text-[17.79px] poppins mt-5 ">
          {t("about.paragraph4")} {/* Translated paragraph 4 */}
        </p>
        <p className="text-[#1E1E1E] font-normal text-[17.79px] poppins mt-5 ">
          {t("about.paragraph5")} {/* Translated paragraph 5 */}
        </p>
        <div className="mt-6">
          <button className="py-4 px-6 bg-[#317828] text-white roboto rounded-2xl font-bold flex items-center gap-3">
            {t("about.joinNow")} <MdOutlineArrowForward />
          </button>
        </div>
      </div>
      {/* img */}
      <div className="lg:w-1/2 w-full flex-col flex gap-7">
        <div className="flex justify-end">
          <img src={about1} alt="" />
        </div>
        <div>
          <img src={about2} alt="" />
        </div>
        <div className="flex justify-end">
          <img src={about3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
