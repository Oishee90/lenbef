import { TbXboxXFilled } from "react-icons/tb";

const TeacherDetails = ({ teacher, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 flex items-center justify-center ">
      <div className="relative bg-white rounded-2xl  w-full max-w-md">
        <button
          onClick={onClose}
          className=" cursor-pointer  px-4 py-2 rounded  absolute top-[0%] right-[0%] text-lg"
        >
          <TbXboxXFilled className="text-[#D9D9D9]  w-8 h-8" />
        </button>
        <div className="flex flex-col items-center justify-center bg-[#2d4ca5]  py-10">
          <div className="">
            <img
              src={teacher.image}
              className="w-28 h-28 rounded-full mr-2"
              alt=""
            />
          </div>
          <h1 className="mt-4 text-[#FFFFFF]  text-2xl font-semibold montserrat leading-[24px]">
            {" "}
            {teacher.name}
          </h1>
          <p className="mt-3 text-[#FFFFFF] text-base  font-medium montserrat">
            {teacher.designation}
          </p>
        </div>
        <div className="space-y-4 px-9 mt-9 mb-7 ">
          <div>
            <label className="block text-xl font-semibold montserrat leading-[24px]  text-[#222222]">
              Email
            </label>
            <p className="mt-2  text-[#555555] text-lg font-normal leading-[33px]">
              {teacher.email}
            </p>
          </div>
          <div className="mt-9">
            <label className="block text-xl font-semibold montserrat leading-[24px] text-[#222222]">
              Contact No
            </label>
            <p className="mt-2 text-[#555555] text-lg font-normal leading-[33px]">
              {teacher.contactNo ? teacher.contactNo : "Not available"}
            </p>
          </div>

          <div className="mt-9">
            <label className="block text-xl font-semibold montserrat leading-[24px] text-[#222222]">
              Address
            </label>
            <p className="mt-2 text-[#555555] text-lg font-normal leading-[33px]">
              {teacher.address ? teacher.address : "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
