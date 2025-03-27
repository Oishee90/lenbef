import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";

const AddTeacher = ({ onClose }) => {
  const [name, setName] = useState("Admin Name");
  const [email, setEmail] = useState("admin@gmail.com");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState(""); // ✅ Fix: User Type added separately
  const [isUpdating, setIsUpdating] = useState(false);
  const [newshowPassword, setNewShowPassword] = useState(false);
  const [newpassword, setNewPassword] = useState("");
  const [profile, setProfile] = useState({ image: "" });
  const handleSave = (e) => {
    e.preventDefault();
    setIsUpdating(true);
    // API call simulation
    setTimeout(() => {
      setIsUpdating(false);
      alert("Profile updated successfully!");
    }, 1000);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, image: imageUrl });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-10">
      <div className="relative bg-white rounded-2xl w-full max-w-lg ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer px-4 py-2 rounded absolute top-[0%] right-[0%] text-lg"
        >
          <TbXboxXFilled className="text-[#D9D9D9] w-8 h-8" />
        </button>

        {/* Profile Image */}
        <div className="flex flex-col items-center justify-center bg-[#2d4ca5] py-10">
          <div className=" relative">
            <img
              src={
                "https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg"
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
        </div>

        {/* Form */}
        <div className="space-y-4 px-10 mt-5 mb-7 bg-white overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <form onSubmit={handleSave} className="mt-8 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-base font-semibold text-black">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#2d4ca5]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-semibold text-black">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#2d4ca5]"
                required
              />
            </div>

            {/* New Password */}
            <div className="relative">
              <label className="block text-base font-semibold text-black">
                New Password
              </label>
              <input
                type={newshowPassword ? "text" : "password"}
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#2d4ca5]"
                required
              />
              <button
                type="button"
                onClick={() => setNewShowPassword(!newshowPassword)}
                className="absolute right-3 top-9 text-[#2d4ca5]"
              >
                {newshowPassword ? (
                  <FaRegEyeSlash className="cursor-pointer w-[24px] h-[24px]" />
                ) : (
                  <IoEyeOutline className="cursor-pointer w-[24px] h-[24px]" />
                )}
              </button>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-base font-semibold text-black">
                Contact Information
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#2d4ca5]"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-base font-semibold text-black">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="79/A Joker Vila, Gotham City"
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
                required
              />
            </div>

            {/* User Type (✅ Fixed) */}
            <div>
              <label className="block text-base font-semibold text-black">
                User Type
              </label>
              <input
                type="text"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                placeholder="Admin / Moderator"
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center w-full">
              <button
                type="submit"
                className="w-full cursor-pointer mt-7 bg-[#1E3A8A] text-white rounded-lg py-3 hover:opacity-90 text-[20px]"
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
