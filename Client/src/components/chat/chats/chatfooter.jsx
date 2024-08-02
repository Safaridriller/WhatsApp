import { Box, InputBase, styled } from "@mui/material";
import EmojiPicker from 'emoji-picker-react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { useEffect, useState } from "react";
import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
    height : 66px;
    background : #ededed;
    display : flex;
    align-items : center;
    padding : 0 15px;
    & > *{
        margin : 5px;
        color : #919191;
    }
`
const Wrapper = styled(Box)`
    background-color : white;
    border-radius : 8px;
    width : calc(94%);
`
const Input = styled(InputBase)`
    width : 100%;
    padding : 20px;
    height : 20px;
    font-size : 14px;
`
const ChatFooter = ({sendtext,setin,value,file,setfile,setimage}) => {
    const [open,setOpen] = useState(false)
    const onFileChange = (e) => {
        setfile(e.target.files[0])
        setin(e.target.files[0].name)
    }
    useEffect(()=>{
        const getImage = async () => {
            if(file){
                const data = new FormData()
                data.append("name",file.name);
                data.append("file",file)
                let response = await uploadFile(data)
                setimage(response.data)
            }
        }
        getImage();
    },[file,setimage])
    return ( <Container >
        <EmojiPicker open = {open} style = {{width : "100%"}} onEmojiClick={(e) => setin(prev => prev + e.emoji)}/>
        <EmojiEmotionsOutlinedIcon onClick = {() => {setOpen(prev => !prev)}}/>
        
        <label htmlFor="fileInput">
            <LinkOutlinedIcon />
        </label>
        <input type="file"  style={{display : "none"}} id = "fileInput" onChange={(e) => onFileChange(e)}/>
        <Wrapper>
            <Input placeholder="Type a Message" onChange={(e) => setin(e.target.value)} onKeyDown={(e) => sendtext(e)} 
            value={value}/>
        </Wrapper>
        <MicOutlinedIcon />
    </Container > );
}
 
export default ChatFooter;