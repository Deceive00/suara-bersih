import Navbar from "@components/Navbar";
import { Badge } from "@components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  PostCard,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import StatsThread from "@components/ui/stats-thread";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";

const ThreadDetail = () => {
  return (
    <div className="flex bg-slate-700 w-screen font-montserrat">
      <Navbar />

      {/* Thread Detail */}
      <div className="mt-28 px-10 py-20 mx-64 grid bg-white rounded-2xl">
        <a className="text-4xl text-black font-bold">
          Corruption Case Done In Some Country
        </a>
        <a className="text-md text-black mb-5 font-extralight">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </a>

        <StatsThread></StatsThread>
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
            <PostCard/>
            <PostCard/>
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
    </div>
  );
};

export default ThreadDetail;
