import React from "react";
import first from "../../assets/connectinstant.png";
import second from "../../assets/2nd.png";
import third from "../../assets/3rd.png";
import baker from "../../assets/baker.png";
import calculator from "../../assets/calculator.png";

const StayConnected = () => {
  return (
    <div className="container mx-auto pt-24 lg:pt-32  pb-32">
      {/* 1st */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-6 pb-6  gap-4 lg:pb-10">
        {/* content */}
        <div className=" lg:w-1/3 w-full flex flex-col items-start justify-start gap-5">
          <h1 className=" bg-gradient-to-b from-[#1E3A8A] to-[#080F24] montserrat  text-white px-5 py-3 rounded-full font-bold text-3xl sm:text-[40px]">
            1
          </h1>
          <h2 className="text-xl leading-[30px] inter text-[#2C2A50] font-black ">
            Stay connected—instantly
          </h2>
          <p className="text-base leading-[22px] inter text-[#2C2A50] font-semibold">
            {" "}
            Effortlessly connect with teachers, families, and staff anytime,
            anywhere—messages are automatically translated into 35+ languages 🌍
          </p>
        </div>
        {/* image */}
        <div className="">
          <img src={first} alt="" />
        </div>
      </div>
      {/* 2nd */}
      <div className="relative flex flex-col lg:flex-row-reverse justify-between items-center gap-4 lg:pt-40 lg:pb-10 pt-20 pb-6 p-4">
        {/* content */}
        <div className=" lg:w-1/3 w-full flex flex-col items-start justify-start gap-5 ">
          <h1 className=" bg-gradient-to-b from-[#1E3A8A] to-[#080F24] montserrat  text-white  px-5 py-3 rounded-full font-bold text-3xl sm:text-[40px]">
            2
          </h1>
          <h2 className="text-xl leading-[30px] inter text-[#2C2A50] font-black ">
            Keep everyone up-to-date
          </h2>
          <p className="text-base leading-[22px] inter text-[#2C2A50] font-semibold">
            {" "}
            Easily add events to the calendar and keep everyone informed with
            automatic reminders 📅
          </p>
          <div className="absolute top-[75%] left-[90%] lg:block hidden">
            <img src={baker} alt="" />
          </div>
        </div>
        {/* image */}
        <div className="">
          <img src={second} alt="" />
        </div>
      </div>
      {/* 3rd*/}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:pt-40 lg:pb-10 pt-20 pb-6 p-4">
        {/* content */}
        <div className=" relative lg:w-1/3 w-full flex flex-col items-start justify-start gap-5">
          <h1 className=" bg-gradient-to-b from-[#1E3A8A] to-[#080F24] montserrat  text-white  px-5 py-3 rounded-full font-bold text-3xl sm:text-[40px]">
            3
          </h1>
          <h2 className="text-xl leading-[30px] inter text-[#2C2A50] font-black ">
            Help them grow their own way
          </h2>
          <p className="text-base leading-[22px] inter text-[#2C2A50] font-semibold">
            {" "}
            Waylearn.ai empowers teachers and families to collaborate on
            social-emotional learning with Points and Big Ideas—while giving
            kids a voice through Portfolios 🎨
          </p>
          <div className="absolute top-[100%] left-[0%] lg:block hidden">
            <img src={calculator} alt="" />
          </div>
        </div>
        {/* image */}
        <div className="">
          <img src={third} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
