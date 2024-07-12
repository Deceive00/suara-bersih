import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Controller } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import { Thread } from "src/types/threads-type";

export const ChooseThread = ({
  selectedThreadTitle,
  setSelectedThreadTitle,
  recommendation,
  selectedRecommendation,
  setSelectedRecommendation,
  handleRemoveRecommendation,
  control,
}: any) => {
  return (
    <div className="grid mt-5 w-full">
      <div className="grid w-full gap-1.5 items-start mb-6">
        <h1 className="w-fit text-2xl weight font-semibold">Choose a Thread</h1>
        <h1 className="w-fit text-md text-gray-400">
          Select the appropriate thread for your post.
        </h1>
      </div>
      <Controller
        name="threadTitle"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            onChange={(e) => {
              setSelectedThreadTitle(e.target.value);
              setSelectedRecommendation(null);
            }}
            value={selectedThreadTitle}
            id="threadTitle"
            type="text"
            required
            placeholder="Thread Title"
          />
        )}
      />
      <div className="flex flex-wrap flex-row gap-2 mt-4">
        {recommendation &&
          recommendation.map((thread: Thread, index: number) => (
            <div
              key={index}
              className={`text-black rounded-md flex gap-2 cursor-pointer p-2 w-fit items-center transition-all duration-300 ${
                selectedRecommendation?.threadId === thread.threadId
                  ? "bg-orange-400 opacity-100"
                  : "bg-gray-100 opacity-70"
              }`}
            >
              <p
                onClick={() => {
                  setSelectedRecommendation(thread);
                  setSelectedThreadTitle(thread.threadTitle);
                }}
              >
                {thread.threadTitle}
              </p>
              <MdCancel onClick={() => handleRemoveRecommendation()} />
            </div>
          ))}
      </div>
    </div>
  );
};