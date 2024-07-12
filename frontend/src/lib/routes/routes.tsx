import CreatePost from "@pages/create-post-page/create-post-page";
import LandingPage from "@pages/landing-page";
import SearchThread from "@pages/search-thread-page";
import TestMic from "@pages/test-mic/test-mic-page";
import ThreadDetail from "@pages/thread-detail-page";

export const router = [
    {
        path:"/",
        element: <LandingPage />
    },
    {
        path: "thread/detail/",
        element: <ThreadDetail/>
    },
    {
        path: "/create/post",
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