// src/GradeSelector.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const gradesData = [
  {
    id: 1,
    name: "1st Grade",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1744178720/Ellipse_644_pbng3m.png", // sample image
    description: "hello San, I'll suggest you the best subjects for your grade",
    subjects: [
      "English Language",
      "Mathematics",
      "Environmental Science (EVS)",
      "General Science",
      "Social Studies",
      "Moral and Civic Education",
      "Aesthetic Education",
      "Physical Education (PE)",
    ],
  },
  {
    id: 2,
    name: "2nd Grade",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1744178720/Ellipse_644_pbng3m.png",
    description: "hello San, I'll suggest you the best subjects for your grade",
    subjects: [
      "English Language",
      "Mathematics",
      "Environmental Science (EVS)",
      "General Science",
      "Social Studies",
      "Moral and Civic Education",
      "Aesthetic Education",
      "Religious Education",
    ],
  },
  {
    id: 3,
    name: "3rd Grade",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1744178720/Ellipse_644_pbng3m.png",
    description: "hello San, I'll suggest you the best subjects for your grade",
    subjects: [
      "English Language",
      "Mathematics",
      "Environmental Science (EVS)",
      "General Science",
      "Social Studies",
      "Moral and Civic Education",
      "Aesthetic Education",
      "Religious Education",
    ],
  },
  // 👉 You can add more grades here similarly...
];

export default function GradeSelector({ onGradeSelect }) {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-3xl font-bold mb-2">Hi, Tigist!</h1>
      <p className="mb-6 text-gray-600">{t("englishPractice.title")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4   ">
        {gradesData.map((grade) => (
          <button
            key={grade.id}
            onClick={() => onGradeSelect(grade)}
            className="bg-[#EAF2EA] w-[233px]  p-4 rounded-lg hover:shadow-xl shadow-lg border-[#BFD5BC] flex flex-col items-center"
          >
            <img
              src={grade.image}
              alt={grade.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="font-medium poppins text-[#222222] text-lg ">
              {grade.name}
            </span>
            <span className="font-medium poppins text-[#979797] text-base">
              Teacher
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
