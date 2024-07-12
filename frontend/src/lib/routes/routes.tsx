import CreatePost from "@pages/create-post-page";
import LandingPage from "@pages/landing-page";
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
        path: "mic",
        element : <TestMic/>
    }
]