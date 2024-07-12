import { News } from "src/types/news-type";
import dummyPng from "@assets/image-placeholder.webp";

// harusnya news sih ini
interface Props {
    post : News;
}

const HorizontalNewsCard : React.FC<Props> = ({post}) => {
    return (
        <div className="w-screen rounded-box py-4">
        <div
          key={post.newsId}
          className="p-0 m-0 w-full h-[20rem] flex flex-row gap-x-8"
        >
          {/* Image */}
          <div className="carousel-item w-auto h-full rounded-lg overflow-hidden">
            <img src={dummyPng} alt={post.newsTitle} className="rounded-box" />
          </div>

          <div className="w-full flex flex-col">
            {/*  Avatar & Date */}
            <div className="flex flex-row justify-start items-center gap-x-2">
              <div className="avatar">
                <div className="w-6 h-6 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <span className="text-md font-normal text-primary py-2">
                CNN News &bull; 13 mins ago
              </span>
            </div>

            {/* Title */}
            <h1 className="text-left font-bold text-4xl text-black h-1/4">
              {post.newsTitle}
            </h1>

            {/* Description */}
            <span className="text-slate-700 text-justify h-2/4">
              {post.newsDescription}
            </span>

            {/* Tags Decoration */}
            <div className="flex flex-row h-1/4 justify-start items-center gap-x-2 text-RedPrimary">
              <span className="font-bold text-md">
                HotTopics &bull;
              </span>

              <span className="font-bold text-md">
                Corruption &bull;
              </span>

              <span className="font-bold text-md">
                BerantasHabis! &bull;
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HorizontalNewsCard;