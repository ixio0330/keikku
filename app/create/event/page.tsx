'use client'

import { useState } from 'react'

import CreateLayout from '@/components/layout/CreateLayout'
import Input from '@/components/input'
import Textarea from '@/components/input/Textarea'

export default function CreateEventPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <CreateLayout title="새로운 이벤트">
      <form 
        onSubmit={e => e.preventDefault()}
        className="flex flex-col space-y-10 mt-10"
      >
        <label className="flex flex-col">
          <span className="font-semibold text-xl">어떤 이벤트인가요?</span>
          <Input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            maxLength={10}
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold text-xl">이벤트 일정을 알려주세요</span>
          <Input 
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)} 
            min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]}
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold text-xl mb-2">이벤트에 대해 알려주세요</span>
          <Textarea
            value={description}
            onChange={e => setDescription(e.target.value)} 
            maxLength={100} 
          />
        </label>
        <button className="w-full text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs">
          만들기
        </button>
      </form>
    </CreateLayout>
  )
}