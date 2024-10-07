"use client"

import Image from "next/image"
import { IoMdMenu } from "react-icons/io"

export default function AppHeader() {
  return (
    <header className="fixed top-0 inset-x-0 mx-auto max-w-content w-full px-content h-16 flex items-center justify-between bg-background z-50">
      <button className="text-primary">
        <IoMdMenu size={28} />
      </button>
      <h1>
        <Image src="/app/logo.png" alt="케이꾸 로고" width={127} height={35} />
      </h1>
      <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
    </header>
  )
}
