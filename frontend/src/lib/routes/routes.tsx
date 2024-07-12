import CreatePost from "@pages/create-post-page";
import Home from "@pages/Home";
import ThreadDetail from "@pages/thread-detail-page";

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
        path: "createpost",
        element : <CreatePost/>
    },
    {
        
    }
]