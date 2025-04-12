import { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Swal from "sweetalert2";
import { fakeSubscribers } from "../../../data";
import { GoPlus } from "react-icons/go";
import AddAdmin from "./AddTeacher";
import TeacherDetails from "./TeacherDetails";
import AddTeacher from "./AddTeacher";
import { div } from "framer-motion/client";

const SchoolDashboard = () => {
  const [subscribers, setSubscribers] = useState(fakeSubscribers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Search State
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [selectedUser, setSelectedUser] = useState(null); // Added selectedUser state
  const [modalType, setModalType] = useState(null);
  const itemsPerPage = 6;

  // ✅ Subject list dynamically generate
  const subjects = [
    "All",
    ...new Set(fakeSubscribers.map((sub) => sub.subject)),
  ];

  // ✅ Filtered & Sorted Data with Pagination
  const getCurrentPageData = () => {
    let filteredData = subscribers
      .filter(
        (subscriber) =>
          subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (selectedSubject === "All" || subscriber.subject === selectedSubject)
      )
      .sort((a, b) => a.name.localeCompare(b.name)); // Alphabetically sorting

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Pagination calculation
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
      data: filteredData.slice(startIndex, endIndex),
      totalPages,
    };
  };

  const { data: currentPageData, totalPages } = getCurrentPageData();

  // ✅ Handle delete user
  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setSubscribers(subscribers.filter((user) => user.id !== userId));
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };
  const handleAddUser = () => {
    setModalType("addTeacher"); // Add Teacher Modal দেখাবে
    setIsModalOpen(true);
  };

  const handleViewUser = (userId) => {
    const selectedUser = subscribers.find(
      (subscriber) => subscriber.id === userId
    );
    setSelectedUser(selectedUser);
    setModalType("viewTeacher"); // Teacher Details Modal দেখাবে
    setIsModalOpen(true);
  };

  return <div></div>;
};

export default SchoolDashboard;
