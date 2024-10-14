import Image from "next/image"
import Link from "next/link"

// db
import { getEventCategories } from "@/db/event"

// util
import { getUserInfoFromCookie } from "@/utils/cookie"

// component
import { MdHomeFilled } from "react-icons/md"
import CreateForm from "./CreateForm"

export default async function CreateEventPage() {
  const uri = getUserInfoFromCookie()?.uri
  const eventCategories = await getEventCategories()

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex h-16 w-full max-w-content items-center justify-between bg-background px-content">
        <Link href={`/${uri}`}>
          <MdHomeFilled size={28} />
        </Link>
        <h1 className="text-lg font-bold">새로운 이벤트</h1>
        <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
      </header>

      <main className="m-auto mt-16 min-h-[calc(100vh-64px)] max-w-content bg-background px-content py-5">
        <CreateForm list={eventCategories} uri={uri} />
      </main>
    </>
  )
}
