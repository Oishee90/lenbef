import people from "../../assets/people.png";
import student from "../../assets/student.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import school from "../../assets/school.png";
import love from "../../assets/heart-circle-sharp.png";
import diamond from "../../assets/diamond.png";
const Milestones = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div id="how work" className="container mx-auto pt-24 sm:pt-36 pb-10  p-4">
      <div className="  bg-[#317828] flex flex-col lg:flex-row  lg:justify-around  lg:items-center  items-start rounded-lb-2xl   rounded-tr-2xl lg:rounded-tr-full lg:rounded-bl-full lg:h-[273px] ">
        {/* card1 */}
        <div className=" flex lg:items-center   px-4 ">
          <div className="flex flex-col lg:items-center text-white">
            <div className="w-10 h-10">
              {" "}
              <img src={love} alt="" />
            </div>
            <h3 className=" text-[72px] roboto font-extrabold text-[#FACC15]">
              195
            </h3>
            <p className="font-normal text-[#FACC15] te3xt-base"> Schools</p>
          </div>
        </div>
        {/* card 2 */}
        <div className=" flex lg:items-center   px-4 ">
          <div className="flex flex-col lg:items-center text-white">
            <div className="w-10 h-10">
              {" "}
              <img src={diamond} alt="" />
            </div>
            <h3 className=" text-[72px] roboto font-extrabold text-[#FACC15]">
              1M
            </h3>
            <p className="font-normal text-[#FACC15] te3xt-base">
              {" "}
              Valued Teachers
            </p>
          </div>
        </div>

        {/* card3  */}
        <div className=" flex lg:items-center   px-4 ">
          <div className="flex flex-col lg:items-center text-white">
            <div className="w-10 h-10">
              {" "}
              <img src={school} alt="" />
            </div>
            <h3 className=" text-[72px] roboto font-extrabold text-[#FACC15]">
              17M
            </h3>
            <p className="font-normal text-[#FACC15] te3xt-base">
              {" "}
              Happy Students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
