import Navbar from "@components/Navbar";
import { Button } from "@components/ui/button";
import { FlipWords } from "@components/ui/flip-words";
import { Input } from "@components/ui/input";

const SearchThread = () => {
  const words = [
    "Bribery",
    "Fraud",
    "Embezzlement",
    "Corruption",
    "Transparency",
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
              className="bg-black text-white placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>
      {/* bagian hasil */}
      <div>Hasil search di sini</div>
    </div>
  );
};

export default SearchThread;
