import { collection, getDocs } from "firebase/firestore";
import { db } from "src/firebase/firebase-config";
import { News } from "src/types/news-type";

export const getNews = async (): Promise<News[]> => {
    const news: News[] = [];

    try {
        const newsRef = collection(db, "news");
        const querySnapshot = await getDocs(newsRef);

        querySnapshot.forEach((doc) => {
            const newsItem: News = {
                newsId: doc.id,
                newsTitle: doc.data().newsTitle,
                newsDescription: doc.data().newsDescription,
                newsReferenceLink: doc.data().newsReferenceLink,
                newsImage: doc.data().newsImage,
                tags: doc.data().tags,
            };
            console.log(newsItem);
            news.push(newsItem);
        });

    } catch (error) {
        console.error("Error fetching news:", error);
    }

    return news;
};
