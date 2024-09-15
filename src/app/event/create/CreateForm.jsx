"use client"
import { useRouter } from "next/navigation"

// db
import { createEvent } from "@/db/event"

// component
import Input from "@/components/Input"
import Textarea from "@/components/Textarea"
import EventCategories from "./EventCategories"

export default function CreateForm({ list, uri }) {
  const router = useRouter()
  const actionCreateEvent = async (formData) => {
    const name = formData.get("name")
    const date = formData.get("date")
    const description = formData.get("description")
    const category_id = Number(formData.get("category_id"))
    const { success, message } = await createEvent({
      name,
      date,
      description,
      category_id,
    })

    if (success === false) {
      window.alert(message)
      return
    }

    router.push(`/${uri}`)
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

      <label className="space-y-2">
        <p className="text-lg font-bold">
          이벤트에 대해 간단하게 설명해 주세요.
        </p>
        <Textarea
          name="description"
          placeholder="다른 이용자들이 알 수 있도록 이벤트에 대해 알려 주세요."
          maxLength={100}
        />
      </label>

      <button
        type="submit"
        className="w-full font-semibold text-white border border-primary rounded-lg box-border p-2 bg-primary"
      >
        이벤트 만들기
      </button>
    </form>
  )
}
