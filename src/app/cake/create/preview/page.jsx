// util
import { getUriFromCookie } from "@/utils/cookie"

// component
import CakeFrame from "@/components/cake/make/CakeFrame"
import CreateForm from "./CreateForm"

export default function CreateCakeShapePage() {
  const isGuest = !getUriFromCookie()

  return (
    <>
      <h2 className="text-xl font-bold">케이크가 완성됐어요!</h2>
      <CakeFrame />
      <CreateForm isGuest={isGuest} />
    </>
  )
}
