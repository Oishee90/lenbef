import React from "react";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t } = useTranslation();
  return (
    <section id="Resources" className="bg-white dark:bg-gray-900 mt-28">
      <div className="container  px-6 py-10 mx-auto">
        <h1 className="text-3xl font-extrabold roboto text-center text-[#317828] lg:text-6xl dark:text-white">
          {t("faq.title")}
        </h1>
        <p className="text-[#475569] text-lg font-normal roboto mt-8 text-center mb-12">
          {t("faq.description")}
        </p>
        <div className="space-y-12 mt-20">
          {t("faq.questions", { returnObjects: true }).map((item, index) => (
            <details
              key={index}
              className="group [&_summary::-webkit-details-marker]:hidden"
              open={index === 0}
            >
              <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-[#222222] roboto font-medium">
                <h2 className="text-[20px] font-medium">{item.question}</h2>
                <svg
                  className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="rounded-md border border-gray-100 bg-gray-50 shadow-lg p-4">
                <p className="text-[#585858] roboto text-[18px]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
