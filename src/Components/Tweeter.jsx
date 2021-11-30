import React from 'react'
import { useInput } from '../Services/hooks/useInput'
import { useState } from 'react'
import { addData } from '../Services/Operation'
export const Tweeter = () =>{

    
    // const [twetter, setTwetter] = useState("")
    // const [autor, setAutor] = useState("")

    // const handleTwitter = (e)=> setTwetter(e.target.value)
    // const handleAutor = (e)=> setAutor(e.target.value)


    const [twetter, handleTwitter] = useInput()
    const [autor, handleAutor] = useInput()

    const handleSetdata =() =>{
        const devtwee ={
            tweet :  twetter,
            users : autor
        }
        addData("tweets_dev",devtwee)
    }

    return (
        <div>
            <h1>Twitter Developer</h1>
            <textarea onChange= {handleTwitter} value = {twetter} type='text'></textarea>
            <input onChange= {handleAutor} value = {autor} type='text'></input>
            <button onClick={handleSetdata} >Enviar</button>
        </div>
    )
}