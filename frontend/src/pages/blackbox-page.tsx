import Navbar from "@components/Navbar";
import { Separator } from "@components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@components/ui/pagination";
import { SetStateAction, useState } from "react";
import { Record } from "src/types/record-type";
import { HeroParallax } from "@components/ui/hero-parallax";

const Blackbox = () => {
  const generateHash = () => {
    return [...Array(10)]
      .map(() => Math.random().toString(36)[2])
      .join("")
      .toLocaleUpperCase();
  };

  const dummyData: Record[] = [
    {
      caseNumber: generateHash(),
      affiliation: "Government Organization A",
      punishmentSentence: "2 years in prison and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-01-01"),
      details:
        "The case involved a high-ranking official accepting bribes for awarding construction contracts.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Company B",
      punishmentSentence:
        "3 years in prison and community service of 300 hours (IDR 150,000,000)",
      publishedDate: new Date("2022-02-01"),
      details:
        "The CEO was found guilty of embezzling funds from the company's pension scheme.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Municipal Office C",
      punishmentSentence:
        "1 year in prison, 2 years probation, and a IDR 150,000,000 fine",
      publishedDate: new Date("2022-03-01"),
      details:
        "A clerk was involved in a scheme to alter property tax records in exchange for bribes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Healthcare Institution D",
      punishmentSentence:
        "4 years in prison and a IDR 1,500,000,000 restitution",
      publishedDate: new Date("2022-04-01"),
      details:
        "A healthcare provider was charged with submitting fraudulent insurance claims over several years.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Educational Board E",
      punishmentSentence:
        "5 years in prison, a lifetime ban from public office, and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-05-01"),
      details:
        "The superintendent was found guilty of misappropriating federal education funds for personal use.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Public Works Department F",
      punishmentSentence:
        "6 months in prison, 1 year house arrest, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-06-01"),
      details:
        "A project manager accepted kickbacks from contractors in exchange for preferential treatment in bidding processes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Transport Authority G",
      punishmentSentence:
        "3 years in prison, 3 years probation, and a IDR 450,000,000 fine",
      publishedDate: new Date("2022-07-01"),
      details:
        "A director was involved in a scheme to inflate project costs and divert the excess funds.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Energy Company H",
      punishmentSentence:
        "2 years in prison, asset forfeiture of IDR 3,000,000,000, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-08-01"),
      details:
        "An executive was found guilty of insider trading and manipulating stock prices.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Financial Services I",
      punishmentSentence:
        "1 year in prison, 3 years probation, and a IDR 225,000,000 fine",
      publishedDate: new Date("2022-09-01"),
      details:
        "A broker was charged with running a Ponzi scheme that defrauded numerous investors.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Technology Firm J",
      punishmentSentence:
        "4 years in prison and restitution of IDR 7,500,000,000",
      publishedDate: new Date("2022-10-01"),
      details:
        "The CTO was implicated in a case of intellectual property theft and industrial espionage.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Government Organization A",
      punishmentSentence: "2 years in prison and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-01-01"),
      details:
        "The case involved a high-ranking official accepting bribes for awarding construction contracts.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Company B",
      punishmentSentence:
        "3 years in prison and community service of 300 hours (IDR 150,000,000)",
      publishedDate: new Date("2022-02-01"),
      details:
        "The CEO was found guilty of embezzling funds from the company's pension scheme.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Municipal Office C",
      punishmentSentence:
        "1 year in prison, 2 years probation, and a IDR 150,000,000 fine",
      publishedDate: new Date("2022-03-01"),
      details:
        "A clerk was involved in a scheme to alter property tax records in exchange for bribes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Healthcare Institution D",
      punishmentSentence:
        "4 years in prison and a IDR 1,500,000,000 restitution",
      publishedDate: new Date("2022-04-01"),
      details:
        "A healthcare provider was charged with submitting fraudulent insurance claims over several years.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Educational Board E",
      punishmentSentence:
        "5 years in prison, a lifetime ban from public office, and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-05-01"),
      details:
        "The superintendent was found guilty of misappropriating federal education funds for personal use.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Public Works Department F",
      punishmentSentence:
        "6 months in prison, 1 year house arrest, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-06-01"),
      details:
        "A project manager accepted kickbacks from contractors in exchange for preferential treatment in bidding processes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Transport Authority G",
      punishmentSentence:
        "3 years in prison, 3 years probation, and a IDR 450,000,000 fine",
      publishedDate: new Date("2022-07-01"),
      details:
        "A director was involved in a scheme to inflate project costs and divert the excess funds.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Energy Company H",
      punishmentSentence:
        "2 years in prison, asset forfeiture of IDR 3,000,000,000, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-08-01"),
      details:
        "An executive was found guilty of insider trading and manipulating stock prices.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Financial Services I",
      punishmentSentence:
        "1 year in prison, 3 years probation, and a IDR 225,000,000 fine",
      publishedDate: new Date("2022-09-01"),
      details:
        "A broker was charged with running a Ponzi scheme that defrauded numerous investors.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Technology Firm J",
      punishmentSentence:
        "4 years in prison and restitution of IDR 7,500,000,000",
      publishedDate: new Date("2022-10-01"),
      details:
        "The CTO was implicated in a case of intellectual property theft and industrial espionage.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Government Organization A",
      punishmentSentence: "2 years in prison and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-01-01"),
      details:
        "The case involved a high-ranking official accepting bribes for awarding construction contracts.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Company B",
      punishmentSentence:
        "3 years in prison and community service of 300 hours (IDR 150,000,000)",
      publishedDate: new Date("2022-02-01"),
      details:
        "The CEO was found guilty of embezzling funds from the company's pension scheme.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Municipal Office C",
      punishmentSentence:
        "1 year in prison, 2 years probation, and a IDR 150,000,000 fine",
      publishedDate: new Date("2022-03-01"),
      details:
        "A clerk was involved in a scheme to alter property tax records in exchange for bribes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Healthcare Institution D",
      punishmentSentence:
        "4 years in prison and a IDR 1,500,000,000 restitution",
      publishedDate: new Date("2022-04-01"),
      details:
        "A healthcare provider was charged with submitting fraudulent insurance claims over several years.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Educational Board E",
      punishmentSentence:
        "5 years in prison, a lifetime ban from public office, and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-05-01"),
      details:
        "The superintendent was found guilty of misappropriating federal education funds for personal use.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Public Works Department F",
      punishmentSentence:
        "6 months in prison, 1 year house arrest, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-06-01"),
      details:
        "A project manager accepted kickbacks from contractors in exchange for preferential treatment in bidding processes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Transport Authority G",
      punishmentSentence:
        "3 years in prison, 3 years probation, and a IDR 450,000,000 fine",
      publishedDate: new Date("2022-07-01"),
      details:
        "A director was involved in a scheme to inflate project costs and divert the excess funds.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Energy Company H",
      punishmentSentence:
        "2 years in prison, asset forfeiture of IDR 3,000,000,000, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-08-01"),
      details:
        "An executive was found guilty of insider trading and manipulating stock prices.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Financial Services I",
      punishmentSentence:
        "1 year in prison, 3 years probation, and a IDR 225,000,000 fine",
      publishedDate: new Date("2022-09-01"),
      details:
        "A broker was charged with running a Ponzi scheme that defrauded numerous investors.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Technology Firm J",
      punishmentSentence:
        "4 years in prison and restitution of IDR 7,500,000,000",
      publishedDate: new Date("2022-10-01"),
      details:
        "The CTO was implicated in a case of intellectual property theft and industrial espionage.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Government Organization A",
      punishmentSentence: "2 years in prison and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-01-01"),
      details:
        "The case involved a high-ranking official accepting bribes for awarding construction contracts.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Company B",
      punishmentSentence:
        "3 years in prison and community service of 300 hours (IDR 150,000,000)",
      publishedDate: new Date("2022-02-01"),
      details:
        "The CEO was found guilty of embezzling funds from the company's pension scheme.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Municipal Office C",
      punishmentSentence:
        "1 year in prison, 2 years probation, and a IDR 150,000,000 fine",
      publishedDate: new Date("2022-03-01"),
      details:
        "A clerk was involved in a scheme to alter property tax records in exchange for bribes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Healthcare Institution D",
      punishmentSentence:
        "4 years in prison and a IDR 1,500,000,000 restitution",
      publishedDate: new Date("2022-04-01"),
      details:
        "A healthcare provider was charged with submitting fraudulent insurance claims over several years.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Educational Board E",
      punishmentSentence:
        "5 years in prison, a lifetime ban from public office, and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-05-01"),
      details:
        "The superintendent was found guilty of misappropriating federal education funds for personal use.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Public Works Department F",
      punishmentSentence:
        "6 months in prison, 1 year house arrest, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-06-01"),
      details:
        "A project manager accepted kickbacks from contractors in exchange for preferential treatment in bidding processes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Transport Authority G",
      punishmentSentence:
        "3 years in prison, 3 years probation, and a IDR 450,000,000 fine",
      publishedDate: new Date("2022-07-01"),
      details:
        "A director was involved in a scheme to inflate project costs and divert the excess funds.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Energy Company H",
      punishmentSentence:
        "2 years in prison, asset forfeiture of IDR 3,000,000,000, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-08-01"),
      details:
        "An executive was found guilty of insider trading and manipulating stock prices.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Financial Services I",
      punishmentSentence:
        "1 year in prison, 3 years probation, and a IDR 225,000,000 fine",
      publishedDate: new Date("2022-09-01"),
      details:
        "A broker was charged with running a Ponzi scheme that defrauded numerous investors.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Technology Firm J",
      punishmentSentence:
        "4 years in prison and restitution of IDR 7,500,000,000",
      publishedDate: new Date("2022-10-01"),
      details:
        "The CTO was implicated in a case of intellectual property theft and industrial espionage.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Government Organization A",
      punishmentSentence: "2 years in prison and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-01-01"),
      details:
        "The case involved a high-ranking official accepting bribes for awarding construction contracts.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Company B",
      punishmentSentence:
        "3 years in prison and community service of 300 hours (IDR 150,000,000)",
      publishedDate: new Date("2022-02-01"),
      details:
        "The CEO was found guilty of embezzling funds from the company's pension scheme.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Municipal Office C",
      punishmentSentence:
        "1 year in prison, 2 years probation, and a IDR 150,000,000 fine",
      publishedDate: new Date("2022-03-01"),
      details:
        "A clerk was involved in a scheme to alter property tax records in exchange for bribes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Healthcare Institution D",
      punishmentSentence:
        "4 years in prison and a IDR 1,500,000,000 restitution",
      publishedDate: new Date("2022-04-01"),
      details:
        "A healthcare provider was charged with submitting fraudulent insurance claims over several years.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Educational Board E",
      punishmentSentence:
        "5 years in prison, a lifetime ban from public office, and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-05-01"),
      details:
        "The superintendent was found guilty of misappropriating federal education funds for personal use.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Public Works Department F",
      punishmentSentence:
        "6 months in prison, 1 year house arrest, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-06-01"),
      details:
        "A project manager accepted kickbacks from contractors in exchange for preferential treatment in bidding processes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Transport Authority G",
      punishmentSentence:
        "3 years in prison, 3 years probation, and a IDR 450,000,000 fine",
      publishedDate: new Date("2022-07-01"),
      details:
        "A director was involved in a scheme to inflate project costs and divert the excess funds.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Energy Company H",
      punishmentSentence:
        "2 years in prison, asset forfeiture of IDR 3,000,000,000, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-08-01"),
      details:
        "An executive was found guilty of insider trading and manipulating stock prices.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Financial Services I",
      punishmentSentence:
        "1 year in prison, 3 years probation, and a IDR 225,000,000 fine",
      publishedDate: new Date("2022-09-01"),
      details:
        "A broker was charged with running a Ponzi scheme that defrauded numerous investors.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Technology Firm J",
      punishmentSentence:
        "4 years in prison and restitution of IDR 7,500,000,000",
      publishedDate: new Date("2022-10-01"),
      details:
        "The CTO was implicated in a case of intellectual property theft and industrial espionage.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Government Organization A",
      punishmentSentence: "2 years in prison and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-01-01"),
      details:
        "The case involved a high-ranking official accepting bribes for awarding construction contracts.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Company B",
      punishmentSentence:
        "3 years in prison and community service of 300 hours (IDR 150,000,000)",
      publishedDate: new Date("2022-02-01"),
      details:
        "The CEO was found guilty of embezzling funds from the company's pension scheme.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Municipal Office C",
      punishmentSentence:
        "1 year in prison, 2 years probation, and a IDR 150,000,000 fine",
      publishedDate: new Date("2022-03-01"),
      details:
        "A clerk was involved in a scheme to alter property tax records in exchange for bribes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Healthcare Institution D",
      punishmentSentence:
        "4 years in prison and a IDR 1,500,000,000 restitution",
      publishedDate: new Date("2022-04-01"),
      details:
        "A healthcare provider was charged with submitting fraudulent insurance claims over several years.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Educational Board E",
      punishmentSentence:
        "5 years in prison, a lifetime ban from public office, and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-05-01"),
      details:
        "The superintendent was found guilty of misappropriating federal education funds for personal use.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Public Works Department F",
      punishmentSentence:
        "6 months in prison, 1 year house arrest, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-06-01"),
      details:
        "A project manager accepted kickbacks from contractors in exchange for preferential treatment in bidding processes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Transport Authority G",
      punishmentSentence:
        "3 years in prison, 3 years probation, and a IDR 450,000,000 fine",
      publishedDate: new Date("2022-07-01"),
      details:
        "A director was involved in a scheme to inflate project costs and divert the excess funds.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Energy Company H",
      punishmentSentence:
        "2 years in prison, asset forfeiture of IDR 3,000,000,000, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-08-01"),
      details:
        "An executive was found guilty of insider trading and manipulating stock prices.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Financial Services I",
      punishmentSentence:
        "1 year in prison, 3 years probation, and a IDR 225,000,000 fine",
      publishedDate: new Date("2022-09-01"),
      details:
        "A broker was charged with running a Ponzi scheme that defrauded numerous investors.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Technology Firm J",
      punishmentSentence:
        "4 years in prison and restitution of IDR 7,500,000,000",
      publishedDate: new Date("2022-10-01"),
      details:
        "The CTO was implicated in a case of intellectual property theft and industrial espionage.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Government Organization A",
      punishmentSentence: "2 years in prison and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-01-01"),
      details:
        "The case involved a high-ranking official accepting bribes for awarding construction contracts.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Company B",
      punishmentSentence:
        "3 years in prison and community service of 300 hours (IDR 150,000,000)",
      publishedDate: new Date("2022-02-01"),
      details:
        "The CEO was found guilty of embezzling funds from the company's pension scheme.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Municipal Office C",
      punishmentSentence:
        "1 year in prison, 2 years probation, and a IDR 150,000,000 fine",
      publishedDate: new Date("2022-03-01"),
      details:
        "A clerk was involved in a scheme to alter property tax records in exchange for bribes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Healthcare Institution D",
      punishmentSentence:
        "4 years in prison and a IDR 1,500,000,000 restitution",
      publishedDate: new Date("2022-04-01"),
      details:
        "A healthcare provider was charged with submitting fraudulent insurance claims over several years.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Educational Board E",
      punishmentSentence:
        "5 years in prison, a lifetime ban from public office, and a IDR 750,000,000 fine",
      publishedDate: new Date("2022-05-01"),
      details:
        "The superintendent was found guilty of misappropriating federal education funds for personal use.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Public Works Department F",
      punishmentSentence:
        "6 months in prison, 1 year house arrest, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-06-01"),
      details:
        "A project manager accepted kickbacks from contractors in exchange for preferential treatment in bidding processes.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Transport Authority G",
      punishmentSentence:
        "3 years in prison, 3 years probation, and a IDR 450,000,000 fine",
      publishedDate: new Date("2022-07-01"),
      details:
        "A director was involved in a scheme to inflate project costs and divert the excess funds.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Energy Company H",
      punishmentSentence:
        "2 years in prison, asset forfeiture of IDR 3,000,000,000, and a IDR 300,000,000 fine",
      publishedDate: new Date("2022-08-01"),
      details:
        "An executive was found guilty of insider trading and manipulating stock prices.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Financial Services I",
      punishmentSentence:
        "1 year in prison, 3 years probation, and a IDR 225,000,000 fine",
      publishedDate: new Date("2022-09-01"),
      details:
        "A broker was charged with running a Ponzi scheme that defrauded numerous investors.",
    },
    {
      caseNumber: generateHash(),
      affiliation: "Technology Firm J",
      punishmentSentence:
        "4 years in prison and restitution of IDR 7,500,000,000",
      publishedDate: new Date("2022-10-01"),
      details:
        "The CTO was implicated in a case of intellectual property theft and industrial espionage.",
    },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="overflow-x-hidden min-h-screen w-full bg-black text-white font-montserrat">
      <Navbar />
      <div className="w-full px-12">
      <HeroParallax products={dummyData} />
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

        {/* Pagination buttons */}
        <div className="join my-20">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`join-item btn btn-sm ${currentPage === index + 1 ? 'btn-active' : ''}`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blackbox;

