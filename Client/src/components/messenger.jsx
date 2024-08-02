import {AppBar,Toolbar, styled} from "@mui/material"
import { useContext } from "react"
import { AccountCon } from "../context/Provider"
import LoginDia from "./accounts/logindia"
import ChatDialog from "./chat/chatdialog"
const LogHeader = styled(AppBar)`
    height : 220px;
    background-color : #00bfa5;
    box-shadow : none;
`
const Header = styled(AppBar)`
    height : 125px;
    background-color : #00A884;
    box-shadow : none;
`
const Messenger = () => {
    const {acc} = useContext(AccountCon)
    return (
        <>
        <div style={{height : "100vh",backgroundColor : "#DCDCDC"}}>
            {acc ?
            <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog /> 
            </>
             :
            <>
                <LogHeader>
                    <Toolbar>

                    </Toolbar>
                </LogHeader>
                <LoginDia />
            </>
            }
        </div>
        </>
    )
}
export default Messenger