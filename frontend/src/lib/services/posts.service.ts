import { addData } from "src/firebase/firebase-base-function";
import { InsertPost } from "src/types/posts-style";
import { Thread } from "src/types/threads-type";

export const createPost = async (newPost: InsertPost, thread?: Thread) => {
  if(newPost.postTitle === '' || newPost.postImages.length <= 0 ||
    newPost.postDescription === ''
  ){
    throw new Error('All field is required')
  }

  if(newPost.isAnonymous){
    await addData('posts', {
      ...newPost,
      createdAt: new Date(),
    });
  }else{
    
  }
}

export const createThread = async () => {

}