import mysql2 from 'mysql2/promise'

const conection = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "TCC"
})

console.log("BD conectado!!")

export default conection