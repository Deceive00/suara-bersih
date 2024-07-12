import { Post } from "./posts-style";

export interface Thread{
  threadId : string;
  threadTitle : string;
  userUpvotes : string[];
  userDownvotes : string[];
  status: string;
}


export interface ThreadFE{
  threadId : string;
  threadTitle : string;
  userUpvotes : string[];
  userDownvotes : string[];
  status: string;
  postCount?: number;
  posts?: Post[];
}
