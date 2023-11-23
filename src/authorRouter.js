import express from "express"
import { User } from "../schemas/author.js"

const authorsRouter = express.Router()

authorsRouter.get("/",  async (req, res)=>{

   const users = await User.find({});
   res.json(users)
})

authorsRouter.get("/:id",  async (req, res)=>{

   try{
   const {id} = req.params
   const user = await User.findById(id);
   res.status(200).send(user)
   }
   catch(error){
    console.log(error)
    res.status(404).send()
   }  
})

authorsRouter.post("/", async (req, res) => {
    
   try{
    const newUser = new User(req.body)
    await newUser.save();
    res.status(201).send(newUser)} 
    catch(error){
        console.log(error)
        res.status(404).send()
    }
})
authorsRouter.put("/:id", async (req, res) => {

    try{
        const {id} = req.params
        const userUp = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).send(userUp)
    }
    catch(error){
       console.log(error)
       res.status(404).send()
    }
})

 authorsRouter.delete("/:id", async (req, res) => {

     try{
         const {id} = req.params
         const user = await User.findByIdAndDelete(id)
         res.status(201).send(user)
     }
     catch(error){
        console.log(error)
        res.status(404).send()
     }
 })

export default authorsRouter