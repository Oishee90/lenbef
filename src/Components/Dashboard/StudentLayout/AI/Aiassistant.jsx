/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import GradeSelector from "./GradeSelector";
import voice from "../../../../assets/voiceStart.png";
import link from "../../../../assets/link.png";
import back from "../../../../assets/back.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import  from "../../../../assets/link.png";

const Aiassistant = () => {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const { t } = useTranslation();
  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
    setSelectedSubject(null); // reset subject on new grade selection
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  const handleBack = () => {
    setSelectedGrade(null); // Go back to grade selection
    setSelectedSubject(null); // Reset the subject selection
  };
  const handleBack1 = () => {
    setSelectedSubject(null); // Reset the subject selection
  };

  return (
    <div className="h-full bg-white flex items-center justify-center px-4 poppins relative">
      {!selectedGrade ? (
        <GradeSelector onGradeSelect={handleGradeSelect} />
      ) : !selectedSubject ? (
        <div className="flex flex-col items-center justify-center">
          <div className="absolute top-4 left-4">
            <div className="cursor-pointer" onClick={handleBack}>
              <img src={back} alt="" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Hi, Tigist!</h1>
          <p className="mb-6 text-gray-600">{t("englishPractice.title")}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {selectedGrade.subjects.map((subject, idx) => (
              <button
                key={idx}
                onClick={() => handleSubjectSelect(subject)}
                className="bg-[#EAF2EA] font-medium poppins text-[#000000] p-4 rounded-lg shadow text-left py-8"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center px-4 h-full">
          {/* ✅ Top Section - Tutor Info */}
          <div className="flex flex-col items-center text-center mx-auto">
            <div className="absolute top-4 left-4">
              <div className="cursor-pointer" onClick={handleBack1}>
                <img src={back} alt="" />
              </div>
            </div>
            <img
              src={selectedGrade.image}
              alt="Tutor"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">
              {selectedGrade.name} Tutor
            </h3>
            <p className="text-sm text-green-600 mb-4">{selectedSubject}</p>
            <p className="text-gray-700 text-sm">
              Hello! My name is Sam, and I'm a dedicated first-grade tutor with
            </p>
          </div>

          {/* ✅ Bottom Section - Chat Input */}
          <div className="mt-6">
            <NavLink
              to="/dashboard/aiAssistantChat"
              state={{ grade: selectedGrade, subject: selectedSubject }}
            >
              <button className="bg-[#317828] text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
                {t("englishPractice.startchat")}
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aiassistant;
