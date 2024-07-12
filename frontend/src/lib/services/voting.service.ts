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

export const upvotePost = async (postId: string) => {
  try {
    const postRef = await getData("posts", postId);
    if (!postRef) {
      throw new Error("Post not found");
    }

    const authId = auth.currentUser?.uid;
    if (!authId) {
      throw new Error("User not authenticated");
    }

    const data = postRef.data();

    if (data.upvotes.includes(authId)) {
      throw new Error("You have already upvoted this post");
    }

    const updatedData = {
      ...data,
      upvotes: [...data.upvotes, authId],
      downvotes: data.downvotes.filter(
        (downvote: string) => downvote !== authId
      ),
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
    const postRef = await getData("posts", postId);
    if (!postRef) {
      throw new Error("Post not found");
    }

    const authId = auth.currentUser?.uid;
    if (!authId) {
      throw new Error("User not authenticated");
    }

    const data = postRef.data();

    if (data.downvotes.includes(authId)) {
      throw new Error("You have already upvoted this post");
    }

    const updatedData = {
      ...data,
      upvotes: data.upvotes.filter((upvote: string) => upvote !== authId),
      downvotes: [...data.downvotes, authId],
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
    doc.upvotes.includes(authId)
  );

  const upvoted_user_length = filtered_upvoted_user.length;

  const filtered_downvoted_user = data.filter((doc) =>
    doc.downvotes.includes(authId)
  );

  const downvoted_user_length = filtered_downvoted_user.length
  const diff = upvoted_user_length - downvoted_user_length;

  const threadRef = await getData("threads", threadId);
  const threadData = threadRef?.data;
  let updatedData;
  if (diff < 0){
    updatedData = {
        ...data,
        upvotes: threadData.filter((upvote: string) => upvote !== authId),
        downvotes: [...threadData.downvotes, authId],
      };
  }
  else if (diff ==  0){
    updatedData = {
        ...data,
        upvotes: threadData.filter((upvote: string) => upvote !== authId),
        downvotes: threadData.filter((downvote: string) => downvote !== authId),
      };
  }
  else if (diff > 0){
    updatedData = {
        ...data,
        upvotes: [...threadData.upvotes, authId],
        downvotes: threadData.filter((downvote: string) => downvote !== authId),
      };
  }

  await updateData("threads", threadId, updatedData);


};
