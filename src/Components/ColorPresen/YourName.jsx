import { ReactComponent as BigLogo } from '../../Utilites/logo.svg'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { deleteData, updateData, getDataById } from '../../Services/Operation'
import { userContext } from '../../context/userProvider'
import './Name.css';

export default function YourName (){

    const [userName, setUserName] = useState("")
    const {user} = useContext(userContext)


    const handleUserName =()=>{
        //console.log("estoy haciuendo prueba")
        if(userName){
            user.displayName = userName
            updateData("users", user.uid, { name: userName })
        }
        
        //console.log(user)
    }

    const handleCambioUserName =(e)=>
    { 
        setUserName(e.target.value)
        //console.log(userName)
    }
    const handleTwitts =()=>{
        //console.log("hola")
        // const navegate = useNavigate()
        // navegate("/twitter")
        
    }

    const handleColor = (e)=>{
        //console.log(e.target.outerHTML)
    }

    return (
        <div className="container">
            <BigLogo/>
            <div className="cuenta">
            <h1>Welcome Name</h1>
            <input type='text' placeholder='Type your Name' value={userName} onChange= {handleCambioUserName}></input>
            <p>Select your favorite color ddd</p>
            <div className='contenedor-color'>
                <div onClick={handleColor} className='colorA'></div>
                <div onClick={handleColor} className='colorB'></div>
                <div onClick={handleColor} className='colorC'></div>
                <div onClick={handleColor} className='colorD'></div>
                <div onClick={handleColor} className='colorF'></div>
                <div onClick={handleColor} className='colorG'></div>
            </div>
            <Link to='/viewtwitter' onClick={handleUserName}> Entrar</Link>
            </div>
        </div>
    )
}