"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useAuth from "@/app/(hooks)/useAuth";

const menuData = [
  { text: "마이페이지", href: "/profile" },
  { text: "받은 케이크", href: "/receive-cake" },
  { text: "선물한 케이크", href: "/give-cake" },
];

export default function AppSidebar() {
  const [open, setOpen] = useState(false);
  const { authUser } = useAuth();
  const sns = authUser?.provider ?? "google";

  if (!open) return null;
  
  return (
    <article className="absolute top-0 left-0 min-h-screen w-full">
      <div
        onClick={() => setOpen(false)} 
        className="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 z-10"
      />
      <div className="w-8/12 h-full z-30 absolute top-0 left-0 z-20">
        <div className="h-1/5 bg-primary flex flex-col justify-center items-center text-white">
          <div className="w-12 h-12 bg-white rounded-full mb-2"></div>
          <p className="text-xl">
            {authUser?.nickname} 님
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <span>로그인 계정</span>
            <Image 
              src={`/${sns}-logo.png`}
              alt={`${sns} 로고`}
              width={20}
              height={20}
            />
          </div>
        </div>
        <ul className="h-4/5 bg-white flex flex-col">
          {
            menuData.map(({ text, href }, idx) => (
              <Link key={text + idx} href={href} >
                {text}
              </Link>
            ))
          }
        </ul>
      </div>
    </article>
  )
}
