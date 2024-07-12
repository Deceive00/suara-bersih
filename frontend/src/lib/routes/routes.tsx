<<<<<<< HEAD
import CreatePost from "@pages/create-post-page";
import Home from "@pages/home/home";
=======
import CreatePost from "@pages/create-post-page/create-post-page";
>>>>>>> refs/remotes/origin/main
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
        path: "/thread/detail/",
        element: <ThreadDetail/>
    },
    {
<<<<<<< HEAD
        path: "/createpost",
        element : <CreatePost/>
    },
    {
        path: "/searchthread",
=======
        path: "/create/post",
        element : <CreatePost/>
    },
    {
        path: "/search/thread/:query",
>>>>>>> refs/remotes/origin/main
        element : <SearchThread/>
    },
    {
        path: "/mic",
        element : <TestMic/>
    },
    {
        path: "/home",
        element : <Home />
    }
]