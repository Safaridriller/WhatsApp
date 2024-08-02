import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const UserName = process.env.DB_USER
const Pass = process.env.DB_PASS
const Connection = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${UserName}:${Pass}@whatsappclone.u5iretj.mongodb.net/?retryWrites=true&w=majority&appName=WhatsappClone`)
        console.log("Database connected Sucessfully");
    }
    catch(e){
        console.log("Connection Error for Database " + e.message);
    }
}
export default Connection