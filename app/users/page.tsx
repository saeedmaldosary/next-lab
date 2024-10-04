import React from "react";

interface User {
  id: number; // Changed from Number to number
  name: string; // Changed from String to string
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 1 }
    // revalidate: next have bulit in cache to refresh the data after period of time we can use revalidate and set the number in seconds or we can use { cache: 'no-store'}
  });
  const users: User[] = await res.json();

  return (
    <div>
      <h1>UsersPage</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
