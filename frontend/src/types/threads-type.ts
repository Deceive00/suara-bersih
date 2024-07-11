import { User } from "./users-types";

export interface Thread{
  threadId : string;
  threadTitle : string;
  userUpvotes : User[];
  downvotes : number;
  status : string;
}
