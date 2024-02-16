import express from 'express';
import UserRouter from './routes/user.js';

const app = express()
app.use("/api/users/" , UserRouter);
app.listen(8001 , () => {
    console.log('Ola');
})