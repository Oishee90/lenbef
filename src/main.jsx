import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import "./i18n";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/TermsAndCondition/Terms";
import Login from "./Pages/Login";
import SignUp from './Pages/SignUp';

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
