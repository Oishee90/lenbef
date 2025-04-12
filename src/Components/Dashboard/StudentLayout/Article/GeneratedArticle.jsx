import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { AiOutlineExport } from "react-icons/ai";
import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";

const articleData = {
  title: "The Transformative Power of Reading Books",
  intro:
    "Reading books is a time-honored practice that has long been celebrated for its myriad benefits. From improving cognitive abilities to enhancing emotional intelligence, the act of immersing oneself in a book can profoundly impact one’s life.",
  tableOfContents: [
    "The Importance of Reading",
    {
      title: "Benefits of Reading Books",
      subItems: [
        "2.1 Cognitive Development",
        "2.2 Emotional Intelligence",
        "2.3 Stress Reduction",
      ],
    },
    {
      title: "Different Genres of Literature",
      subItems: [
        "3.1 Fiction",
        "3.2 Non-Fiction",
        "3.3 Self-Help",
        "3.4 Historical Fiction",
      ],
    },
    "How to Develop a Reading Habit",
    "The Role of Book Clubs",
    "Reading in a Digital Age",
    "Children and Reading",
    "Challenges of Reading",
    "Future of Books and Reading",
    "Conclusion",
  ],
};

const GeneratedArticle = () => {
  const navigate = useNavigate();
  const [showExportOptions, setShowExportOptions] = useState(false);

  const dropdownRef = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowExportOptions(false); // ✅ this matches your dropdown toggle
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getFullContent = () => {
    let content = `<h1>${articleData.title}</h1><p>${articleData.intro}</p><h2>Table of Contents</h2><ul>`;
    articleData.tableOfContents.forEach((item) => {
      if (typeof item === "string") {
        content += `<li>${item}</li>`;
      } else {
        content += `<li>${item.title}<ul>`;
        item.subItems.forEach((sub) => {
          content += `<li>${sub}</li>`;
        });
        content += `</ul></li>`;
      }
    });
    content += "</ul>";
    return content;
  };

  const handleCopy = () => {
    const textContent =
      `${articleData.title}\n\n${articleData.intro}\n\nTable of Contents:\n` +
      articleData.tableOfContents
        .map((item, index) => {
          if (typeof item === "string") return `${index + 1}. ${item}`;
          return `${index + 1}. ${item.title}\n${item.subItems
            .map((sub) => `   • ${sub}`)
            .join("\n")}`;
        })
        .join("\n");

    navigator.clipboard
      .writeText(textContent)
      .then(() => alert("Article copied to clipboard!"));
  };

  const handlePrint = () => {
    const value = getFullContent();
    const printWindow = window.open("", "", "height=500,width=1000");
    printWindow.document.write("<html><head><title>Print</title>");
    printWindow.document.write(
      "<style>body { font-family: Arial; padding: 20px; } ul { margin-left: 20px; }</style>"
    );
    printWindow.document.write("</head><body>");
    printWindow.document.write(`<div class="conversation">${value}</div>`);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  const exportAsDocument = () => {
    const value = getFullContent();
    const div = document.createElement("div");
    div.innerHTML = value;
    const plainText = div.innerText || div.textContent;

    const blob = new Blob([plainText], { type: "application/msword" });
    saveAs(blob, "article.docx");
  };

  return (
    <div className=" mx-auto px-4 py-8 bg-white min-h-screen relative poppins ">
      {/* Top Buttons */}
      <div className="flex justify-between items-center mb-6 border-b border-b-[#BFD5BC] pb-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-black border border-[#317828] py-2 px-6 rounded-2xl "
        >
          <FaArrowLeft /> {t("articleActions.back")}
        </button>

        <div className="flex gap-4 relative">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-sm text-[#222222] hover:underline"
          >
            <FiCopy /> {t("articleActions.copy")}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowExportOptions((prev) => !prev)}
              className="flex items-center gap-1 text-sm text-[#222222]  hover:underline"
            >
              <AiOutlineExport /> {t("articleActions.export")}
            </button>

            {showExportOptions && (
              <div
                ref={dropdownRef}
                className="absolute top-full right-0 bg-white border shadow-lg z-10 rounded-md text-sm"
              >
                <button
                  onClick={() => {
                    exportAsDocument();
                    setShowExportOptions(false);
                  }}
                  className="block px-[5rem]  py-2 hover:bg-gray-100 w-full text-left whitespace-nowrap"
                >
                  {t("articleActions.exportAsDocx")}
                </button>
                <button
                  onClick={() => {
                    handlePrint();
                    setShowExportOptions(false);
                  }}
                  className="block px-[5rem] py-2 hover:bg-gray-100 w-full text-left whitespace-nowrap"
                >
                  {t("articleActions.exportAsPdf")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto w-1/2">
        {/* Article Title */}
        <h1 className="text-3xl font-bold mb-4">{articleData.title}</h1>

        {/* Article Introduction */}
        <p className="text-gray-700 mb-6">{articleData.intro}</p>

        {/* Table of Contents */}
        <h2 className="font-semibold mb-2">Table of Contents</h2>
        <ol className="list-decimal ml-5 space-y-1 text-gray-800">
          {articleData.tableOfContents.map((item, index) =>
            typeof item === "string" ? (
              <li key={index}>{item}</li>
            ) : (
              <li key={index}>
                {item.title}
                <ul className="list-disc ml-6 mt-1 space-y-1">
                  {item.subItems.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default GeneratedArticle;
