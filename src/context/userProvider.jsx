import { handleOutChange } from "../Services/auth";
import { createContext, useState, useEffect } from "react";

export const userContext = createContext()

const UserProvider = ( {children} )=> {
    const [user, setUser] = useState(null)

    useEffect(async ()=>{
        const unSuscribe = await handleOutChange((user)=>{
            console.log("se llamo a la funcion ")
            if(user){
                ////el usuario esta sign In
                ///guardar el usuario en un state
                console.log(user)
                setUser(user.user)
            }
            else{
                ////el usuario esta sign Out
                ////eliminar el usuario en el state
                setUser(null)
            }
        })
        return ()=> unSuscribe()
    },[])
    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider