// PricingPlan.jsx
import React, { useMemo } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { useTranslation } from "react-i18next";

const PricingPlan = () => {
  const { t } = useTranslation();

  const plans = useMemo(
    () => [
      {
        name: t("Pricing.plan_free"),
        price: t("Pricing.price_free"),
        features: [
          { label: t("Pricing.feature_kpi"), included: true },
          { label: t("Pricing.feature_ai_assistant"), included: true },
          { label: t("Pricing.feature_chatbot"), included: true },
        ],
        highlightColor: "bg-[#F3EEC2]",
        buttonColor: "bg-[#CBB702]",
        labelColor: "text-[#CBB702]",
        textColor: "text-[#848484]",
      },
      {
        name: t("Pricing.plan_basic"),
        price: t("Pricing.price_basic"),
        features: [
          { label: t("Pricing.feature_kpi"), included: true },
          { label: t("Pricing.feature_ai_assistant"), included: true },
          { label: t("Pricing.feature_chatbot"), included: true },
        ],
        highlightColor: "bg-[#E5EFFF]",
        buttonColor: "bg-green-600 hover:bg-green-700",
        labelColor: "text-white",
        textColor: "text-white",
        isHighlighted: true,
      },
      {
        name: t("Pricing.plan_standard"),
        price: t("Pricing.price_standard"),
        features: [
          { label: t("Pricing.feature_kpi"), included: true },
          { label: t("Pricing.feature_ai_assistant"), included: true },
          { label: t("Pricing.feature_chatbot"), included: true },
        ],
        highlightColor: "bg-[#E5EFFF]",
        buttonColor: "bg-green-600 hover:bg-green-700",
        labelColor: "text-[#317828]",
        textColor: "text-[#848484]",
      },
      {
        name: t("Pricing.plan_premium"),
        price: t("Pricing.price_premium"),
        features: [
          { label: t("Pricing.feature_kpi"), included: true },
          { label: t("Pricing.feature_ai_assistant"), included: true },
          { label: t("Pricing.feature_chatbot"), included: true },
        ],
        highlightColor: "bg-[#E5EFFF]",
        buttonColor: "bg-green-600 hover:bg-green-700",
        labelColor: "text-[#317828]",
        textColor: "text-[#848484]",
      },
    ],
    [t]
  );

  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold text-green-700">
        {t("Pricing.pricing_title")}{" "}
        <span className="text-yellow-500">& {t("Pricing.plan_label")}</span>
      </h2>
      <p className="text-gray-500 mt-2">{t("Pricing.pricing_subtitle")}</p>
      <div className="w-16 h-1 bg-green-700 mx-auto my-4 rounded-full mb-24"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20 mt-10">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-[3.5rem] flex flex-col justify-between border ${
              plan.isHighlighted
                ? "border-4 border-[#317828] shadow-2xl lg:h-[600px] relative lg:top-[-40px]"
                : "lg:h-[487.56px]"
            }`}
          >
            <div>
              <div
                className={`${
                  plan.isHighlighted
                    ? "rounded-t-[2.5rem] bg-[#317828] text-white pt-6 pb-6 px-6"
                    : "pt-6 pb-6 px-6"
                }`}
              >
                <h3 className={`${plan.labelColor} text-lg font-normal`}>
                  {plan.name}
                </h3>
                <p className={`text-3xl font-bold mt-2 ${plan.textColor}`}>
                  {plan.price}
                </p>
                <p className="text-sm text-[#B0B0B0] mt-4">{t("per_month")}</p>
              </div>

              <ul className="text-left space-y-2 mb-4 p-6 text-[#737373] roboto">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <IoIosCheckboxOutline className="text-green-600" />
                    ) : (
                      "❌"
                    )}
                    {feature.label}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`${plan.highlightColor} p-4 rounded-b-[3.5rem] mt-4 px-14`}
            >
              <p className="text-xs text-[#737373]">
                {t("Pricing.plan_description")}
              </p>
              <button
                className={`mt-4 w-full text-white py-2 rounded-full font-normal ${plan.buttonColor}`}
              >
                {t("Pricing.choose_plan")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlan;
