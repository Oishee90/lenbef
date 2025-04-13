import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { div } from "framer-motion/client";
import { TbXboxXFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import profileimage from "../../../assets/profileBanner.png";
import { useTranslation } from "react-i18next";
const AdminProfile = ({ onClose }) => {
  const [profile, setProfile] = useState({ image: "" });
  const [activeTab, setActiveTab] = useState("edit");
  const [name, setName] = useState("Admin Name");
  const [email, setEmail] = useState("admin@gmail.com");
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
  const { t } = useTranslation();
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
          className="flex flex-row items-center justify-center gap-3    bg-cover bg-center bg-no-repeat rounded-md py-10"
          style={{
            backgroundImage: `url(${profileimage})`,
          }}
        >
          <div className=" relative">
            <img
              src={
                profile.image
                  ? profile.image
                  : "https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg"
              }
              className="w-28 h-28 rounded-full border-2 border-[#FAF1E6] mr-2"
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

          <div className="flex flex-col  gap-2">
            <h1 className=" text-white  text-xl font-bold leading-[24px] montserrat">
              {data?.username}
            </h1>
            <p className=" text-[#34C759]  text-xl font-semibold leading-[24px] montserrat">
              {t("adminPannel.admin")}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 mt-4 py-8">
          <div onClick={() => setActiveTab("edit")} className="cursor-pointer">
            <h1
              className={` montserrat font-semibold text-base  leading-[24px] mb-2 ${
                activeTab === "edit" ? " text-[#317828]" : "text-[#707070]"
              }`}
            >
              {t("adminPannel.Edit")}
            </h1>
            <div
              className={`cursor-pointer w-full ${
                activeTab === "edit"
                  ? "border-b-2 border-[#317828] text-[#317828]"
                  : "text-black"
              }`}
            ></div>
          </div>

          <div
            onClick={() => setActiveTab("changePassword")}
            className="cursor-pointer"
          >
            <h1
              className={` montserrat font-semibold text-base leading-[24px] mb-2 ${
                activeTab === "changePassword"
                  ? " text-[#317828]"
                  : "text-[#707070]"
              }`}
            >
              {t("adminPannel.Change")}
            </h1>
            <div
              className={` montserrat cursor-pointer w-full  ${
                activeTab === "changePassword"
                  ? "border-b-2 border-[#317828] text-[#317828] "
                  : "text-black"
              }`}
            ></div>
          </div>
        </div>

        {activeTab === "edit" && (
          <div className="space-y-4 px-10 mt-5 mb-7 bg-white">
            <form onSubmit={handleSave} className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-normal text-[#364636]"
                >
                  {t("adminPannel.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-normal text-[#364636]"
                >
                  {t("adminPannel.Email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  disabled
                  className="w-full mt-2 p-2 border border-gray-300 bg-gray-200 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-base font-normal text-[#364636]"
                >
                  {t("adminPannel.Contactnumber")}
                </label>
                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-base font-normal text-[#364636]"
                >
                  {t("adminPannel.adress")}
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  placeholder="79/A Joker Vila, Gotham City"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
                  required
                />
              </div>

              <div className="mt-6 flex justify-center w-full">
                <div className="w-1/2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer mt-7 bg-gradient-to-r from-[#317828] to-[#5BDE4A] text-white rounded-lg  py-3 hover:opacity-90 text-[20px]"
                  >
                    {isUpdating
                      ? `${t("adminPannel.saving")}`
                      : `${t("adminPannel.save")}`}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {activeTab === "changePassword" && (
          <div className="space-y-4 px-10  mt-5 mb-7 bg-white">
            <form className="mt-8 space-y-4">
              <div className="relative">
                <label
                  htmlFor="current-password"
                  className="block text-base font-normal text-[#364636]"
                >
                  {t("adminPannel.Current")}
                </label>
                <input
                  type={currentshowPassword ? "text" : "password"}
                  id="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#317828]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setCurrentShowPassword(!currentshowPassword)}
                  className="absolute right-3 top-9 text-[#575757]"
                >
                  {currentshowPassword ? (
                    <FaRegEyeSlash className="cursor-pointer w-[24px] h-[24px]" />
                  ) : (
                    <IoEyeOutline className="cursor-pointer w-[24px] h-[24px]" />
                  )}
                </button>
              </div>

              <div className="relative">
                <label
                  htmlFor="new-password"
                  className="block text-base font-normal text-[#364636]"
                >
                  {t("adminPannel.New")}
                </label>
                <input
                  type={newshowPassword ? "text" : "password"}
                  id="new-password"
                  value={newpassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#317828]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setNewShowPassword(!newshowPassword)}
                  className="absolute right-3 top-9 text-[#575757]"
                >
                  {newshowPassword ? (
                    <FaRegEyeSlash className="cursor-pointer w-[24px] h-[24px]" />
                  ) : (
                    <IoEyeOutline className="cursor-pointer w-[24px] h-[24px]" />
                  )}
                </button>
              </div>

              <div className="relative">
                <label
                  htmlFor="confirm-password"
                  className="block text-base font-normal text-[#364636]"
                >
                  {t("adminPannel.Confirm")}
                </label>
                <input
                  type={confirmshowPassword ? "text" : "password"}
                  id="confirm-password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#317828]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setConfirmShowPassword(!confirmshowPassword)}
                  className="absolute right-3 top-9 text-[#575757]"
                >
                  {confirmshowPassword ? (
                    <FaRegEyeSlash className="cursor-pointer w-[24px] h-[24px]" />
                  ) : (
                    <IoEyeOutline className="cursor-pointer w-[24px] h-[24px]" />
                  )}
                </button>
              </div>

              <div className="mt-6 flex justify-center w-full">
                <div className="w-1/2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer mt-7 bg-gradient-to-r from-[#317828] to-[#5BDE4A]  text-white rounded-xl py-3 hover:opacity-90 text-[20px]"
                  >
                    {t("adminPannel.Change")}s
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

export default AdminProfile;
