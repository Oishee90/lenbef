/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div
      id="Contact us"
      className="h-[800px] container mx-auto  flex items-center justify-center bg-[#317828] px-4 rounded-2xl"
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 lg:text-6xl">
          <span className="text-[#CBB702] poppins">{t("contact.title1")}</span>{" "}
          <span className="text-[#317828] poppins">{t("contact.title2")}</span>
        </h2>
        <p className="text-center text-xl text-[#317828] mb-9">
          {t("contact.subtitle")}
        </p>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder={t("contact.namePlaceholder")}
              className="w-full border border-[#317828] roboto rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#23631a] placeholder:text-[#317828]"
              required
            />
            <input
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              className="w-full border border-[#317828] roboto rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#23631a] placeholder:text-[#317828]"
              required
            />
          </div>
          <input
            type="tel"
            placeholder={t("contact.phonePlaceholder")}
            className="w-full border border-[#317828] roboto rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#23631a] placeholder:text-[#317828]"
          />
          <textarea
            placeholder={t("contact.messagePlaceholder")}
            rows="4"
            className="w-full border border-[#317828] roboto rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#23631a] placeholder:text-[#317828]"
          ></textarea>
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#CBB702] hover:bg-[#dacb48] text-white font-semibold py-2 px-6 rounded-full shadow-md roboto"
            >
              {t("contact.sendMessage")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
