import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import AdminSidebar from "./Sidebar/AdminSidebar";
import TeacherSidebar from "./Sidebar/TeacherSidebar";
import ParentSidebar from "./Sidebar/ParentSidebar";
import SchoolSidebar from "./Sidebar/SchoolSidebar";
import getRole from "../../utils/role";
import AdminDashboard from "./AdminLayout/AdminDashboard";
import TeacherDashboard from "./TeacherLayout/TeacherDashboard";
import SchoolDashboard from "./SchoolLayout/SchoolDashboard";
import ParentDashboard from "./ParentLayout/ParentDashboard";

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To check the current pathname
  const role = getRole();

  // Redirect to login if no role is found (user not logged in)
  useEffect(() => {
    if (!role) {
      navigate("/login");
    }
  }, [role, navigate]);

  if (role === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // Function to render default dashboard content based on role
  const renderDefaultDashboard = () => {
    switch (role) {
      case "Admin":
        return <AdminDashboard />;
      case "Teacher":
        return <TeacherDashboard />;
      case "Principle":
        return <SchoolDashboard />;
      case "Parent":
        return <ParentDashboard />;
      default:
        return <div>Unauthorized or invalid role</div>;
    }
  };

  // Check if we're on the root /dashboard path (no child route active)
  const isDashboardRoot = location.pathname === "/dashboard";

  return (
    <div className="flex h-screen bg-white dark:bg-[#1F2937]">
      {/* Sidebar - Fixed Position */}
      <div className="w-[280px] fixed left-0 top-0 h-screen">
        {role === "Admin" && <AdminSidebar />}
        {role === "Teacher" && <TeacherSidebar />}
        {role === "Parent" && <ParentSidebar />}
        {role === "Principle" && <SchoolSidebar />}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[280px]">
        {/* Header */}
        <Header />

        {/* Render Child Routes or Default Dashboard */}
        <main className="flex-1 bg-[#F9FAFC] dark:bg-[#1F2937] p-4 overflow-y-auto">
          {isDashboardRoot ? renderDefaultDashboard() : <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default Root;
