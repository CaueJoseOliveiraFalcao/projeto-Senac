import Link from "next/link";
import {FaUserFriends , FaAlignLeft , FaPeopleArrows ,FaStore , FaBookmark , FaFlag , FaCalendar} from 'react-icons/fa'
export default function DashboardSideBar () {
    return (
        <aside className="pl-4">
            <nav className="flex-col gap-6 text-gray-600 font-semibold">
                <Link href={''} className="flex gap-2 pb-6">
                    <img src="https://news.uie.com/static/img/avatar.png" />
                    <span>Usuario</span>
                </Link>
                <Link href={''} >
                    <FaUserFriends/>
                    Amigos
                </Link>
                <Link href={''}>
                    <FaAlignLeft/>
                    Feed
                </Link>
                <Link href={''}>
                    <FaPeopleArrows/>
                    Grupos
                </Link>
                <Link href={''}>
                    <FaStore/>
                    Loja
                </Link>
                <Link href={''}>
                    <FaBookmark/>
                    Salvo
                </Link>
                <Link href={''}>
                    <FaFlag/>
                    Pagina
                </Link>
                <Link href={''}>
                    <FaCalendar/>
                    Eventos
                </Link>
            </nav>
        </aside>
    );
}