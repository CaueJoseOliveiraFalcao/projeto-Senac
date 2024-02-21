"use client"

import Link from "next/link"
import { useState } from "react";
import axios from "axios";

import AuthPage from "../components/AuthPage";
import AuthInput from "../components/AuthInput";
export default function Login (){
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const handleLogin = (e:any) => {
        e.preventDefault();
        axios.post('http://localhost:8001/api/auth/login' , {email , password}).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            alert(err.response.data.msg);
        })
    }
    console.log(email , password);
    return (
            <AuthPage>
                <h1 className="text-center p-5 text-2xl font-bold">Login </h1>
                <AuthInput label="Email" newState={setEmail} isEmail={true} isPassword={false}/>
                <AuthInput label="Senha" newState={setPassword} isEmail={false} isPassword/>
                <button onClick={(e) => handleLogin(e)} className="bg-green-600 py-4 font-bold text-white rounded-lg hover:bg-green-900" >Entrar</button>
                <Link href={'/register'} className="text-center underline" >Cadastre-se</Link>
            </AuthPage>

    )
}