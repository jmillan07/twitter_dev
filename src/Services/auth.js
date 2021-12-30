import { Auth } from "./FirebasesConfig"
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut as _signout } from "firebase/auth"
import {setDocument,getDataById, addDataU, getDocRef} from './Operation'
import { getDoc, setDoc } from 'firebase/firestore'

const provider = new GoogleAuthProvider()

const addUserToFirestore = async (user) => {
  //const { id, displayName, email, photoURL } = user;
  //console.log(user)
  //console.log(user.user.uid, user.user.displayName, user.user.email, user.user.photoURL)  
    //const userExist = await getDataById("users", id);
    const docRef = await getDocRef("users", user.user.uid)
    const userStapshop = await getDoc(docRef)
    const userExist = !!userStapshop.data();
    if (!userExist) {
      await setDoc(docRef, {
        name: user.user.displayName,
        email: user.user.email,
        photo: user.user.photoURL,
      });
    }
  };

export const signIn = async ()=>{
    try{

        const userCredentials = await signInWithPopup(Auth,provider)
        await addUserToFirestore(userCredentials);
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
