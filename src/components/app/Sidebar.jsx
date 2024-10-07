import { PiUserCircle } from "react-icons/pi"

import { appMenus } from "@/constants"
import Link from "next/link"

export default function AppSidebar() {
  return (
    <aside>
      <div>
        <div></div>
        <p>사용자 이름</p>

        <p>로그인이 필요해요</p>
      </div>

      <ul>
        {appMenus.map(({ href, name, isRequiredAuth, Icon }) => (
          <li key={name}>
            <Link href={href}>
              <Icon />
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
