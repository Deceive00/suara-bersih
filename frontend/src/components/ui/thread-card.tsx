import React from "react";
import { Thread, ThreadFE } from "src/types/threads-type";
import OnTrial from 'public/clock.png'
import ComplaintFiled from 'public/danger-sign.png';
import Concluded from 'public/correct.png';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { capitalizeEveryWord } from "@lib/services/formatter.service";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { RxChatBubble } from "react-icons/rx";
import { Skeleton } from "./skeleton";

interface ThreadCardProps {
  thread: ThreadFE;
}

export const ThreadCardSkeleton = () =>{
  return(
      <Skeleton className='h-32 bg-gray-200 shadow-xl'>
      </Skeleton>
  );
}
const ThreadCard: React.FC<ThreadCardProps> = ({ thread }) => {
  const navigate = useNavigate();
  const getStatusImage = () => {
    switch (thread.status) {
      case "complaint filed":
        return ComplaintFiled;
      case "on trial":
        return OnTrial;
      case "concluded":
        return Concluded;
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild onClick={() => navigate(`/thread/${thread.threadId}`)}>
          <div className="card bg-white shadow-xl m-1 border-2 px-11 py-7 flex justify-between items-center cursor-pointer">
            <div className="w-full">
              <div className="card-title text-2xl mb-5 flex flex-row gap-1 justify-center items-center">
                <img src={getStatusImage()} alt="" className="w-8 h-8"/>
                {capitalizeEveryWord(thread.threadTitle)}
              </div>
              <div className="flex flex-row justify-center gap-6 w-full">
                <div className="flex gap-1 items-center">
                  <BiSolidUpvote className=" text-green-800 w-6 h-6"/>
                  <span className="text-md text-gray-600">
                    {thread.upvotes?.length || 0}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <BiSolidDownvote className="text-RedPrimary w-6 h-6"/>
                  <span className="text-md text-gray-600">
                    {thread.downvotes?.length || 0}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <RxChatBubble className="text- w-6 h-6"/>
                  <span className="text-md text-gray-600">
                    {thread.postCount || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="text-sm bg-slate-600 text-white rounded-md p-3">
          <p>Status: {thread.status}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThreadCard;
