"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

// { children: ReactNode }
// We can define above as interface
const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
