import React from "react";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-32">
      <div className="flex items-center justify-between gap-10">
        {/*  content  */}
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="roboto text-8xl main-color font-extrabold leading-[110%]">
            Education that equips you for the future{" "}
          </h1>
          <p className="roboto text-2xl text-[#0F172A] font-normal leading-[160%] ">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
            turpis ultricies.
          </p>
          <div>
            <button className="py-4 px-6 bg-[#317828] text-white roboto rounded-2xl font-bold">
              {" "}
              Sign Up Now
            </button>
          </div>
        </div>
        {/* img */}
        <div className="w-1/2 ">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
