/* eslint-disable react/prop-types */
import { TbXboxXFilled } from "react-icons/tb";
import bg from "../../../../assets/profileBanner.png";
import { useTranslation } from "react-i18next";

const UserDetails = ({ onClose, user }) => {
  // const user = {
  //     name: 'Dincliniya',
  //     email: 'mohmuo@gmail.com',
  //     contactNumber: '+99355574544',
  //     dob: '17 Dec, 2024',
  //     subscriptionType: 'Premium subscription',
  //     address: '68/Joker Vita, Gotham City'
  //   };
 const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 flex items-center justify-center ">
      <div className="relative bg-white rounded-2xl  w-full max-w-md">
        <button
          onClick={onClose}
          className=" cursor-pointer  px-4 py-2 rounded  absolute top-[0%] right-[0%] text-lg"
        >
          <TbXboxXFilled className="text-[#D9D9D9]  w-8 h-8" />
        </button>
        <div
          className="flex flex-col items-center justify-center 
          py-10"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="">
            <img
              src={user.image}
              className="w-28 h-28 rounded-full mr-2"
              alt=""
            />
          </div>
          <h1 className="mt-1 text-[#FFFFFF]  text-xl font-semibold roboto leading-[24px]">
            {" "}
            {user.name}
          </h1>
          <p className="mt- text-[#FFFFFF] text-base  font-medium montserrat">
            {user.designation}
          </p>
        </div>
        <div className="space-y-4 px-9 mt-9 mb-7 ">
          <div>
            <label className="block text-xl font-semibold montserrat leading-[24px]  text-[#222222]">
            {t("adminPannel.Email")}
            </label>
            <p className="mt-2  text-[#555555] text-lg font-normal leading-[33px]">
              {user.email}
            </p>
          </div>
          <div className="mt-9">
            <label className="block text-xl font-semibold montserrat leading-[24px] text-[#222222]">
            {t("adminPannel.Contactnumber")} 
            </label>
            <p className="mt-2 text-[#555555] text-lg font-normal leading-[33px]">
              {user.contactNo ? user.contactNo : "Not available"}
            </p>
          </div>

          <div className="mt-9">
            <label className="block text-xl font-semibold montserrat leading-[24px] text-[#222222]">
            {t("adminPannel.Adress")}
            </label>
            <p className="mt-2 text-[#555555] text-lg font-normal leading-[33px]">
              {user.address ? user.address : "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
