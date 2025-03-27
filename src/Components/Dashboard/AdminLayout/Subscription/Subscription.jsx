import { useState } from "react";
import SubscriptionPage from "./SubscriptionPage";
import SubscriptionType from "./SubscriptionType";
import { GoPlus } from "react-icons/go";
import SubscriptionAddForm from "./SubscriptionAddForm";

const Subscription = () => {
  const [activeTab, setActiveTab] = useState("terms");
  const [filterType, setFilterType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const handleAddUser = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="w-full mx-auto px-6 bg-white">
      {/* Header section */}
      <div className="flex justify-between items-center mb-9 px-6">
        <h2 className="text-3xl font-semibold montserrat text-black">
          Subscription Management
        </h2>

        {/* Conditional rendering based on activeTab */}
        {activeTab === "terms" ? (
          <select
            className="border border-gray-300 px-4 py-2 rounded-xl text-[#1E3A8A] font-medium"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Sort by Type</option>
            <option value="Premium">Premium</option>
            <option value="Standard">Standard</option>
            <option value="Pro">Pro</option>
          </select>
        ) : (
    
            <div
            className="bg-[#1E3A8A] px-4 py-2 rounded-xl"
            onClick={handleAddUser}
          >
            <button className="flex items-center  gap-2  text-white  montserrat font-semibold">
              <GoPlus className="bold" /> Make Admin
            </button>
          </div>
        )}
      </div>

      {/* Tab Buttons */}
      <div className="flex">
        <button
          className={`px-4 py-2 font-normal text-[24px] ${
            activeTab === "terms"
              ? "text-[#10589E] border-b-2 border-[#10589E]"
              : "text-[#242424]"
          } cursor-pointer`}
          onClick={() => setActiveTab("terms")}
        >
          Subscriber
        </button>
        <button
          className={`px-4 py-2 font-normal ml-4 text-[24px] ${
            activeTab === "privacy"
              ? "text-[#10589E] border-b-2 border-[#242424]"
              : "text-[#242424]"
          } cursor-pointer`}
          onClick={() => setActiveTab("privacy")}
        >
          Subscription Type
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "terms" && <SubscriptionPage  filterType={filterType}/>}
        {activeTab === "privacy" && <SubscriptionType />}
      </div>
      {isModalOpen && (


        <SubscriptionAddForm onClose={() => setIsModalOpen(false)}></SubscriptionAddForm>
      )}
    
    </div>
  );
};

export default Subscription;
