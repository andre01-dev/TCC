import mysql2 from 'mysql2/promise'

const conection = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "59222502",
    database: "TCC"
})

console.log("Db conectado")

export default conection