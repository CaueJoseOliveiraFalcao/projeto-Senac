
import { db } from "../connect.js";
import bcrypt from 'bcrypt';
import  jwt  from "jsonwebtoken";
export const register = (req , res) => {
    const {userName , email , password , confirmPassword} = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userName){
        return res.status(422).json({msg : 'nome e obrigatorio'});
    }
    if (!email){
        return res.status(422).json({msg : 'email e obrigatorio'});
    }
    if (!emailRegex.test(email)){
        return res.status(422).json({msg : 'email invalido'});
    }
    if (!password){
        return res.status(422).json({msg : 'senha e obrigatorio'});
    }
    if( confirmPassword != password){
        return res.status(422).json({msg : 'senhas não são iguais'});
    }
    db.query("SELECT email FROM user WHERE email = ?" , [email] , async(error , data)=> {
        if (error){
            console.log(error);
            return res.status(500).json({msg : 'Aconteceu algum erro'});
        }
        if(data.length > 0){
            return res.status(500).json({msg : 'Email existente'});
        }
        else{
            const passwordHash = await bcrypt.hash(password , 8);
            db.query(
               'INSERT INTO user SET ?', {userName , email , password:passwordHash},
               (error) => {
                if (error){
                    console.log(error);
                    return res.status(500).json({msg : 'erro na insersao de dados'});
                }
                else{
                    return res.status(200).json({msg : 'Casastro efetuado'});
                }
               }
            )
        }
    })
}
export const login = (req , res) => {
    const {email , password} = req.body;
    db.query("SELECT * FROM user WHERE email = ?" , [email] , async(error , data)=> { 
        if (error){
            console.log(error);
            return res.status(500).json({msg : 'erro na insersao de dados'});
        }
        if(data.length === 0){
            return res.status(404).json({msg : ' email invalido'});
        }else{
            const user = data[0];

            const checkPassword = await bcrypt.compare(password , user.password);

            if (!checkPassword){
                return res.status(500).json({msg : 'senha incorreta'});
            }
            try{
                const refreshToken = jwt.sign({
                    exp : Math.floor(Date.now()/1000) + 24 * 60 * 60,
                    id : user.password
                },
                process.env.REFRESH,
                {algorithm: "HS256"}
                )
                const Token = jwt.sign({
                    exp : Math.floor(Date.now()/1000) + 3600,
                    id : user.password
                },
                process.env.TOKEN,
                {algorithm: "HS256"}
                )
                res.status(200).json({msg : 'Usuario logado com sucesso' ,
                data:{user , token:{Token , refreshToken}}});
            } catch (err){
                console.log(err);
                res.status(500).json({msg : 'Falha no Login' , Token , refreshToken});
            }
            console.log(user);
        }
    });

}