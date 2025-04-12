import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import "./i18n";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/TermsAndCondition/Terms";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SetNew from "./Pages/SetNew";
import Forgot from "./Pages/Forgot";
import Verification from "./Pages/Verification";
import Success from "./Pages/Success";
import Root from "./Components/Dashboard/Root";
import getRole from "./utils/role";
import AdminDashboard from "./Components/Dashboard/AdminLayout/AdminDashboard";

import User from "./Components/Dashboard/AdminLayout/User/User";
import SchoolDashboard from "./Components/Dashboard/SchoolLayout/SchoolDashboard";
import StudentDashboard from "./Components/Dashboard/StudentLayout/StudentDashboard";
import Aiassistant from "./Components/Dashboard/StudentLayout/AI/Aiassistant";
import English from "./Components/Dashboard/StudentLayout/English/English";
import Artticle from "./Components/Dashboard/StudentLayout/Article/Artticle";
import AiassistantChat from "./Components/Dashboard/StudentLayout/AI/AiassistantChat";
import EnglishProficiency from "./Components/Dashboard/StudentLayout/English/EnglishProficiency";
import GeneratedArticle from "./Components/Dashboard/StudentLayout/Article/GeneratedArticle";
// Get role from localStorage
const role = getRole();
console.log("User data in main.jsx:", role);

// Create a function to return dashboard content based on role
const getDashboardContent = (role) => {
  switch (role) {
    case "Admin":
      return <AdminDashboard />;

    case "Student":
      return <StudentDashboard></StudentDashboard>;

    default:
      return <Navigate to="/login" />;
  }
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/privacy",
    element: <Privacy></Privacy>,
  },
  {
    path: "/terms",
    element: <Terms></Terms>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/Signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/SetNew",
    element: <SetNew></SetNew>,
  },
  {
    path: "/forgot",
    element: <Forgot></Forgot>,
  },
  {
    path: "/verification",
    element: <Verification></Verification>,
  },
  {
    path: "/success",
    element: <Success></Success>,
  },
  {
    path: "/dashboard",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: getDashboardContent(role),
      },
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "school",
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: "school",
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: "aiAssistant",
        element: <Aiassistant></Aiassistant>,
      },
      {
        path: "aiassistantChat",
        element: <AiassistantChat></AiassistantChat>,
      },
      {
        path: "english",
        element: <English></English>,
      },
      {
        path: "conversation",
        element: <EnglishProficiency></EnglishProficiency>,
      },
      {
        path: "generateArticle",
        element: <GeneratedArticle></GeneratedArticle>,
      },

      // {
      //   path: "makeAdmin",
      //   element: <MakeAd></MakeAdmin>,
      // },
      // {
      //   path: "subscription",
      //   element: <Subscription></Subscription>,
      // },
      // {
      //   path: "settings",
      //   element: <Settings></Settings>,
      // },

      // {
      //   path: "recomendation",
      //   element: <RecommendationTable></RecommendationTable>,
      // },
      {
        path: "school",
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: "article",
        element: <Artticle></Artticle>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
