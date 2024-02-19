import express from 'express';
import UserRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import bodyParser from 'body-parser';
const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use("/api/users/" , UserRouter);
app.use("/api/auth/" , authRouter);
app.listen(8001 , () => {
    console.log('Ola');
})