import express from "express"
import { User } from "../schemas/author.js"

const authorsRouter = express.Router()


authorsRouter.get("/test", (req, res)=>{

    res.json({message: "authorsRouter working!"})
})

authorsRouter.get("/",  async (req, res)=>{

    const users = await User.find({});
   res.json(users)
})

authorsRouter.get("/:id",  async (req, res)=>{

const {id} = req.params

   try{
   const user = await User.findById({id});
   res.json(user)}
   catch{
    console.log("error")
    res.status(404).send()
   }  
})

authorsRouter.post("/", async (req, res) => {
    
   try{
    const newUser = new User(req.body)
    await newUser.save();
    res.status(201).send(newUser)} 
    catch{
        console.log(error)
    }
})


export default authorsRouter