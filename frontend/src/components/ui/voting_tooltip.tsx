import { upvotePost, downvotePost } from "@lib/services/voting.service";
import { BiSolidDownvote, BiSolidUpvote, BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { auth } from "src/firebase/firebase-config";
import { PostFE } from "src/types/posts-style";
import { Skeleton } from "./skeleton";
export const VoteSkeleton = () =>{
  return(
      <Skeleton className='w-4 h-2 bg-gray-200'>
      </Skeleton>
  );
}
const VotingTooltip = ({post, isLoading} : {post : PostFE, isLoading : boolean}) => {

  return (
    <ul className="m-0 p-2 menu rounded-box gap-y-2">
      <li onClick={() => {
        upvotePost(post.postId);
      }}>
        <a className="tooltip tooltip-right" data-tip="Up vote">
          {
            (post.upvotes && post.upvotes.length >= 0 && post.upvotes.includes(auth.currentUser?.uid || '')) ? 
            (<BiSolidUpvote className="text-lg text-green-800"/>) : 
            (<BiUpvote className="text-lg text-green-800"/>) 

          }
          {!isLoading ? (post.upvotes?.length || 0) : <VoteSkeleton/>}
          
        </a>
      </li>


      <li
       onClick={() => {
        downvotePost(post.postId);
       }}
      >
        <a className="tooltip tooltip-right" data-tip="Down vote">
        {
            (post.downvotes && post.downvotes.length >= 0 && post.downvotes.includes(auth.currentUser?.uid || '')) ? 
            (<BiSolidDownvote className="text-lg text-RedPrimary"/>) : 
            (<BiDownvote className="text-lg text-RedPrimary"/>) 

          }
          {!isLoading ? (post.downvotes?.length || 0) : <VoteSkeleton/>}

        </a>
      </li>
    </ul>
  );
};

export default VotingTooltip;
