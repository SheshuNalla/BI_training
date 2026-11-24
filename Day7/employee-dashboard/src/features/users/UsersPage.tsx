import { Navigate } from "react-router";
import { useAuth } from "@/features/auth/AuthContext";

export default function UsersPage() {
  const { can } = useAuth();

  if (!can("user:manage")) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-bold">User Management</h2>
      <p className="text-muted-foreground">
        Manage application users and their roles.
      </p>
    </section>
  );
}