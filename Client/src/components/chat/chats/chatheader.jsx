import { Box, styled, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { AccountCon } from "../../../context/Provider";

const Header = styled(Box)`
    height : 44px;
    background : #ededed;
    padding : 8px 16px;
    display : flex;
    align-items : center;
`
const Image = styled("img")({
    height : 40,
    width : 40,
    borderRadius : "50%"
})
const Name = styled(Typography)`
    margin-left : 12px !important;
`
const Status = styled(Typography)`
    margin-left : 12px !important;
    font-size : 12px;
    color : rgb(0,0,0,0.6);
`
const Right = styled(Box)`
    margin-left : auto;
    & > svg {
        padding : 8px;
        font-size : 24px;
    }
`
const ChatHeader = ({user}) => {
    const {accusers} = useContext(AccountCon)
    return ( 
    <Header>
        <Image src={user.picture} alt="dp" />
        <Box>
            <Name>{user.name}</Name>
            <Status>{accusers?.find(person => person.sub === user.sub) ? "Online" : "Offline"}</Status>
        </Box>
        <Right>
            <SearchIcon />
            <MoreVertIcon />
        </Right>
    </Header> );
}
 
export default ChatHeader;