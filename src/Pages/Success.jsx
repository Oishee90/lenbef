import { NavLink, useNavigate } from "react-router-dom";
import success from "../assets/Successmark.png";
import leaf from "../assets/leaf.png";
import image from "../assets/logoimg.png";
import { useTranslation } from "react-i18next";
const Success = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");
  };
  return (
    <div>
      <div className="flex 2xl:flex-row-reverse flex-col-reverse justify-between items-center min-h-screen bg-[#317828]">
        <NavLink to="/" className="absolute top-5 left-5 text-3xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </NavLink>
        {/* Left Form Section */}
        <div className="  w-full 2xl:w-7/8  montserrat bg-white rounded-l-[5.5rem] h-screen">
          <div className=" relative top-0 right-0  flex flex-col justify-center items-end">
            <img src={leaf} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center lg:pl-48 space-y-8 ">
            <img src={success} alt="" />
            {/* Heading */}
            <h2
              className="text-center text-[#2F2F2F] mt-20 text-[20px] montserrat leading-[30px]"
              aria-label="Password update message"
            >
              {t("success.passwordUpdated")}
            </h2>

            {/* Congratulations */}
            <h1
              className="text-center text-[#2F2F2F] mt-20 mb-32 text-5xl montserrat leading-[30px]"
              aria-label="Congratulations message"
            >
              {t("success.congratulations")}
            </h1>

            {/* Login Button */}
            <div className="flex justify-center items-center  w-1/2 ">
              <button
                onClick={handleSubmit}
                className="w-1/3 px-8 py-2 bg-[#317828] text-white p-2 rounded-xl montserrat font-bold mx-auto whitespace-nowrap"
              >
                {t("success.continue")}
              </button>
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className=" w-full 2xl:w-1/2  relative left-[10%]">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Success;
