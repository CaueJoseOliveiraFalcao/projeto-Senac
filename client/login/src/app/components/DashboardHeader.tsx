import Link from "next/link"
import {FaSearch , FaBell} from 'react-icons/fa'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import { useState } from "react"
export default function DashboardHeader() {
    const [user , SetUser] = useState({username : '' , userimg : ''})
    return (
        <header >
            <Link href='/'>Dashboard</Link>
            <div>
                <input type="text"   />
                <FaSearch/>
            </div>
            <div>
                <div>
                    <button>
                        <TbMessageCircle2Filled/>
                    </button>
                    <button>
                        <FaBell/>
                    </button>
                </div>
                <div>
                    <img src={user.userimg.length > 0 ? user.userimg : 'https://news.uie.com/static/img/avatar.png'} alt="Foto de perfil"/>
                    <span>{user.username}</span>
                </div>
            </div>
        </header>
    )
}