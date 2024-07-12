import CreatePost from "@pages/create-post-page";
import Home from "@pages/Home";
import SearchThread from "@pages/search-thread-page";
import TestMic from "@pages/test-mic/test-mic-page";
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
        path: "searchthread",
        element : <SearchThread/>
    },
    {
        path: "mic",
        element : <TestMic/>
    }
]