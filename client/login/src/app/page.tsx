"use client"

import Image from "next/image";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSideBar from "./components/DashboardSideBar";

import { useRouter } from "next/navigation";
import DashboardFeed from "./components/DashboardFeed";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export default function Home() {
  const router  = useRouter();
  
  const {data , error , isSuccess , isError} = useQuery({
    queryKey : ["refresh"],
    queryFn :() =>makeRequest.get("auth/refresh").then((res)=>{
      return res.data
    }),
    retry : false,
    refetchInterval : 60*50*100,
  })
  if (isSuccess){
    console.log(data.msg);
  }
  if (isError){
    console.log(error);
    router.push('/login');
  }
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
