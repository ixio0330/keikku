'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import CreateLayout from '@/components/layout/CreateLayout'
import Input from '@/components/input'
import Textarea from '@/components/input/Textarea'
import useEvent from '@/hooks/useEvent'

export default function CreateEventPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { create } = useEvent();

  return (
    <CreateLayout title="새로운 이벤트">
      <form 
        onSubmit={async e => {
          e.preventDefault();
          try {
            const data = await create(name, description, new Date(date).toISOString());
            console.log(data);
            // TODO params로 data 정보 보내기
            router.push("/");
          } catch (e) {
            console.log(e);
          }
        }}
        className="flex flex-col space-y-10 mt-10"
      >
        <label className="flex flex-col">
          <span className="font-semibold text-xl">어떤 이벤트인가요?</span>
          <Input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            maxLength={16}
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
            maxLength={50} 
          />
        </label>
        <button className="w-full text-white font-semibold border border-primary rounded-lg box-border p-2 bg-primary font-xs">
          만들기
        </button>
      </form>
    </CreateLayout>
  )
}