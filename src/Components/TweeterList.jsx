import React from 'react'
import { useState,useEffect } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { getCollection, deleteData } from '../Services/Operation'
export const TweeterList = () =>{
    
    const [twelist, setTwelist] = useState([])

    useEffect(
        async ()=>{
            const unSuscribe = await onSnapshot(getCollection("tweets_dev"),(data)=>{
                setTwelist(data.docs.map(doc=> {
                    return {...doc.data(),id:doc.id}
                }))
            })
            return ()=>{unSuscribe()}
        }
        ,[])    

        const handleElimina =(id)=>{
            deleteData("tweets_dev",id)
        }

        const handleConteo =()=>{
            let like = like + 1 
        }
    return (
        <div>
            <h1>Lista</h1>
            {
                twelist.map((tweet)=> {
                    return <div>
                                <p>{tweet.tweet}</p>
                                <h1>Usuario : {tweet.users}</h1>
                                <button onClick={()=>handleElimina(tweet.id)} >Eliminar</button>
                                <button onClick={handleConteo}>Likes</button>
                            </div>
                })
            }
        </div>
    )
}