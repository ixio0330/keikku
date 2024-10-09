import Link from "next/link"
import { redirect } from "next/navigation"

// db
import { getUserInfo, logout } from "@/db/auth"

// component
import { PiPencilSimple } from "react-icons/pi"
import AppHeader from "@/components/app/Header"
import { BigAvatar } from "@/components/common/Avatar"

// constant
import { profileMenus } from "@/constants"

export default async function KeikkuPage() {
  const userInfo = await getUserInfo()

  if (!userInfo) {
    redirect("/")
  }

  return (
    <>
      <AppHeader userInfo={userInfo} />
      <main className="max-w-content px-content m-auto mt-16 min-h-[calc(100vh-64px)] bg-background pb-10">
        <div className="flex items-center gap-3 py-5">
          <BigAvatar provider={userInfo.provider} />
          <div className="flex items-center gap-3">
            <p className="text-xl">
              <b>{userInfo.name}</b>님
            </p>
            <button>
              <PiPencilSimple size={20} />
            </button>
          </div>
        </div>

        <ul>
          {profileMenus.map(({ href, name }) => (
            <li key={name}>
              <Link
                href={href}
                className="block py-4 border-b border-stone-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-end items-center py-3 gap-2 font-light text-sm text-stone-500">
          <form action={logout}>
            <button type="submit">로그아웃</button>
          </form>
          <div className="w-px h-4 bg-stone-200" />
          <Link href="/profile/leave">회원탈퇴</Link>
        </div>
      </main>
    </>
  )
}
