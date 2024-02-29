import Link from "next/link";
import { useState , useEffect } from "react";
import {FaUserFriends , FaAlignLeft , FaPeopleArrows ,FaStore , FaBookmark , FaFlag , FaCalendar} from 'react-icons/fa'
interface User{
    userName : string
}
export default function DashboardSideBar () {
    const [userName , setUserName] = useState<User>({userName : ''});

    useEffect(() => {
        const name = localStorage.getItem('rede-social:user');
        if (name){
            setUserName(JSON.parse(name));
        }
    },[])
    return (
        <aside className="pl-4">
            <nav className="flex-col fixed gap-6 text-gray-600 font-semibold">
                <Link href={''} className="flex gap-3 pb-6 items-center">
                    <img className="w-6 h-6 rounded-md" src="https://news.uie.com/static/img/avatar.png" />
                    <span>{userName.userName}</span>
                </Link>
                <Link href={''} className="flex gap-3 py-4 items-center">
                    <FaUserFriends className="w-6 h-6"/>
                    Amigos
                </Link>
                <Link href={''} className="flex gap-3 py-4 items-center">
                    <FaAlignLeft className="w-6 h-6"/>
                    Feed
                </Link>
                <Link href={''} className="flex gap-3 py-4 items-center">
                    <FaPeopleArrows className="w-6 h-6"/>
                    Grupos
                </Link>
                <Link href={''} className="flex gap-3 py-4 items-center">
                    <FaStore className="w-6 h-6"/>
                    Loja
                </Link>
                <Link href={''} className="flex gap-3 py-4 items-center">
                    <FaBookmark className="w-6 h-6"/>
                    Salvo
                </Link>
                <Link href={''} className="flex gap-3 py-4 items-center">
                    <FaFlag className="w-6 h-6"/>
                    Pagina
                </Link>
                <Link href={''} className="flex gap-3 py-4 items-center">
                    <FaCalendar className="w-6 h-6"/>
                    Eventos
                </Link> 
            </nav>
        </aside>
    );
}