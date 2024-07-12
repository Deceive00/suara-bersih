import { User } from "src/types/users-types";

export interface Post {
  postId : string;
  postTitle : string;
  postDescription: string;
  postImages: string[];
  threadId : string;
  upvotes : string[];
  downvotes : string[];
  createdAt : Date;
  isAnonymous : Boolean;
  userId?: string;
}

export interface PostFE {
  data: import("/Users/eldrian/Documents/self/Garuda Hacks/suara-bersih/frontend/src/types/users-types").User;
  postId : string;
  postTitle : string;
  postDescription: string;
  postImages: string[];
  threadId : string;
  upvotes : string[];
  downvotes : string[];
  createdAt : Date;
  isAnonymous : Boolean;
  userId?: string;
  user?: User;
}
export interface InsertPost { 
  postTitle : string;
  isAnonymous : Boolean;
  postDescription: string;
  postImages: File[];
}