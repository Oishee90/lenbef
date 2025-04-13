import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { useTranslation } from "react-i18next";

const PrivacyHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto  mt-32">
      <h1 className="text-center flex justify-center items-center text-5xl text-black poppins  font-bold   ">
        {t("adminPannel.Privacy")}
      </h1>
    </div>
  );
};

export default PrivacyHeader;
