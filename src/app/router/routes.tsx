import { Navigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import AuthLayout from "../../layouts/AuthLayout";

import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";

import DashboardPage from "../../pages/DashboardPage";
import UsersPage from "../../pages/UsersPage";
import CategoriesPage from "../../pages/CategoriesPage";

import ProtectedRoute from "./ProtectedRoute";

export const routes = [
  // Public routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },

  // Protected routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/dashboard" replace />,
          },
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/users",
            element: <UsersPage />,
          },
          {
            path: "/categories",
            element: <CategoriesPage />,
          },
        ],
      },
    ],
  },
];