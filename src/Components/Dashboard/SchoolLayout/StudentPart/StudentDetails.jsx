/* eslint-disable react/prop-types */
import React from "react";
import { TbXboxXFilled } from "react-icons/tb";
const StudentDetails = ({ Student, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 flex items-center justify-center ">
      <div className="relative bg-white rounded-2xl  w-full max-w-md">
        <button
          onClick={onClose}
          className=" cursor-pointer  px-4 py-2 rounded  absolute top-[0%] right-[0%] text-lg"
        >
          <TbXboxXFilled className="text-[#D9D9D9]  w-8 h-8" />
        </button>
        <div className="flex flex-col items-center justify-center bg-[#2d4ca5]  py-10">
          <div className="">
            <img
              src={Student.image}
              className="w-28 h-28 rounded-full mr-2"
              alt=""
            />
          </div>
          <h1 className="mt-4 flex flex-col gap-3 items-center text-[#FFFFFF]  text-2xl font-semibold montserrat leading-[24px]">
            {" "}
            {Student.name}
            <span className="font-normal  text-xs">Student </span>
          </h1>
        </div>
        <div className="space-y-4 px-9 mt-9 mb-7  flex flex-col justify-start items-start container mx-auto w-full">
          <div className="flex gap-4 items-center">
            <label className="block text-xl font-semibold montserrat leading-[24px]  text-[#222222]">
              Age
            </label>
            <p className=" text-[#555555] text-lg font-normal leading-[33px]">
              {Student.age}
            </p>
          </div>

          <div className="mt-9 flex gap-4 items-center">
            <label className="block text-xl font-semibold montserrat leading-[24px] text-[#222222]">
              ID:
            </label>
            <p className=" text-[#555555] text-lg font-normal leading-[33px]">
              {Student.id}
            </p>
          </div>
          <div className="mt-9 flex gap-4 items-center">
            <label className="block text-xl font-semibold montserrat leading-[24px] text-[#222222]">
              Stage:
            </label>
            <p className=" text-[#555555] text-lg font-normal leading-[33px]">
              {Student.stage}
            </p>
          </div>
          <div className="mt-9 flex gap-4 items-center">
            <label className="block text-xl font-semibold montserrat leading-[24px] text-[#222222]">
              Strain Level:
            </label>
            <p className=" text-[#555555] text-lg font-normal leading-[33px]">
              {Student.strainLevel}
            </p>
          </div>
          <div className="mt-9 flex gap-4 items-center">
            <label className="block text-xl font-semibold montserrat leading-[24px] text-[#222222]">
              Emotional Status: :
            </label>
            <p className="  text-[#555555] text-lg font-normal leading-[33px]">
              {Student.emotionalStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
