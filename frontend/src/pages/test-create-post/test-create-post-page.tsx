import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Switch } from "@components/ui/switch";
import { ImgInput } from "@components/upload-image/ImgInput";
import { createPost } from "@lib/services/posts.service";
import { getThreadRecommendation } from "@lib/services/threads.service";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { InsertPost } from "src/types/posts-style";
import { Thread } from "src/types/threads-type";
import { MdCancel } from "react-icons/md";
export default function TestCreatePostPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const watchPostTitle = watch("postTitle");
  const [selectedThreadTitle, setSelectedThreadTitle] = useState("");
  const [recommendation, setRecommendation] = useState<Thread[] | null>();
  const [selectedRecommendation, setSelectedRecommendation] =
    useState<Thread | null>();

  const { mutate: createPostMutate } = useMutation(
    async (data: any) => {
      if (selectedThreadTitle.length <= 0 || !selectedThreadTitle) {
        return;
      }
      await createPost({
        newPost: {
          isAnonymous: data.isAnonymous,
          postDescription: data.postDescription,
          postTitle: data.postTitle,
          postImages: data.postImages,
        } as InsertPost,
        threadTitle: selectedThreadTitle,
        threadId: selectedRecommendation
          ? selectedRecommendation.threadId
          : undefined,
      });
    },
    {
      onError: (error: Error) => {
        console.error("Failed to submit post");
      },
      onSuccess: () => {
        console.log("sukses");
      },
    }
  );
  const handleRemoveRecommendation = () => {
    if (selectedThreadTitle === selectedRecommendation?.threadTitle) {
      setSelectedThreadTitle("");
    }
    setSelectedRecommendation(null);
  };

  const handleRecommendation = async () => {
    if (watchPostTitle.length <= 0 || !watchPostTitle) {
      return;
    }
    const data = (await getThreadRecommendation(watchPostTitle)) as Thread[];
    setRecommendation(data);
  };

  return (
    <div className="w-screen h-screen">
      <form onSubmit={handleSubmit((data) => createPostMutate(data))}>
        <Controller
          name="postTitle"
          control={control}
          defaultValue=""
          rules={{ required: "Post title is required" }}
          render={({ field }) => (
            <Input
              {...field}
              id="postTitle"
              type="text"
              required
              placeholder="Title"
            />
          )}
        />

        <Controller
          name="postDescription"
          control={control}
          defaultValue=""
          rules={{ required: "Post description is required" }}
          render={({ field }) => (
            <Input
              {...field}
              id="postDescription"
              type="text"
              required
              placeholder="Description"
            />
          )}
        />

        <Controller
          name="isAnonymous"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Switch
              {...field}
              checked={field.value}
              onCheckedChange={(value) => field.onChange(value)}
            />
          )}
        />
        <Controller
          name="postImages"
          control={control}
          defaultValue={[]}
          rules={{ required: "You must upload your identity card" }}
          render={({ field }) => (
            <div className="flex flex-col">
              <h2 className="text-lg mb-3 font-semibold">
                Please upload your{" "}
                <span className="text-orange-400">Post Evidences</span> below
              </h2>
              <div className="">
                <ImgInput value={field.value} onChange={field.onChange} />
              </div>
            </div>
          )}
        />

        <Input
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
        {recommendation &&
          recommendation.map((thread, index) => (
            <div
              key={index}
              className={`flex gap-2 cursor-pointer p-2 ${
                selectedRecommendation?.threadId === thread.threadId
                  ? "bg-slate-200"
                  : "bg-transparent"
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

        <Button type="button" onClick={() => handleRecommendation()}>
          Recommendation
        </Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
