import Link from "next/link"
import {FaSearch , FaBell} from 'react-icons/fa'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import { useContext, useEffect, useState } from "react"
import {UserContext} from 'User'
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { makeRequest } from "../../../axios"
import { Button } from "flowbite-react"
export default function DashboardHeader() {
    const {user} = useContext(UserContext);
    const [showMenu , SetMenu] = useState(false)
    const router = useRouter();

    const mutation = useMutation({
        mutationFn : async () =>{
            return await makeRequest.post('auth/logout').then((res) => {
                res.data;
            });
        },
        onSuccess: () => {
            localStorage.removeItem("rede-social:user");
            router.push("login");
        },
    });
    return (
        <header className="w-full bg-white flex flex-row  justify-between py-2 px-4 items-center shadow-md" >
            <Link href='/' className="font-bold text-sky-900 text-lg">Dashboard</Link>
            <div className="flex bg-zinc-100 items-center text-gray-600 px-3 py-1 rounded-full ">
                <input type="text" className="bg-zinc-100 focus-visible:outline-none"  placeholder="Pesquisar"  />
                <FaSearch/>
            </div>
            <div className=" flex gap-5 items-center text-gray-600 ">
                <div className="flex gap-3 px-3">
                    <button className="bg-zinc-200 p-2 rounded-full hover:bg-zinc-300">
                        <TbMessageCircle2Filled/>
                    </button>
                    <button  className="bg-zinc-200 p-2 rounded-full hover:bg-zinc-300">
                        <FaBell/>
                    </button>
                </div>
                <div className="relative">
                    <button className="flex gap-2 items-center " onClick={(e) => (SetMenu(!showMenu))}>
                        <img 
                        src={user.userimg ? user.userimg : 'https://news.uie.com/static/img/avatar.png'} 
                        alt="Foto de perfil"
                        className="w-8 h-8 rounded-full"/>
                        <span className="font-bold ">{user.userName}</span>
                    </button>
                    {showMenu && 
                    <div className="absolute flex-col flex bg-white p-4 shadow-md rounded-md gap-2 border-t- whitespace-nowrap right-[-5px]">
                        <Link href='' className="border-b">Editar Perfil</Link>
                        <button onClick={() => mutation.mutate()}>
                            Logout
                        </button>
                    </div>
                    }
                </div>
            </div>
        </header>
    )
}