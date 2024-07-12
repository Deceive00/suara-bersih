import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const addData = async (collectionName : string, data : any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Error Adding Document");
  }
}

export const getData = async (collectionName : string, docId : string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (e) {
    console.error("Error getting document: ", e);
    throw new Error("Error Getting Document");
  }
}

export const updateData = async (collectionName : string , docId : string , data : any) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    console.log("Document updated with ID: ", docId);
    return docRef;
  } catch (e) {
    console.error("Error updating document: ", e);
    throw new Error("Error Updating Document");
  }
}