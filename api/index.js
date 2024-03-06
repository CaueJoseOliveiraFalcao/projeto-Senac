import express from 'express';
import UserRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import postRouter from './routes/post.js';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());

app.use('/api/post/' , postRouter);
app.use("/api/users/" , UserRouter);
app.use("/api/auth/" , authRouter);

app.listen(8001 , () => {
    console.log('Ola');
})