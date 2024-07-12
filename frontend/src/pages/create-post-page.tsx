import Navbar from "@components/Navbar";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Progress } from "@components/ui/progress";
import { Textarea } from "@components/ui/textarea";
import { time } from "console";
import { useState } from "react";
import { toast, Toaster } from "sonner";

const PostDetails = () => {
  return (
    <div className="grid mt-5 w-full">
      <div className="grid w-full gap-1.5 items-start mb-6">
        <h1 className="w-fit text-2xl weight font-semibold">Post Details</h1>
        <h1 className="w-fit text-md text-gray-400">
          Complete your story with details and images. Be sure to upload factual
          information.
        </h1>
      </div>
      <div className="grid w-full gap-1.5 items-start mb-6">
        <div className="w-fit font-semibold">Title</div>
        <Input
          className="text-black"
          type="text"
          id="title"
          placeholder="Title of your post"
        />
      </div>
      <div className="grid w-full gap-1.5 items-start mb-6">
        <div className="w-fit font-semibold">Description</div>
        <Textarea
          className="text-black"
          placeholder="Describe your opinion"
          id="message-2"
        />
        <p className="w-full text-sm text-muted-foreground">
          Some course topics can create controversy and debate. Be polite when
          posting your own comments, and be respectful to other poster's
          opinions.
        </p>
      </div>
    </div>
  );
};

const ChooseThread = () => {
  return (
    <div className="grid mt-5 w-full">
      <div className="grid w-full gap-1.5 items-start mb-6">
        <h1 className="w-fit text-2xl weight font-semibold">Choose a Thread</h1>
        <h1 className="w-fit text-md text-gray-400">
          Select the appropriate thread for your post.
        </h1>
      </div>
      {/* Add more fields related to choosing a thread */}
    </div>
  );
};

const ConfirmPost = () => {
  return (
    <div className="grid mt-5 w-full">
      <div className="grid w-full gap-1.5 items-start mb-6">
        <h1 className="w-fit text-2xl weight font-semibold">Confirm Post</h1>
        <h1 className="w-fit text-md text-gray-400">
          Please make sure the details of your post are written accordingly.
        </h1>
      </div>
      {/* Add more fields related to choosing a thread */}
    </div>
  );
};

const CreatePost = () => {
  const [progress, setProgress] = useState<number>(33);
  const [progressName, setProgressName] = useState<string>("Add Post Details");
  const [step, setStep] = useState<number>(1);

  const handleStep2 = () => {
    setProgress(66);
    setProgressName("Choosing a Thread");
    setStep(2);
  };

  const handleStep3 = () => {
    setProgress(99);
    setProgressName("Confirmation of Post");
    setStep(3);
  };

  const handleStep1 = () => {
    setProgress(33);
    setProgressName("Add Post Details");
    setStep(1);
  };

  const handleStep2Back = () => {
    setProgress(66);
    setProgressName("Choosing a Thread");
    setStep(2);
  };

  return (
    <div className="bg-gray-700 w-screen h-screen text-white font-montserrat text-sm transition-all duration-700">
      <Navbar></Navbar>
      <div className="pt-20 mx-80">
        <div className="justify-between flex pb-5 text-orange-400">
          <a>Post Progress</a>
          <a>Step {step}/3</a>
          <a>{progressName}</a>
        </div>
        <Progress
          value={progress}
          className="[&>*]:bg-orange-400 bg-gray-300 h-2 transition-all duration-700"
        />
        {step === 1 && <PostDetails />}
        {step === 2 && <ChooseThread />}
        {step === 3 && <ConfirmPost />}
        <div className="mt-5 flex space-x-2">
          {step > 1 && (
            <Button
              className="bg-transparent"
              variant="outline"
              onClick={step === 2 ? handleStep1 : handleStep2Back}
            >
              Previous Step
            </Button>
          )}
          {step === 1 && (
            <Button
              className="bg-white text-black"
              variant="outline"
              onClick={handleStep2}
            >
              Next Step
            </Button>
          )}
          {step === 2 && (
            <Button
              className="bg-white text-black"
              variant="outline"
              onClick={handleStep3}
            >
              Next Step
            </Button>
          )}
          {step === 3 && (
            <Button
              className="bg-white text-black"
              variant="outline"
              onClick={() =>
                toast("Post successfully created.", {
                  description: "View Now",
                  action: {
                    label: "View Post",
                    onClick: () => console.log("Confirm"),
                  },
                })
              }
            >
              Submit Post
            </Button>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CreatePost;
