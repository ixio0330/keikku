import Image from "next/image"
import Link from "next/link"

// db
import { isExistUser } from "@/db/auth"
import { getActiveEventByUri } from "@/db/event"

// util
import { getUserInfoFromCookie } from "@/utils/cookie"

// component
import AppHeader from "@/components/app/Header"
import ActiveCakeList from "@/components/cake/view/ActiveCakeList"
import { IoMdCalendar } from "react-icons/io"
import ActionButton from "./ActionButton"

export default async function KeikkuPage({ params }) {
  const uri = params.uri
  const isActiveUser = await isExistUser(uri)

  if (isActiveUser === false) {
    return <div>존재하지 않는 사용자에요.</div>
  }

  const { data: activeEvent } = await getActiveEventByUri(uri)

  const userInfo = getUserInfoFromCookie()
  const isOwner = uri === userInfo?.uri

  return (
    <>
      <AppHeader userInfo={userInfo} />
      <main className="m-auto mt-16 min-h-[calc(100vh-64px)] max-w-content bg-background pb-10">
        <section className="relative overflow-hidden px-content pb-28 pt-5">
          <div className="absolute z-20">
            {activeEvent ? (
              <div className="space-y">
                <p className="text-sm">
                  {activeEvent.username}님이 진행중인 이벤트에요!
                </p>
                <p className="text-xl font-bold">{activeEvent.name}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <IoMdCalendar size={20} />
                  <p>{activeEvent.date}</p>
                  {activeEvent.category && (
                    <>
                      <div className="h-4 w-px bg-gray-400" />
                      <p>{activeEvent.category}</p>
                    </>
                  )}
                </div>
                {isOwner && (
                  <Link
                    href={{
                      pathname: "/event/update",
                      query: { id: activeEvent.id },
                    }}
                    className="inline-block rounded-full bg-primary px-2 py-px text-white"
                  >
                    수정하기
                  </Link>
                )}
              </div>
            ) : (
              <div className="text-xl">
                <p>현재 진행 중인</p>
                <p>이벤트가 없어요 ;(</p>
              </div>
            )}
          </div>
          <ul className="absolute -right-8 top-5 z-10 flex gap-2">
            <li>
              <Image
                width={80}
                height={80}
                alt="이미지1"
                src="/main/img01.png"
              />
            </li>
            <li>
              <Image
                width={80}
                height={80}
                alt="이미지2"
                src="/main/img02.png"
              />
            </li>
          </ul>
        </section>

        {/* 쇼케이스 */}
        <ActiveCakeList eventId={activeEvent?.id} />

        <ActionButton activeEvent={activeEvent} isOwner={isOwner} uri={uri} />
      </main>
    </>
  )
}
