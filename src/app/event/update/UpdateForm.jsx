"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useFormStatus } from "react-dom"

// db
import { deleteEvent, updateEvent } from "@/db/event"

// component
import Input from "@/components/common/Input"
import Spinner from "@/components/common/Spinner"
import EventCategories from "./EventCategories"

export default function UpdateForm({ list, uri, detail }) {
  const router = useRouter()
  const [loading, setLoading] = useState()

  const actionUpdateEvent = async (formData) => {
    const name = formData.get("name")
    const date = formData.get("date")
    const category_id = Number(formData.get("category_id")) || null
    const { success, message } = await updateEvent({
      id: detail?.id,
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

  const handleRemoveEvent = async (e) => {
    e.preventDefault()

    if (
      window.confirm(
        "이벤트를 삭제하면 선물받은 케이크도 전부 삭제돼요. 이벤트를 삭제할까요?",
      )
    ) {
      setLoading(true)
      const { success, message } = await deleteEvent(detail?.id)
      setLoading(false)

      if (success === false) {
        window.alert(message)
        return
      }

      router.push(`/${uri}`)
      router.refresh()
    }
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

      <div className="flex gap-5">
        <button
          onClick={handleRemoveEvent}
          disabled={loading}
          className="font-xs box-border w-2/5 rounded-lg border border-red-500 bg-white p-2 text-center font-semibold text-red-500"
        >
          삭제
        </button>
        {loading && <Spinner />}

        <SubmitButton />
      </div>
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
      >
        저장
      </button>
      {pending && <Spinner />}
    </>
  )
}
