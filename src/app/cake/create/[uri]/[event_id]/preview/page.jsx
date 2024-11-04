"use client"
import { useParams } from "next/navigation"

// component
import CakeFrame from "@/components/cake/make/CakeFrame"
import CreateForm from "./CreateForm"

export default function CreateCakeShapePage() {
  const params = useParams()
  const uri = params?.uri
  const event_id = params.event_id

  return (
    <>
      <h2 className="text-xl font-bold">케이크가 완성됐어요!</h2>
      <CakeFrame />
      <CreateForm uri={uri} eventId={event_id} />
    </>
  )
}
