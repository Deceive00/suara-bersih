import Navbar from "@components/Navbar";
import { Separator } from "@components/ui/separator";
import { useRef, useState } from "react";
import { Record } from "src/types/record-type";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ products }: { products: Record[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const currentItems = products.slice(0, 15);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {currentItems.map((record, index) => (
            <div key={index} className="p-4 m-2 border-t shadow-md">
              <div className="text-sm flex items-center justify-between">
                <h4 className="font-bold leading-none">
                  ID &bull; {record.caseNumber}
                </h4>
                <div className="text-gray-500">
                  Published Date: {record.publishedDate.toDateString()}
                </div>
              </div>
              <Separator className="my-8 bg-gray-900" />
              <div className="flex justify-between text-sm mb-2 text-gray-500">
                <div className="flex-none text-left w-1/4"> 
                  Affiliation
                </div>
                <div className="flex-grow text-justify mx-2">
                  Details
                </div>
                <div className="flex-none pl-3 text-left w-1/4">
                  Sentence
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex-none text-left w-1/4 text-md">
                  {record.affiliation}
                </div>
                <div className="flex-grow text-justify mx-2">
                  {record.details}
                </div>
                <div className="flex-none pl-3 text-left w-1/4 text-RedPrimary">
                  {record.punishmentSentence}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Welcome to  <br /> <a className="text-slate-800">Black</a> Box
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      Each entry in the "Blackbox" database provides detailed insights into cases involving unethical practices such as bribery, embezzlement, fraud, and abuse of power. 
      </p>
    </div>
  );
};
