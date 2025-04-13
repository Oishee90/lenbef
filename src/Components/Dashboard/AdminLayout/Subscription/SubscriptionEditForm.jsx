import { div } from "framer-motion/client";
import { useRef, useState } from "react";
import logo from "../../../../assets/logo.webp";
import { FaRegCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2
import { TbXboxXFilled } from "react-icons/tb";
import leaf from "../../../../assets/leaf-right.png";
import { useTranslation } from "react-i18next";

const SubscriptionEditForm = ({ onClose, user }) => {
  const [packageName, setPackageName] = useState("Order Hard Copy");
  const [packagePrice, setPackagePrice] = useState("$30");
  const [discount, setDiscount] = useState("20%");
  const [startDate, setStartDate] = useState("08/11/24");
  const [endDate, setEndDate] = useState("08/11/24");
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [checkedItems, setCheckedItems] = useState({
    chatBot: false,
    fullBook: false,
    images: false,
    pdfBook: false,
    discount: false,
  });

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  const handleCreate = () => {
    Swal.fire({
      title: "Success!",
      text: "Your action has been Updated successfully.",
      icon: "success",
      confirmButtonText: "OK",
      timer: 3000, // Auto-close after 3 seconds
    });
  };
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 flex items-center justify-center roboto ">
      <div className="relative bg-white rounded-2xl  w-full max-w-2xl">
        <div className="absolute top-[-16px] left-0">
          <img src={leaf} alt="" />
        </div>
        <div className="flex items-center justify-end">
          {/* <h1 className="text-xl font-semibold montserrat text-[#2d4ca5]">
                   Make Admin
                 </h1> */}
          <button
            onClick={onClose}
            className=" cursor-pointer  px-4 py-2 rounded  absolute top-[0%] right-[0%] text-lg"
          >
            <TbXboxXFilled className="text-[#222222]  w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center  ">
          {/* Logo & Header */}
          <div className="w-[9rem] h-[9rem]   py-10 flex justify-center items-center mb-6 pt-6 pb-6 gap-4">
            <img src={logo} alt="Logo" className=" " />
          </div>

          {/* Form Container */}
          <div className=" p-6 w-full ">
            {/* Package Name & Price */}
            <div className=" flex gap-10 items-center">
              <div className="">
                <label className="block  text-[#222222] font-semibold mb-1 text-base ">
                  {t("adminPannel.PackageName")}
                </label>
                <input
                  type="text"
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="w-full border border-[#317828] p-2 bg-white text-[#222222] cursor-text rounded-3xl mt-3"
                  placeholder="Enter package name"
                />
              </div>
              <div>
                <label className="block  text-[#222222] font-semibold mb-1 text-base ">
                  {t("adminPannel.PackagePrice")}
                </label>
                <input
                  type="text"
                  value={packagePrice}
                  onChange={(e) => setPackagePrice(e.target.value)}
                  className="w-full border border-[#317828] p-2 bg-white text-[#222222] cursor-text rounded-3xl mt-3"
                  placeholder="Enter package price"
                />
              </div>
            </div>

            {/* Package Offer Section */}
            <div className="mt-8">
              <h3 className="text-[#222222] font-semibold mb-2  text-lg">
                {t("adminPannel.PackageOffer")}
              </h3>
              <ul className="space-y-2 text-[#222222] mt-4">
                <li className="flex items-center  font-semibold">
                  <input
                    type="checkbox"
                    name="chatBot"
                    checked={checkedItems.chatBot}
                    onChange={handleChange}
                    className="mr-2 w-5 h-5 rounded-3xl cursor-pointer"
                  />
                  Unlimited chat with the AI Chat Bot.
                </li>
                <li className="flex items-center  font-semibold">
                  <input
                    type="checkbox"
                    name="fullBook"
                    checked={checkedItems.fullBook}
                    onChange={handleChange}
                    className="mr-2 w-5 h-5 cursor-pointer"
                  />
                  Access Full Book.
                </li>
                <li className="flex items-center  font-semibold">
                  <input
                    type="checkbox"
                    name="images"
                    checked={checkedItems.images}
                    onChange={handleChange}
                    className="mr-2 w-5 h-5 cursor-pointer"
                  />
                  200 images in Book.
                </li>
                <li className="flex items-center  font-semibold">
                  <input
                    type="checkbox"
                    name="pdfBook"
                    checked={checkedItems.pdfBook}
                    onChange={handleChange}
                    className="mr-2 w-5 h-5 cursor-pointer"
                  />
                  Downloadable soft copy Pdf book.
                </li>
                <li className="flex items-center  font-semibold">
                  <input
                    type="checkbox"
                    name="discount"
                    checked={checkedItems.discount}
                    onChange={handleChange}
                    className="mr-2 w-5 h-5 cursor-pointer"
                  />
                  $10 off on physical book.
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center w-full">
              <div className="w-1/2">
                <button
                  onClick={handleCreate}
                  className="bg-[#317828]  w-full text-center text-white px-9 py-3 rounded-full text-lg font-semibold hover:bg-[#4961a3] transition cursor-pointer"
                >
                  {t("adminPannel.Update")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionEditForm;
