import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { rolePermissions } from "./roles";
import type { Role, Permission } from "./roles";

type AuthContextType = {
  token: string | null;
  role: Role | null;
  isAuthenticated: boolean;
  login: (token: string, role: Role) => void;
  logout: () => void;
  can: (permission: Permission) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("access_token"),
  );

  const [role, setRole] = useState<Role | null>(() => {
    const storedRole = localStorage.getItem("user_role");

    if (
      storedRole === "admin" ||
      storedRole === "manager" ||
      storedRole === "employee"
    ) {
      return storedRole;
    }

    return null;
  });

  const login = (newToken: string, newRole: Role) => {
    localStorage.setItem("access_token", newToken);
    localStorage.setItem("user_role", newRole);

    setToken(newToken);
    setRole(newRole);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_role");

    setToken(null);
    setRole(null);
  };

  const can = (permission: Permission) => {
    return role ? rolePermissions[role].includes(permission) : false;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        role,
        isAuthenticated: Boolean(token && role),
        login,
        logout,
        can,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}