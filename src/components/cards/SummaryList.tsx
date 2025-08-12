import SummaryItem from "./SummaryItem";

const list = {
  Income: "$4,200",
  Expenses: "$2,850",
  Savings: "$1,350",
  investment: "$5,000",
  Business: "$12,250",
};

export default function SummaryList() {
  return (
    <ul className="z-10 space-y-2">
      {Object.entries(list).map(([summary, price]) => (
        <SummaryItem key={summary} summary={summary} price={price} />
      ))}
    </ul>
  );
}
