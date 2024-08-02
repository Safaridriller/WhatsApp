import express from "express"
import { addUser,getStatus,getUsers, updateStatus, updateUser } from "../controller/user-controller.js";
import { addConvo, getConvo } from "../controller/convocontroller.js";
import { getMessage, newMessage } from "../controller/message-controller.js";
import {getImage, uploadFile} from "../controller/image-controller.js";
import upload from "../utils/upload.js";
const route = express.Router();
route.post("/add",addUser);
route.post("/users",getUsers);
route.post("/conversation/add",addConvo)
route.post("/conversation/get",getConvo)
route.post("/message/add",newMessage)
route.get("/message/get/:id",getMessage)
route.post("/file/upload",upload.single("file"),uploadFile)
route.get("/file/:filename",getImage)
route.patch("/update",updateUser)
route.patch("/status",updateStatus)
route.get("/getStatus/:data",getStatus)
export default route