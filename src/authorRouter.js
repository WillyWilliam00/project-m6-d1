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
   res.status(200).json(user)
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
    res.status(201).json(newUser)} 
    catch(error){
        console.log(error)
        res.status(404).send()
    }
})
authorsRouter.put("/:id", async (req, res) => {

    try{
        const {id} = req.params
        const userUp = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(userUp)
    }
    catch(error){
       console.log(error)
       res.status(404).send()
    }
})

 authorsRouter.delete("/:id", async (req, res) => {

     try{

        const deletion = await User.findByIdAndDelete(req.params.id)

        // se l'oggetto da eliminare è stato già eliminato allora ritorna status 400
        !deletion ? res.status(400).send() : res.status(204).send() // codice 204 no content
     }
     catch(error){
        console.log(error)
        res.status(404).send()
     }
 })

export default authorsRouter