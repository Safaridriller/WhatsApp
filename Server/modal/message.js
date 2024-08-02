import mongoose from "mongoose";
const MessageSchema = new mongoose.Schema({
    convoid : String,
    senderid : String,
    recid : String,
    type : String,
    value : String
},{
    timestamps : true
})
const Message = mongoose.model("message",MessageSchema)
export default Message