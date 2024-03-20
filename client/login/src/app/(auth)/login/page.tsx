"use client"

import Link from "next/link"
import { useState } from "react";
import AuthInput from "../../components/AuthInput";
import { makeRequest } from "../../../../axios";
import { useRouter } from "next/navigation";
export default function Login (){
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const router = useRouter();
    const handleLogin = (e:any) => {
        e.preventDefault();
        makeRequest.post('/auth/login' , {email , password}).then((res) => {
            localStorage.setItem("rede-social:user" , JSON.stringify(res.data.data))
            router.push('/');
        }).catch((err) => {
            alert(err.response.msg);
        })
    }
    console.log(email , password);
    return (
            <>
                <h1 className="text-center p-5 text-2xl font-bold">Login </h1>
                <AuthInput label="Email" newState={setEmail} isEmail={true} isPassword={false}/>
                <AuthInput label="Senha" newState={setPassword} isEmail={false} isPassword/>
                <button onClick={(e) => handleLogin(e)} className="bg-green-600 py-4 font-bold text-white rounded-lg hover:bg-green-900" >Entrar</button>
                <Link href={'/register'} className="text-center underline" >Cadastre-se</Link>
            </>

    )
}