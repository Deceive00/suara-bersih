import { addData } from "src/firebase/firebase-base-function";
import { auth } from "src/firebase/firebase-config";
import { InsertPost, Post } from "src/types/posts-style";
import { createThread } from "./threads.service";
import { uploadMultiplePhoto } from "./images.service";
import { updateDoc } from "firebase/firestore";

const defaultPhoto =
"https://firebasestorage.googleapis.com/v0/b/youpi-92b43.appspot.com/o/default.png?alt=media&token=429db833-8c08-4045-8122-ad42130f2883";

export const createPost = async ({newPost, threadTitle, threadId} : {newPost: InsertPost, threadTitle?: string, threadId?: string}) => {
  if(newPost.postTitle === '' || newPost.postImages.length <= 0 ||
    newPost.postDescription === ''
  ){
    throw new Error('All field is required')
  }

  let currentThreadId = threadId;
  
  console.log(threadTitle)
  if(threadTitle){
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

  let uploadedImages: string[] = [defaultPhoto];

  if (newPost.postImages.length > 0) {
    const path = `posts/${auth?.currentUser?.email}/${postRef.id}`;
    uploadedImages = await uploadMultiplePhoto(newPost.postImages, path);
  }
  console.log(uploadedImages)
  post.postImages = uploadedImages
  await updateDoc(postRef, { ...post })
}


