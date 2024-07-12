import VerticalNewsCard from "@pages/home/vertical-news-card";
import { News } from "src/types/news-type";

interface Props {
  items: News[];
}

const Carousel: React.FC<Props> = ({ items }) => {
  return (
    <div className="carousel carousel-center w-full h-[30rem] space-x-4 rounded-lg overflow-y-hidden my-4 text-montserrat">
      {items.map((item) => (
        <VerticalNewsCard key={item.newsId} news={item} />
      ))}
    </div>
  );
};

export default Carousel;
