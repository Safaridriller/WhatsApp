import { Box } from "@mui/material"
import Header from "./header"
import Search from "./search"
import Conversations from "./conversations"
import { useState } from "react"

const Menu = () => {
    const [curr,setcurr] = useState("")
    return (
        <Box>
            <Header />
            <Search setcurr = {setcurr} />
            <Conversations curr = {curr} />
        </Box>
    )
}
export default Menu