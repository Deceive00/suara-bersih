
export interface Post {
  postId : string;
  postTitle : string;
  postDescription: string;
  postImages: string[];
  threadId : string;
  upvotes : number;
  downvotes : number;
  createdAt : Date;
  isAnonymous : Boolean;
  userId?: string;
}

export interface InsertPost { 
  postTitle : string;
  isAnonymous : Boolean;
  postDescription: string;
  postImages: File[];
}