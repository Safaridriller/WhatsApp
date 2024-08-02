import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Parent = styled(Box)`
    background : #fff;
    height : 49px;
    border-bottom : 1px solid #F2F2F2;
    display : flex;
    align-items : center;
`
const Wrapper = styled(Box)`
    background : #f0f2f5;
    position : relative;
    margin : 0 13px;
    width : 100%;
    border-radius : 10px;
`
const Icon = styled(Box)`
    position : absolute;
    height : 100%;
    padding : 5px 10px;
    color : #919191
`

const Input = styled(InputBase)`
    width : 100%;
    padding : 16px;
    height : 15px;
    padding-left : 65px;
    fonst-size : 14px
`
const Search = ({setcurr}) => {
    return (
        <Parent>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize="small"/>
                </Icon>
                <Input  placeholder="Search or Start a new chat" 
                onChange={(e) => {setcurr(e.target.value)}}/>
            </Wrapper>
        </Parent>
    )
}
 
export default Search;