import { addData } from "src/firebase/firebase-base-function";
import { auth, db } from "src/firebase/firebase-config";
import { InsertPost, Post } from "src/types/posts-style";
import { createThread } from "./threads.service";
import { uploadMultiplePhoto } from "./images.service";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";

export const createPost = async ({newPost, threadTitle, threadId} : {newPost: InsertPost, threadTitle?: string, threadId?: string}) => {
  if(newPost.postTitle === '' || newPost.postImages.length <= 0 ||
    newPost.postDescription === ''
  ){
    throw new Error('All field is required')
  }

  let currentThreadId = threadId;
  
  if(!threadId && threadTitle){
    currentThreadId = await createThread(threadTitle)
  }
  
  const {postImages, ...postWihtoutFile} = newPost;
  const post = {
    ...postWihtoutFile,
    postImages: [''],
    threadId: currentThreadId,
    createdAt: new Date(),
  } as Post;

  let postRef;

  if(newPost.isAnonymous){
    postRef = await addData('posts', post);
  }else{
    postRef = await addData('posts', {
      ...post,
      userId: auth.currentUser?.uid
    })
  }

  let uploadedImages: string[] = [];

  if (newPost.postImages.length > 0) {
    const path = `posts/${auth?.currentUser?.email}/${postRef.id}`;
    uploadedImages = await uploadMultiplePhoto(newPost.postImages, path);
  }
  post.postImages = uploadedImages
  console.log(post)
  await updateDoc(postRef, { ...post })
}



export const getPostByThread = async (threadId: string) : Promise<any> => {
  try {
    const threadsRef = collection(db, "posts");
    const q = query(threadsRef, where("threadId", "==", threadId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs;
  } catch (e) {
    console.error("Error checking post count: ", e);
    throw new Error("Error checking post count");
  }
}