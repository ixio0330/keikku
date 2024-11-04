"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

import { MdHomeFilled } from "react-icons/md"

export default function CreateCakeLayout({ children }) {
  const params = useParams()

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex h-16 w-full max-w-content items-center justify-between bg-white px-content">
        <Link href={`/${params.uri ?? "/"}`} className="text-primary">
          <MdHomeFilled size={28} />
        </Link>
        <h1 className="text-lg font-bold">케이크 제작</h1>
        <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
      </header>

      <main className="m-auto mt-16 min-h-[calc(100vh-64px)] max-w-content bg-white px-content">
        {children}
      </main>
    </>
  )
}
