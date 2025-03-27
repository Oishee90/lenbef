import { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Swal from "sweetalert2";
import { fakeSubscribers } from "../../../data";
import { GoPlus } from "react-icons/go";
import AddAdmin from "./AddTeacher";
import TeacherDetails from "./TeacherDetails";
import AddTeacher from "./AddTeacher";

const SchoolDashboard = () => {
  const [subscribers, setSubscribers] = useState(fakeSubscribers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Search State
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [selectedUser, setSelectedUser] = useState(null); // Added selectedUser state
  const [modalType, setModalType] = useState(null);
  const itemsPerPage = 6;

  // ✅ Subject list dynamically generate
  const subjects = [
    "All",
    ...new Set(fakeSubscribers.map((sub) => sub.subject)),
  ];

  // ✅ Filtered & Sorted Data with Pagination
  const getCurrentPageData = () => {
    let filteredData = subscribers
      .filter(
        (subscriber) =>
          subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (selectedSubject === "All" || subscriber.subject === selectedSubject)
      )
      .sort((a, b) => a.name.localeCompare(b.name)); // Alphabetically sorting

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Pagination calculation
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
      data: filteredData.slice(startIndex, endIndex),
      totalPages,
    };
  };

  const { data: currentPageData, totalPages } = getCurrentPageData();

  // ✅ Handle delete user
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
  const handleAddUser = () => {
    setModalType("addTeacher"); // Add Teacher Modal দেখাবে
    setIsModalOpen(true);
  };

  const handleViewUser = (userId) => {
    const selectedUser = subscribers.find(
      (subscriber) => subscriber.id === userId
    );
    setSelectedUser(selectedUser);
    setModalType("viewTeacher"); // Teacher Details Modal দেখাবে
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto overflow-y-auto p-6 mt-3">
        <div className="flex justify-between items-center mb-6 px-6">
          <h2 className="text-3xl font-semibold montserrat text-black">
            Teacher
          </h2>

          {/* ✅ Search & Filter */}
          <div className="flex gap-4">
            {/* Search Bar */}
            {/* <div className="relative">
              <FiSearch className="absolute top-3 left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search by name..."
                className="border border-[#E4E4E7] px-4 pl-10 py-2 rounded-full text-lg bg-white"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset Pagination
                }}
              />
            </div> */}

            {/* Subject Filter */}
            <select
              className="border border-[#E4E4E7] px-4 py-2 rounded-full text-lg bg-white"
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setCurrentPage(1); // Reset Pagination
              }}
            >
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <div
              className="bg-[#1E3A8A] px-4  pt-2 pb-2 rounded-xl"
              onClick={handleAddUser}
            >
              <button className="flex items-center  gap-2  text-white  montserrat font-semibold">
                <GoPlus className="bold" /> Add Teacher
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Table */}
        <table className="min-w-full">
          <thead className="py-4 mb-5">
            <tr>
              <th className="py-4 px-6 text-lg font-semibold text-left">
                Name
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-left">
                Designation
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-left">
                Email
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-left">
                Subject
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-left">
                View
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((subscriber, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 border-b border-b-[#B9B9B9]"
              >
                <td className="py-4 px-6 text-left font-medium flex items-center gap-3">
                  <img
                    src={subscriber.image}
                    alt={subscriber.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{subscriber.name}</span>
                </td>
                <td className="py-4 px-6 text-left text-lg text-[#707070]">
                  {subscriber.designation}
                </td>
                <td className="py-4 px-6 text-left text-[#707070] text-lg">
                  {subscriber.email}
                </td>
                <td className="py-4 px-6 text-left text-[#707070] text-lg">
                  {subscriber.subject}
                </td>
                <td className="py-4 px-6 text-center">
                  <AiOutlineEye
                    onClick={() => handleViewUser(subscriber.id)}
                    className="w-6 h-6 text-[#1E3A8A] cursor-pointer"
                  />
                </td>
                <td className="py-4 px-6 text-center">
                  <AiOutlineDelete
                    onClick={() => handleDeleteUser(subscriber.id)}
                    className="w-6 h-6 text-red-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ Pagination Controls */}
        <div className="mt-7 flex items-center justify-end">
          <div className="flex">
            <button
              className={`px-4 py-2 mx-1 border border-[#67676780] rounded-md ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <GrFormPrevious />
            </button>

            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 mx-1 border border-[#67676780] rounded-md ${
                  currentPage === page + 1
                    ? "bg-[#1E3A8A] text-white"
                    : "hover:bg-[#8ab9e9] hover:text-white"
                }`}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </button>
            ))}

            <button
              className={`px-4 py-2 mx-1 border border-[#67676780] rounded-md ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              disabled={currentPage === totalPages}
            >
              <GrFormNext />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && modalType === "addTeacher" && (
        <AddTeacher onClose={() => setIsModalOpen(false)} />
      )}

      {isModalOpen && modalType === "viewTeacher" && selectedUser && (
        <TeacherDetails
          teacher={selectedUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SchoolDashboard;
