import express from 'express';
import {register} from '../controllers/auth.js'
import {login} from '../controllers/auth.js'
import {refresh} from '../controllers/auth.js'
import {logout} from '../controllers/auth.js'
const authRouter = express.Router();

authRouter.post('/register' , register);
authRouter.post('/login' , login);
authRouter.get('/refresh' , refresh);
authRouter.post('/logout' , logout);


export default authRouter;