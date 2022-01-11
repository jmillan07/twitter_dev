import React from 'react'
import { useState,useEffect } from 'react'
import { onSnapshot, orderBy, query } from 'firebase/firestore'
import { getCollectionRef } from '../../Services/Operation'
import { Tweet } from './TwitterListDef.jsx'

export const TweeterList = () =>{
    
    const [twelist, setTwelist] = useState([])

    useEffect(
        async ()=>{
            const q = query(getCollectionRef("tweets_dev"), orderBy("date", "desc"));
            const unSuscribe = await onSnapshot(q,(data)=>{
                setTwelist(data.docs.map(doc=> {
                    return {...doc.data(),id:doc.id}
                }))
            })
            return ()=>{unSuscribe()}
        }
        ,[])    

    return (
        <div className='containerC'>
            {
                twelist.map((tweet,index)=> {
                    return <Tweet tweet = {tweet} key={index}/>
                })
            }
        </div>
    )
} 
