
import { useCallback, useState } from "react";
import StatsCard from "@/components/StatsCard";
import UserList from "@/components/UserList";

function Dashboard() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((previous) => previous + 1);
  }, []);

  return (
    <div className="min-h-screen min-w-0 flex-1 bg-background font-sans text-text">
      <main className="flex-1 space-y-6 p-4 sm:p-6">
        {/* Dashboard heading */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <h2 className="text-2xl font-bold">
            Overview
          </h2>
          <p className="mt-1 text-sm text-muted">
            Here's what's happening with your dashboard.
          </p>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StatsCard title="Total Users" value={120} />
          <StatsCard title="Active Users" value={85} />
        </section>

        {/* Counter */}
        <section className="rounded-card border border-border bg-surface p-5 shadow-sm">
          <h3 className="text-lg font-semibold">
            Counter: {count}
          </h3>

          <button
            onClick={incrementCount}
            className="mt-3 rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
          >
            Increment
          </button>
        </section>

        {/* Users */}
        <section className="rounded-card border border-border bg-surface p-5 shadow-sm">
          <UserList />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
