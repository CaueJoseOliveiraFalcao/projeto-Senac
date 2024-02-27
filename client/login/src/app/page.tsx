"use client"

import Image from "next/image";
import DashboardHeader from "./components/DashboardHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
      <DashboardHeader/>
      <h1>Login Page</h1>
    </main>
  );
}
