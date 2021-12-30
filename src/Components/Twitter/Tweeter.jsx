import React, { useContext } from "react";
import { useInput } from '../../Services/hooks/useInput'
import { useState } from 'react'
import { addData } from '../../Services/Operation'
import { ReactComponent as BigLogo } from '../../Utilites/logo_mini.svg'
import { userContext } from '../../context/userProvider'
import './Style.css';

export const Tweeter = () =>{

    const [twetter, handleTwitter, clearInput] = useInput()
    const [autor, handleAutor] = useInput()


    const {user} = useContext(userContext)
    //console.log("esto es aqui javi", user.displayName)

    const handleSetdata =() =>{
        const devtwee ={
            tweet :  twetter,
            users : user.displayName,
            correo : user.email,
            likes: 0,
            uid: user.uid,
            photo: user.photoURL,
            date: Date.now(),
            userLikes : null+","
        }
        addData("tweets_dev",devtwee)
        clearInput()
    }
//console.log("esto es la foto",user.photoURL)
    return (
        <div className='body'>
            <div className='cabecera'>
            <img src={`${user.photoURL}`} alt="imagen de el perfil"/>
                <BigLogo/>
                <h2 className='titulo'>DEVS_UNITED</h2>
            </div>
            <div className='card'>
                <div className='contenedorTwitter'>
                <img className='photoPerfil' src={`${user.photoURL}`} alt="imagen de el perfil2"/>
                <textarea className='cajaTwitter' onChange= {handleTwitter} value = {twetter} type='text' placeholder='What are your thinking?'/>
            </div>
            <p>200 max</p>
            {/* <input onChange= {handleAutor} value = {autor} type='text'></input> */}
            <button className='buttonEnvia' onClick={handleSetdata} >Post</button>
            </div>
        </div>
    )
}