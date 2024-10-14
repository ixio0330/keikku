"use client"
import { useRouter } from "next/navigation"

// action
import { register } from "@/db/auth"

// component
import AgreementCheck from "./AgreementCheck"
import Submit from "./Submit"

export default function RegisterPage() {
  const router = useRouter()

  async function actionRegister(formData) {
    const { success, data, message } = await register(formData.get("name"))
    if (success === false) {
      window.alert(message)
      return
    }

    router.push(`/${data}`)
  }

  return (
    <section className="m-auto max-w-content px-content">
      <div className="pt-12">
        <h1 className="mb-9 text-2xl font-bold">
          선물해 줄 친구에게 <br />
          당신의 이름을 <br />
          알려주세요
        </h1>
        <form action={actionRegister} className="flex flex-col gap-5">
          <input
            className="w-full border-b border-primary bg-transparent py-2 text-sm outline-none"
            type="text"
            name="name"
            placeholder="닉네임"
            required
          />
          <AgreementCheck />
          <Submit />
        </form>
      </div>
    </section>
  )
}
