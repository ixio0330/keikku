"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useFormStatus } from "react-dom"
import toast from "react-hot-toast"

// db
import { createCake } from "@/db/cake"

// store
import useActiveCakes from "@/stores/activeCakes"
import useCake from "@/stores/cake"

// component
import Input from "@/components/common/Input"
import Spinner from "@/components/common/Spinner"

export default function CreateForm({ isGuest = true }) {
  const router = useRouter()
  const { cake, resetCake } = useCake()
  const { addNewCake } = useActiveCakes()

  const actionCreateCake = async (formData) => {
    const createForm = { ...cake }
    delete createForm.uri

    const { success, message, data } = await createCake({
      ...createForm,
      sender_name: formData.get("sender_name"),
    })

    if (success === false) {
      toast(message, {
        icon: "❗️",
      })
      return
    }

    toast("케이크를 선물했어요", {
      icon: "🍰",
    })
    addNewCake(data)
    router.push(`/${cake.uri}`)
    resetCake()
  }

  return (
    <form action={actionCreateCake} className="space-y-10">
      {isGuest && (
        <div className="space-y-3">
          <label>
            <p className="text-lg font-bold">From.</p>
            <Input
              type="text"
              name="sender_name"
              placeholder="선물하는 분의 이름을 알려주세요"
              maxLength={16}
              required
            />
          </label>
        </div>
      )}
      <div className="flex gap-5 pb-10">
        <Link
          href="/cake/create/deco"
          className="font-xs box-border w-2/5 rounded-lg border border-primary bg-primary bg-white p-2 text-center font-semibold text-primary"
        >
          이전
        </Link>
        <SubmitButton />
      </div>
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <>
      <button className="font-xs box-border w-full rounded-lg border border-primary bg-primary p-2 text-center font-semibold text-white">
        선물하기
      </button>
      {pending && <Spinner />}
    </>
  )
}
