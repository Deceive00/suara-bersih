import Navbar from "@components/Navbar";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Progress } from "@components/ui/progress";
import { Textarea } from "@components/ui/textarea";
import { useState } from "react";

const CreatePost = () => {
  const [progress, setProgress] = useState<number>(33);
  const [progressName, setProgressName] = useState<string>("Add Post Details");
  const [step, setStep] = useState<number>(1);
  return (
    <div className="bg-gray-700  w-screen h-screen text-white font-montserrat text-sm">
      <Navbar></Navbar>
      <div className="pt-20 mx-16">
        <div className="justify-between flex pb-5 text-orange-400">
          <a>Post Progress</a>
          <a>Step {step}/3</a>
          <a>{progressName}</a>
        </div>
        <Progress value={progress} className="bg-gray-300 h-2" />
        <div className="grid mt-5 w-full">
          <div className="grid w-full gap-1.5 items-start mb-6">
            <h1 className="w-fit text-2xl weight font-semibold">
              Post Details
            </h1>
            <h1 className="w-fit text-md text-gray-400">
              Complete your story with with details and images. Be sure to
              upload factual information.
            </h1>
          </div>
          <div className="grid w-full gap-1.5 items-startv mb-6">
            <div className="w-fit">Title</div>
            <Input type="text" id="title" placeholder="Title of your post" />
          </div>
          <div className="grid w-full gap-1.5 items-start mb-6">
            <div className="w-fit">Description</div>
            <Textarea placeholder="Describe your opinion" id="message-2" />
            <p className="w-full text-sm text-muted-foreground">
              Your message will be copied to the support team.
            </p>
          </div>
        </div>
        <Button className="bg-transparent" variant="outline">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
