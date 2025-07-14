import express from "express";
import {userRouter,reportRout,productRouter} from './router.js'

export const app = express();
app.use(express.json());
app.use("/user",userRouter)
app.use("/report",reportRout)
app.use("/pruducst",productRouter)

const port = 3010
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
