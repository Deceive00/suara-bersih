import { queryClient } from "@lib/settings/query-settings";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  addData,
  getData,
  updateData,
} from "src/firebase/firebase-base-function";
import { auth, db } from "src/firebase/firebase-config";
import { Thread } from "src/types/threads-type";

export const upvotePost = async (postId: string) => {
  try {
    console.log(postId)
    const data = await getData("posts", postId);
    if (!data) {
      throw new Error("Post not found");
    }

    const authId = auth.currentUser?.uid;
    if (!authId) {
      throw new Error("User not authenticated");
    }

    if (data.upvotes && data.upvotes.includes(authId)) {
      throw new Error("You have already upvoted this post");
    }

    let modifiedUpvotes, modifiedDownvotes;
    if(data.upvotes && data?.upvotes?.length > 0){
      modifiedUpvotes = [...data.upvotes, authId]
    }
    else{
      modifiedUpvotes = [authId];
    }

    if(data.downvotes && data?.downvotes.length > 0){
      modifiedDownvotes = data.downvotes.filter(
        (downvote: string) => downvote !== authId)
    }else{
      modifiedDownvotes = [];
    }

    const updatedData = {
      ...data,
      upvotes: modifiedUpvotes,
      downvotes: modifiedDownvotes
      ,
    };

    await updateData("posts", postId, updatedData);

    const threadId = data.threadId;
    await updateThreadVoting(threadId);

    console.log("Post upvoted successfully");
  } catch (e) {
    console.error("Error upvoting post: ", e);
    throw e;
  }
};

export const downvotePost = async (postId: string) => {
  try {
    const data = await getData("posts", postId);
    if (!data) {
      throw new Error("Post not found");
    }

    const authId = auth.currentUser?.uid;
    if (!authId) {
      throw new Error("User not authenticated");
    }

    if (data.downvotes && data.downvotes.includes(authId)) {
      throw new Error("You have already upvoted this post");
    }
    let modifiedUpvotes : string[], modifiedDownvotes : string[];
    if(data.upvotes && data?.upvotes?.length > 0){
      modifiedUpvotes = data.upvotes.filter((upvote: string) => upvote !== authId)
    }
    else{
      modifiedUpvotes = [];
    }
    
    if(data.downvotes && data?.downvotes.length > 0){
      modifiedDownvotes = [...data.downvotes, authId]
    }else{
      modifiedDownvotes = [authId];
    }

    const updatedData = {
      ...data,
      upvotes: modifiedUpvotes,
      downvotes: modifiedDownvotes,
    };

    await updateData("posts", postId, updatedData);
    const threadId = data.threadId;
    await updateThreadVoting(threadId);

    console.log("Post downvoted successfully");
  } catch (e) {
    console.error("Error upvoting post: ", e);
    throw e;
  }
};

export const updateThreadVoting = async (threadId: string) => {
  const authId = auth.currentUser?.uid;

  const postRef = collection(db, "posts");
  const q = query(postRef, where("threadId", "==", threadId));
  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  
  const filtered_upvoted_user = data.filter((doc) =>
    {
      return doc.upvotes && doc.upvotes.length > 0 && doc.upvotes.includes(authId)
    }
  );

  const upvoted_user_length = filtered_upvoted_user.length;
  const filtered_downvoted_user = data.filter((doc) =>
    doc.downvotes && doc.downvotes.length > 0 && doc.downvotes.includes(authId)
  );
  const downvoted_user_length = filtered_downvoted_user.length
  const diff = upvoted_user_length - downvoted_user_length;

  const threadData = await getData("threads", threadId) as Thread;
  if(!threadData)  throw new Error("Thread not found");
  let updatedData;
  if(threadData.upvotes && threadData.upvotes.length > 0){
    threadData.upvotes = threadData.upvotes.filter((upvote: string) => upvote !== authId)
  }else{
    threadData.upvotes = []
  }

  if(threadData.downvotes && threadData.downvotes.length > 0){
    threadData.downvotes = threadData.downvotes.filter((downvote: string) => downvote !== authId)
  } else {
    threadData.downvotes = []
  }

  if (diff < 0){
    updatedData = {
        ...threadData,
        downvotes: [...threadData.downvotes, authId],
      };
  }
  else if (diff ==  0){
    updatedData = {
        ...threadData,
      };
  }
  else{
    updatedData = {
        ...threadData,
        upvotes: [...threadData.upvotes, authId],
      };
  }

  await updateData("threads", threadId, updatedData);
  queryClient.invalidateQueries(['fetchAllThread'])

};
