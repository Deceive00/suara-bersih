import Navbar from "@components/Navbar";
import Carousel from "@components/ui/carousel";
import React from "react";
import { News } from "src/types/news-type";
import HorizontalNewsCard from "./horizontal-news-card";

const dummyNews: News[] = [
  {
    newsId: "1",
    newsTitle: "New Technology Advances in 2024",
    newsDescription: "A deep dive into the latest technological advances that are shaping the future.",
    newsReferenceLink: "https://example.com/technology-advances-2024"
  },
  {
    newsId: "2",
    newsTitle: "Climate Change and Its Impact",
    newsDescription: "An in-depth analysis of how climate change is affecting global weather patterns.",
    newsReferenceLink: "https://example.com/climate-change-impact"
  },
  {
    newsId: "3",
    newsTitle: "Economic Growth in Emerging Markets",
    newsDescription: "Exploring the economic growth trends in emerging markets and their global implications.",
    newsReferenceLink: "https://example.com/economic-growth-emerging-markets"
  },
  {
    newsId: "4",
    newsTitle: "Advancements in AI and Machine Learning",
    newsDescription: "The latest breakthroughs in AI and machine learning and their potential applications.",
    newsReferenceLink: "https://example.com/ai-machine-learning-advancements"
  },
  {
    newsId: "5",
    newsTitle: "Health and Wellness Trends in 2024",
    newsDescription: "A look at the top health and wellness trends that are gaining popularity in 2024.",
    newsReferenceLink: "https://example.com/health-wellness-trends-2024"
  }
];


const Home = () => {
  // State --> fetch threads
  const [news, setNews] = React.useState(dummyNews);

  // Fetch Latest News []

  // Fetch Most Hot News

  return (
    <div className="w-screen box-border bg-black text-montserrat overflow-x-hidden">
      <Navbar />

      <div className="pt-16 px-16 box-border w-full h-auto flex flex-col gap-y-8">
        {/* Content 1 */}
        <HorizontalNewsCard post={news[0]}/>

        {/* Content 2 */}
        <div className="w-full text-WhitePrimary ">
          <h1 className="text-2xl font-bold text-left">Latest News</h1>

          {/* Image Infinite Scroll */}
          <Carousel items={news} />
        </div>
      </div>
    </div>
  );
};

export default Home;
