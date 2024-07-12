import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Switch } from '@components/ui/switch'; // Ensure you have the Switch component from shadcn
import { ImgInput } from '@components/upload-image/ImgInput';
import { createPost } from '@lib/services/posts.service';
import { getThreadRecommendation } from '@lib/services/threads.service';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { auth } from 'src/firebase/firebase-config';
import { InsertPost } from 'src/types/posts-style';
import { Thread } from 'src/types/threads-type';

export default function TestCreatePostPage() {

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [recommendation, setRecommendation] = useState<Thread[] | null>();
  const [selectedRecommendation, setSelectedRecommendation] = useState<Thread | null>();

  const { mutate: createPostMutate } = useMutation(async(data : any)=> {
    await createPost({newPost : {
      isAnonymous: data.isAnonymous,
      postDescription: data.postDescription,
      postTitle: data.postTitle,
      postImages: data.postImages
    } as InsertPost, threadTitle: data.threadTitle, threadId: selectedRecommendation ? selectedRecommendation.threadId : undefined}
  );
  }, {
    onError:(error : Error) => {
      console.error("Failed to submit post");
    },
    onSuccess:()=>{
      console.log('sukses');
      
    }
  });

  const handleRecommendation = async () => {
    const data = await getThreadRecommendation('271')
    setRecommendation(data);
  }

  return (
    <div className='w-screen h-screen'>
      <form onSubmit={handleSubmit((data) => createPostMutate(data))}>
        <Controller
          name="postTitle"
          control={control}
          defaultValue=""
          rules={{ required: "Post title is required" }}
          render={({ field }) => (
            <Input {...field} id="postTitle" type="text" required placeholder="Title" />
          )}
        />


        <Controller
          name="postDescription"
          control={control}
          defaultValue=""
          rules={{ required: "Post description is required" }}
          render={({ field }) => (
            <Input {...field} id="postDescription" type="text" required placeholder="Description" />
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
              <div className='flex flex-col'>
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

        <Controller
          name="threadTitle"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input {...field} id="threadTitle" type="text" required placeholder="Thread Title" />
          )}
        />
        {
          recommendation && (recommendation.map((thread, index) => {
            return (
              <div>
                <label key={index} className={`${thread.threadId === selectedRecommendation?.threadId ? 'bg-red text-red-500' : 'bg-transparent'} `}>
                  <input
                    type="radio"
                    name="threadId"
                    value={thread.threadId}
                    
                    onChange={(e) => setSelectedRecommendation(thread)}
                  />
                  {thread.threadTitle}
                </label>
                <br />
              </div>
            )
          }))
        }

        <Button type='button' onClick={() => handleRecommendation()}>Recommendation</Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
