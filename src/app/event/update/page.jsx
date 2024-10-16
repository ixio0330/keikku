import Image from "next/image"
import Link from "next/link"

// db
import { getEventCategories, getEventDetail } from "@/db/event"

// util
import { getUserInfoFromCookie } from "@/utils/cookie"

// component
import { MdHomeFilled } from "react-icons/md"
import UpdateForm from "./UpdateForm"

export default async function UpdateEventPage({ searchParams }) {
  const eventDetail = await getEventDetail(searchParams?.id)
  const uri = getUserInfoFromCookie()?.uri

  if (eventDetail === null) {
    return <div>존재하지 않는 이벤트에요</div>
  }

  const eventCategories = await getEventCategories()

  return (
    <div className="bg-background">
      <header className="fixed inset-x-0 top-0 z-50 bg-background">
        <nav className="mx-auto flex h-16 w-full max-w-content items-center justify-between bg-background px-content">
          <Link href={`/${uri}`}>
            <MdHomeFilled size={28} />
          </Link>
          <h1 className="text-lg font-bold">이벤트 수정</h1>
          <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
        </nav>
      </header>

      <main className="m-auto mt-16 min-h-[calc(100vh-64px)] max-w-content bg-background px-content py-5">
        <UpdateForm detail={eventDetail} list={eventCategories} uri={uri} />
      </main>
    </div>
  )
}
