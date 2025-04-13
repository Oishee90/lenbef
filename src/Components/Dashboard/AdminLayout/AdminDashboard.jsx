/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 70 },
  { name: "Feb", value: 90 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 60 },
  { name: "May", value: 40 },
  { name: "Jun", value: 50 },
  { name: "Jul", value: 90 },
  { name: "Aug", value: 20 },
  { name: "Sep", value: 80 },
  { name: "Oct", value: 90 },
  { name: "Nov", value: 70 },
  { name: "Dec", value: 40 },
];

const subscribers = [
  {
    school: "Pittsburgh Public Schools",
    email: "bockleboy@att.com",
    location: "Pittsburgh, PA",
    type: "Premium",
    income: "$20",
  },
  {
    school: "Upper Darby School",
    email: "csilvers@verizon.com",
    location: "Upper Darby, PA",
    type: "Free",
    income: "$00",
  },
  {
    school: "Central Bucks School",
    email: "qamaha@mail.com",
    location: "Doylestown, PA",
    type: "Free",
    income: "$00",
  },
];

const AdminDashboard = () => {
  const subscriberGrowthData = {
    2022: [
      { name: "Jan", value: 70 },
      { name: "Feb", value: 90 },
      { name: "Mar", value: 30 },
      { name: "Apr", value: 60 },
      { name: "May", value: 40 },
      { name: "Jun", value: 50 },
      { name: "Jul", value: 90 },
      { name: "Aug", value: 20 },
      { name: "Sep", value: 80 },
      { name: "Oct", value: 90 },
      { name: "Nov", value: 70 },
      { name: "Dec", value: 40 },
    ],
    2023: [
      { name: "Jan", value: 80 },
      { name: "Feb", value: 100 },
      { name: "Mar", value: 120 },
      { name: "Apr", value: 95 },
      { name: "May", value: 150 },
      { name: "Jun", value: 170 },
      { name: "Jul", value: 180 },
      { name: "Aug", value: 130 },
      { name: "Sep", value: 140 },
      { name: "Oct", value: 160 },
      { name: "Nov", value: 190 },
      { name: "Dec", value: 210 },
    ],
    2024: [
      { name: "Jan", value: 60 },
      { name: "Feb", value: 75 },
      { name: "Mar", value: 85 },
      { name: "Apr", value: 100 },
      { name: "May", value: 95 },
      { name: "Jun", value: 110 },
      { name: "Jul", value: 125 },
      { name: "Aug", value: 90 },
      { name: "Sep", value: 115 },
      { name: "Oct", value: 130 },
      { name: "Nov", value: 140 },
      { name: "Dec", value: 150 },
    ],
  };
  const UserGrowthData = {
    2022: [
      { name: "Jan", value: 70 },
      { name: "Feb", value: 90 },
      { name: "Mar", value: 30 },
      { name: "Apr", value: 60 },
      { name: "May", value: 40 },
      { name: "Jun", value: 50 },
      { name: "Jul", value: 90 },
      { name: "Aug", value: 20 },
      { name: "Sep", value: 80 },
      { name: "Oct", value: 90 },
      { name: "Nov", value: 70 },
      { name: "Dec", value: 40 },
    ],
    2023: [
      { name: "Jan", value: 80 },
      { name: "Feb", value: 100 },
      { name: "Mar", value: 120 },
      { name: "Apr", value: 95 },
      { name: "May", value: 150 },
      { name: "Jun", value: 170 },
      { name: "Jul", value: 180 },
      { name: "Aug", value: 130 },
      { name: "Sep", value: 140 },
      { name: "Oct", value: 160 },
      { name: "Nov", value: 190 },
      { name: "Dec", value: 210 },
    ],
    2024: [
      { name: "Jan", value: 60 },
      { name: "Feb", value: 75 },
      { name: "Mar", value: 85 },
      { name: "Apr", value: 100 },
      { name: "May", value: 95 },
      { name: "Jun", value: 110 },
      { name: "Jul", value: 125 },
      { name: "Aug", value: 90 },
      { name: "Sep", value: 115 },
      { name: "Oct", value: 130 },
      { name: "Nov", value: 140 },
      { name: "Dec", value: 150 },
    ],
  };
  const IncopmeData = {
    2022: [
      { name: "Jan", value: 70 },
      { name: "Feb", value: 90 },
      { name: "Mar", value: 30 },
      { name: "Apr", value: 60 },
      { name: "May", value: 40 },
      { name: "Jun", value: 50 },
      { name: "Jul", value: 90 },
      { name: "Aug", value: 20 },
      { name: "Sep", value: 80 },
      { name: "Oct", value: 90 },
      { name: "Nov", value: 70 },
      { name: "Dec", value: 40 },
    ],
    2023: [
      { name: "Jan", value: 80 },
      { name: "Feb", value: 100 },
      { name: "Mar", value: 120 },
      { name: "Apr", value: 95 },
      { name: "May", value: 150 },
      { name: "Jun", value: 170 },
      { name: "Jul", value: 180 },
      { name: "Aug", value: 130 },
      { name: "Sep", value: 140 },
      { name: "Oct", value: 160 },
      { name: "Nov", value: 190 },
      { name: "Dec", value: 210 },
    ],
    2024: [
      { name: "Jan", value: 60 },
      { name: "Feb", value: 75 },
      { name: "Mar", value: 85 },
      { name: "Apr", value: 100 },
      { name: "May", value: 95 },
      { name: "Jun", value: 110 },
      { name: "Jul", value: 125 },
      { name: "Aug", value: 90 },
      { name: "Sep", value: 115 },
      { name: "Oct", value: 130 },
      { name: "Nov", value: 140 },
      { name: "Dec", value: 150 },
    ],
  };

  const years = Object.keys(subscriberGrowthData);
  const years2 = Object.keys(UserGrowthData);
  const years3 = Object.keys(IncopmeData);

  const [selectedYear, setSelectedYear] = useState(2023); // Default to 2023
  const [chartData, setChartData] = useState(
    subscriberGrowthData[selectedYear]
  );
  const [selectedUserYear, setSelectedUserYear] = useState(2023); // Default to 2023
  const [userData, setUserData] = useState(UserGrowthData[selectedYear]);
  const [selectedIncomeYear, setSelectedIncomeYear] = useState(2023); // Default to 2023
  const [incomeData, setincomeData] = useState(IncopmeData[selectedIncomeYear]);

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    setSelectedYear(year);
    setChartData(subscriberGrowthData[year]); // Correct data assignment
  };

  const handleUserYearChange = (e) => {
    const year = parseInt(e.target.value);
    setSelectedUserYear(year);
    setUserData(UserGrowthData[year]); // Update chart data based on selected year
  };
  const handleincomeYearChange = (e) => {
    const year = parseInt(e.target.value);
    setSelectedIncomeYear(year);
    setincomeData(IncopmeData[year]); // Update chart data based on selected year
  };
  const { t } = useTranslation();

  return (
    <div className="p-6 space-y-6 roboto">
      <h2 className="text-base roboto font-bold"> {t("adminPannel.dash")}</h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="p-6 text-center bg-[#EAF2EA] border rounded-xl shadow-xl">
          <h3 className="text-xl font-normal text-[#000000] roboto">
            {t("adminPannel.TotalUser")}
          </h3>
          <p className="font-semibold text-[#1C1C1C] text-4xl mt-5">7,265</p>
        </div>
        <div className="p-6 text-center bg-[#EAF2EA] border rounded-xl shadow-xl">
          <h3 className="text-xl font-normal text-[#000000] roboto">
            {t("adminPannel.Subscriber")}
          </h3>
          <p className="font-semibold text-[#1C1C1C] text-4xl mt-5">3,671</p>
        </div>
        <div className="p-6 text-center  bg-[#EAF2EA] border rounded-xl shadow-xl">
          <h3 className="text-xl font-normal text-[#000000] roboto">
            {t("adminPannel.NewUSers")}
          </h3>
          <p className="font-semibold text-[#1C1C1C] text-4xl mt-5">156</p>
        </div>
        <div className="p-6 text-center bg-[#EAF2EA] border rounded-xl shadow-xl">
          <h3 className="text-xl font-normal text-[#000000] roboto">
            {t("adminPannel.ActiveUser")}
          </h3>
          <p className="font-semibold text-[#1C1C1C] text-4xl mt-5">2.318</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold mb-4">
              {" "}
              {t("adminPannel.userGrowth")}
            </h3>
            <div className="relative w-fit bg-[#F8F8F8] rounded-lg flex items-center px-4 py-2 border border-[#E2E2E2]">
              <select
                value={selectedUserYear}
                onChange={handleUserYearChange}
                className="bg-[#F8F8F8] text-[#595D62] text-sm pl-2 pr-6 py-1 cursor-pointer outline-none appearance-none"
              >
                {years2.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <IoChevronDownOutline className="absolute right-2 text-[#000000] w-4 h-4 pointer-events-none" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={userData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                fill="#BFD5BC"
                stroke="#317828"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {" "}
              {t("adminPannel.subscriberGrowth")}
            </h3>
            <div className="relative w-fit bg-[#F8F8F8] rounded-lg flex items-center px-4 py-2 border border-[#E2E2E2]">
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="bg-[#F8F8F8] text-[#595D62] text-sm pl-2 pr-6 py-1 cursor-pointer outline-none appearance-none"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <IoChevronDownOutline className="absolute right-2 text-[#000000] w-4 h-4 pointer-events-none" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#317828" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="p-4 border rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold mb-4">
            {" "}
            {t("adminPannel.incomeReport")}
          </h3>
          <div className="relative w-fit bg-[#F8F8F8] rounded-lg flex items-center px-4 py-2 border border-[#E2E2E2]">
            <select
              value={selectedIncomeYear}
              onChange={handleincomeYearChange}
              className="bg-[#F8F8F8] text-[#595D62] text-sm pl-2 pr-6 py-1 cursor-pointer outline-none appearance-none"
            >
              {years3.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <IoChevronDownOutline className="absolute right-2 text-[#000000] w-4 h-4 pointer-events-none" />
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={incomeData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              fill="#BFD5BC"
              stroke="#317828"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 border rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-3">
          {" "}
          {t("adminPannel.subscriber")}
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-[#317828] roboto text-xl">
                {" "}
                {t("adminPannel.SchoolName")}
              </th>
              <th className="p-2 text-[#317828] roboto text-xl">
                {" "}
                {t("adminPannel.Email")}
              </th>
              <th className="p-2 text-[#317828] roboto text-xl">
                {" "}
                {t("adminPannel.Location")}
              </th>
              <th className="p-2 text-[#317828] roboto text-xl">
                {t("adminPannel.Subscription Type")}
              </th>
              <th className="p-2 text-[#317828] roboto">
                {" "}
                {t("adminPannel.Income")}
              </th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 text-[#707070] font-semibold text-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        sub.image
                          ? sub.image
                          : "https://res.cloudinary.com/dhlgk023u/image/upload/v1743054658/erika-fletcher-MZxqc6n9qCw-unsplash_ymngli.jpg"
                      } // Default image if sub.image is not available
                      alt={sub.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{sub.school}</span>
                  </div>
                </td>
                <td className="p-4 text-[#707070] font-semibold text-lg">
                  {sub.email}
                </td>
                <td className="p-4 text-[#707070] font-semibold text-lg">
                  {sub.location}
                </td>
                <td
                  className={`p-4 text-[#707070] font-semibold text-lg ${
                    sub.type === "Premium" ? "text-[#4CAF50]" : "text-[#F44336]"
                  }`}
                >
                  {sub.type}
                </td>
                <td className="p-4 text-[#707070] font-semibold text-lg">
                  {sub.income}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
