import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import people from "../../assets/people.png";
import student from "../../assets/student.png";
import school from "../../assets/school.png";
import love from "../../assets/heart-circle-sharp.png";
import diamond from "../../assets/diamond.png";

const Milestones = () => {
  const location = useLocation();
  const { t } = useTranslation(); // 👈 useTranslation hook

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
      <div className="bg-[#317828] flex flex-col 2xl:flex-row lg:justify-around items-center gap-5 rounded-lb-2xl rounded-tr-2xl lg:rounded-tr-full lg:rounded-bl-full  2xl:h-[273px] h-auto p-4">
        {/* card1 */}
        <div className="flex lg:items-center px-4">
          <div className="flex flex-col lg:items-center text-white">
            <div className="w-10 h-10">
              <img src={love} alt="" />
            </div>
            <h3 className="text-[72px] roboto font-extrabold text-[#FACC15]">
              {t("milestones.schoolsNumber")}
            </h3>
            <p className="font-normal text-[#FACC15] text-base">
              {t("milestones.schools")}
            </p>
          </div>
        </div>

        {/* card2 */}
        <div className="flex lg:items-center px-4">
          <div className="flex flex-col lg:items-center text-white">
            <div className="w-10 h-10">
              <img src={diamond} alt="" />
            </div>
            <h3 className="text-[72px] roboto font-extrabold text-[#FACC15]">
              {t("milestones.teachersNumber")}
            </h3>
            <p className="font-normal text-[#FACC15] text-base">
              {t("milestones.teachers")}
            </p>
          </div>
        </div>

        {/* card3 */}
        <div className="flex lg:items-center px-4">
          <div className="flex flex-col lg:items-center text-white">
            <div className="w-10 h-10">
              <img src={school} alt="" />
            </div>
            <h3 className="text-[72px] roboto font-extrabold text-[#FACC15]">
              {t("milestones.studentsNumber")}
            </h3>
            <p className="font-normal text-[#FACC15] text-base">
              {t("milestones.students")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
