
interface SummaryItemProps {
  summary: string,
  price: string,
}

export default function SummaryItem({summary,price}: SummaryItemProps) {
  return (
    <li key={summary} className="flex justify-between items-center">
        <span className="text-lg">{summary}</span>
        <span className="font-semibold">{price}</span>
    </li>
  )
}