"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// component
import { IoMdMenu } from "react-icons/io"
import AppSidebar from "./Sidebar"

export default function AppHeader({ userInfo }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleOutsideClick = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full bg-background">
      <header className="mx-auto flex h-16 w-full max-w-content items-center justify-between bg-background px-content">
        <button className="text-primary" onClick={() => setIsSidebarOpen(true)}>
          <IoMdMenu size={28} />
        </button>
        <h1>
          <Link href={userInfo?.uri ?? "/"}>
            <Image
              src="/app/logo.png"
              alt="케이꾸 로고"
              width={127}
              height={35}
            />
          </Link>
        </h1>
        <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
      </header>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 m-auto flex max-w-content">
          <div className="w-3/4 bg-white">
            <AppSidebar userInfo={userInfo} />
          </div>
          <div
            className="w-1/4 bg-black bg-opacity-40"
            onClick={handleOutsideClick}
          />
        </div>
      )}
    </div>
  )
}
