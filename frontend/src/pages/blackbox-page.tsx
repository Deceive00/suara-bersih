import Navbar from "@components/Navbar";
import { Separator } from "@components/ui/separator";
import { Record } from "src/types/record-type";

const Blackbox = () => {
  // dummy data

  const dummyData: Record[] = [
    {
      caseNumber: "001",
      affiliation: "Affiliation A",
      punishmentSentence: "2 years",
      publishedDate: new Date("2022-01-01"),
      details: "Details of case 001",
    },
    {
      caseNumber: "002",
      affiliation: "Affiliation B",
      punishmentSentence: "3 years",
      publishedDate: new Date("2022-02-01"),
      details: "Details of case 002",
    },
    // Add 18 more dummy data entries here...
    {
      caseNumber: "003",
      affiliation: "Affiliation C",
      punishmentSentence: "1 year",
      publishedDate: new Date("2022-03-01"),
      details: "Details of case 003",
    },
    {
      caseNumber: "004",
      affiliation: "Affiliation D",
      punishmentSentence: "4 years",
      publishedDate: new Date("2022-04-01"),
      details: "Details of case 004",
    },
    {
      caseNumber: "005",
      affiliation: "Affiliation E",
      punishmentSentence: "5 years",
      publishedDate: new Date("2022-05-01"),
      details: "Details of case 005",
    },
    {
      caseNumber: "006",
      affiliation: "Affiliation F",
      punishmentSentence: "6 months",
      publishedDate: new Date("2022-06-01"),
      details: "Details of case 006",
    },
    {
      caseNumber: "007",
      affiliation: "Affiliation G",
      punishmentSentence: "3 years",
      publishedDate: new Date("2022-07-01"),
      details: "Details of case 007",
    },
    {
      caseNumber: "008",
      affiliation: "Affiliation H",
      punishmentSentence: "2 years",
      publishedDate: new Date("2022-08-01"),
      details: "Details of case 008",
    },
    {
      caseNumber: "009",
      affiliation: "Affiliation I",
      punishmentSentence: "1 year",
      publishedDate: new Date("2022-09-01"),
      details: "Details of case 009",
    },
    {
      caseNumber: "010",
      affiliation: "Affiliation J",
      punishmentSentence: "4 years",
      publishedDate: new Date("2022-10-01"),
      details: "Details of case 010",
    },
    {
      caseNumber: "011",
      affiliation: "Affiliation K",
      punishmentSentence: "5 years",
      publishedDate: new Date("2022-11-01"),
      details: "Details of case 011",
    },
    {
      caseNumber: "012",
      affiliation: "Affiliation L",
      punishmentSentence: "6 months",
      publishedDate: new Date("2022-12-01"),
      details: "Details of case 012",
    },
    {
      caseNumber: "013",
      affiliation: "Affiliation M",
      punishmentSentence: "3 years",
      publishedDate: new Date("2023-01-01"),
      details: "Details of case 013",
    },
    {
      caseNumber: "014",
      affiliation: "Affiliation N",
      punishmentSentence: "2 years",
      publishedDate: new Date("2023-02-01"),
      details: "Details of case 014",
    },
    {
      caseNumber: "015",
      affiliation: "Affiliation O",
      punishmentSentence: "1 year",
      publishedDate: new Date("2023-03-01"),
      details: "Details of case 015",
    },
    {
      caseNumber: "016",
      affiliation: "Affiliation P",
      punishmentSentence: "4 years",
      publishedDate: new Date("2023-04-01"),
      details: "Details of case 016",
    },
    {
      caseNumber: "017",
      affiliation: "Affiliation Q",
      punishmentSentence: "5 years",
      publishedDate: new Date("2023-05-01"),
      details: "Details of case 017",
    },
    {
      caseNumber: "018",
      affiliation: "Affiliation R",
      punishmentSentence: "6 months",
      publishedDate: new Date("2023-06-01"),
      details: "Details of case 018",
    },
    {
      caseNumber: "019",
      affiliation: "Affiliation S",
      punishmentSentence: "3 years",
      publishedDate: new Date("2023-07-01"),
      details: "Details of case 019",
    },
    {
      caseNumber: "020",
      affiliation: "Affiliation T",
      punishmentSentence: "2 years",
      publishedDate: new Date("2023-08-01"),
      details: "Details of case 020",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar></Navbar>
      <div className="pt-20 px-80">
        {dummyData.map((record, index) => (
          <div key={index} className='p-4 m-2 border-t shadow-md'>
            <div className="text-sm  mb-2 flex items-center justify-between">
              <h4 className="font-bold leading-none underline-offset-4 underline">
                {record.caseNumber}
              </h4>
              <div>{record.publishedDate.toDateString()}</div>
            </div>
            <Separator className="my-2 bg-gray-900" />
            <div className="flex h-5 items-center justify-between text-md">
              <div>
                {record.affiliation}
              </div>
              <div>{record.details}</div>
              <div>{record.punishmentSentence}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blackbox;
