import CreatePost from "@pages/create-post-page";
<<<<<<< HEAD
import LandingPage from "@pages/landing-page";
=======
import Home from "@pages/Home";
import SearchThread from "@pages/search-thread-page";
>>>>>>> refs/remotes/origin/main
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