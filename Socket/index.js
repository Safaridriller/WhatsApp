import {Server} from "socket.io"
const io = new Server(9000,{
    cors : {
        origin : 'http://localhost:3000'
    }
})
let users = [];
// let convos = [];
// const addConvo = (data,id) => {
//     !convos.some(convo => convo.senderid === data.senderid && convo.recid === data.recid) && convos.push({...data,id})
// }
const addUser = (userData,socketid) => {
    !users.some(user => user.sub == userData.sub) && users.push({...userData,socketid})
}
const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}
const removeUsers = (data) => {
    users = users.filter(user => user.socketid !== data)
}


io.on('connection',(socket) => {
    socket.on("addUsers",userData => {
        addUser(userData,socket.id)
        io.emit('getUsers',users)
    })

    socket.on('sendMessage',data => {
        const user = getUser(data.recid)
        if(user){
        io.to(user.socketid).emit('getMessage',data)
        }
    })
    // socket.on("addConvo",data => {
    //     addConvo(data,socket.id)
    //     const sender = getUser(data.senderid)
    //     io.to(sender.socketid).emit("getConvo",convos)
    // })
    socket.on('disconnect',data => {
        removeUsers(socket.id)
        io.emit('getUsers',users)
    })
    socket.on("unconnect",data => {
        removeUsers(socket.id)
        io.emit('getUsers',users)
    })
})