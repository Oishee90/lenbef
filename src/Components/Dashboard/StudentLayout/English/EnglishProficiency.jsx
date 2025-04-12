import { useLocation, useNavigate } from "react-router-dom";
import speaker from "../../../../assets/speaker.png";
import ai from "../../../../assets/Popular.png";
import { useTranslation } from "react-i18next";
const EnglishProficiency = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { conversation = [] } = location.state || {};
  const { t } = useTranslation();
  return (
    <div className="h-full bg-white py-6 px-4 flex flex-col items-center justify-between ">
      <h2 className="text-xl font-bold text-green-700 flex items-center gap-2 mb-6  roboto ">
        {t("article.generateArticlesDesc")}
      </h2>

      <div className="w-full  p-6  space-y-4 overflow-y-auto ">
        {conversation.map((entry, index) => (
          <div key={index} className="space-y-2">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-xs bg-[#317828] text-white rounded-full px-4 py-2 shadow-md font-medium text-base roboto">
                {entry.user}
              </div>
            </div>

            {/* AI Message */}
            <div className="flex justify-start items-start gap-2">
              <div className="">
                <img src={ai} alt="" />
              </div>
              <div className="max-w-xs  text-[#222222] px-4 py-2 font-medium text-base roboto">
                {entry.ai}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-8  text-white font-semibold px-6 py-2  cursor-pointer transition justify-end"
        onClick={() => navigate("/dashboard/english")}
      >
        <img src={speaker} alt="" />
      </div>
    </div>
  );
};

export default EnglishProficiency;
