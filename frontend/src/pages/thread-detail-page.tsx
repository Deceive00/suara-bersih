<<<<<<< HEAD
import Loader from "@components/loading/loader";
import Navbar2 from "@components/Navbar2";

import {
  Card,
=======
import PostCard from "@components/cards/PostCard";
import Navbar2 from "@components/Navbar2";
import Loader from "@components/loading/loader";

import {
  Card,

>>>>>>> refs/remotes/origin/main
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import ReferenceCard from "@components/ui/reference-card";
import { Separator } from "@components/ui/separator";
import StatsThread from "@components/ui/stats-thread";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { getThreadById } from "@lib/services/threads.service";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ThreadFE } from "src/types/threads-type";

const ThreadDetail = () => {
  const {id} = useParams();
  const [thread, setThread] = useState<ThreadFE | null>(null);
  const {isLoading, isFetching} = useQuery(['fetchAllThread'], async () => {
    console.log('fetching all thread');
    if(id){
      const data = await getThreadById(id);
      return data;
    }
  }, {
    onError: (error : Error) => {
      console.error('Error fetching data', error.message)
    }, onSuccess: (data : ThreadFE) => {
      setThread(data);
    }
  });
  if(isLoading || isFetching){
  }
  return (
    <div className="flex bg-white w-screen font-montserrat flex-row gap-x-8">
      <Navbar2 />

      {/* Thread Detail */}
      <div className="mt-16 pl-16 py-20 mx-auto grid bg-white rounded-2xl w-3/4">
        <a className="text-4xl text-black font-bold">
          {thread?.threadTitle}
        </a>
        <a className="text-md text-black mb-5 font-extralight">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </a>

        <StatsThread thread={thread}></StatsThread>
        {/* <div className="mb-5 pb-5 border-b-2">
          <Badge className="mx-1">Tag 1</Badge>
          <Badge className="mx-1">Tag 2</Badge>
          <Badge className="mx-1">Tag 3</Badge>
        </div> */}
        {/* Tabs */}
        <Tabs defaultValue="posts" className="w-full pt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="report">Report Status</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            {
              thread && thread.posts?.map((post, index) => {
                return (
                  <PostCard key={index} post={post} />
                )
              })
            }
            
          </TabsContent>
          <TabsContent value="report">
            <Card>
              <CardHeader>
                <CardTitle>No Status Yet.</CardTitle>
                <CardDescription>
                  Check on this thread soon.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Similiar Reference */}
      <div className="w-1/4 mt-16 pr-16 text-montserrat font-bold">
        <h3 className="text-left">RELATED REFERENCES</h3>

        <Separator className="py-[1px] my-1 rounded-full bg-custom-radial-gradient" />

        {/* Mapping of reference */}
        <ReferenceCard />
        <ReferenceCard />
        <ReferenceCard />
      </div>
    </div>
  );
};

export default ThreadDetail;
