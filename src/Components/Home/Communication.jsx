import React from "react";
import small from "../../assets/small.png";
import big from "../../assets/big.png";
import first from "../../assets/kids1.png";
import second from "../../assets/kids-2.png";
import third from "../../assets/kid-3.png";
import fourth from "../../assets/kid-4.png";
import fifth from "../../assets/kid-4.png";

const Communication = () => {
  return (
    <div className="container mx-auto pt-10 sm:pt-24 lg:pt-32  pb-32 z-50">
      {/* header */}
      <div className="relative ">
        <div className="absolute lg:left-[5%] 2xl:left-[22%] top-[20%] hidden lg:block ">
          <img src={small} alt="" />
        </div>
        <div className="absolute md:left-[96%] lg:left-[88%] 2xl:left-[75%] top-[-12%] hidden lg:block">
          <img src={big} alt="" />
        </div>
        <h1 className="text-[#1E3A8A] font-bold  text-center montserrat text-2xl sm:text-[36px] container mx-auto ">
          Empowering Communication Between <br /> Educators, Parents, and
          Students
        </h1>
      </div>
      {/* image content */}
      <div className="w-1/2 sm:w-full  mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-5 md:gap-2 mt-10 p-4 px-5 items-center">
        {/* 1st  */}
        <div>
          <img src={first} alt="" />
        </div>
        {/* 2nd */}
        <div>
          <img src={second} alt="" />
        </div>
        {/* 3rd*/}
        <div>
          <img src={third} alt="" />
        </div>
        {/* 4th*/}
        <div>
          <img src={fourth} alt="" />
        </div>
        {/* 5th */}
        <div>
          <img src={fifth} alt="" />
        </div>
        {/* 1st  */}
        <div>
          <img src={first} alt="" />
        </div>
        {/* 2nd */}
        <div>
          <img src={second} alt="" />
        </div>
        {/* 3rd*/}
        <div>
          <img src={third} alt="" />
        </div>
        {/* 4th*/}
        <div>
          <img src={fourth} alt="" />
        </div>
        {/* 5th */}
        <div>
          <img src={fifth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Communication;
