import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

export interface ProfileHeaderProps { 
  title: string; 
  href?: string; 
  className?: string; 
}

export default function ProfileHeader({ title, href = "../", className = "" }: ProfileHeaderProps) {  
  return (
    <header className={`flex items-center justify-between py-4 ${className}`}>
      <Link href={href}>
        <BsChevronLeft size="22" />
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <span></span>
    </header>
  )
}