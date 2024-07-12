import Navbar from "@components/Navbar";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { BiSolidUpvote } from "react-icons/bi";

const ThreadDetail = () => {
  return (
    <div className="flex bg-gray-700 w-screen font-montserrat">
      <Navbar />
      <div className="mt-28 px-10 py-20 mx-64 grid bg-white rounded-2xl">
        <a className="text-4xl text-black mb-5 font-bold">
          This is an example thread of a corruption case.
        </a>
        <a className="text-md text-black mb-5 font-extralight">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </a>
        <div className="mb-5 pb-5 border-b-2">
          <Badge className="mx-1">Tag 1</Badge>
          <Badge className="mx-1">Tag 2</Badge>
          <Badge className="mx-1">Tag 3</Badge>
        </div>
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="report">Report Status</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <Card className="rounded-none">
              <CardHeader>
                <CardTitle className="text-md">User 1</CardTitle>
                <CardDescription className="text-xs flex">
                  <div className="w-11/12">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </div>
                  <div className="text-lg w-1/12 flex items-center"><BiSolidUpvote />200</div>
                </CardDescription>
              </CardHeader>
            </Card>
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
