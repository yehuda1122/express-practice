import {getData,getReport,getproducs} from "./controlerServer.js"
import express from "express";
export const userRouter = express.Router();


userRouter.get('/user', getData)
userRouter.get("/report",getReport)
userRouter.get("/pruducst",getproducs)