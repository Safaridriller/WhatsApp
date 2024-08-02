import { Dialog , Box, styled} from "@mui/material"
import Menu from "./menu/menu"
// import Empty from "./chats/Empty"
import { useContext} from "react"
import { AccountCon } from "../../context/Provider"
import Chatbox from "./chats/chatbox"
import LoginDia from "../accounts/logindia"
const Component = styled(Box)`
    display : flex;
    height : 100%    
`
const Left = styled(Box)`
    min-width : 450px    
`
const Right = styled(Box)`
    width : 73%;
    min-width : 300px;
    height : 100%;
    border-left : 1px solid rgba(0,0,0,0.14); 
    `
const ChatDialog = () => {
    const {acc} = useContext(AccountCon)
    const DialogStyle = {
        height : "95%",
        width : "100%",
        margin : "20px",
        maxWidth : "100%",
        maxHeight : "100%",
        boxShadow : "none",
        overflow : "hidden",
        borderRadius : "0"

    }
    return(
        <div>
            {acc ? <Dialog open = {true} PaperProps={{sx : DialogStyle}} hideBackdrop = {true} maxWidth = "md">
            <Component>
                <Left>
                    <Menu />
                </Left>
                <Right>
                    <Chatbox />
                </Right>
            </Component>
        </Dialog> : <LoginDia />}
        </div>
    )
}
export default ChatDialog