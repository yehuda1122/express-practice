    import {getData,getReport,getproducs} from "./controlerServer.js"
    import express from "express";
    export const userRouter = express.Router();
    export const reportRout = express.Router()
    export const productRouter = express.Router()


    userRouter.get('/', getData)
    reportRout.get("/",getReport)
    productRouter.get("/",getproducs)