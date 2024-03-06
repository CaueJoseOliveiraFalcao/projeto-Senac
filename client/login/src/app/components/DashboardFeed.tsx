import { useEffect, useState } from "react";
import DashboardPost from "./DashboardPost";
import { makeRequest } from "../../../axios";


interface IPost {
    id : number,
    post_desc : string,
    img : string,
    created_at : string|null,
    userId:number,
    userName : string
}


export default function DashboardFeed() {

    const [posts,SetPosts] = useState<IPost[]|undefined>(undefined);

    useEffect(() =>{
        makeRequest.get("post/")
        .then((res) => {
            SetPosts(res.data.data)
            console.log(posts)
        }).catch((error) => {
            console.log(error)
        })
    },[])
    return (
        <div className="flex w-full flex-col gap-5 items-center justify-center">
            {posts?.map((post , id) => {
                return (
                    <DashboardPost post={post} key={id}/>
                )
            })}
        </div>
    );
}