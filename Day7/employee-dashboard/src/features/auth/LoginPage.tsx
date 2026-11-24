import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "./AuthContext";
import type {Role} from "./roles";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("admin");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) return;

    // Mock token for learning purposes
    const mockToken = "demo-access-token";

    login(mockToken, role);
    navigate("/", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-5 rounded-xl border bg-background p-6 shadow-sm"
      >
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your employee dashboard.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Role</label>

          <select
            value={role}
            onChange={(event) => setRole(event.target.value as Role)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  );
}