import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { userData } from "../../../../data";
import { FiSearch } from "react-icons/fi";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import AddAdmin from "../../SchoolLayout/AddTeacher";
import Swal from "sweetalert2";
// import UserDetails from "./UserDetails";

const MakeAdmin = () => {
  const [subscribers, setSubscribers] = useState(userData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [selectedUser, setSelectedUser] = useState(null); // Added selectedUser state
  const itemsPerPage = 6;

  // Function to get data for the current page
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return subscribers.slice(startIndex, endIndex);
  };

  // Function to handle status change
  const handleStatusChange = (index, e) => {
    const updatedSubscribers = [...subscribers];
    updatedSubscribers[index].status = e.target.value;
    setSubscribers(updatedSubscribers);
  };

  // Handle page click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleAddUser = () => {
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
  const totalPages = Math.ceil(subscribers.length / itemsPerPage);
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto overflow-y-auto p-6 mt-3">
        <div className="flex justify-between items-center mb-9 px-6">
          <h2 className="text-3xl font-semibold montserrat text-black">
            School Admin
          </h2>
          {/* Search Bar */}

          {/* <div
            className="bg-[#1E3A8A] px-4 py-2 rounded-xl"
            onClick={handleAddUser}
          >
            <button className="flex items-center  gap-2  text-white  montserrat font-semibold">
              <GoPlus className="bold" /> Make Admin
            </button>
          </div> */}
        </div>

        <table className="min-w-full">
          <thead className="py-4 mb-5">
            <tr>
              <th className="py-4 px-6 text-lg montserrat font-semibold text-[#222222DE] text-left rounded-l-xl">
                Name
              </th>
              <th className="py-4 px-6 text-lg montserrat font-semibold text-[#222222DE] text-left">
                Email
              </th>
              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left">
                User Type
              </th>

              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left rounded-r-xl">
                Delete
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
                  {subscriber.email}
                </td>
                <td className="py-4 px-6 text-left text-[#707070] text-lg montserrat font-medium">
                  {subscriber.userType}
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
                    ? "bg-[#1E3A8A] text-white"
                    : "hover:bg-[#8ab9e9] hover:text-white"
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
      {isModalOpen && (
        <AddAdmin onClose={() => setIsModalOpen(false)}></AddAdmin>
      )}
    </div>
  );
};

export default MakeAdmin;
