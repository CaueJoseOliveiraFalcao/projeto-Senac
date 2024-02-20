"use client"

import Link from "next/link"
import { useState } from "react";
import axios from "axios";
export default function Login (){
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const handleLogin = (e:any) => {
        e.preventDefault();
        axios.post('http://localhost:8001/api/auth/login' , {email , password}).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    console.log(email , password);
    return (

        <main className="text-gray-600 flex bg-no-repeat  bg-cover h-screen flex-col justify-center items-center" style={{backgroundImage : "url('https://img.freepik.com/vetores-gratis/fundo-gradiente-de-conexao-de-rede_23-2148865393.jpg?w=1380&t=st=1708435092~exp=1708435692~hmac=a708467ae0d59b81c277b10aceee29a885f5f691580080f6ccc1fe0f25c37cad')"}}>
            <form className="flex flex-col bg-white p-14 rounded-2xl gap-11 w-25 ">
                <h1 className="text-center p-5 text-2xl font-bold">Login </h1>
                <div className="flex flex-col justify-between items-start">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.currentTarget.value)} className="border-gray-600 border-b p-3 w-full outline-none focus-visible:border-gray-700" type="text" id="email" />
                </div>
                <div className="flex flex-col justify-between items-start">
                    <label htmlFor="password">Password</label>
                    <input  onChange={(e) => setPassword(e.currentTarget.value)} id="password" type="password"   className="border-gray-600 outline-none p-3 border-b w-full focus-visible:border-gray-700" type="text" id="password" type="password" id="password" />
                </div>
                <button onClick={(e) => handleLogin(e)} className="bg-green-600 py-4 font-bold text-white rounded-lg hover:bg-green-900" >Entrar</button>
                <Link href={'/register'} className="text-center underline" >Cadastre-se</Link>
            </form>
        </main>
    )
}