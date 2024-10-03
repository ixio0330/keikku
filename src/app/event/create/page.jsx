import Image from "next/image"
import Link from "next/link"

// db
import { getEventCategories } from "@/db/event"

// util
import { getUriFromCookie } from "@/utils/cookie"

// component
import { MdHomeFilled } from "react-icons/md"
import CreateForm from "./CreateForm"

export default async function CreateEventPage() {
  const uri = getUriFromCookie()
  const eventCategories = await getEventCategories()

  return (
    <>
      <header className="fixed top-0 inset-x-0 mx-auto max-w-content w-full px-content h-16 flex items-center justify-between bg-background z-50">
        <Link href={`/${uri}`}>
          <MdHomeFilled size={28} />
        </Link>
        <h1 className="text-lg font-bold">새로운 이벤트</h1>
        <Image src="/app/cake.png" alt="케이크" width={40} height={40} />
      </header>

      <main className="max-w-content px-content m-auto mt-16 min-h-[calc(100vh-64px)] bg-background py-5">
        <CreateForm list={eventCategories} uri={uri} />
      </main>
    </>
  )
}
