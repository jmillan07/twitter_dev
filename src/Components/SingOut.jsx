import { signOutn } from '../Services/auth'
import { useNavigate } from "react-router-dom";

const Signout = ()=>{
    const navegate = useNavigate()
    const handleOut = ()=>{
        signOutn()
        navegate("/Presentacion")
    }
    return (
        <button onClick={handleOut}>Sign Out</button>
    )
}

export default Signout