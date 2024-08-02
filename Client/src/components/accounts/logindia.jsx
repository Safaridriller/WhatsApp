import { Dialog,Box, styled ,List,ListItem} from "@mui/material"
import {qrCodeImage} from "../../costants/data"
import {GoogleLogin} from "@react-oauth/google"
import {jwtDecode} from "jwt-decode"
import { useContext } from "react"
import { AccountCon } from "../../context/Provider"
import { AddUser } from "../../service/api"

const Boxcomp = styled(Box)`
    display : flex;
`
const Diastyle = {
    height : "96%",
    marginTop : "12%",
    width : "60%",
    maxWidth : "100%",
    maxHeight : "100%",
    boxShadow : "hidden"
}
const SList = styled(List)`
    & > li {
        padding : 0;
        margin-top : 15px;
        font-size : 18px;
        color : #4a4a4a
    }    
`
const LoginDia = () => {
    const {set} = useContext(AccountCon)
    const success = async (res) => {
        const decoded = jwtDecode(res.credential)
        decoded["updatedAt"] = Date.now()
        decoded["status"] = "Hey There! I am using Whatsapp"
        set(decoded)
        await AddUser(decoded)
    }
    const error = (res) => {
        console.log(res);
    }
    return (
        <Dialog open = {true} PaperProps={{sx : Diastyle}} hideBackdrop = {true}>
            <Boxcomp>
                <Box padding={"56px 0 56px 56px"}>
                <p style={{fontSize : "26px",color : "#525252",fontWeight : 300,fontFamily : "inherit",marginBottom : "25px"}}>To use Whatsapp on your computer</p>
                <SList>
                    <ListItem>1. Open Whatsapp on your phone</ListItem>
                    <ListItem>2. Tap Menu Settings and select Whatsapp Web</ListItem>
                    <ListItem>3. Scan the given QR Code</ListItem>
                </SList>
                </Box>
                <Box style = {{position : "relative"}}>
                    <img style={{height : 264,width : 264, margin : "50px 0 0 70px"}} src={qrCodeImage} alt="QR" />
                    <Box style = {{position : "absolute",top : "50%",transform : "translateX(35%)"}}>
                        <GoogleLogin onSuccess={success} onError={error} />
                    </Box>
                </Box>
            </Boxcomp>
        </Dialog>
    )
}
export default LoginDia