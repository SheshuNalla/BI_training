
import { useMemo, useState } from "react";

const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Arun" },
  { id: 4, name: "Sneha" },
];

function UserList() {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");

    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-text">
        Users
      </h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users..."
        className="mb-4 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-text outline-none placeholder:text-muted focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
      />

      <ul className="divide-y divide-border">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className="rounded-md px-3 py-3 text-sm font-medium text-text transition-colors hover:bg-background"
          >
            {user.name}
          </li>
        ))}
      </ul>

      {filteredUsers.length === 0 && (
        <p className="py-4 text-center text-sm text-muted">
          No users found.
        </p>
      )}
    </div>
  );
}

export default UserList;
