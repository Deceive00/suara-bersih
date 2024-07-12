import Navbar from "@components/Navbar";
import { Button } from "@components/ui/button";
import { FlipWords } from "@components/ui/flip-words";
import { Input } from "@components/ui/input";
import { useRef, useState } from "react";
import { RiSpeakLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Thread } from "src/types/threads-type";
import ThreadCard from "@components/ui/thread-card";

const SearchThread = () => {
  const words = [
    "Bribery",
    "Fraud",
    "Embezzlement",
    "Corruption",
    "Transparency",
  ];

  const [recording, setRecording] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const recorder = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);

  const handleMicClick = async () => {
    try {
      if (!recording) {
        const userMediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        stream.current = userMediaStream;

        recorder.current = new MediaRecorder(userMediaStream);
        const chunks: Blob[] = [];

        recorder.current.ondataavailable = (event) => {
          chunks.push(event.data);
        };

        recorder.current.onstop = async () => {
          const audioBlob = new Blob(chunks, { type: chunks[0].type });
          await sendAudioToBackend(audioBlob);
        };

        recorder.current.start();
        setRecording(true);
      } else {
        recorder.current?.stop();
        setRecording(false);

        stream.current?.getTracks().forEach((track) => track.stop());
      }
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const sendAudioToBackend = async (audioBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append("file", audioBlob, "uploaded_audio.wav");

      const response = await fetch("http://127.0.0.1:5000/transcribe", {
        method: "POST",
        mode: "cors",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send audio to backend");
      }

      const data = await response.json();
      setInputValue((prevValue) => `${prevValue} ${data.transcription}`);
    } catch (error) {
      console.error("Error sending audio to backend:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const threads: Thread[] = [
    {
      threadId: "1",
      threadTitle: "#271TIMAH",
      userUpvotes: ["user1", "user2"],
      userDownvotes: ["user3"],
      status: "complaint filed",
    },
  ];
  return (
    <div className="">
      <Navbar />
      {/* bagian atas */}
      <div className="pb-12 flex font-montserrat bg-gradient-to-b from-RedPrimary to-white">
        <div className="pt-32 grid mx-80 items-center align-middle">
          <div className="mb-4 text-5xl mx-auto font-normal text-white dark:text-neutral-400">
            Search and Discover Threads about
            <FlipWords className="text-RedPrimary" words={words} /> <br />
          </div>
          <a className="text-md font-extralight">
            The information you seek brings us one step closer to transparency.
          </a>
          <div className="flex w-full items-center space-x-2 mt-12">
            <Input
              type="text"
              placeholder="Search cases, threads, keywords..."
              className="bg-white bg-opacity-70 text-black placeholder:text-gray-700 border-transparent "
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button
              onClick={handleMicClick}
              className="bg-blue-400 text-WhitePrimary hover:bg-blue-500 hover:text-lg transition-all duration-300"
            >
              {recording ? (
                <span className="loading loading-bars loading-xs"></span>
              ) : (
                <RiSpeakLine />
              )}
            </Button>
            <Button className="bg-RedPrimary text-WhitePrimary hover:text-lg transition-all duration-300">
              <IoSearch />
            </Button>
          </div>
        </div>
      </div>
      {/* bagian hasil */}
      <div className="grid grid-cols-3 gap-4 p-4 mx-16">
        {threads.map((thread) => (
          <ThreadCard key={thread.threadId} thread={thread} />
        ))}
      </div>
    </div>
  );
};

export default SearchThread;
