"use client";
import { useState } from "react";

export function SignOutButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <button
      className="px-4 py-2 rounded bg-white text-secondary border border-gray-200 font-semibold hover:bg-gray-50 hover:text-secondary-hover transition-colors shadow-sm hover:shadow"
      onClick={() => setIsAuthenticated(!isAuthenticated)}
    >
      {isAuthenticated ? "Sign out" : "Sign in"}
    </button>
  );
}
