import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu,MenuItem, styled } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';
import { AccountCon } from '../../../context/Provider';
const MenuOpt = styled(MenuItem)`
    font-size : 14px;
    padding : 15px 60px 5px 24px;
    color : #4A4A4A
`
const HeadMenu = (props) => {
    const [open,setopen] = useState(false)
    const {acc,setact,socket,set} = useContext(AccountCon)
    function handleClose(){
        setopen(null)  
    }
    function Logout(){
      socket.current.emit("unconnect",acc)
      socket.current.on('getUsers',users => {
        setact(users)
      })
      setopen(null)
      set(null)
    }
    return ( <>
        <MoreVertIcon onClick = {(e) => {setopen(e.currentTarget)}} />
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical : "bottom",
          horizontal : "center"

        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        transformOrigin={{
          vertical : "top",
          horizontal : "right"
        }}
      >
            <MenuOpt onClick={() => {handleClose();props.setopen(true);}}>Profile</MenuOpt>
            <MenuOpt onClick={handleClose}>My account</MenuOpt>
            <MenuOpt onClick={Logout}>Logout</MenuOpt>
      </Menu>
    </> );
}
 
export default HeadMenu;