import { cakeTabs } from "@/constants"
import Link from "next/link"

export default function Tab({ currentTab, uri, eventId }) {
  return (
    <ul className="flex items-center justify-between text-lg text-gray-400">
      {cakeTabs.map(({ id, name, href }) => (
        <li key={id} className="w-full">
          <Link
            href={`/cake/create/${uri}/${eventId}/${href}`}
            className={`block w-full border-b-2 pb-2 text-center ${name === currentTab ? "border-primary font-bold text-primary" : "border-transparent"}`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
