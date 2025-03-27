import React, { useState, useMemo } from "react";
import { FaRegEye } from "react-icons/fa6";
import RecommendationLetter from "./RecommendationLetter";

const recommendations = [
  {
    id: 1,
    title: "Recommendation | 1134",
    date: "2025/02/10",
    size: "108 KB",
    letter: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #1E3A8A;">Dear [Recipient's Name],</h2>
      <p style="font-size: 16px; line-height: 1.6;">
        Hey, it's a very good platform! I really like it. The features, usability, and overall experience are excellent.
        It has truly been a pleasure using it, and I appreciate the effort put into making it so user-friendly and efficient.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        Looking forward to exploring more and making the most of it!
      </p>
      <p style="font-size: 16px; font-weight: bold; color: #1E3A8A;">
        Best regards,<br/>
        [Your Name]
      </p>
    </div>
  `,
  },
  {
    id: 2,
    title: "Recommendation | 1254",
    date: "2025/02/10",
    size: "108 KB",
    letter: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #1E3A8A;">Dear [Recipient's Name],</h2>
      <p style="font-size: 16px; line-height: 1.6;">
        Hey, it's a very good platform! I really like it. The features, usability, and overall experience are excellent.
        It has truly been a pleasure using it, and I appreciate the effort put into making it so user-friendly and efficient.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        Looking forward to exploring more and making the most of it!
      </p>
      <p style="font-size: 16px; font-weight: bold; color: #1E3A8A;">
        Best regards,<br/>
        [Your Name]
      </p>
    </div>
  `,
  },
  {
    id: 3,
    title: "Recommendation | 1154",
    date: "2025/02/10",
    size: "108 KB",
    letter: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #1E3A8A;">Dear [Recipient's Name],</h2>
      <p style="font-size: 16px; line-height: 1.6;">
        Hey, it's a very good platform! I really like it. The features, usability, and overall experience are excellent.
        It has truly been a pleasure using it, and I appreciate the effort put into making it so user-friendly and efficient.
      </p>
      <p style="font-size: 16px; line-height: 1.6;">
        Looking forward to exploring more and making the most of it!
      </p>
      <p style="font-size: 16px; font-weight: bold; color: #1E3A8A;">
        Best regards,<br/>
        [Your Name]
      </p>
    </div>
  `,
  },
];

const RecommendationTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const itemsPerPage = 6;
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return recommendations.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const totalPages = Math.ceil(recommendations.length / itemsPerPage);

  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen">
      <h2 className="text-2xl font-semibold text-black mb-6">Recommendation</h2>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-6 p-4 text-black font-semibold text-sm">
          <div className="py-4 px-6 text-lg font-semibold text-left montserrat">
            Title
          </div>
          <div></div>
          <div></div>
          <div className="py-4 px-6 text-lg font-semibold text-left montserrat">
            Date
          </div>
          <div className="py-4 px-6 text-lg font-semibold text-left montserrat">
            File Size
          </div>
          <div className="py-4 px-6 text-lg font-semibold text-left montserrat">
            Active
          </div>
        </div>

        {currentItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 items-center px-4 py-3 border rounded-xl mb-4 mt-2 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg">
                <img
                  src="https://res.cloudinary.com/dhlgk023u/image/upload/v1742976534/Vector_hnjjsc.png"
                  alt=""
                />
              </div>
              <span className="text-gray-700 font-medium">{item.title}</span>
            </div>
            <div className="text-gray-600"></div>
            <div></div>
            <div className="text-gray-600">{item.date}</div>
            <div className="text-gray-600">{item.size}</div>
            <div className="flex">
              <FaRegEye
                className="w-5 h-5 text-gray-500 cursor-pointer"
                onClick={() => {
                  setSelectedLetter(item);
                  setIsModalOpen(true);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-gray-600 text-sm">
        <div>
          Showing data {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, recommendations.length)} of{" "}
          {recommendations.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className="px-2 py-1 rounded border text-gray-500 hover:bg-gray-100"
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === index + 1
                  ? "bg-[#1E3A8A] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            className="px-2 py-1 rounded border text-gray-500 hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* ✅ Modal */}
      {isModalOpen && selectedLetter && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xl font-semibold">{selectedLetter.title}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                ✖
              </button>
            </div>

            {/* Modal Content */}
            <RecommendationLetter letter={selectedLetter} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationTable;
