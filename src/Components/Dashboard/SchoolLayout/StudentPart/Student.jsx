import { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Swal from "sweetalert2";
import { GoPlus } from "react-icons/go";
import fakeStudents from "../../../../data";
import StudentDetails from "./StudentDetails";

const Student = () => {
  const [subscribers, setSubscribers] = useState(fakeStudents);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Search State
  const [selectedGrade, setSelectedGrade] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [selectedUser, setSelectedUser] = useState(null); // Added selectedUser state
  const [modalType, setModalType] = useState(null);
  const itemsPerPage = 6;

  // ✅ Define available grades
  const grades = [
    "All",
    "Infant",
    "Younger Toddler",
    "Preschoolers",
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
    "7th Grade",
    "8th Grade",
    "9th Grade",
    "10th Grade",
    "11th Grade",
    "12th Grade",
  ];

  // ✅ Grade Order Mapping (to sort the grades correctly)
  const gradeOrder = {
    Infant: 0,
    "Younger Toddler": 1,
    Preschoolers: 2,
    "1st Grade": 3,
    "2nd Grade": 4,
    "3rd Grade": 5,
    "4th Grade": 6,
    "5th Grade": 7,
    "6th Grade": 8,
    "7th Grade": 9,
    "8th Grade": 10,
    "9th Grade": 11,
    "10th Grade": 12,
    "11th Grade": 13,
    "12th Grade": 14,
  };

  // ✅ Filtered & Sorted Data with Pagination
  const getCurrentPageData = () => {
    // Step 1: Filter the subscribers based on search query and selected grade
    let filteredData = subscribers.filter((subscriber) => {
      const matchesGrade =
        selectedGrade === "All" || subscriber.grade === selectedGrade;
      return (
        subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        matchesGrade
      );
    });

    // Step 2: Sort the filtered data by grade
    filteredData = filteredData.sort((a, b) => {
      return gradeOrder[a.grade] - gradeOrder[b.grade];
    });

    // Step 3: Calculate the total number of pages based on filtered data
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Step 4: Paginate the filtered data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return {
      data: paginatedData,
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
    setModalType("addTeacher"); // Add Teacher Modal will show
    setIsModalOpen(true);
  };

  const handleViewUser = (userId) => {
    const selectedUser = subscribers.find(
      (subscriber) => subscriber.id === userId
    );
    setSelectedUser(selectedUser);
    setModalType("viewTeacher"); // Teacher Details Modal will show
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto overflow-y-auto p-6 mt-3">
        <div className="flex justify-between items-center mb-6 px-6">
          <h2 className="text-3xl font-semibold montserrat text-black">
            Student
          </h2>

          {/* ✅ Search & Filter */}
          <div className="flex gap-4">
            {/* Subject Filter */}
            <select
              className="border border-[#E4E4E7] px-4 py-2 rounded-lg text-lg bg-white"
              value={selectedGrade}
              onChange={(e) => {
                setSelectedGrade(e.target.value);
                setCurrentPage(1); // Reset Pagination
              }}
            >
              {grades.map((grade, index) => (
                <option key={index} value={grade}>
                  {` Sort: ${grade} `}
                </option>
              ))}
            </select>
            {/* 
            <div
              className="bg-[#1E3A8A] px-4  pt-2 pb-2 rounded-xl"
              onClick={handleAddUser}
            >
              <button className="flex items-center gap-2 text-white montserrat font-semibold">
                <GoPlus className="bold" /> Make Admin
              </button>
            </div> */}
          </div>
        </div>

        {/* ✅ Table */}
        <table className="min-w-full">
          <thead className="py-4 mb-5">
            <tr>
              <th className="py-4 px-6 text-lg font-semibold text-left montserrat">
                Name{" "}
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-left montserrat">
                Id{" "}
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-left montserrat">
                Grade
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-left montserrat">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((subscriber, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 border-b border-b-[#B9B9B9]"
              >
                <td className="py-4 px-6 text-left font-medium flex items-center gap-3 montserrat">
                  <img
                    src={subscriber.image}
                    alt={subscriber.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{subscriber.name}</span>
                </td>
                <td className="py-4 px-6 text-left text-lg text-[#707070]">
                  {subscriber.id}
                </td>
                <td className="py-4 px-6 text-left text-lg text-[#707070]">
                  {subscriber.grade}
                </td>
                <td className="py-4 px-6 text-center">
                  <AiOutlineEye
                    onClick={() => handleViewUser(subscriber.id)}
                    className="w-6 h-6 text-[#1E3A8A] cursor-pointer"
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

      {isModalOpen && selectedUser && (
        <StudentDetails
          Student={selectedUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Student;
