

export default function AuthPage({children}  : {children : React.ReactNode}){
    return (
        <main className="text-gray-600 flex bg-no-repeat  bg-cover h-screen flex-col justify-center items-center" style={{backgroundImage : "url('https://th.bing.com/th/id/OIG3._2N_B24KDMiVV1CtdcOd?pid=ImgGn')"}}>
            <form className="flex flex-col bg-white p-14 rounded-2xl gap-11 w-45 ">
                {children}
            </form>
        </main>
    )
}