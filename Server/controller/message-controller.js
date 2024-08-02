import Message from "../modal/message.js"
import Convo from "../modal/conversation.js";
export const newMessage = async (req,res) => {
    try{
        const newmes = new Message(req.body);
        await newmes.save();
        await Convo.findByIdAndUpdate(req.body.convoid,{message : req.body.value})
        return res.status(200).json({msg : "New message Added"});

    }
    catch(e){
        return res.status(500).json({msg : "Error in messsage-controller"})
    }
}
export const getMessage = async (req,res) => {
    try{
        const messages = await Message.find({convoid : req.params.id});
        return res.status(200).json(messages)
    }
    catch(e){
        return res.status(500).json({msg : "Error in messsage-controller get message"})
    }
}