import React from "react";

import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import PrivacyHeader from "./PrivacyHeader";
import PrivacyPolicy from "./PrivacyPolicy";

const Privacy = () => {
  return (
    <div className="">
      <div className="">
        <div className="h-[569px] bg-[#E0EBDF] ">
          <div className="pt-8">
            <Navbar></Navbar>
          </div>
          <PrivacyHeader></PrivacyHeader>
          {/* <ResourceBanner></ResourceBanner> */}
        </div>
        <PrivacyPolicy></PrivacyPolicy>
        {/* <ResourcesSection></ResourcesSection>
            
       */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Privacy;
