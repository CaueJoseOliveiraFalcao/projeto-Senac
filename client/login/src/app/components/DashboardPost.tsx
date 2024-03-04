import { FaPaperPlane, FaRegComment, FaThumbsUp } from "react-icons/fa"


interface IPost {
    id : number,
    post_desc : string,
    img : string,
    userName : string,
    userImg:string
}

export default function DashboardPost(props:{post:IPost}){
    const {post_desc , img , userName,userImg} = props.post

    return(
        <div className=" bg-white rounded-lg p-4 shadow-md">
            <header className="flex gap-2 pb-4 border-b items-center">
                <img  className='w-8 h-8 rounded-full'src={userImg ? userImg : 'https://news.uie.com/static/img/avatar.png'} alt="user img"/>
                <div className="flex-col flex ">
                    <span className="font-semibold">{userName}</span>
                    <span className="text-xs">06/07/2013</span>
                </div>
            </header>
                {post_desc && (
                <div className="py-4 w-full" >
                    <span >{post_desc}</span>
                </div>)}
                {img &&  <img className='w-100 h-80 rounded-lg' src={img}/>}
                <div className="flex justify-between py-4 border-b">
                    <div className="flex gap-1 items-center flex-row justify-center">
                        <span className="bg-blue-600 w-6 h-6 text-white flex items-center justify-center rounded-full text-xm">
                            <FaThumbsUp/>
                        </span>3
                    </div>
                    <span>5 comentarios</span>
                </div>
                <div className=" flex justify-between py-4  text-gray-600 border-b">
                    <button className="flex items-center gap-1">
                        <FaThumbsUp/> Curtir
                    </button>
                    <button className="flex items-center gap-1">
                        <FaRegComment/> Comentar
                    </button>
                </div>
                <div className="flex gap-4 pt-6">
                <img className="w-6 h-6 rounded-md" src="https://news.uie.com/static/img/avatar.png" />
                    <div className="w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full">
                        <input type="text" className="bg-zinc-100 w-full focus-visible:outline-none"/>
                        <FaPaperPlane/>
                    </div>
                </div>


        </div>
    )
}