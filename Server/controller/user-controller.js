import User from "../modal/user.js";
import dotenv from "dotenv"
dotenv.config()
export const addUser = async (req,res) => {
    try{
        let exist = await User.findOne({sub : req.body.sub});
        if(exist){
            return res.status(200).json({msg : "User already exists"})
            
        }
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json({msg : "User added"});
    }   
    catch(e){
        return res.status(500).json({msg : "Some error has occured in user-controller.js"});
    }
}
export const getUsers = async (req,res) => {
    try{
        if(req.body.sub === process.env.MAIN_SUB){
            const users = await User.find({});
            return res.status(200).json(users)
        }
        else{
            const user1 = await User.findOne({sub : req.body.sub})
            const user2 = await User.findOne({sub : process.env.MAIN_SUB})
            const users = [user1,user2];
            return res.status(200).json(users)
        }
        
    }
    catch(e){
        return res.status(500).json({msg : "Some error has occured while fetching data"})
    }
}
export const updateUser = async(req,res) => {
    try{
        let senderid = req.body.senderid;
        let recid = req.body.recid;
        await User.updateOne({sub : senderid},{updatedAt : Date.now()})
        await User.updateOne({sub : recid},{updatedAt : Date.now()})
        const rec = await User.findOne({sub : recid})
        const send = await User.findOne({sub : senderid})

        const updates = [rec,send]
        return res.status(200).json(updates)
    }
    catch{
        return res.status(500).json({msg : "Some error has occured while fetching data"})
    }
}
export const updateStatus = async (req,res) => {
    try{
        const newStatus = await User.updateOne({sub : req.body.sub},{status : req.body.newStat})
        const newUser = await User.findOne({sub : req.body.sub})
        return res.status(200).json(newUser)
    }
    catch{
        return res.status(500).json({msg : "Error occured  while updating status"})
    }

}
export const getStatus = async (req,res) => {
    try{
        let sub = req.params.data;
        const Status = await User.findOne({sub : sub})
        return res.status(200).json(Status)
    }
    catch{
        return res.status(500).json({msg : "Error occured  while getting status"})
    }

}
