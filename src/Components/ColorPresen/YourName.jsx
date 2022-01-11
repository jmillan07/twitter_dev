import { ReactComponent as BigLogo } from '../../Utilites/logo.svg'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { updateData } from '../../Services/Operation'
import { userContext } from '../../context/userProvider'
import './Name.css';

export default function YourName (){

    const [userName, setUserName] = useState("")
    const [color, setColor] = useState("rojo")
    const {user} = useContext(userContext)


    const handleUserName =()=>{
        if(userName){
            user.displayName = userName
            updateData("users", user.uid, { name: userName, color : color })
        }
    }

    const handleCambioUserName =(e)=>
    { 
        setUserName(e.target.value)
    }

    return (
        <div className="container">
            <BigLogo/>
            <div className="cuenta">
            <h1>Welcome Name</h1>
            <input type='text' placeholder='Type your Name' value={userName} onChange= {handleCambioUserName}></input>
            <p>Select your favorite color ddd</p>
            <div className='contenedor-color'>
            <div className='colorA' key={1} id={"rojo"} onClick={(x) => (setColor(x.target.id))}/>
            <div className='colorB' key={2} id={"naranja"} onClick={(x) => (setColor(x.target.id))}/>
            <div className='colorC' key={3} id={"amarillo"} onClick={(x) => (setColor(x.target.id))}/>
            <div className='colorD' key={4} id={"verde"} onClick={(x) => (setColor(x.target.id))}/>
            <div className='colorF' key={5} id={"azul"} onClick={(x) => (setColor(x.target.id))}/>
            <div className='colorG' key={6} id={"morado"} onClick={(x) => (setColor(x.target.id))}/>
            </div>
            <Link to='/viewtwitter' onClick={handleUserName}> Entrar</Link>
            </div>
        </div>
    )
}