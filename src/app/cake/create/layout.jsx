"use client"

import Image from "next/image"
import Link from "next/link"

// store
import useCake from "@/stores/cake"

import { MdHomeFilled } from "react-icons/md"

export default function CreateCakeLayout({ children }) {
  const { cake } = useCake()

  return (
    <>
      <header className="fixed top-0 inset-x-0 mx-auto max-w-content w-full px-content h-16 flex items-center justify-between bg-white z-50">
        <Link href={`/${cake.uri ?? "/"}`} className="text-primary">
          <MdHomeFilled size={28} />
        </Link>
        <h1 className="text-lg font-bold">케이크 제작</h1>
        <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
      </header>

      <main className="max-w-content px-content m-auto mt-16 min-h-[calc(100vh-64px)] bg-white">
        {children}
      </main>
    </>
  )
}
