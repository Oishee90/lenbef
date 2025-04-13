import { useEffect, useRef, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { userData } from "../../../../data";
import { FiSearch } from "react-icons/fi";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import UserDetails from "./UserDetails";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
const User = () => {
  const [subscribers, setSubscribers] = useState(userData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search State
  const [isOpen, setIsOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Sort by Type");

  const [selectedUser, setSelectedUser] = useState(null); // Added selectedUser state
  const itemsPerPage = 6;
  const [selected, setSelected] = useState("Sort by Grade");

  const dropdownRef = useRef(null);
  const uniqueGrades = [...new Set(userData.map((user) => user.grade))];
  const uniqueTypes = [...new Set(userData.map((user) => user.type))];
  const handleSelect = (grade) => {
    setSelected(`Grade ${grade}`);
    setIsOpen(false);
    const filtered = userData.filter((user) => user.grade === grade);
    setSubscribers(filtered);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelectedType(false); // ✅ this matches your dropdown toggle
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Function to get filtered data based on search query
  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to get data for the current page
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSubscribers.slice(startIndex, endIndex);
  };

  // Handle page click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Handle "View" button click
  const handleViewUser = (userId) => {
    const selectedUser = subscribers.find(
      (subscriber) => subscriber.id === userId
    );
    setSelectedUser(selectedUser);
    setIsModalOpen(true);
  };
  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setSubscribers(subscribers.filter((user) => user.id !== userId));

        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };
  // Get the total number of pages
  const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
  const handleSelectType = (type) => {
    setSelectedType(`Type: ${type}`);
    setIsTypeOpen(false);
    const filtered = userData.filter((user) => user.type === type);
    setSubscribers(filtered);
    setCurrentPage(1); // if you are paginating
  };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto overflow-y-auto p-6 mt-3">
        <div className="flex justify-between items-center mb-9 px-6">
          <h2 className="text-3xl font-semibold montserrat text-black">
            {" "}
            {t("adminPannel.user")}
          </h2>
          {/* Search Bar */}

          {/* Search Icon */}

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6">
            {/* Search Field */}
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder=" "
                className="border border-[#E4E4E7] px-6 py-2 rounded-full text-lg w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery === "" && (
                <h1 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-base flex items-center gap-3 pointer-events-none montserrat">
                  <FiSearch /> {t("adminPannel.Searchbyusername")}..
                </h1>
              )}
            </div>

            {/* Sort by Grade */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex justify-between w-48 rounded-2xl  border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {selected}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isOpen && (
                <div className="origin-top-right absolute z-10 mt-2 w-48 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5  max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  <div className="py-1">
                    {uniqueGrades.map((grade, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelect(grade)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#2bb642] w-full text-left"
                      >
                        {grade}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setSelected("Sort by Grade");
                        setIsOpen(false);
                        setSubscribers(userData); // reset filter
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#2bb642] w-full text-left"
                    >
                      All
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sort by Type */}
            <div className="relative inline-block text-left ml-4">
              <div>
                <button
                  onClick={() => setIsTypeOpen(!isTypeOpen)}
                  type="button"
                  className="inline-flex justify-between w-48 rounded-2xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:text-white hover:bg-[#2bb642]"
                >
                  {selectedType}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isTypeOpen && (
                <div className="origin-top-right absolute z-10 mt-2 w-48 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  <div className="">
                    {uniqueTypes.map((type, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectType(type)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#2bb642] w-full text-left"
                      >
                        {type}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setSelectedType("Sort by Type");
                        setIsTypeOpen(false);
                        setSubscribers(userData); // reset filter
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#2bb642] w-full text-left"
                    >
                      All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <table className="min-w-full">
          <thead className="py-4 mb-5">
            <tr>
              <th className="py-4 px-6 text-lg montserrat font-semibold text-[#222222DE] text-left rounded-l-xl">
                {t("adminPannel.name")}
              </th>
              <th className="py-4 px-6 text-lg montserrat font-semibold text-[#222222DE] text-left">
                {t("adminPannel.SchoolName")}
              </th>
              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left">
                {t("adminPannel.Grade")}
              </th>
              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left">
                {t("adminPannel.Type")}
              </th>

              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left">
                {t("adminPannel.View")}
              </th>
              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left rounded-r-xl">
                {t("adminPannel.Delete")}
              </th>
            </tr>
          </thead>
          <tbody>
            {getCurrentPageData().map((subscriber, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 border-b border-b-[#B9B9B9]"
              >
                <td className="py-4 px-6 text-left text-[#000000] text-lg montserrat font-medium">
                  <div className="flex items-center gap-3">
                    <img
                      src={subscriber.image}
                      alt={subscriber.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{subscriber.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-left text-lg montserrat font-medium text-[#707070]">
                  {subscriber.school}
                </td>
                <td className="py-4 px-6 text-left text-[#707070] text-lg montserrat font-medium">
                  {subscriber.grade}
                </td>
                <td className="py-4 px-6 text-left text-[#2bb642] text-lg montserrat font-medium">
                  {subscriber.type}
                </td>

                <td className="py-4 px-6 text-center">
                  <AiOutlineEye
                    className="w-[24px] h-[24px] text-[#000000] cursor-pointer"
                    onClick={() => handleViewUser(subscriber.id)} // Trigger view on "View" button click
                  />
                </td>

                <td className="py-4 px-6 text-center">
                  <AiOutlineDelete
                    onClick={() => handleDeleteUser(subscriber.id)}
                    className="w-[24px] h-[24px] text-red-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="mt-7 flex items-center justify-end">
          <div className="flex">
            <button
              className={`px-4 py-2 font-medium border border-[#67676780] mx-1 text-[#000000] bg-white rounded-md ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              onClick={() =>
                currentPage > 1 && handlePageClick(currentPage - 1)
              }
              disabled={currentPage === 1}
            >
              <GrFormPrevious />
            </button>

            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 mx-1 font-medium border border-[#67676780] text-[#000000] rounded-md ${
                  currentPage === page + 1
                    ? "bg-[#317828] text-white"
                    : "hover:bg-[#a0e98a] hover:text-white"
                }`}
                onClick={() => handlePageClick(page + 1)}
              >
                {page + 1}
              </button>
            ))}

            <button
              className={`px-4 py-2 mx-1 font-medium border border-[#67676780] text-[#000000] rounded-md ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              onClick={() =>
                currentPage < totalPages && handlePageClick(currentPage + 1)
              }
              disabled={currentPage === totalPages}
            >
              <GrFormNext />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default User;
