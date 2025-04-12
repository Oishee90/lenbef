/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Swal from "sweetalert2";
import { fakeSubscribers } from "../../../data";
import { GoPlus } from "react-icons/go";
import popular from "../../../assets/Popular.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// import AddAdmin from "./AddTeacher";
// import TeacherDetails from "./TeacherDetails";
// import AddTeacher from "./AddTeacher";

const StudentDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleCardClick = (route) => {
    navigate(route); // navigate instead of history.push
  };
  return (
    <div className="p-6 space-y-10 poppins">
      <h2 className="text-2xl font-bold poppinsfont-bold flex flex-col gap-2">
        Hi, Tigist{" "}
        <span className="text-[#16C098] font-medium text-base ">
          Active Members
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-6 mb-48 ">
        <div className="p-6 text-center bg-[#EAF2EA] border rounded-xl shadow-xl cursor-pointer poppins">
          <h3 className="text-xl font-normal text-[#000000] montserrat">
            {t("popularSection.totalHours")}
          </h3>
          <p className="font-semibold text-[#1C1C1C] text-4xl mt-5">26</p>
        </div>
        <div className="p-6 text-center bg-[#EAF2EA] border rounded-xl shadow-xl cursor-pointer poppins">
          <h3 className="text-xl font-normal text-[#000000] montserrat">
            {t("popularSection.totalActivity")}
          </h3>
          <p className="font-semibold text-[#1C1C1C] text-4xl mt-5">35</p>
        </div>
      </div>
      {/* popular section */}
      <h2 className="poppins font-bold text-3xl  ">
        {t("popularSection.heading")}
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {t("popularSection.items", { returnObjects: true }).map(
          (item, index) => (
            <div
              key={index}
              className="p-6 flex flex-col justify-start items-start gap-3 bg-[#EAF2EA] border rounded-xl shadow-lg hover:shadow-2xl hover:border-green-100 cursor-pointer"
              onClick={() => handleCardClick(item.route)} // Use item.route for specific route navigation
            >
              <img src={popular} alt="" />
              <h3 className="text-[20px] poppins font-semibold text-[#1C1C1C]">
                {item.title}
              </h3>
              <p className="font-normal text-[#000000] text-sm">
                {item.description}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
