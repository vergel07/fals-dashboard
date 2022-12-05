import React from "react";
import { Redirect } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../pages/DashboardEcommerce";



//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";

// Payments
import Payment from "../pages/Payment";

//C ustomers
import Customer from "../pages/Customer";

// Developers
import Developer from "../pages/Developer";

// Settings
import Setting from "../pages/Setting";

const authProtectedRoutes = [

  { path: "/dashboard", component: DashboardEcommerce },
  { path: "/index", component: DashboardEcommerce },

  //User Profile
  { path: "/profile", component: UserProfile },

  // Payments
  { path: "/payments", component: Payment },

  // Customer
  { path: "/customer", component: Customer },

  // Developers
  { path: "/developer", component: Developer },

  // Settings
  { path: "/setting", component: Setting },


  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPasswordPage },
  { path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };