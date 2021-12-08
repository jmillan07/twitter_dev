import {signIn} from '../Services/auth'
import { useContext } from 'react'
import { userContext } from '../context/userProvider'
//import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const SignIn = ()=>
 {
     const navegate = useNavigate()
     const {setUser} = useContext(userContext)
     const handleClick= async ()=>{
         const user= await signIn()
         navegate("/present")
         setUser(user) 
         
     }
    return (
        <>
    {/* <Link to='/present'>
    </Link> */}
        <button onClick={handleClick}>Sign In with Google</button>
    </>
    )
 }   

export default SignIn