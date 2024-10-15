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
      <main className="m-auto mt-16 min-h-[calc(100vh-64px)] max-w-content bg-background px-content pb-10">
        <section className="relative overflow-hidden pb-10 pt-5">
          {activeEvent ? (
            <div className="space-y-1">
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
          <ul className="absolute -right-8 top-5 flex space-x-6">
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

        <section className="relative pt-[118px]">
          <ul className="absolute -top-5 left-0 flex items-end justify-between">
            <Image
              width={61}
              height={94}
              alt="모자 사진"
              src="/main/cap01.png"
            />
            <Image
              width={56}
              height={96}
              alt="모자 사진"
              src="/main/cap02.png"
            />
            <Image
              width={61}
              height={109}
              alt="모자 사진"
              src="/main/cap03.png"
            />
            <Image width={92} height={92} alt="상자 사진" src="/main/box.png" />
            <Image
              width={79}
              height={155}
              alt="케이크 상태 사진"
              src="/main/status.png"
            />
            <Image
              width={38}
              height={72}
              alt="초 사진"
              src="/main/candle.png"
              className="ml-1"
            />
          </ul>

          {/* 쇼케이스 */}
          <ActiveCakeList eventId={activeEvent?.id} />
        </section>

        <ActionButton activeEvent={activeEvent} isOwner={isOwner} uri={uri} />
      </main>
    </>
  )
}
