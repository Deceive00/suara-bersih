import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { addData } from "src/firebase/firebase-base-function";
import { db } from "src/firebase/firebase-config";
import { Thread } from "src/types/threads-type";

export const createThread = async (threadTitle : string) => {
  if(threadTitle.length <= 0){
    throw new Error('Thread title is required')
  }
  const isUnique = await isUniqueThread(threadTitle);
  if(!isUnique){
    throw new Error('Thread title has already exists')
  }
  const newThread = {
    threadTitle: threadTitle,
    userUpvotes: [],
    userDownvotes: [],
    threadId: ''
  } as Thread;

  const threadRef = await addData("threads", {...newThread});
  newThread.threadId = threadRef.id
  await updateDoc(threadRef, {...newThread})
  return threadRef.id;
}

export const isUniqueThread = async (threadTitle: string): Promise<boolean> => {
  try {
    const threadsRef = collection(db, "threads");
    const q = query(threadsRef, where("threadTitle", "==", threadTitle));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.empty;
  } catch (e) {
    console.error("Error checking thread uniqueness: ", e);
    throw new Error("Error checking thread uniqueness");
  }
};