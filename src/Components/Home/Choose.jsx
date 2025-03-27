import { useEffect, useState } from "react";
import checkmark from "../../assets/checkmark.png";
import checkmark2 from "../../assets/check-mark2.png";
import chooseplan from "../../assets/chooseplan.png";
import { useLocation } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic",
    use: "Individual Use",
    price: 15,
    features: ["1x Teacher"],
    additional: "N/A",
  },
  {
    name: "Standard",
    use: "Tutor Use",
    price: 20,
    features: ["2x Teacher"],
    additional: "$5 Per Extra Teacher",
  },
  {
    name: "Premium",
    use: "Daycare Use",
    price: 50,
    features: ["Up to 10 Teachers"],
    additional: "$5 Per Extra Teacher",
  },
  {
    name: "Pro",
    use: "School Use",
    price: 100,
    features: ["Up to 15 Teachers"],
    additional: "$5 Per Extra Teacher",
  },
  {
    name: "Enterprise",
    use: "High School Use",
    price: 180,
    features: ["Up to 50 Teachers"],
    additional: "$5 Per Extra Teacher",
  },
];

export default function PricingPlan() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div
      id="choose"
      className="flex flex-col items-center pt-10 lg:py-12 container mx-auto p-2   "
    >
      <div className="relative">
        <h2 className="text-2xl text-center font-semibold text-[#1E3A8A] montserrat lg:text-[45px] leading-[100%]">
          Choose Your Plan
        </h2>
        <div className=" absolute lg:top-[-196%] lg:left-[-50%] hidden lg:block">
          <img src={chooseplan} alt="" />
        </div>
      </div>

      <div className="mt-4 flex items-center bg-[#D3E7F0] rounded-lg shadow  lg:mt-8">
        <button
          className={`sm:px-6 sm:py-4 p-2 rounded-md text-lg  montserrat ${
            billingCycle === "monthly"
              ? "bg-[#FFFFFF] text-[#1E3A8A] font-semibold "
              : "text-[#A6A6A6]"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`sm:px-6 sm:py-4 p-2 rounded-md text-lg   montserrat ${
            billingCycle === "yearly"
              ? "bg-[#FFFFFF] text-[#1E3A8A] font-semibold "
              : "text-[#A6A6A6]"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly (Save 2.5%)
        </button>
      </div>
      <p className=" text-gray-600 text-center max-w-md mt-6">
        Subscribers get early access to new features, discounts, and priority
        customer support.
      </p>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full ">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-xl  ${
              index === 2
                ? "bg-gradient-to-b from-[#1E3A8A]   to-[#080F24] rounded-2xl shadow-xl shadow-gray-700  relative lg:top-[-8%] lg:h-[588px] text-white "
                : "bg-white text-gray-900 lg:h-[518px]"
            }`}
          >
            <h3 className="text-[12px]  p-6  font-semibold text-center  montserrat">
              {plan.name}
            </h3>
            <p className="text-sm mt-10  px-6  montserrat font-semibold  leading-[100%]">
              {plan.use}
            </p>
            <p className="text-[28.09px]  px-6  montserrat font-semibold mt-4">
              $
              {billingCycle === "monthly"
                ? plan.price
                : (plan.price * 12 * 0.975).toFixed(2)}{" "}
              <span className="text-[11.24px] text-[#EEEEEE] font-normal">
                {" "}
                /month
              </span>
            </p>
            <div
              className={`border-[0.7px] border-dashed  w-full mt-8 ${
                index === 2 ? "border-[#FFFFFF] " : "border-[#AAAAAA]"
              }`}
            ></div>
            <div>
              <p
                className={`font-bold px-6 text-[10.53px] mt-8 kumbh-sans ${
                  index === 2 ? "text-white " : "text-[#A6A6A6]"
                }`}
              >
                Feature
              </p>
            </div>
            <div className=" space-y-2  p-6 ">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 space-x-2 kumbh-sans font-bold text-sm  ${
                    index === 2 ? "text-white " : "text-[#667085]"
                  }`}
                >
                  <img
                    src={index === 2 ? checkmark2 : checkmark}
                    alt="feature-icon"
                  />{" "}
                  {feature}
                </li>
              ))}
            </div>
            <div>
              <p
                className={`font-bold px-6 text-[10.53px] kumbh-sans ${
                  index === 2 ? "text-white " : "text-[#A6A6A6]"
                }`}
              >
                Additional Users
              </p>
            </div>
            <div className=" space-y-2  p-2 px-6 ">
              <li
                className={`flex items-center gap-2 space-x-2 kumbh-sans font-bold text-sm  ${
                  index === 2 ? "text-white " : "text-[#667085]"
                }`}
              >
                <img
                  src={index === 2 ? checkmark2 : checkmark}
                  alt="feature-icon"
                />
                {plan.additional}
              </li>
            </div>
            <div className={`  ${index === 2 ? "p-6 " : "p-6"}`}>
              <button
                className={`mt-6 w-full  kumbh-sans   py-2 rounded-xl ${
                  index === 2
                    ? "bg-[#FFFFFF] text-[#000000] "
                    : "bg-[#1E3A8A] text-white"
                }`}
              >
                Choose
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
