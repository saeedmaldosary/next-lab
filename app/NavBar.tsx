"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-slate-300 space-x-3">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      {/* Below path is from Next auth (not exist in api folder) */}
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user?.name}
          <Link className="ml-3" href="/api/auth/signout">
            Signout
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Signin</Link>
      )}
    </div>
  );
};

export default NavBar;
