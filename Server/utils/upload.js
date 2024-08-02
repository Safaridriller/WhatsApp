import multer from "multer"
import {GridFsStorage} from "multer-gridfs-storage"
import dotenv from "dotenv"
dotenv.config()

const UserName = process.env.DB_USER
const Pass = process.env.DB_PASS
const storage = new GridFsStorage({
    url : `mongodb+srv://${UserName}:${Pass}@whatsappclone.u5iretj.mongodb.net/?retryWrites=true&w=majority&appName=WhatsappClone`,
    file : (req,file) => {
        const match = ["image/png","image/jpeg","image/jpg"]
        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
            bucketName : "photos",
            filename : `${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({storage})