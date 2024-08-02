import { Box, Drawer, Typography, styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./profile";

const Header = styled(Box)`
    background : #008069;
    height : 107px;
    color : #FFF;
    display : flex;
    & > svg, & > p {
        margin-top : auto;
        padding : 15px;
        font-weigth : 600;
    }
`
const Body = styled(Box)`
    background : #ededed;
    height : 85%;
`
const Infodraw = (props) => {
    const Drawstyle = {
        left : 20,
        top : 17,
        height : "95%",
        width : "29%",
        boxShadow : "none"
    }
    return(
        <Drawer 
            open = {props.open}
            onClose={() => {props.setopen(false)}}
            PaperProps={{sx : Drawstyle}}
            style={{zIndex : 1500}}
        >
        <Header>
            <ArrowBackIcon onClick = {() => {props.setopen(false)}} fontSize="medium" />
            <Typography fontSize={"18px"}>Profile</Typography>
        </Header>
        <Body>
            <Profile />
        </Body>
        </Drawer>
    )
}
 
export default Infodraw;