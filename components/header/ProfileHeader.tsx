import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

export default function ProfileHeader({ title, href = "../" }: { title: string, href?: string }) {  
  return (
    <header className="flex items-center justify-between py-4">
      <Link href={href}>
        <BsChevronLeft size="22" />
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <span></span>
    </header>
  )
}