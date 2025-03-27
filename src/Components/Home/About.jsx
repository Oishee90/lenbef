import React from "react";
import girl from "../../assets/girl.png";
import bg from "../../assets/blue-bg.png";

const About = () => {
  return (
    <div className=" relative  pt-40 mt-40  pb-32 p-4 bg-gradient-to-b from-[#1E3A8A] to-[#66D4FF] h-[800px] lg:min-h-0 lg:h-[490px]    ">
      <div className=" container mx-auto ">
        <div className=" absolute top-[-20%] flex lg:flex-row flex-col-reverse justify-between items-center gap-6 ">
          {/*  content  */}
          <div className="flex flex-col gap-6 lg:w-1/2 w-full p-9 ">
            <h1 className="text-2xl md:text-4xl lg:text-[45px] montserrat  font-black lg:leading-[60px] text-[#FFFFFF]">
              {" "}
              AI-Powered Education <br /> for a{" "}
              <span className="text-[#1E3A8A]">Smarter</span> <br /> Tomorrow
            </h1>
            <p className="font-normal text-xs lg:text-[22px]  lg:leading-[22px] montserrat text-[#FFFFFF]">
              {" "}
              Get unlimited homework help, dive deeper with AI, and be ready
              with Test Prep.
            </p>
          </div>
          {/* img */}
          <div className=" h-full  ">
            <img src={girl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
