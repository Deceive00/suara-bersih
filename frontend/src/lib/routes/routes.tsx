import CreatePost from "@pages/create-post-page/create-post-page";
import Home from "@pages/Home";
import ThreadDetail from "@pages/thread-detail";

export const router = [
    {
        path:"/",
        element: <Home />
    },
    {
        path: "thread/detail/",
        element: <ThreadDetail/>
    },
    {
        path: "/create/post",
        element : <CreatePost/>
    }
]