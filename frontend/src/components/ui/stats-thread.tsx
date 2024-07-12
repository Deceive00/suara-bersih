import React from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { PostFE } from "src/types/posts-style";
import { ThreadFE } from "src/types/threads-type";

const StatsThread = ({thread} : {thread : ThreadFE | null}) => {

  return (
    <div className="stats shadow text-montserrat w-1/2 mx-auto">
      {/* Left Stats */}
      <div className="stat w-full mx-auto py-4 flex justify-center items-center flex-row-reverse">
        {/* SVG */}
        <BiUpvote className="w-14 h-14 text-green-600"/>
        {/* Desc */}
        <div className="text-left">
          <div className="stat-title text-WhiteSecondary">Total Upvote</div>
          <div className="stat-value w-auto text-green-600">{thread?.upvotes?.length}</div>
          <div className="stat-desc w-auto text-WhiteSecondary">
            updated in real time
          </div>
        </div>
      </div>

      {/* Right Stats */}
      <div className="stat w-full mx-auto flex justify-center items-center flex-row-reverse">
        {/* Svg */}
        <BiDownvote className="w-14 h-14 text-RedPrimary"/>

        {/* Desc */}
        <div className="text-left">
          <div className="stat-title text-WhiteSecondary">Total Downvote</div>
          <div className="stat-value text-RedPrimary">{thread?.downvotes?.length}</div>
          <div className="stat-desc text-WhiteSecondary">updated in real time</div>
        </div>
      </div>
    </div>
  );
};

export default StatsThread;
