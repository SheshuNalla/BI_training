import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageLoader from "@/components/layout/PageLoader";
import LoginPage from "@/features/auth/LoginPage";
import ProtectedRoute from "@/features/auth/ProtectedRoute";

const DashboardPage = lazy(
  () => import("@/features/dashboard/DashboardPage")
);

const EmployeesPage = lazy(
  () => import("@/features/employees/EmployeesPage")
);

const UsersPage = lazy(
  () => import("@/features/users/UsersPage")
);

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <DashboardPage />
              </Suspense>
            }
          />

          <Route
            path="employees"
            element={
              <Suspense fallback={<PageLoader />}>
                <EmployeesPage />
              </Suspense>
            }
          />

          <Route
            path="users"
            element={
              <Suspense fallback={<PageLoader />}>
                <UsersPage />
              </Suspense>
            }
          />
        </Route>
      </Route>

      <Route
        path="*"
        element={<h2 className="p-8 text-xl">404 - Page Not Found</h2>}
      />
    </Routes>
  );
}