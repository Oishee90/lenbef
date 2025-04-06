import React from "react";
import Navbar from "../Home/Navbar";
import TermsHeader from "./TermsHeader";
import Footer from "../Home/Footer";

import TermsAndCondition from "./TermsAndCondition";

const Terms = () => {
  return (
    <div className="">
      <div className="">
        <div className="h-[569px] bg-[#E0EBDF] ">
          <div className="pt-8">
            <Navbar></Navbar>
          </div>
          <TermsHeader></TermsHeader>
          {/* <ResourceBanner></ResourceBanner> */}
        </div>
        <TermsAndCondition></TermsAndCondition>
        {/* <ResourcesSection></ResourcesSection>
              
         */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Terms;
