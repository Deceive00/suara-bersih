import { upvotePost, downvotePost } from "@lib/services/voting.service";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { Post } from "src/types/posts-style";


const VotingTooltip = ({post} : {post : Post}) => {

  return (
    <ul className="m-0 p-2 menu rounded-box gap-y-2">
      <li onClick={() => {
        upvotePost(post.postId);
      }}>
        <a className="tooltip tooltip-right" data-tip="Up vote">
          <BiUpvote className="text-lg text-green-800"/>
          {post.upvotes.length}
        </a>
      </li>


      <li
       onClick={() => {
        downvotePost(post.postId);
       }}
      >
        <a className="tooltip tooltip-right" data-tip="Down vote">
          <BiDownvote className="text-lg text-RedPrimary"/>
          {post.upvotes.length}

        </a>
      </li>
    </ul>
  );
};

export default VotingTooltip;
