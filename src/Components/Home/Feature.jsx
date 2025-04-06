import React from "react";
import { useTranslation } from "react-i18next";
import feature2 from "../../assets/feature.png";

const Feature = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto pt-24 lg:pt-32 pb-24 flex lg:flex-row-reverse flex-col gap-10 lg:justify-between items-center lg:items-start ">
      {/* content */}
      <div className="lg:w-1/2 w-full">
        <h1 className="text-[#317828] font-semibold text-[26px] poppins w-full  ">
          {t("feature.title")} {/* Translated title */}
        </h1>
        <h3 className="text-[#141414] font-medium text-5xl leading-[60px] poppins mt-6  ">
          {t("feature.subtitle")} {/* Translated subtitle */}
        </h3>
        <p className="text-[#1E1E1E] font-normal text-[17.79px] poppins mt-10 ">
          {t("feature.paragraph1")} {/* Translated paragraph 1 */}
        </p>
        <p className="text-[#1E1E1E] font-normal text-[17.79px] poppins mt-5 ">
          {t("feature.paragraph2")} {/* Translated paragraph 2 */}
        </p>
      </div>
      {/* img */}
      <div className="lg:w-1/2 w-full gap-7">
        <div className="f">
          <img src={feature2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
