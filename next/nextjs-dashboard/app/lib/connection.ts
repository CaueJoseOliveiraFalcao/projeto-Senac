const mysql = require("mysql");
import { Connection } from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

function createConnection(): Connection {
    return mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USERNAME,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE
    });
}

export{createConnection};