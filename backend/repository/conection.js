import mysql2 from 'mysql2/promise'
import 'dotenv/config';


const conection = await mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

console.log("BD conectado!!")

export default conection