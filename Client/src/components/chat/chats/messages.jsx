import { Box, styled } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import ChatFooter from "./chatfooter";
import {AccountCon} from "../../../context/Provider"
import { getMessages, newMessage, updateTime } from "../../../service/api";
import Message from "./message";
const Wrapper = styled(Box)`
    background-image : url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
    background-size : 50%;
    
`
const Component = styled(Box)`
    height : 78vh;
    overflow-y : scroll;
`
const Container = styled(Box)`
    padding : 1px 40px;
`
const Messages = ({user,conver}) => {
    const [text,setin] = useState("")
    const [messages,setmes] = useState([])
    
    const [file,setfile] = useState()
    const [image,setimage] = useState()
    const [incomingMessage,setIncomin] = useState(null)
    const scrollRef = useRef()
    const {acc,socket,newmess,setnewmes} = useContext(AccountCon)
    useEffect(() => {
        socket.current.on('getMessage',data => {
            setIncomin({
                ...data,
                createdAt : Date.now()
            })
        })
    },[socket])
    useEffect(() => {
        const messdetails = async () => {
            let data = await getMessages(conver?._id)
            setmes(data)
        }
        messdetails()
    
    },[conver,newmess,user,acc])
    useEffect(() => {
        scrollRef.current?.scrollIntoView({transition : "smooth"})
    },[messages])
    useEffect(() => {
        incomingMessage && conver?.members?.includes(incomingMessage.senderid) && 
        setmes(prev => [...prev,incomingMessage])
    },[incomingMessage,conver])
    const sendtext = async (e) => {
        let message = {};
        const code = e.keyCode || e.which;
        if(code === 13){
            if(!file){
                message = {
                    senderid : acc.sub,
                    recid : user.sub,
                    convoid : conver._id,
                    type : 'text',
                    value : text
                };
            }
            else{
                message = {
                    senderid : acc.sub,
                    recid : user.sub,
                    convoid : conver._id,
                    type : 'file',
                    value : image.imgurl
                }
            }

        socket.current.emit('sendMessage',message)
        if(acc.sub !== user.sub){
        await updateTime({senderid : acc.sub,recid : user.sub})
        }
        await newMessage(message)
        setin("")
        setimage()
        setfile()
        setnewmes(prev => !prev)
        }
    }
    return ( 
    <Wrapper>
        <Component>
            { messages && messages.map(message => {
                return <Container ref={scrollRef}>
                    <Message message = {message} />
                    </Container>
            })}
        </Component>
        <ChatFooter sendtext = {sendtext} setin = {setin} value = {text} file = {file} setfile = {setfile} setimage = {setimage}/>
    </Wrapper> );
}
 
export default Messages;