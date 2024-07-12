import placeholder from "@assets/image-placeholder.webp";
import { News } from "src/types/news-type";

const truncateText = (text: string, limit: number) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

const ReferenceCard = ({ news }: { news: News }) => {
    const handleCardClick = () => {
        if (news.newsReferenceLink) {
          window.location.href = news.newsReferenceLink;
        }
      };
    
  return (
    <div onClick={()=>{handleCardClick()}} className="flex flex-col mt-8 cursor-pointer hover:underline">
      {/* Image */}
      <div className="w-full h-[120px] bg-black rounded-md overflow-hidden">
        <img src={news.newsImage || placeholder} alt="" className="w-full h-full object-cover" />
      </div>
      <span className="text-left pt-2 text-sm ">{truncateText(news.newsDescription, 10)}</span>
    </div>
  );
};

export default ReferenceCard;
