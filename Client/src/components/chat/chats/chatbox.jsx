import { Box } from "@mui/material";
import ChatHeader from "./chatheader";
import Messages from "./messages";
import { AccountCon } from "../../../context/Provider";
import { useContext, useEffect, useState } from "react";
import Empty from "./Empty"
import { getConvo} from "../../../service/api";

const Chatbox = () => {
    const {person,acc,newUser} = useContext(AccountCon);
    const [convo,setcon] = useState({})
    useEffect(() => {
        const getCondet = async () => {
            let data = await getConvo({senderid : acc.sub,recid : person.sub})
            setcon(data)
        }
        getCondet();
    },[person,acc,newUser])
    return (

    Object.keys(person).length !== 0 ? 
        <Box height={"75%"}>
        <ChatHeader user = {person} />
        <Messages user = {person} conver = {convo}/>
        </Box>
    : <Empty />
    ) ;
}
 
export default Chatbox;