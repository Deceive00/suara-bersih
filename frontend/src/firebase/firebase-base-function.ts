import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase-config";

export const addData = async (collectionName : string, data : any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Error Adding Document");
  }
}