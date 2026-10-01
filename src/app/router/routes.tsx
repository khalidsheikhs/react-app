import { Navigate } from "react-router-dom"
import { lazyRoute } from "./routerHelpers"

import AdminLayout from "../../layouts/AdminLayout"
import AuthLayout from "../../layouts/AuthLayout"
import ProtectedRoute from "./ProtectedRoute"

export const routes = [
  // Public routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        lazy: lazyRoute(() => import("../../pages/auth/LoginPage")),
      },
      {
        path: "/register",
        lazy: lazyRoute(() => import("../../pages/auth/RegisterPage")),
      },
      {
        path: "/forgot-password",
        lazy: lazyRoute(() => import("../../pages/auth/ForgotPasswordPage")),
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
            path: "/dashboard",
            lazy: lazyRoute(() => import("../../pages/DashboardPage")),
          },
          {
            path: "/users",
            lazy: lazyRoute(() => import("../../pages/UsersPage")),
          },
          {
            path: "/categories",
            lazy: lazyRoute(() => import("../../pages/CategoriesPage")),
          },
        ],
      },
    ],
  },

  // Default route
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
];