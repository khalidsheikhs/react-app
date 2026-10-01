import { lazy } from "react"
import { Navigate } from "react-router-dom"

import AdminLayout from "../../layouts/AdminLayout"
import AuthLayout from "../../layouts/AuthLayout"
import RouteSuspense from "../../components/shared/RouteSuspense"

const LoginPage = lazy(() => import("../../pages/auth/LoginPage"))
const RegisterPage = lazy(() => import("../../pages/auth/RegisterPage"))
const ForgotPasswordPage = lazy(() => import("../../pages/auth/ForgotPasswordPage"))

import ProtectedRoute from "./ProtectedRoute"
const DashboardPage = lazy(() => import("../../pages/DashboardPage"))
const UsersPage = lazy(() => import("../../pages/UsersPage"))
const CategoriesPage = lazy(() => import("../../pages/CategoriesPage"))

export const routes = [
  // Public routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: (
          <RouteSuspense>
            <LoginPage />
          </RouteSuspense>
        ),
      },
      {
        path: "/register",
        element: (
          <RouteSuspense>
            <RegisterPage />
          </RouteSuspense>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <RouteSuspense>
            <ForgotPasswordPage />
          </RouteSuspense>
        ),
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
            element: (
              <RouteSuspense>
                <DashboardPage />
              </RouteSuspense>
            ),
          },
          {
            path: "/users",
            element: (
              <RouteSuspense>
                <UsersPage />
              </RouteSuspense>
            ),
          },
          {
            path: "/categories",
            element: (
              <RouteSuspense>
                <CategoriesPage />
              </RouteSuspense>
            ),
          },
        ],
      },
    ],
  },
];