import { Box, styled, Typography } from "@mui/material";
import { useContext } from "react";
import {AccountCon} from "../../../context/Provider"
import {formatDate,downloadMedia} from "../../../utils/common-utils";
import GetAppIcon from '@mui/icons-material/GetApp';
import { iconPDF } from "../../../costants/data";
const Own = styled(Box)`
    background : #dcf8c6;
    max-width : 60%;
    margin-left : auto;
    padding : 5px;
    width : fit-content;
    display : flex;
    border-radius  : 10px;
    word-break :
`
const Text = styled(Typography)`
    font-size : 14px;
    padding : 0 25px 0 5px;
`
const Time = styled(Typography)`
    font-size : 10px;
    color : #919191;
    margin-top : 6px;
    word-break : keep-all;
`
const Recieved = styled(Box)`
    background : #FFFFFf;
    max-width : 60%;
    margin-right : auto;
    padding : 5px;
    width : fit-content;
    display : flex;
    border-radius  : 10px;
    word-break :
`
const TextMessage = ({message}) => {
    return <>
        <Text>{message.value}</Text>
        <Time>{formatDate(message.createdAt)}</Time>
    </>
}
const ImageMessage = ({message}) => {
    return(
        <Box style = {{position : "relative"}}>
            {message?.value?.includes("pdf") 
            ? 
            <Box style = {{display : "flex"}}>
                <img src={iconPDF} alt="pdf" style={{width : 80}}/>
                <Typography style ={{fontSize : 14}}>{message.value.split("file-").pop()}</Typography>
            </Box> 
            : 
            <img style={{width : 300,height : "100%",objectFit : "cover"}} src={message.value} alt={message.value} />}
            <Time style={{position : "absolute",bottom : 0,right : 0}}>
                <GetAppIcon style={{marginRight : 10,border : "1px solid grey",borderRadius : "50%"}} fontSize="small" 
                onClick = {(e) => {downloadMedia(e,message.value)}} />
                {formatDate(message.createdAt)}
            </Time>
        </Box>
    )
}
const Message = ({message}) => {
    const {acc} = useContext(AccountCon)
    return ( 
        <>
            {acc.sub === message.senderid ? 
            <Own>
                {message.type === "file" ? <ImageMessage message={message}/> : <TextMessage message={message}/>}
            </Own> 
            : 
            <Recieved>
                {message.type === "file" ? <ImageMessage message={message}/> : <TextMessage message={message}/>}
            </Recieved> 
            }
        </>
        
    );
}
 
export default Message;