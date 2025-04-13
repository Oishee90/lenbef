import React from "react";
import { useTranslation } from "react-i18next";
import banner from "../../assets/banner.png";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-32">
      <div className="flex lg:flex-row flex-col-reverse  items-center justify-between gap-10">
        {/*  content  */}
        <div className="flex flex-col items-center gap-4 lg:w-1/2 w-full">
          <h1 className="roboto text-5xl lg:text-8xl main-color font-extrabold leading-[110%]">
            {t("banner.title")}
          </h1>
          <p className="roboto text-lg lg:text-2xl text-[#0F172A] font-normal leading-[160%] ">
            {t("banner.description")}
          </p>
          <div>
            <button className="py-4 px-6 bg-[#317828] text-white roboto rounded-2xl font-bold">
              {t("banner.signup")}
            </button>
          </div>
        </div>
        {/* img */}
        <div className="lg:w-1/2 w-full ">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
