/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { TbXboxXFilled } from "react-icons/tb";
import profileimage from "../../../assets/profileBanner.png";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const grades = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const gender2 = ["Male", "Female"];

const SchoolProfile = ({ onClose }) => {
  const [profile, setProfile] = useState({ image: "" });
  const [activeTab, setActiveTab] = useState("view");
  const [name, setName] = useState("Student Name");
  const [email, setEmail] = useState("admin@gmail.com");
  const [cell, setCell] = useState("+991545765256");
  const [school, setSchool] = useState("");
  const [contact, setContact] = useState("");
  const [address, setaddress] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentshowPassword, setCurrentShowPassword] = useState(false);
  const [newshowPassword, setNewShowPassword] = useState(false);
  const [confirmshowPassword, setConfirmShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const data = { username: name };
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");
  const { t } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);
  const toggleDropdown = () => setShowOptions((prev) => !prev);

  const [showOptions1, setShowOptions1] = useState(false);
  const toggleDropdown1 = () => setShowOptions1((prev) => !prev);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, image: imageUrl });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsUpdating(true);
    //   api
    setTimeout(() => {
      setIsUpdating(false);
      Swal.fire({
        title: "Success!",
        text: "Privacy policy updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    }, 1000);
  };
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-10 ">
      <div className="relative bg-white rounded-lg w-full max-w-2xl">
        <button
          onClick={onClose}
          className=" cursor-pointer  px-4 py-2 rounded  absolute top-[0%] right-[0%] text-lg"
        >
          <TbXboxXFilled className="text-[#D9D9D9]  w-8 h-8" />
        </button>
        <div
          className=" rounded-md  bg-cover bg-center bg-no-repeat p-6"
          style={{
            backgroundImage: `url(${profileimage})`,
          }}
        >
          <div className="flex flex-row items-center justify-start gap-3 rounded-md mt-8 bg-cover bg-center bg-no-repeat p-6">
            <div className=" relative ">
              <img
                src={
                  profile.image
                    ? profile.image
                    : "https://res.cloudinary.com/dwycwft99/image/upload/v1744094195/image_1_idki2e.png"
                }
                className="w-28 h-28 rounded-full border-2 border-[#317828] mr-2"
                alt="Profile"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="imageUpload"
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className="absolute top-[75%] right-[15%] rounded-full p-2 bg-white z-20  cursor-pointer"
                style={{ transform: "translate(50%, -50%)" }}
              >
                <FiCamera className="text-[#CCA700] w-[20px] h-[20px]" />
              </label>
            </div>

            <div className="flex flex-col   ">
              <h1 className=" text-[#FFFFFF]  text-xl font-semibold leading-[24px] poppins">
                {data?.username}
              </h1>
              <p className=" text-[#dbc049] font-medium  text-base  leading-[24px] poppins mb-3 ">
                {t("profileSection.student")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 mt-4 ">
          <div onClick={() => setActiveTab("view")} className="cursor-pointer">
            <h1
              className={` poppins font-semibold text-base  leading-[24px] mb-2 ${
                activeTab === "view" ? " text-[#317828]" : "text-[#707070]"
              }`}
            >
              {t("profileSection.student")}
            </h1>
            <div
              className={`cursor-pointer w-full ${
                activeTab === "view"
                  ? "border-b-2 border-[#317828] text-[#317828]"
                  : "text-black"
              }`}
            ></div>
          </div>

          <div onClick={() => setActiveTab("edit")} className="cursor-pointer">
            <h1
              className={` poppins font-semibold text-base leading-[24px] mb-2 ${
                activeTab === "edit" ? " text-[#317828]" : "text-[#707070]"
              }`}
            >
              {t("profileSection.editProfile")}
            </h1>
            <div
              className={` montserrat cursor-pointer w-full  ${
                activeTab === "edit"
                  ? "border-b-2 border-[#317828] text-[#317828] "
                  : "text-black"
              }`}
            ></div>
          </div>
        </div>

        {activeTab === "view" && (
          <div className="overflow-y-auto px-10 mb-7 bg-white max-h-[450px]">
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-base font-bold text-[#364636]">
                  {" "}
                  {t("profileSection.name")}Name
                </p>
                <p className="mt-1 text-[#707070]">{name}</p>
              </div>

              <div>
                <p className="text-base font-bold text-[#364636]">
                  {" "}
                  {t("profileSection.email")}Email
                </p>
                <p className="mt-1 text-[#707070]">{email}</p>
              </div>

              <div>
                <p className="text-base font-bold text-[#364636]">
                  {" "}
                  {t("profileSection.cell")}Cell
                </p>
                <p className="mt-1 text-[#707070]">{cell}</p>
              </div>

              <div>
                <p className="text-base font-bold text-[#364636]">
                  {" "}
                  {t("profileSection.school")}School
                </p>
                <p className="mt-1 text-[#707070]">{school || "N/A"}</p>
              </div>

              <div>
                <p className="text-base font-bold text-[#364636]">
                  {" "}
                  {t("profileSection.gender")}Gender
                </p>
                <p className="mt-1 text-[#707070]">{gender || "N/A"}</p>
              </div>

              <div>
                <p className="text-base font-bold text-[#364636]">
                  {" "}
                  {t("profileSection.grade")}Grade
                </p>
                <p className="mt-1 text-[#707070]">{grade || "N/A"}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "edit" && (
          <div className="overflow-y-auto px-10  mb-7 bg-white max-h-[450px]">
            <form onSubmit={handleSave} className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-bold text-[#364636]"
                >
                  {t("profileSection.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border-b border-b-[#C5BDBD] bg-transparent cursor-pointer flex justify-between items-center rounded-t-xl mt-2 px-3"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-bold text-[#364636]"
                >
                  {t("profileSection.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  disabled
                  className="w-full p-1 border-b border-b-[#afafaf] bg-[#e0dcdc] cursor-pointer flex justify-between items-center rounded-t-xl mt-2 px-3"
                />
              </div>

              <div>
                <label
                  htmlFor="cell"
                  className="block text-base font-bold text-[#364636]"
                >
                  {t("profileSection.cell")}
                </label>
                <input
                  type="tel"
                  id="Cell"
                  value={cell}
                  onChange={(e) => setCell(e.target.value)}
                  className="w-full p-1 border-b border-b-[#C5BDBD] cursor-pointer flex justify-between items-center rounded-t-xl mt-2 px-3"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="school"
                  className="block text-base font-bold text-[#364636]"
                >
                  {t("profileSection.school")}
                </label>
                <input
                  type="text"
                  id="school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="79/A Joker Vila, Gotham City"
                  className="w-full p-2 border-b border-b-[#C5BDBD] bg-transparent cursor-pointer flex justify-between items-center rounded-t-xl mt-2 px-3"
                  required
                />
              </div>
              {/* Gender Dropdown */}
              <div className="relative mt-4">
                <label
                  htmlFor="gender"
                  className="block text-base font-bold text-[#364636]"
                >
                  {t("profileSection.gender")}
                </label>
                <div
                  className="w-full p-2 border-b border-b-[#C5BDBD] bg-transparent cursor-pointer flex justify-between items-center rounded-t-xl mt-2 px-3"
                  onClick={toggleDropdown1}
                >
                  <span className="text-[#C5BDBD]">
                    {gender ? gender : "Select Gender"}
                  </span>
                  <FaChevronDown />
                </div>
                {showOptions1 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                    {gender2.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setGender(option);
                          setShowOptions1(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Grade Dropdown */}
              <div className="relative mt-4">
                <label
                  htmlFor="grade"
                  className="block text-base font-bold text-[#364636]"
                >
                  {t("profileSection.grade")}
                </label>
                <div
                  className="w-full p-2 border-b border-b-[#C5BDBD] bg-transparent cursor-pointer flex justify-between items-center"
                  onClick={toggleDropdown}
                >
                  <span className="text-[#C5BDBD]">
                    {grade ? grade : "Select Grade"}
                  </span>
                  <FaChevronDown />
                </div>
                {showOptions && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                    {grades.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setGrade(option);
                          setShowOptions(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-center w-full">
                <div className="w-1/2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer mt-7 bg-[#317828] text-white rounded-lg  py-3 hover:opacity-90 text-[20px]"
                  >
                    {isUpdating
                      ? `${t("profileSection.save")}`
                      : `${t("profileSection.saveChanges")}`}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolProfile;
