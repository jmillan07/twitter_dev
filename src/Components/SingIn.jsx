import {signIn} from '../Services/auth'
import { useContext } from 'react'
import { userContext } from '../context/userProvider'
const SignIn = ()=>
 {
     const {setUser} = useContext(userContext)
     const handleClick= async ()=>{
         const user= await signIn()
         setUser(user) 
     }
    return (<button onClick={handleClick}>Sign In with Google</button>)
 }   

export default SignIn