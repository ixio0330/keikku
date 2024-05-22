'use client'

import Link from "next/link";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import ProfileHeader from "@/components/header/ProfileHeader";

const data = [
  {
    title: "질문1",
    description: "답변1",
  },
  {
    title: "질문2",
    description: "답변2",
  },
  {
    title: "질문3",
    description: "답변3",
  },
];

export default function NoticePage() {
  return (
    <section className="bg-background min-h-screen">
      <div className="w-96 h-full m-auto flex flex-col">
        <ProfileHeader title="자주 묻는 질문" className="border-b" href="/profile" />

        {/* 질문 목록 */}
        <ul>
          {
            data.map((props, idx) => <AccordionItem key={`accordion-item-${idx}`} {...props} />)
          }
        </ul>

        {/* 1대1 문의 */}
        <div className="text-center py-20 flex flex-col space-y-3">
          <h3 className="text-gray-400">찾으시는 문의 내용이 없으신가요?</h3>
          <Link target="_blank" href="google form link" className="text-primary font-semibold underline">1:1 문의하기</Link>
        </div>
      </div>
    </section>
  )
}

function AccordionItem({ title, description }: { title: string; description: string; }) {
  const [open, setOpen] = useState(false);

  return (
    <li 
      onClick={() => setOpen(!open)}
      className="text-sm flex flex-col space-y-0.5 py-5 border-b cursor-pointer"
    >
      <div className="flex justify-between">
        <h3 className="font-semibold">{title}</h3>
        {
          open 
          ? <BsChevronUp />
          : <BsChevronDown />
        }
      </div>
      { open && <p className="text-xs">{description}</p> }
    </li>
  )
};