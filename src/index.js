import express from "express";
import authorsRouter from "./authorRouter.js";
import mongoose from "mongoose";
import cors from "cors";

const server = express()
const port = 3030   

server.use(express.json())
server.use(cors())
server.use("/authors", authorsRouter)

mongoose.connect(process.env.MONGO_URL)

.then(()=>{
    server.listen(port, () => {
        console.log("Server listening at port: ", port);
      }); 
})
.catch((error) => {
    console.log(error)
})

