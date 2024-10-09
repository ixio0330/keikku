"use client"

import Select from "@/components/common/Select"
import Submit from "./Submit"

export default function Form({ username }) {
  return (
    <form className="space-y-5">
      <label>
        <p>{username}님의 탈퇴 이유가 궁금해요.</p>
        <Select name="reason" required />
      </label>

      <Submit />
    </form>
  )
}
