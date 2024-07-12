import { Post, PostFE } from "./posts-style";

export interface Thread{
  threadId : string;
  threadTitle : string;
  upvotes : string[];
  downvotes : string[];
  status: string;
}


export interface ThreadFE{
  threadId : string;
  threadTitle : string;
  upvotes : string[];
  downvotes : string[];
  status: string;
  postCount?: number;
  user?:string;
  posts?: PostFE[];
}
