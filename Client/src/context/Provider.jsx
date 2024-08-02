import {createContext, useEffect, useRef, useState} from "react"
import {io} from "socket.io-client"
export const AccountCon = createContext(null)
const AccountProvider = ({children}) => {
    const [acc,set] = useState()
    const [person,setperson] = useState({})
    const [accusers,setact] = useState([])
    const [newmess,setnewmes] = useState(false)
    const [loggedUsers,setLogged] = useState([])
    const [newUser,setNewUser] = useState(false)
    const socket = useRef()
    useEffect(() => {
        socket.current = io('ws://localhost:9000')
    },[])
    return (
        <AccountCon.Provider value = {{
            acc,
            set,
            person,
            setperson,
            accusers,
            setact,
            socket,
            newmess,
            setnewmes,
            loggedUsers,
            setLogged,
            newUser,
            setNewUser
        }}>
            {children}
        </AccountCon.Provider>
    )
}
export default AccountProvider