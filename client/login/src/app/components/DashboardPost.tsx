

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
        <div>
            <header>
                <img  className='w-8 h-8 rounded-full'src={userImg ? userImg : 'https://news.uie.com/static/img/avatar.png'} alt="user img"/>
                <div>
                    <span>{userName}</span>
                    <span>06/07/2013</span>
                </div>
            </header>
                {post_desc && (
                <div>
                    <span>{post_desc}</span>
                </div>)}
                {img &&  <img className='w-80 h-72' src={img}/>}

        </div>
    )
}