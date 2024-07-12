import { Button } from "@components/ui/button";
import { Progress } from "@components/ui/progress";
import { createPost } from "@lib/services/posts.service";
import { getThreadRecommendation } from "@lib/services/threads.service";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { InsertPost } from "src/types/posts-style";
import { Thread } from "src/types/threads-type";
import { CREATE_POST_SUBPAGE, SUBPAGE_ATTRIBUTES } from "./constants";
import { PostDetails } from "./post-details";
import { ChooseThread } from "./choose-thread";
import { useToast } from "@components/ui/use-toast";
import { Toaster } from "@components/ui/toaster";
import { ConfirmPost } from "./confirm-post";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase/firebase-config";
import Navbar2 from "@components/Navbar2";

const CreatePost = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    reset
  } = useForm();
  useEffect(() => {
    signInWithEmailAndPassword(auth,"rian@gmail.com", 'rian1234')
  }, [])
  
  const watchPostTitle = watch("postTitle");
  const {toast} = useToast();
  const [selectedThreadTitle, setSelectedThreadTitle] = useState("");
  const [recommendation, setRecommendation] = useState<Thread[] | null>();
  const [selectedRecommendation, setSelectedRecommendation] =
    useState<Thread | null>();
  const [transitioning, setTransitioning] = useState(false);
  const [errorMsg, setErrorMsg] = useState<null | {
    title: string;
    description: string;
    variant: string;
  }>(null);
  const navigate = useNavigate();
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
        console.error("Failed to submit post", error);
      },
      onSuccess: () => {
        console.log("sukses");
        toast({
          title: "Post Created",
          description: "Your post has been published successfully",
          variant: "success",
        })
        resetForm();
      },
    }
  );
  const resetForm = async () => {
    await reset();
    navigate('/');
  }
  const onSubmit = (data: any) => {
    createPostMutate(data);
  };

  const handleManualSubmit = async () => {
    const isValid = await trigger();
    if (isValid) {
      handleSubmit(onSubmit)();
    }
  };

  if (errors && Object.keys(errors).length > 0 && errorMsg === null) {
    Object.values(errors).forEach((error) => {
      if (error && error.message) {
        setErrorMsg({
          title: "Form Validation Error",
          description: error.message as string,
          variant: "error",
        });
      }
    });
  }

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

  const [step, setStep] = useState<CREATE_POST_SUBPAGE>(SUBPAGE_ATTRIBUTES[0]);

  const handleNextStep = async () => {
    setErrorMsg(null)
    setTransitioning(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    if(step.number === 1){
    
      const isValid = await trigger();
      if(isValid){
        await handleRecommendation();
        setStep(SUBPAGE_ATTRIBUTES[step.number]);
        
      }
      setTransitioning(false);
    }
    else if(step.number === 2){
      if(selectedThreadTitle.length <= 0){
        console.log(selectedThreadTitle)
        toast({
          title: 'Form Validation Error',
          description:'Thread title must be filled',
          variant: 'error'
        })
        setTransitioning(false);
        return;
      }
      else{
        setStep(SUBPAGE_ATTRIBUTES[step.number]);
        setTransitioning(false);

      }
    }
    else if(step.number !== 3){
      setStep(SUBPAGE_ATTRIBUTES[step.number]);
      setTransitioning(false);
    }
    setTransitioning(false);
  }

  const handlePrevStep = async () => {
    setTransitioning(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    if(step.number !== 1){
      setStep(SUBPAGE_ATTRIBUTES[step.number - 2]);
    }
    setTransitioning(false);
  }
  const renderSubPage = () => {
    if (step.number === 1) {
      return <PostDetails control={control} handleSubmit={handleSubmit} createPostMutate={createPostMutate}/>;
    } else if (step.number === 2) {
      
      return (
        <ChooseThread
          selectedThreadTitle={selectedThreadTitle}
          setSelectedThreadTitle={setSelectedThreadTitle}
          recommendation={recommendation}
          selectedRecommendation={selectedRecommendation}
          setSelectedRecommendation={setSelectedRecommendation}
          handleRemoveRecommendation={handleRemoveRecommendation}
          control={control}
        />
      );
    } else if (step.number === 3) {
      return <ConfirmPost watch={watch} threadTitle={selectedThreadTitle}/>;
    }
  }

  useEffect(() => {
    if (errorMsg !== null) {
      // @ts-ignore
      toast(errorMsg);
    }

  }, [errorMsg]);
  
  return (
    <div className="w-screen min-h-screen h-full text-white font-montserrat text-sm transition-all duration-700 pb-10">
      <Navbar2/>
      <div className="pt-20 mx-80">
        {/* Progress Header */}
        <div className="justify-between flex pb-5 font-bold">
          <a className="text-lg text-primary">Post Progress</a>
          <div className="flex flex-row gap-x-2 text-lg text-RedPrimary">
            <a className="">Step {step.number} / 3</a>
            {/* <Separator className="w-[2px] h-full bg-black" /> */}
          </div>
        </div>
        <Progress
          value={step.progress}
          className="[&>*]:bg-RedPrimary bg-red-200 h-2 transition-all duration-700"
        />
        <div className={`transition-all duration-200 ${
            transitioning ? "opacity-0" : "opacity-100"
          } py-8`}>
          {renderSubPage()}
        </div>
        <div className="mt-5 flex space-x-2">
          {step.number > 1 && (
            <Button
              className="bg-transparent text-primary"
              variant="outline"
              onClick={handlePrevStep}
            >
              Previous Step
            </Button>
          )}
          {step.number !== 3 && (
            <Button
              className="bg-white text-black"
              variant="outline"
              onClick={handleNextStep}
            >
              Next Step
            </Button>
          )}
          {step.number === 3 && (
            <Button
              className="bg-white text-black"
              type="submit"
              variant="outline"
              onClick={handleManualSubmit}
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
