import { Card, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import VotingTooltip from "@components/ui/voting_tooltip";
import { getFormattedTime } from "@lib/services/formatter.service";
import { PostFE } from "src/types/posts-style";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";


const PostCard = ({post} : {post : PostFE}) => {
  return (
    <Card className="rounded-md my-6">
      <CardHeader>
        {/* Image */}
        <div className="w-full h-[20rem] overflow-hidden stack relative bg-black rounded-md">
          <img
            src={post.postImages[0]}
            className="w-full h-full object-fit rounded"
          />
        </div>

        
        {/* Detail */}
        <div className="flex flex-row w-full justify-between">
          <div>
          <CardTitle className="text-lg text-left">{post.postTitle}</CardTitle>
          <CardDescription className="text-xs flex text-justify flex-col">
            <div className="w-11/12">
              {post.postDescription}
            </div>
            
            <span className="pt-4">{post.user?.username}, {getFormattedTime(post.createdAt)}</span>
          </CardDescription>
          </div>
          <div className="flex justify-center items-center">

            <VotingTooltip post={post} ></VotingTooltip>
            
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default PostCard