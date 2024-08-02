import { Box, styled, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountCon } from "../../../context/Provider";
import { getConvo, setConvo } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";
const Conversation = (props) => {
    const {setperson,acc,newmess,setNewUser} = useContext(AccountCon)
    const [latestMessage,setLatest] = useState({})
    const getUser = async () => {
        setperson(props.user);
        console.log("called setCon");
        await setConvo({senderid : acc.sub, recieverid : props.user.sub})
        setNewUser(prev => !prev)
    }
    const Component = styled(Box)`
        display : flex;
        height : 45px;
        padding : 13px 0;
        cursor : pointer;
    `
    const Image = styled("img")({
        width : 50,
        height : 50,
        borderRadius : "50%",
        padding : "0 14px"
    })
    const TimeStamp = styled(Typography)`
        font-size : 12px;
        margin-left : auto;
        color : #00000099;
        margin-right : 20px;
    `
    const Text = styled(Typography)`
        font-size : 14px;
        color : rgba(0,0,0,0.6);
        margin-right : 20px;
    `
    useEffect(() => {
        const getDetails = async () => {
            const data = await getConvo({senderid : acc.sub,recid : props.user.sub});
            setLatest({value : data?.message , timestamp : data?.updatedAt})
        }
        getDetails()
    },[newmess,acc.sub,props.user.sub])
    return ( 
    <Component onClick={() => getUser()}>
        <Box>
            <Image src={props.user.picture} alt="dp" />
        </Box>
        <Box style = {{width : "100%"}}>
            <Box style = {{display : "flex"}}>
                <Typography>{props.user.name}</Typography>
                {
                    latestMessage?.value && <TimeStamp>{formatDate(latestMessage?.timestamp)}</TimeStamp>
                }
            </Box>
            <Box>
                <Text>{latestMessage?.value?.includes('localhost') ? "media" : latestMessage?.value}</Text>
            </Box>
        </Box>
        
    </Component> );
}

 
export default Conversation;