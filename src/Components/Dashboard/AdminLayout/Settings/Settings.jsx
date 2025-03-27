import React, { useState } from "react";
import Terms from "../Settings/Terms";
import Privacy from "./Privacy";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("terms");
  return (
    <div className="w-full  mx-auto px-6 bg-white ">
      {/* Tab Headers */}
      <h1 className="text-[#2A2A2A] text-4xl  montserrat mb-8 font-semibold">
        Settings
      </h1>
      <div className="flex  ">
        <button
          className={`px-4 py-2 font-normal text-[24px]  ${
            activeTab === "terms"
              ? "text-[#10589E] border-b-2 border-[#10589E] cursor-pointer "
              : "text-[#242424] cursor-pointer"
          }`}
          onClick={() => setActiveTab("terms")}
        >
          Terms And Condition
        </button>
        <button
          className={`px-4 py-2 font-normal ml-4 text-[24px] ${
            activeTab === "privacy"
              ? " text-[#10589E] border-b-2 border-[#242424] cursor-pointer"
              : "text-[#242424] cursor-pointer"
          }`}
          onClick={() => setActiveTab("privacy")}
        >
          Privacy Policy
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
