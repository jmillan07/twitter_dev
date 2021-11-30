import { Auth } from "./FirebasesConfig"
//import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut as _signout } from "firebase/auth"

const provider = new GoogleAuthProvider()

export const signIn = async ()=>{
    try{

        const userCredentials = await signInWithPopup(Auth,provider)
        //console.log(userCredentials.user)
        return userCredentials.user
    }
    catch(err) {
            console.log(err.menssage)
    }
}

export const signOutn = async ()=>{
    try{
        _signout(Auth)
    }
    catch(err) {
            console.log(err.menssage)
    }
}

export const handleOutChange = async (callback)=>{
    const unSubscribe = await onAuthStateChanged(Auth,callback)
    return unSubscribe
}

/////////la manera tradicional con usuario y contraseña
/*
export const createUser = async (email, pass) =>{
try{
const userData = await createUserWithEmailAndPassword(Auth,email,pass)
console.log(userData)
return userData.user
}
catch(err) {
console.log(err)
}
}

export const singIn = async (email, pass) =>{
    try{
    const userData = await signInWithEmailAndPassword (Auth,email,pass)
    return userData.user
    }
    catch(err) {
    console.log(err)
    }
    }

    export const singOut = async () =>{
        try{
        await signOut(Auth)
        
        }
        catch(err) {
        console.log(err)
        }
        }
    */

