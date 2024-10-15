"use client"
import { useRouter } from "next/navigation"
import { useFormStatus } from "react-dom"

// db
import { createEvent } from "@/db/event"

// component
import Input from "@/components/common/Input"
import Spinner from "@/components/common/Spinner"
import EventCategories from "./EventCategories"

export default function CreateForm({ list, uri }) {
  const router = useRouter()
  const actionCreateEvent = async (formData) => {
    const name = formData.get("name")
    const date = formData.get("date")
    const category_id = Number(formData.get("category_id")) || null
    const { success, message } = await createEvent({
      name,
      date,
      category_id,
    })

    if (success === false) {
      window.alert(message)
      return
    }

    router.push(`/${uri}`)
    router.refresh()
  }

  return (
    <form action={actionCreateEvent} className="flex flex-col gap-10">
      <div className="space-y-3">
        <label>
          <p className="text-lg font-bold">어떤 이벤트인가요?</p>
          <Input
            type="text"
            name="name"
            placeholder="디데이의 이름을 입력해주세요."
            maxLength={16}
            required
          />
        </label>

        <EventCategories list={list} />
      </div>

      <label>
        <p className="text-lg font-bold">이벤트 날짜를 알려 주세요.</p>
        <Input type="date" name="date" required />
      </label>

      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        className="box-border w-full rounded-lg border border-primary bg-primary p-2 font-semibold text-white"
      >
        이벤트 만들기
      </button>
      {pending && <Spinner />}
    </>
  )
}
