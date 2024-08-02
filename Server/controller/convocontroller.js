import Convo from "../modal/conversation.js";

export const addConvo = async (req,res) => {
    try{
        const senderid = req.body.senderid;
        const recid = req.body.recieverid;
        let exist;
        if(senderid === recid){
            exist =  await Convo.findOne({members : [senderid,recid] })
        }
        else{
        exist =  await Convo.findOne({members : { $all : [recid,senderid]} })
        }
        if(exist) {
            return res.status(200).json({msg : "Convo already exists"})
        }
        const newcon = new Convo({
            members : [senderid,recid],
        })
        await newcon.save()
        return res.status(200).json({msg : "Convo successfully generated"})
    }
    catch(e){
        return res.status(500).json({msg : "Some error has occured in adding data in db"});
    }
}
export const getConvo = async (req,res) => {
    try{
        const senderid = req.body.senderid;
        const recid = req.body.recid;
        let conversation;
        if(senderid === recid){
            conversation = await Convo.findOne({members :  [senderid,recid]})
        }
        else{
        conversation = await Convo.findOne({members : {$all : [senderid,recid]}})
        }
        return res.status(200).json(conversation)
    }
    catch(e){
        return res.status(500).json({msg : "Some error has occured in getting convo in db"});
    }
}