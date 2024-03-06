import { db } from "../connect.js";

export const creatPost = (req,res) => {
    const {post_desc , img ,userId} = req.body

    if (!post_desc && !img){
        return res.status(422).json({msg:" o Post Precisa de um textot ou imagem"});
    }
    const PostData = {post_desc , img , userId};
    db.query('INSERT INTO posts SET ?' , PostData , (err) => {
        if (err){
            console.log(err);
            res.status(500).json({msg:'erro insersao'})
        }else{
            return res.status(200).json({msg : 'post enviado'})
        }
    })

}
export const getPost = (req,res) => {
    db.query('SELECT posts.*, user.userName FROM posts join user on(user.id = posts.userId);' , async(error , data) => {
        if (error){
            console.log(error);
            res.status(500).json({msg:'erro na pegaçaõd e dados'})
        }else{
            return res.status(200).json({data});
        }
    })
}