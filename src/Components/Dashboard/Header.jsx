import React, { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import adminImage from "../../assets/kids1.png";
import UserDetails from "./AdminLayout/User/UserDetails";
import AdminProfile from "./AdminLayout/AdminProfile";
import SchoolProfile from "./SchoolLayout/SchoolProfile";

const Header = () => {
  const [role, setRole] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);

  // Fetch role from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData.role) {
      setRole(userData.role);
    }
  }, []);

  return (
    <div className="flex items-center border-b border-b-[#E8E8E8] justify-between p-6 bg-white dark:bg-[#374151] text-[#020202] dark:text-white">
      {/* Title */}
      <div>
        <h1 className="text-[24px] font-semibold poppins">Dashboard</h1>
      </div>

      {/* Profile Section based on role */}
      <div className="flex justify-around items-center gap-4">
        {role === "Admin" && (
          <div className="curosr-pointer" onClick={() => setIsModalOpen(true)}>
            <img
              src={adminImage}
              alt="Admin Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </div>
        )}
        {role === "Principle" && (
          <div
            className="curosr-pointer"
            onClick={() => setIsSchoolModalOpen(true)}
          >
            <img
              src={adminImage}
              alt="School Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        )}
        {role === "Teacher" && (
          <div>
            <img
              src=""
              alt="Teacher Profile"
              className="w-10 h-10 rounded-full"
            />
            <span>Teacher</span>
          </div>
        )}
        {role === "Parents" && (
          <div>
            <img
              src="https://example.com/parents-profile.jpg"
              alt="Parents Profile"
              className="w-10 h-10 rounded-full"
            />
            <span>Parents</span>
          </div>
        )}
      </div>

      {isModalOpen && <AdminProfile onClose={() => setIsModalOpen(false)} />}
      {isSchoolModalOpen && (
        <SchoolProfile onClose={() => setIsSchoolModalOpen(false)} />
      )}
    </div>
  );
};

export default Header;
