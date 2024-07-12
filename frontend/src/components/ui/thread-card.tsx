import React from "react";
import { Thread } from "src/types/threads-type";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard: React.FC<ThreadCardProps> = ({ thread }) => {
  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case "complaint filed":
        return "bg-red-500";
      case "on trial":
        return "bg-yellow-500";
      case "concluded":
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="card bg-white shadow-xl m-1 border-2 px-11 py-5 flex justify-between items-center">
            <div>
              <h2 className="card-title text-3xl mb-5">            <div
              className={`w-4 h-4 rounded-full ${getStatusColor(
                thread.status
              )}`}
            />{thread.threadTitle}</h2>
              {/* <p>{thread.status}</p> */}
              {/* <p>Upvotes: {thread.userUpvotes.length}</p>
        <p>Downvotes: {thread.userDownvotes.length}</p> */}
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
