import React from "react";
import { useTranslation } from "react-i18next";

const TermsHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto  mt-32">
      <h1 className="text-center flex justify-center items-center text-5xl text-black poppins  font-bold   ">
        {t("adminPannel.Terms&Condition")}
      </h1>
    </div>
  );
};

export default TermsHeader;
