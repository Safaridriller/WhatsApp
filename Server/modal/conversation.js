import mongoose from "mongoose";
const ConvoSchema = new mongoose.Schema({
    members : Array,
    message : String,
},
{
    timestamps : true
})
const Convo = mongoose.model("Convo",ConvoSchema);
export default Convo;