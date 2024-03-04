import Link from "next/link"
import {FaSearch , FaBell} from 'react-icons/fa'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
export default function DashboardHeader() {
    const [user , SetUser] = useState({userName : '' , userimg : ''})
    const [showMenu , SetMenu] = useState(false)
    const router = useRouter();
    const logout = (e : any) => {
        e.preventDefault();
        localStorage.removeItem('rede-social:token');
        router.push('/login');
    }

    useEffect(() => {
        let value  = localStorage.getItem('rede-social:user')
        if (value) {
            SetUser(JSON.parse(value));
        }
    },[]);
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
                        <Link href='' onClick={(e) => (logout(e))}>Logout</Link>
                    </div>
                    }
                </div>
            </div>
        </header>
    )
}