import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number; // Changed from Number to number
  name: string; // Changed from String to string
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 1 }
    // revalidate: next have bulit in cache to refresh the data after period of time we can use revalidate and set the number in seconds or we can use { cache: 'no-store'}
  });
  const users: User[] = await res.json();

  const sortedUsers =
    sortOrder === "desc"
      ? sort(users).desc((user) => user.name)
      : sort(users).asc((user) => user.name);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>
            <Link href="/users?sortOrder=desc">Name</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
