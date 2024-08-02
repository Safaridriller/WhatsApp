import { useState } from "react";
import { useEffect } from "react";
import { Getuser } from "../../../service/api";
import Conversation from "./conversation";
import { Box, Divider, styled } from "@mui/material";
import { useContext } from "react";
import { AccountCon } from "../../../context/Provider";
const Conversations =  ({curr}) => {
    const {acc,socket,setact,accusers,newmess} = useContext(AccountCon)
    const [users,set] = useState([])
    const Component = styled(Box)`
        height : 81vh;
        overflow : overlay;
    `
    const Divide = styled(Divider)`
        margin : 0 0 0 70px;
        background : #e9edef;
        opacity : 0.6;
    `
    
    useEffect(() => {
        const fetchdata = async () => {
           let response = await Getuser(acc);
           console.log(response.length);
           response.sort((a,b) => a.updatedAt < b.updatedAt ? 1 : -1)
           const filter = response.filter(user => user.name.toLowerCase().includes(curr.toLowerCase()))
           set(filter)
        };
        fetchdata()
    },[curr,acc,accusers,newmess])
    useEffect(() => {
        socket.current.emit('addUsers',acc)
        socket.current.on('getUsers',users => {
            setact(users)
        })
    },[acc,socket,setact,newmess])
    
    return ( <Component>
        {users.map(user => (
         <>
                <Conversation user = {user} />
                <Divide />
            </>
        ))}
    </Component> );
}
 
export default Conversations;