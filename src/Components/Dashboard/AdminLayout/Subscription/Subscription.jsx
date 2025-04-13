import { useState } from "react";
import SubscriptionPage from "./SubscriptionPage";
import SubscriptionType from "./SubscriptionType";
import { GoPlus } from "react-icons/go";
import SubscriptionAddForm from "./SubscriptionAddForm";
import { useTranslation } from "react-i18next";

const Subscription = () => {
  const [activeTab, setActiveTab] = useState("terms");
  const [filterType, setFilterType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const handleAddUser = () => {
    setIsModalOpen(true);
  };
  const { t } = useTranslation();
  return (
    <div className="w-full mx-auto px-6 bg-white">
      {/* Header section */}
      <div className="flex justify-between items-center mb-9 px-6">
        <h2 className="text-3xl font-bold montserrat text-[#317828]">
          {" "}
          {t("adminPannel.Subscription Type")}
        </h2>

        <div
          className="bg-[#317828] px-4 py-2 rounded-xl"
          onClick={handleAddUser}
        >
          <button className="flex items-center  gap-2  text-white  montserrat font-semibold">
            <GoPlus className="bold" /> {t("adminPannel.ADD")}
          </button>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex">
        <button
          className={`px-4 py-2 font-bold ml-4 text-[24px] ${
            activeTab === "privacy"
              ? "text-[#317828] border-b-2 border-[#242424]"
              : "text-[#317828]"
          } cursor-pointer`}
        ></button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <SubscriptionType />
      </div>
      {isModalOpen && (
        <SubscriptionAddForm
          onClose={() => setIsModalOpen(false)}
        ></SubscriptionAddForm>
      )}
    </div>
  );
};

export default Subscription;
