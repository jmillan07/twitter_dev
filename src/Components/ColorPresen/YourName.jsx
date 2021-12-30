import { ReactComponent as BigLogo } from '../../Utilites/logo.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import './Name.css';

export default function YourName (){

    const handleTwitts =()=>{
        //console.log("hola")
        // const navegate = useNavigate()
        // navegate("/twitter")
        
    }

    const handleColor = (e)=>{
        console.log(e.target.outerHTML)
    }

    return (
        <div className="container">
            <BigLogo/>
            <div className="cuenta">
            <h1>Welcome Name</h1>
            <input type='text' placeholder='Type your Name'></input>
            <p>Select your favorite color ddd</p>
            <div className='contenedor-color'>
                <div onClick={handleColor} className='colorA'></div>
                <div onClick={handleColor} className='colorB'></div>
                <div onClick={handleColor} className='colorC'></div>
                <div onClick={handleColor} className='colorD'></div>
                <div onClick={handleColor} className='colorF'></div>
                <div onClick={handleColor} className='colorG'></div>
            </div>
            <Link to='/viewtwitter'> Entrar</Link>
            </div>
        </div>
    )
}