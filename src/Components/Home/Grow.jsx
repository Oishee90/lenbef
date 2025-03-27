/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image from "../../assets/image.png";

const Grow = () => {
  return (
    <div
      className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl font-extrabold montserrat md:text-5xl 2xl:text-[65.81px]">
          Let's thrive and grow!
        </h1>
        <button className=" mt-10 montserrat md:text-base rounded-3xl bg-gradient-to-b from-[#94A9E5] via-[#1E3A8A]  to-[#0B38B8] px-3 py-2  sm:px-8 sm:py-2.5 text-sm font-medium text-white">
          Get started free
        </button>
      </div>
    </div>
  );
};

export default Grow;
