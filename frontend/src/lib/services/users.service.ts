import { doc, getDoc } from "firebase/firestore";
import { db } from "src/firebase/firebase-config";
import { User } from "src/types/users-types";

export const getUserById = async (userId: string) => {
  const userDoc = await getDoc(doc(db, 'users', userId));
  if(userDoc.exists()){
    const user = userDoc.data() as User;
    return user;
  }
  return null;
}
