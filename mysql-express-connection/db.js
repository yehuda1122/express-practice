import mysql from "mysql2/promise"
import {config} from "dotenv"; //// הורדת ספריית env "nmp i msql2 dotenv express"
config()

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: '', 
    database: "classicmodels"
})

export default  pool