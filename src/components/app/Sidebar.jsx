import { appMenus } from "@/constants"
import Link from "next/link"

// component
import Avatar from "../common/Avatar"

export default function AppSidebar({ userInfo }) {
  return (
    <aside>
      <div className="bg-primary p-10 text-white flex flex-col justify-center items-center gap-2">
        {userInfo ? (
          <>
            <Avatar provider={userInfo.provider} />
            <p>{userInfo.name}님</p>
          </>
        ) : (
          <>
            <Avatar provider={null} />
            <Link href="/auth/login">로그인하기</Link>
          </>
        )}
      </div>

      <ul className="py-5">
        {appMenus.map(({ href, name, isRequiredAuth, Icon }) => (
          <li key={name}>
            {isRequiredAuth && userInfo ? (
              <Link
                href={href}
                className="flex items-center gap-3 py-3 px-5 font-semibold hover:text-primary"
              >
                <Icon />
                <p>{name}</p>
              </Link>
            ) : (
              <div
                href={href}
                className="flex items-center gap-3 py-3 px-5 font-semibold text-stone-400"
              >
                <Icon />
                <p>{name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}
