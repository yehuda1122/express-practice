import { greetrout } from "./greet.js";
import { userRouter } from "./users.js";
import express, { json } from "express";



const app = express();
app.use(express.json());
app.use("/greet",greetrout)
app.use('/users', userRouter )



app.listen(3002,()=>{
    console.log("the server runnig: http://localhost:3002");
})
