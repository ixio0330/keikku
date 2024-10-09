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
    <>
      <header className="fixed top-0 inset-x-0 mx-auto max-w-content w-full px-content h-16 flex items-center justify-between bg-background z-50">
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
        <div className="fixed inset-0 z-50 flex max-w-content m-auto">
          <div className="w-3/4 bg-white">
            <AppSidebar userInfo={userInfo} />
          </div>
          <div
            className="w-1/4 bg-black bg-opacity-40"
            onClick={handleOutsideClick}
          />
        </div>
      )}
    </>
  )
}
