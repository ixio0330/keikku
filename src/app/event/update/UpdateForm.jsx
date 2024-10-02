"use client"
import { useRouter } from "next/navigation"

// db
import { updateEvent } from "@/db/event"

// component
import Input from "@/components/common/Input"
import Textarea from "@/components/common/Textarea"
import EventCategories from "./EventCategories"

export default function UpdateForm({ list, uri, detail }) {
  const router = useRouter()
  const actionUpdateEvent = async (formData) => {
    const name = formData.get("name")
    const date = formData.get("date")
    const description = formData.get("description")
    const category_id = Number(formData.get("category_id"))
    const { success, message } = await updateEvent({
      id: detail?.id,
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
    router.refresh()
  }

  return (
    <form action={actionUpdateEvent} className="flex flex-col gap-10">
      <div className="space-y-3">
        <label>
          <p className="text-lg font-bold">어떤 이벤트인가요?</p>
          <Input
            type="text"
            name="name"
            placeholder="디데이의 이름을 입력해주세요."
            maxLength={16}
            required
            defaultValue={detail.name}
          />
        </label>

        <EventCategories list={list} defaultValue={detail.category_id} />
      </div>

      <label>
        <p className="text-lg font-bold">이벤트 날짜를 알려 주세요.</p>
        <Input type="date" name="date" required defaultValue={detail.date} />
      </label>

      <label className="space-y-2">
        <p className="text-lg font-bold">
          이벤트에 대해 간단하게 설명해 주세요.
        </p>
        <Textarea
          name="description"
          placeholder="다른 이용자들이 알 수 있도록 이벤트에 대해 알려 주세요."
          maxLength={100}
          defaultValue={detail.description}
        />
      </label>

      <div className="flex gap-5">
        <button
          onClick={() => console.log("삭제")}
          className="w-2/5 text-center text-red-500 bg-white font-semibold border border-red-500 rounded-lg box-border p-2 bg-white font-xs"
        >
          삭제
        </button>

        <button
          type="submit"
          className="w-full text-center text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs"
        >
          저장
        </button>
      </div>
    </form>
  )
}
