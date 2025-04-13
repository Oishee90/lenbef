import React, { useState } from "react";
import Terms from "../Settings/Terms";
import Privacy from "./Privacy";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("terms");
  const { t } = useTranslation();
  return (
    <div className="w-full  mx-auto px-6 bg-white ">
      {/* Tab Headers */}
      <h1 className="text-[#2A2A2A] text-4xl  montserrat mb-8 font-bold">
        {t("adminPannel.PackageName")}
      </h1>
      <div className="flex  ">
        <button
          className={`px-4 py-2 font-normal text-[24px]  ${
            activeTab === "terms"
              ? "text-[#317828] border-b-2 border-[#317828] cursor-pointer "
              : "text-[#242424] cursor-pointer"
          }`}
          onClick={() => setActiveTab("terms")}
        >
          {t("adminPannel.Terms&Condition")}
        </button>
        <button
          className={`px-4 py-2 font-normal ml-4 text-[24px] ${
            activeTab === "privacy"
              ? " text-[#317828] border-b-2 border-[#317828] cursor-pointer"
              : "text-[#242424] cursor-pointer"
          }`}
          onClick={() => setActiveTab("privacy")}
        >
          {t("adminPannel.Privacy")}
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "terms" && (
          <div>
            <Terms></Terms>
          </div>
        )}

        {activeTab === "privacy" && (
          <div>
            <Privacy></Privacy>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
