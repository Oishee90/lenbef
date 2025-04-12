import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Artticle = () => {
  const [language, setLanguage] = useState("");
  const [keywords, setKeywords] = useState("");
  const [title, setTitle] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGenerate = () => {
    navigate("/dashboard/generateArticle");
  };

  // language options from translation file
  const languageOptions = t("article.languageOptions", { returnObjects: true });

  return (
    <div className="h-full flex flex-col items-center bg-white px-4 poppins">
      <h1 className="text-[24px] font-semibold text-center mb-1 text-[#222222] mt-7">
        {t("article.generateArticles")}
      </h1>
      <p className="text-lg text-[#222222] mb-6 text-center mt-2">
        {t("article.generateArticlesDesc")}
      </p>

      <div className="w-full max-w-md space-y-6">
        {/* Language */}
        <div>
          <label className="block text-sm font-normal text-[#2B3241] mb-1 poppins">
            {t("article.language")}
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-[#317828] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#317828]"
          >
            {languageOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="text-right text-xs text-gray-400 mt-1">
            {language.length}/500
          </p>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-sm font-normal text-[#2B3241] mb-1 poppins">
            {t("article.keywords")}
          </label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full border border-[#317828] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#317828]"
          />
          <p className="text-right text-xs text-gray-400 mt-1">
            {keywords.length}/500
          </p>
        </div>

        {/* Article Title */}
        <div>
          <label className="block text-sm font-normal text-[#2B3241] mb-1 poppins">
            {t("article.articleTitle")}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-[#317828] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#317828]"
          />
          <p className="text-right text-xs text-gray-400 mt-1">
            {title.length}/500
          </p>
        </div>

        {/* Submit Button */}
        <div onClick={handleGenerate} className="flex w-full justify-center">
          <button className="w-1/2 justify-center bg-gradient-to-r from-[#317828] to-[#5BDE4A] text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#317828]">
            {t("article.writeArticle")} <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artticle;
