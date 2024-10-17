import Link from "next/link"
import { redirect } from "next/navigation"

// db
import { logout } from "@/db/auth"

// component
import AppHeader from "@/components/app/Header"
import UserAvatar from "./UserAvatar"

// constant
import { profileMenus } from "@/constants"

// util
import { getUserInfoFromCookie } from "@/utils/cookie"

export default async function KeikkuPage() {
  const userInfo = getUserInfoFromCookie()

  if (!userInfo) {
    redirect("/")
  }

  return (
    <div className="bg-background">
      <AppHeader userInfo={userInfo} />
      <main className="m-auto mt-16 min-h-[calc(100vh-64px)] max-w-content px-content pb-10">
        <UserAvatar userInfo={userInfo} />

        <ul>
          {profileMenus.map(({ href, name, target }) => (
            <li key={name}>
              <Link
                href={href}
                target={target}
                className="block border-b border-stone-200 py-4"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2 py-3 text-sm font-light text-stone-500">
          <form action={logout}>
            <button type="submit">로그아웃</button>
          </form>
          <div className="h-4 w-px bg-stone-200" />
          <Link href="/profile/leave">회원탈퇴</Link>
        </div>
      </main>
    </div>
  )
}
