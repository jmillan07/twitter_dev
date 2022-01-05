import {signIn} from '../Services/auth'
import { useContext } from 'react'
import { userContext } from '../context/userProvider'
import { ReactComponent as GoogleLogo } from '../Utilites/Google__G__Logo.svg'
//import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//import './siging.css';


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
        <div className='sigInGo'>
            <GoogleLogo className='prueba'/>
            <button className='buttonGo' onClick={handleClick}>Sign In with Google</button>
        </div>
    </>
    )
 }   

export default SignIn