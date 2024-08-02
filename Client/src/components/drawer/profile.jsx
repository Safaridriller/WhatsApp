import { Box, Input, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import {AccountCon} from "../../context/Provider"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CheckIcon from '@mui/icons-material/Check';
import { getStatus, updateStatus } from "../../service/api";
const ImageCon = styled(Box)`
    display : flex;
    justify-content : center;

`
const Image = styled("img")({
    width : 200,
    height : 200,
    borderRadius : "50%",
    padding : "25px 0"
})

const Name = styled(Box)`
    background : #FFF;
    padding : 12px 30px 2px;
    box-shadow : 0 1px 3px rbga(0,0,0,0.08);
`
const Status = styled(Typography)`
    margin : 14px 0px;
    color : #4A4A4A
`
const About = styled(Typography)`
    font-size : 13px;
        color : #009688;
        font-weight : 200;
`
const Desc = styled(Box)`
    padding : 15px 20px 28px 30px;
    & > p{
        font-size : 13px;
        color : #8696a0
    }
`
const Profile = () => {
    const {acc,set} = useContext(AccountCon)
    const [hide,sethide] = useState(true)
    const [stat,setStat] = useState()
    const save = async () => {
        const inp = document.getElementById("about-input")
        var newStat = inp.value
        if(!newStat){
            newStat = acc.status
        }
        let test = await updateStatus({sub : acc.sub,newStat})
        set(test)
        setStat(newStat)
        sethide(true)
    }
    useEffect(() => {
        const getstatus = async () => {
            let testing = await getStatus(acc.sub)
            setStat(testing.status)
        }
        getstatus()
    },[])
    return ( 
    <>
        <ImageCon>
            <Image src={acc.picture} alt="" />
        </ImageCon>
        <Name>
            <About style={{marginBottom : "20px"}}>Your Name</About>
            <Typography>{acc.name}</Typography>
        </Name>
        <Desc>
            <Typography>This name will be visible to your Whatsapp Contacts</Typography>
        </Desc>
        <Name>
            <About>About</About>
            <Box style = {{display : "flex"}}>
                {hide ? 
                <>
                    <Status id="profile-about" class="profile-about">{stat}</Status>
                    <ModeEditOutlineIcon  style={{marginLeft : "auto",fontSize : "small",marginTop : "auto" ,marginBottom : "20px"}}
                    onClick = {() => sethide(false)}/>
                </> 
                : 
                <> 
                    <Input type="text" id="about-input" placeholder={stat}/>
                    <CheckIcon style={{marginLeft : "auto",fontSize : "small",marginTop : "auto" ,marginBottom : "20px"}} onClick = {save}/>
                </>  
            }
            </Box>
        </Name>
    </> );
}
 
export default Profile;