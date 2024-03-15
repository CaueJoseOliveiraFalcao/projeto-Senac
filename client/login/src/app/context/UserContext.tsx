"use client";

import { createContext , useState } from "react";

interface ContextProps {
    children : React.ReactNode;
}

interface User{
    user:
        {
            id :number,
            email : string,
            username :string,
            userImg : string,
            bgImg : string
        }
    | undefined;
    setUser : (newState : any) => void
}

const initialValue = {
    user : undefined,
    setUser: () => {},
};


export const UserContext = createContext<User>(initialValue)

export const UserContextProvider= ({children} : ContextProps)=>{
    ler UserJSON = localStorage.getItem('rede-social:user')
}