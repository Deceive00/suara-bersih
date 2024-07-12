import { capitalizeEveryWord } from "@lib/services/formatter.service";
import { Post } from "src/types/posts-style";

export const ConfirmPost = ({watch, threadTitle} : {watch : any, threadTitle: string}) => {
  
  return (
    <div className="grid mt-5 w-full text-primary">
      <div className="grid w-full gap-1.5 items-start mb-6">
        <h1 className="w-fit text-2xl weight font-semibold">Confirm Post</h1>
        <h1 className="w-fit text-md text-gray-400">
          Please make sure the details of your post are written accordingly.
        </h1>
      </div>
      <div className="w-full text-left flex flex-col gap-10 p-4 border-2 rounded-md">
        <div className="flex flex-row w-full">
          <p className="w-1/4 font-bold">Post Title</p>
          <p className="w-3/4">{watch("postTitle")}</p>
        </div>
        <div className="flex flex-row w-full">
          <p className="w-1/4 font-bold">Post Description</p>
          <p className="w-3/4">{watch("postDescription")}</p>
        </div>
        <div className="flex flex-row w-full">
          <p className="w-1/4 font-bold">Anonymous</p>
          <p className="w-3/4">{watch("isAnonymous") ? 'Not Anonymous' : 'Anonymous'}</p>
        </div>
        <div className="flex flex-row w-full">
          <p className="w-1/4 font-bold">Thread</p>
          <p className="w-3/4">{capitalizeEveryWord(threadTitle)}</p>
        </div>
      </div>
    </div>
  );
};