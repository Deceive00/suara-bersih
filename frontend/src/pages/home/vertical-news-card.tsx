import React from "react";
import { News } from "src/types/news-type";
import dummyPng from "@assets/image-placeholder.webp";

interface Props {
    news : News;
}

const VerticalNewsCard : React.FC<Props> = ({news}) => {
    return (
        <div
          key={news.newsId}
          className="carousel-item p-0 m-0 w-[20rem] h-[100%] flex flex-col"
        >
          {/* Image */}
          <div className="carousel-item w-[100%] h-3/6 rounded-lg overflow-hidden">
            <img src={dummyPng} alt={news.newsTitle} className="" />
          </div>

          {/*  Avatar & Date */}
          <div className="flex flex-row justify-start items-center gap-x-2">
            <div className="avatar">
              <div className="w-6 h-6 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <span className="text-md font-normal text-WhiteSecondary py-2">
              CNN News &bull; 1 day ago
            </span>
          </div>

          {/* Title */}
          <h1 className="h-1/6 text-left font-bold py-2 text-xl">
            {news.newsTitle}
          </h1>

          {/* Description */}
          <span className="text-slate-100 text-justify h-2/6">
            {news.newsDescription}
          </span>
        </div>
    )
}

export default VerticalNewsCard;