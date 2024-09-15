import Link from "next/link"
import { cakeTabs } from "@/constants"

export default function Tab({ currentTab }) {
  return (
    <ul className="flex justify-between items-center text-lg text-gray-400">
      {cakeTabs.map(({ id, name, href }) => (
        <li key={id} className="w-full">
          <Link
            href={href}
            className={`block pb-2 w-full text-center border-b-2 ${name === currentTab ? "border-primary text-primary" : "border-transparent"}`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
