import { useContext, useState } from "react"
import { AccountCon } from "../../../context/Provider"
import { Box, styled } from "@mui/material"
import ChatIcon from '@mui/icons-material/Chat';

import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import HeadMenu from "./HeaderMenu";
import Infodraw from "../../drawer/infodraw";
const Component = styled(Box)`
    height : 44px;
    background : #ededed;
    padding : 8px 16px;
    display : flex;
    align-items : center;
`
const Wrap = styled(Box)`
    margin-left : auto;
    & > * {
        margin-left : 2px;
        padding : 8px
    }
`
const Image = styled("img")({
    height : 40,
    width : 40,
    borderRadius : "50%"
})
const Header = () => {
    const [opendraw,set] = useState(false)
    const {acc} = useContext(AccountCon)
    function toggledraw(){
        set(true)
    }
    return(
        <>
            <Component>
                <Image src={acc.picture} alt="dp" onClick={toggledraw} />
                <Wrap>
                    <HistoryToggleOffIcon />
                    <ChatIcon />
                    <HeadMenu setopen = {set} />
                </Wrap>
            </Component>
            <Infodraw open = {opendraw} setopen = {set}/>
        </>
    )
}
export default Header