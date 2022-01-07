import React, { useContext, useState, useEffect } from "react";
import { deleteData, updateData, getDataById } from '../../Services/Operation'
import { userContext } from '../../context/userProvider'

export const Tweet = ({tweet})=>{
    
    const [voto, setVoto] = useState(false)

     useEffect(()=>{
         //console.log(tweet.likes, tweet.users)
     },[tweet])
     
    // La fecha 
    function fechaCompleta(fecha) {
        const MESES = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
        const f = new Date(fecha);
    
        return (
          <>
              {f.getDate() +' '+
              MESES[f.getMonth()] 
              }
          </>
        );
      }

    const {user} = useContext(userContext)

    
    
    
    const handleElimina =()=>{
        //console.log(tweet.id)
        if (window.confirm('¿Estas seguro de Eliminar el Twitte?')) deleteData("tweets_dev",tweet.id)
    }

    const handleLike =async ()=>{
        const saber = await getDataById("tweets_dev", tweet.id)

        const pasar = saber.userLikes.split(",");
        //console.log(pasar)
        const pasa = pasar.includes(user.email);
        const elimina = pasar.indexOf(user.email)
        const result = pasar.splice(elimina, 1);
        //console.log(result)
        const result2 = pasar.join(",")
        if (pasa){
            await updateData("tweets_dev", tweet.id, { likes: tweet.likes - 1 , userLikes: result2})
        }else{
            await updateData("tweets_dev", tweet.id, { likes: tweet.likes + 1 , userLikes: tweet.userLikes += "," + user.email})
        }
         setVoto(true)
   }
//    console.log("este es del twitter ",tweet.id)
//    console.log("este es del usuario ",user.uid)
    return (
<div className="listaTwitter">
    <div className="containerA">
        <img className="photoPerfil" src={`${tweet.photo}`} alt="imagen de el perfil"/>
    </div>
    <div className="containerB">
        <div className="userName">
            {/* <h4 className="fondoUser rojo">{tweet.users}</h4> */}
            <h4 className={`fondoUser ${tweet.color}`} >{tweet.users}</h4>
            <p>{fechaCompleta(tweet.date)}</p>
        </div>
        <p>{tweet.correo}</p>
        <p className="cajaTwitterLectura">{tweet.tweet}</p>
        {
            user.uid === tweet.uid ? (<button className="butonElimina" onClick={handleElimina} ><i class="fas fa-trash-alt"></i></button>): null
        }
        {/* <button onClick={handleLike}>Like {tweet.likes ? `(${tweet.likes})` : ""}</button> */}
        {/* <button className="butonElimina" onClick={handleLike}> <i class="far fa-heart"></i> {tweet.likes ? `(${tweet.likes})` : ""}</button> */}
        {/* <button className="butonElimina" onClick={handleLike}> {tweet.likes > 0 ? <><i class="fas fa-heart"></i>{tweet.likes}</> : <><i class="far fa-heart"></i></>}</button> */}
        <button className="butonElimina" onClick={handleLike}> 
            <Corazon isFill={tweet.likes}/>
            {tweet.likes}
        </button>
    </div>
</div>
)
}


const Corazon =({isFill})=>{
if (isFill){
    return <i class="fas fa-heart"></i>
}else {
    return <i class="far fa-heart"></i>
}
} 