"use client"

import AuthInput from "../../components/AuthInput";
import AuthPage from "../../components/AuthPage"
import AuthErrorMessage from "../../components/AuthErrorMessage";
import Link from "next/link";


import { useState } from "react";
import { makeRequest } from "../../../../axios";
export default function Register(){
    const [userName , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [error , SetError] = useState('');

    const handleRegister = (e:any) => {
        e.preventDefault();
        makeRequest.post('/auth/register' , {userName , email , password , confirmPassword}).then((res) =>{
            console.log(res.data)
        }).catch((err) => {
            SetError(err.response.data.msg);
        });

    }
    return (
        <>
            <h1 className="text-center p-5 text-2xl font-bold">Register</h1>
            {error ? <AuthErrorMessage msg={error} /> : ''}
            <AuthInput label="Nome" newState={setName} isPassword={false} isEmail={false}/>
            <AuthInput label="Email" newState={setEmail} isPassword={false} isEmail={true}/>
            <AuthInput label="Senha" newState={setPassword} isPassword={true} isEmail={false}/>
            <AuthInput label="Confirme sua senha" newState={setConfirmPassword} isPassword={true} isEmail={false}/>
            <button onClick={(e) => handleRegister(e)} className="bg-green-600 py-4 font-bold text-white rounded-lg hover:bg-green-900" >Cadastrar-se</button>
            <Link href={'/login'} className="text-center underline" >Login</Link>
        </>
    );
}