"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useFormStatus } from "react-dom"

// db
import { deleteEvent, updateEvent } from "@/db/event"

// component
import Input from "@/components/common/Input"
import Modal from "@/components/common/Modal"
import Spinner from "@/components/common/Spinner"
import toast from "react-hot-toast"
import EventCategories from "./EventCategories"

export default function UpdateForm({ list, uri, detail }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

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

    if (!success) {
      toast(message, { icon: "❗️" })
      return
    }

    router.push(`/${uri}`)
    router.refresh()
  }

  const actionDeleteEvent = async () => {
    const { success, message } = await deleteEvent(detail?.id)

    if (!success) {
      toast(message, { icon: "❗️" })
      return
    }

    router.push(`/${uri}`)
    router.refresh()
  }

  return (
    <>
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
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="font-xs box-border w-2/5 rounded-lg border border-red-500 bg-white p-2 text-center font-semibold text-red-500"
          >
            삭제
          </button>
          <SubmitUpdateButton />
        </div>
      </form>
      <Modal open={isModalOpen}>
        <form action={actionDeleteEvent} className="space-y-5">
          <p className="px-5 text-center">
            이벤트를 삭제하면 선물받은 케이크도 전부 삭제돼요. 이벤트를
            삭제할까요?
          </p>
          <div className="flex gap-5">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="font-xs box-border w-1/2 rounded-lg border border-stone-400 bg-white p-2 text-center font-semibold text-stone-400"
            >
              취소
            </button>
            <SubmitRemoveButton />
          </div>
        </form>
      </Modal>
    </>
  )
}

function SubmitUpdateButton() {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
      >
        저장
      </button>
      {pending && <Spinner />}
    </>
  )
}

function SubmitRemoveButton() {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white"
      >
        확인
      </button>
    </>
  )
}
