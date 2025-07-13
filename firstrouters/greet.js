import express, { json } from "express";

export const greetrout = express.Router()

greetrout.get('/',(req,res)=>{
    res.json({msg : "Hello from /greet!"})
})


