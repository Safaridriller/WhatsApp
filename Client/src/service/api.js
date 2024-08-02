import axios from "axios";

export const AddUser = async (data) => {
    const url = "http://localhost:5000"
    try{
       return await axios.post(`${url}/add`,data)
    }
    catch(e){
        console.log("Error occured in Adduser API Call wiht message : ", e.message);
    }
}
export const Getuser = async (data) => {
    const url = "http://localhost:5000"
    try{
       const response = await axios.post(`${url}/users`,data)
       return response.data;
    }
    catch(e){
        console.log("Error occured in Adduser API Call wiht message : ", e.message);
    }
}
export const setConvo =  async (data) => {
    const url = "http://localhost:5000"
    try{
        return await axios.post(`${url}/conversation/add`,data)
     }
     catch(e){
         console.log("Error occured in Adduser API Call wiht message : ", e.message);
     }

}
export const getConvo = async (data) => {
    const url = "http://localhost:5000"
    try{
        let chatdata = await axios.post(`${url}/conversation/get`,data)
        return chatdata.data
     }
     catch(e){
        console.log("Error occured in Adduser API Call wiht message : ", e.message);
     }
}

export const newMessage = async (data) => {
    const url = "http://localhost:5000"
    try{
        return await axios.post(`${url}/message/add`,data)
         
     }
     catch(e){
        console.log("Error occured in Adduser API Call newMessage: ", e.message);
     }

}
export const getMessages = async (id) => {
    const url = "http://localhost:5000"
    try{
        let response = await axios.get(`${url}/message/get/${id}`)
        return response.data
    }
    catch(e){
        console.log("Error occured in Getmessage API");
    }
} 
export const uploadFile = async (data) => {
    const url = "http://localhost:5000"
    try{
        return await axios.post(`${url}/file/upload`,data)
    }
    catch(e){
        console.log("Error occured in Upload File API");
    }
} 
export const updateTime = async (data) => {
    const url = "http://localhost:5000"
    try{
        let updates =  await axios.patch(`${url}/update`,data)
        return updates.data
    }
    catch(e){
        console.log("Error occured in update user");
    }
} 
export const updateStatus = async (data) => {
    const url = "http://localhost:5000"
    try{
        let newStatus = await axios.patch(`${url}/status`,data)
        return newStatus.data
    }
    catch(e){
        console.log("Error occured in update Status");
    }
}
export const getStatus = async (data) => {
    const url = "http://localhost:5000"
    try{
        let Status = await axios.get(`${url}/getStatus/${data}`)
        return Status.data
    }
    catch(e){
        console.log("Error occured in get Status");
    }

}