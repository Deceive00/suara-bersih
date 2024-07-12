import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { addData } from "src/firebase/firebase-base-function";
import { db } from "src/firebase/firebase-config";
import { Thread, ThreadFE } from "src/types/threads-type";
import { getPostByThread } from "./posts.service";

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
    threadId: '',
    status:'complaint filed'
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

export const getAllThread = async (): Promise<any[]> => {
  const threadRef = collection(db, 'threads');
  const querySnapshot = await getDocs(threadRef);

  const threadsWithCounts = await Promise.all(querySnapshot.docs.map(async (doc) => {
    const snapshot = await getPostByThread(doc.id);
    const count = snapshot.length;
    return { ...doc.data(), threadId: doc.id, postCount: count };
  }));

  return threadsWithCounts;
};

export const getThreadRecommendation = async (postTitle: string) =>{
  const allThread = await getAllThread();

  const response = await fetch("http://127.0.0.1:5000/recommendations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postTitle: postTitle, threads: allThread }),
  });
  const data = await response.json()
  return data;
}


export const searchThread = async (query : string) => {
  const allThread = await getAllThread() as ThreadFE[];
  
  const response = await fetch("http://127.0.0.1:5000/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query, threads: allThread }),
  });
  const data = await response.json();
  return data;
}

export const getThreadById = async (threadId: string) => {
  const threadDoc = await getDoc(doc(db, 'threads', threadId));
  if(threadDoc.exists()){
    const thread = threadDoc.data() as ThreadFE;
    const snapshot = await getPostByThread(threadDoc.id);
    const allPosts = snapshot.map((docu: any) => docu.data());
    thread.threadId = threadDoc.id;
    thread.posts = allPosts;
    thread.postCount = allPosts.length;
    return thread;
  }
}