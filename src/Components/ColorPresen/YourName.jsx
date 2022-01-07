import { ReactComponent as BigLogo } from '../../Utilites/logo.svg'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { deleteData, updateData, getDataById } from '../../Services/Operation'
import { userContext } from '../../context/userProvider'
import './Name.css';

export default function YourName (){

    const [userName, setUserName] = useState("")
    const [color, setColor] = useState("rojo")
    const {user} = useContext(userContext)


    const handleUserName =()=>{
        //console.log("estoy haciuendo prueba")
        if(userName){
            user.displayName = userName
            updateData("users", user.uid, { name: userName, color : color })
            //updateData("tweets_dev", user.uid, { color : color })
        }
        
        //console.log(user)
    }

    const handleCambioUserName =(e)=>
    { 
        setUserName(e.target.value)
        //console.log(color)
        //console.log(userName)
    }
    const handleTwitts =()=>{
        //console.log("hola")
        // const navegate = useNavigate()
        // navegate("/twitter")
        
    }

    const handleColor = (e)=>{
        // let index = e.target.selectedIndex;
        // console.log(e.target.options[index].text)
        //setColor(e.target.value)
        //console.log(color);
    }

    return (
        <div className="container">
            <BigLogo/>
            <div className="cuenta">
            <h1>Welcome Name</h1>
            <input type='text' placeholder='Type your Name' value={userName} onChange= {handleCambioUserName}></input>
            <p>Select your favorite color ddd</p>
            {/* <div className='contenedor-color'>
                <div onClick={handleColor} className='colorA'></div>
                <div onClick={handleColor} className='colorB'></div>
                <div onClick={handleColor} className='colorC'></div>
                <div onClick={handleColor} className='colorD'></div>
                <div onClick={handleColor} className='colorF'></div>
                <div onClick={handleColor} className='colorG'></div>
            </div> */}

            {/* <form action="feeding" method="post"> */}
    {/* <select id="feedingHay" onChange={handleColor}> */}
    <div className='contenedor-color'>
    <div className='colorA' key={1} id={"rojo"} onClick={(x) => (setColor(x.target.id))}/>
    <div className='colorB' key={2} id={"naranja"} onClick={(x) => (setColor(x.target.id))}/>
    <div className='colorC' key={3} id={"amarillo"} onClick={(x) => (setColor(x.target.id))}/>
    <div className='colorD' key={4} id={"verde"} onClick={(x) => (setColor(x.target.id))}/>
    <div className='colorF' key={5} id={"azul"} onClick={(x) => (setColor(x.target.id))}/>
    <div className='colorG' key={6} id={"morado"} onClick={(x) => (setColor(x.target.id))}/>
    </div>
        {/* <div onClick={handleColor} className='colorB' value={color}>Como</div>
        <div onClick={handleColor} className='colorC' value={color}>Estas</div>
        <div onClick={handleColor} className='colorD' value={color}>Amigo</div>
        <div onClick={handleColor} className='colorF' value={color}>!</div>
        <div onClick={handleColor} className='colorG' value={color}>!</div> */}
    {/* </select> */}
        {/* </form> */}
            <Link to='/viewtwitter' onClick={handleUserName}> Entrar</Link>
            </div>
        </div>
    )
}