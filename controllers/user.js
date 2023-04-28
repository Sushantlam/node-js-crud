const user = require("../models/user")

async function createUser(req, res) {
    const {firstName, lastName, email } = req.body
    
   
    try {
       
        const result = await user.create({
            firstName: firstName,
            lastName:lastName,
            email: email,
            
        })
        res.status(201).json(result)
        
} catch (error) {
        res.status(402).json({ error: error.message })
    }}

    async function getUser(req,res){
        try {
            const allUser= await user.find({})
            return res.status(201).json(allUser)
            
        } catch (error) {
            return res.status(402).json({ error: error.message })
  
        }
    }

    async function getUserById(req,res){
        const getById= await user.findById(req.params.id)
        if(!getById)
        {return res.status(401).json({error: error.message})}
        return res.status(201).json(getById)
    }

    async function deleteUserById(req,res){
        const getById= await user.findByIdAndDelete(req.params.id)
        if(!getById)
        {return res.status(401).json({error: error.message})}
        return res.status(201).json(getById)
    }

    async function updateUserById(req,res){
        const getById= await user.findByIdAndUpdate(req.params.id, {new:true})
        if(!getById)
        {return res.status(401).json({error: error.message})}
        return res.status(201).json(getById)
    }



module.exports = { createUser, getUser, getUserById , deleteUserById, updateUserById}