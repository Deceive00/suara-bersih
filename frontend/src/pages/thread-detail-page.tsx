import PostCard from "@components/cards/PostCard";
import Navbar2 from "@components/Navbar2";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import ReferenceCard from "@components/ui/reference-card";
import { Separator } from "@components/ui/separator";
import StatsThread from "@components/ui/stats-thread";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { getNews } from "@lib/services/news.service";
import { getThreadById } from "@lib/services/threads.service";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { News } from "src/types/news-type";
import { ThreadFE } from "src/types/threads-type";

const ThreadDetail = () => {
  const { id } = useParams();
  const [thread, setThread] = useState<ThreadFE | null>(null);
  const [news, setNews] = useState<News[] | null>(null);
  const { isLoading, isFetching } = useQuery(
    ["fetchAllThread"],
    async () => {
      console.log("fetching all thread");
      if (id) {
        const data = await getThreadById(id);
        return data;
      }
    },
    {
      onError: (error: Error) => {
        console.error("Error fetching data", error.message);
      },
      onSuccess: (data: ThreadFE) => {
        setThread(data);
      },
    }
  );

  if (isLoading || isFetching) {
  }

  useEffect(() => {
    const getRelatedNews = async () => {
      const response = await getNews();
      setNews(response);
      console.log(news);
    };
    getRelatedNews();
  }, []);

  return (
    <div className="flex bg-white w-full font-montserrat flex-row gap-x-8">
      <Navbar2 />

      <div className="">
        <div className="mt-16 pl-16 py-20 mx-auto grid bg-white rounded-2xl w-4/5">
          <a className="text-4xl text-black font-bold">{thread?.threadTitle}</a>
          <a className="text-md text-black mb-5 mt-1 font-extralight">
          
          
          PT Timah, Indonesia's top tin miner, faces a corruption probe. Accusations include illegal mining within their permits (2015-2022) causing huge environmental damage and economic losses (estimated Rp 271 trillion). Several high-profile figures are suspects.</a>

          <StatsThread thread={thread}></StatsThread>
          {/* Tabs */}
          <Tabs defaultValue="posts" className="w-full pt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="report">Report Status</TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              {thread &&
                thread.posts?.map((post, index) => {
                  return (
                    <PostCard
                      key={index}
                      post={post}
                      isLoading={isLoading || isFetching}
                    />
                  );
                })}
            </TabsContent>
            <TabsContent value="report">
              <Card>
                <CardHeader>
                  <CardTitle>No Status Yet.</CardTitle>
                  <CardDescription>Check on this thread soon.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Thread Detail */}

      {/* Similiar Reference */}
      <div className="w-1/3 mt-16 pr-16 text-montserrat font-bold">
        <h3 className="text-left">RELATED REFERENCES</h3>

        <Separator className="py-[1px] my-1 rounded-full bg-custom-radial-gradient" />

        {news && news.map((news_) => <ReferenceCard news={news_} />)}
      </div>
    </div>
  );
};

export default ThreadDetail;
