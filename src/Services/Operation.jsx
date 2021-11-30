import {db} from '../Services/FirebasesConfig'
import { doc,deleteDoc,addDoc,updateDoc, onSnapshot, collection } from 'firebase/firestore'



export const getCollection = (cole)=> collection(db,cole)

const getDocumento = (colle,id)=> doc(db,colle,id)


export const updateData = async (coll, id,data) => {
    const docre = getDocumento(coll, id)
    await updateDoc(docre,data)
}

export const deleteData = async (coll,id) => {
    const docre = getDocumento(coll, id)
    await deleteDoc(docre)
}

export const addData = async (coll,data) => {
    const collectionRec = getCollection(coll)
    const docre = await addDoc(collectionRec,data)
    return docre
}