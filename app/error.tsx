"use client";
import { log } from "console";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);

  return (
    <div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
      ErrorPage
    </div>
  );
};

export default ErrorPage;
