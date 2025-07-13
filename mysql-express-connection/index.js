import express from "express";
import {userRouter} from './app.js'

export const app = express();
app.use(express.json());
app.use("/",userRouter)

const port = 3010
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
