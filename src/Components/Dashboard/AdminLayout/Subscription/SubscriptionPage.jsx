import { useEffect, useState } from "react";
import { PiEye } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { schoolData } from "../../../../data";
import { FiSearch } from "react-icons/fi";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import Swal from "sweetalert2";
const SubscriptionPage = ({ filterType }) => {
  const [subscribers, setSubscribers] = useState(schoolData);
  const [filteredSubscribers, setFilteredSubscribers] = useState(schoolData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ফিল্টার করার জন্য useEffect
  useEffect(() => {
    if (filterType) {
      setFilteredSubscribers(
        schoolData.filter((subscriber) => subscriber.type === filterType)
      );
    } else {
      setFilteredSubscribers(schoolData);
    }
    setCurrentPage(1); // ফিল্টার পরিবর্তনের সময় প্রথম পেজে ফিরে যাওয়া
  }, [filterType]);

  // পেজের ডাটা বের করা
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSubscribers.slice(startIndex, endIndex);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
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

  const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto overflow-y-auto  p-6 bg-white mt-7">
        <table className="min-w-full">
          <thead className="py-4 mb-5">
            <tr>
              <th className="py-4 px-6 text-lg montserrat font-semibold text-[#222222DE] text-left rounded-l-xl">
                School name
              </th>
              <th className="py-4 px-6 text-lg montserrat font-semibold text-[#222222DE] text-left">
                Email
              </th>
              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left">
                Location
              </th>
              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left">
                Type
              </th>
              <th className="py-4 px-6 montserrat text-lg font-semibold text-[#222222DE] text-left">
                Income
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
                      src={
                        subscriber.image
                          ? subscriber.image
                          : "https://res.cloudinary.com/dhlgk023u/image/upload/v1743054658/erika-fletcher-MZxqc6n9qCw-unsplash_ymngli.jpg"
                      } // Default image if sub.image is not available
                      alt={subscriber.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{subscriber.school_name}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-left text-lg montserrat font-medium text-[#707070]">
                  {subscriber.email}
                </td>
                <td className="py-4 px-6 text-left text-[#707070] text-lg montserrat font-medium">
                  {subscriber.location}
                </td>
                <td className="py-4 px-6 text-left text-[#00B087] text-lg montserrat font-medium">
                  {subscriber.type}
                </td>
                <td className="py-4 px-6 text-left text-[#707070] text-lg montserrat font-medium">
                  {subscriber.income}
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
      <div>
        {/* {subscribers.map((subscriber, index) => (
             <UserDetails
               isOpen={isModalOpen}
               onClose={() => setIsModalOpen(false)}
               subscribers={subscribers}
               subscriber={subscriber}
               index={index}
               handleStatusChange={handleStatusChange}
             ></UserDetails>
           ))} */}
      </div>
    </div>
  );
};

export default SubscriptionPage;
