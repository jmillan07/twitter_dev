import {db} from '../Services/FirebasesConfig'
import { doc, getDocs, getDoc,deleteDoc,addDoc, setDoc,updateDoc, onSnapshot, collection } from 'firebase/firestore'



export const getCollectionRef = (cole)=> collection(db,cole)

export const getDocRef = (colle,id)=> doc(db,colle,id)


export const updateData = async (coll, id, data) => {
    const docre = getDocRef(coll, id)
    await updateDoc(docre,data)
}

export const deleteData = async (coll,id) => {
    const docre = getDocRef(coll, id)
    await deleteDoc(docre)
}

export const addData = async (coll,data) => {
    const collectionRec = getCollectionRef(coll)
    const docre = await addDoc(collectionRec,data)
    return docre
}

//add data para usuario
export const addDataU = async (coll, id ,data) => {
  const docRef = getDocRef(coll, id)
  const user = await getDoc(docRef);
  const userExist = user.data()
  //console.log(userExist)
  if(!userExist) {
    await setDoc(docRef, { userName: data.displayName,
      email: data.email,
      photo: data.photoURL})
  }

  //const docre = await addDoc(collectionRec,data)
  //return docre
}

//get data
export const getData = async (col) => {
    const collectionRef = getCollectionRef(col);
    const snapData = await getDocs(collectionRef);
    const data = snapData.map((doc) => doc.data());
    return data;
  };

//get Data by ID
export const getDataById = async (col, id) => {
  //console.log("estoy pasando por el getdatabyid")
    const docRef = getDocRef(col, id);
    const snapData = await getDoc(docRef);
    const data = snapData.data();
    //console.log(data)
    return data;
  };
  

//set data
export const setData = async (col, data) => {
    const collectionRef = getCollectionRef(col);
    const docRef = await addDoc(collectionRef, data);
    return docRef;
  };

//set Document
export const setDocument = async (col, id, data) => {
    const docRef = getDocRef(col, id);
    const docSnapshot = await setDoc(docRef, data);
    return docSnapshot;
  };

