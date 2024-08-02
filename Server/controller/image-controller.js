import grid from "gridfs-stream"
import mongoose from "mongoose";
const conn = mongoose.connection
let gfs;
let gridfsbucket;
conn.once('open',() => {
    gridfsbucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName : 'fs'
    })
    gfs = grid(conn.db,mongoose.mongo)
    gfs.collection("fs")
})
const url = "http://localhost:5000"
export const uploadFile = async (req,res) => {
    try{
        if(!req.file){
            return res.status(404).json({msg : "No file Recieved"});
        }
        const imgurl = `${url}/file/${req.file.filename}`
        return res.status(200).json({imgurl})
    }
    catch(e){
        return res.status(500).json({msg : "Unknown error in uploading file"})
    }
}
export const getImage = async (req,res) => {
    try{
        const file = await gfs.files.findOne({filename : req.params.filename})
        const readstream = gridfsbucket.openDownloadStream(file._id)
        readstream.pipe(res)
    }
    catch(e){
        return res.status(500).json({msg : "Error in getIamge api" + e.message})
    }
}
 