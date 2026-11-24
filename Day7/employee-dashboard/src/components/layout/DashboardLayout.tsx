import { useAuth } from "@/features/auth/AuthContext";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { NavLink, Outlet } from "react-router";

const navigation = [
  { label: "Overview", path: "/", end: true },
  { label: "Employees", path: "/employees", end: false },
  { label: "Users", path: "/users", end: false },
];

export default function DashboardLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-xl font-bold">Employee Management</h1>

        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </header>

      <div className="flex">
        <aside className="min-h-[calc(100vh-65px)] w-56 border-r p-4">
          <nav className="space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
