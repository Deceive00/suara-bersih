import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { ImgInput } from "@components/upload-image/ImgInput";
import { Switch } from "@components/ui/switch";
import { Controller } from "react-hook-form";
import { Label } from "@components/ui/label";

export const PostDetails = ({ control, handleSubmit, createPostMutate }: { control: any, handleSubmit : any, createPostMutate : any }) => {
  return (
    <form onSubmit={handleSubmit((data : any) => createPostMutate(data))} className="grid mt-5 w-full">
      <div className="grid w-full gap-1.5 items-start mb-6">
        <h1 className="w-fit text-2xl weight font-semibold">Post Details</h1>
        <h1 className="w-fit text-md text-gray-400">
          Complete your story with details and images. Be sure to upload factual
          information.
        </h1>
      </div>
      <div className="grid w-full gap-1.5 items-start mb-6">
        <div className="w-fit font-semibold">Title</div>
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
              className="text-black"
              placeholder="Title"
            />
          )}
        />
      </div>
      <div className="grid w-full gap-1.5 items-start mb-6">
        <div className="w-fit font-semibold">Description</div>
        <Controller
          name="postDescription"
          control={control}
          defaultValue=""
          rules={{ required: "Post description is required" }}
          render={({ field }) => (
            <Textarea
              {...field}
              className="text-black"
              placeholder="Describe your opinion"
              id="message-2"
            />
          )}
        />
        <p className="w-full text-sm text-muted-foreground">
          Some course topics can create controversy and debate. Be polite when
          posting your own comments, and be respectful to other poster's
          opinions.
        </p>
      </div>
      <div className="grid w-full gap-1.5 items-start mb-6">
        <h2 className="text-lg mb-3 font-semibold">
          Please upload your{" "}
          <span className="text-orange-400">Post Evidences</span> below
        </h2>
        <Controller
          name="postImages"
          control={control}
          defaultValue={[]}
          rules={{ required: "Post images is required",
            validate: (value) =>
              value.length <= 4 || 'You can upload a maximum of 4 images', }}
          render={({ field }) => (
            <ImgInput value={field.value} onChange={field.onChange} defaultImages={field.value} />
          )}
        />
      </div>
      <div className="flex items-center justify-start gap-2 ">
        <Controller
          name="isAnonymous"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <>
              <Switch
                id="isAnonymous"
                {...field}
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value)}
              />
              <Label htmlFor="isAnonymous">Is Anonymous</Label>
            </>
          )}
        />
      </div>
    </form>
  );
};
