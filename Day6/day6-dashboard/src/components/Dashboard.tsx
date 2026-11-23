import { useCallback, useState } from "react";
import StatsCard from "@/components/StatsCard";
import UserList from "@/components/UserList";

function Dashboard() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((previous) => previous + 1);
  }, []);

  return (
    <main>
      <h2>Overview</h2>

      <StatsCard title="Total Users" value={120} />
      <StatsCard title="Active Users" value={85} />

      <h3>Counter: {count}</h3>
      <button onClick={incrementCount}>Increment</button>

      <UserList />
    </main>
  );
}

export default Dashboard;