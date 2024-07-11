import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Switch } from '@components/ui/switch'; // Ensure you have the Switch component from shadcn
import { ImgInput } from '@components/upload-image/ImgInput';
import { createPost } from '@lib/services/posts.service';
import { getThreadRecommendation } from '@lib/services/threads.service';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { auth } from 'src/firebase/firebase-config';
import { InsertPost } from 'src/types/posts-style';

export default function TestCreatePostPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { mutate: submitMutate } = useMutation(async(data : any)=> {
    await createPost({
      isAnonymous: data.isAnonymous,
      postDescription: data.postDescription,
      postTitle: data.postTitle,
      postImages: data.postImages
    } as InsertPost);
  }, {
    onError:(error : Error) => {
      console.error("Failed to submit post");
    },
    onSuccess:()=>{
      console.log('sukses');
      
    }
  });

  const {mutate: handleRecommendation} = useMutation(async() => {
    await getThreadRecommendation('271')
  }) 

  return (
    <div className='w-screen h-screen'>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
            name="ktpImage"
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
          rules={{ required: "Post description is required" }}
          render={({ field }) => (
            <Input {...field} id="threadTitle" type="text" required placeholder="Description" />
          )}
        />

        <Button type='button' onClick={async() => await getThreadRecommendation('271')}>Recommendation</Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
