"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useFormStatus } from "react-dom"

// db
import { updateUsername } from "@/db/auth"

// component
import { PiPencilSimple } from "react-icons/pi"
import { BigAvatar } from "@/components/common/Avatar"
import Modal from "@/components/common/Modal"
import Input from "@/components/common/Input"

export default function UserAvatar({ userInfo }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const actionUpdateUsername = async (formData) => {
    const { success, message } = await updateUsername(formData.get("name"))
    if (success === false) {
      window.alert(message)
      return
    }

    router.refresh()
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="flex items-center gap-3 py-5">
        <BigAvatar provider={userInfo.provider} />
        <div className="flex items-center gap-3">
          <p className="text-xl">
            <b>{userInfo.name}</b>님
          </p>
          <button onClick={() => setIsModalOpen(true)}>
            <PiPencilSimple size={20} />
          </button>
        </div>
      </div>
      <Modal open={isModalOpen}>
        <h3 className="text-center pb-5 font-bold text-lg">이름 변경하기</h3>
        <form action={actionUpdateUsername} className="space-y-5">
          <label>
            <p className="text font-bold">이름</p>
            <Input
              type="text"
              name="name"
              placeholder="이름을 입력해주세요."
              maxLength={16}
              required
              defaultValue={userInfo.name}
            />
          </label>
          <div className="flex gap-5">
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsModalOpen(false)
              }}
              className="w-1/2 text-center text-stone-400 bg-white font-semibold border border-stone-400 rounded-lg box-border p-2 bg-white font-xs"
            >
              취소
            </button>

            <Submit />
          </div>
        </form>
      </Modal>
    </>
  )
}

function Submit() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-1/2 text-center text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs"
    >
      {pending ? "저장중..." : "저장"}
    </button>
  )
}
