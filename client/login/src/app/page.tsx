"use client"

import Image from "next/image";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSideBar from "./components/DashboardSideBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardFeed from "./components/DashboardFeed";

export default function Home() {
  const router  = useRouter();
  useEffect(() => {
    let value  = localStorage.getItem('rede-social:token')
    if (!value) {
        router.push('/login');
    }
  },[])
  return (
    <main className="flex h-full flex-col items-center justify-between bg-zinc-100">
      <DashboardHeader/>
      <div className="w-full h-full flex items-start pt-10">
        <DashboardSideBar/>
        <DashboardFeed/>
      </div>
    </main>
  );
}
