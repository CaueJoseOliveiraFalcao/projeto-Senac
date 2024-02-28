"use client"

import Image from "next/image";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSideBar from "./components/DashboardSideBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router  = useRouter();
  useEffect(() => {
    let value  = localStorage.getItem('rede-social:token')
    if (!value) {
        router.push('/login');
    }
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
      <DashboardHeader/>
      <div className="w-full h-svh flex items-start pt-10">
        <DashboardSideBar/>
      </div>

      <h1>Login Page</h1>
    </main>
  );
}
