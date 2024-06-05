'use client'

import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import Image from 'next/image'
import Link from 'next/link'

import LoginPage from './login/page'
import AppHeader from '@/components/header/AppHeader'
import AppSidebar from '@/components/sidebar/AppSidebar'
import Showcase from '@/components/svg/Showcase'

import { getBeforeDay } from '@/utils/date'
import useEvent from '@/hooks/useEvent'

export default function MainPage() {
  const { authUser } = useAuth();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { event, setEvent, getActiveEvent } = useEvent();
  const initEvent = async () => {
    const e = await getActiveEvent();
    setEvent(e);
  };

  useEffect(() => {
    initEvent();
  }, []);

  if (!authUser?.nickname) {
    return <LoginPage />
  }

  return (
    <section className="bg-background min-h-screen">
      <div className="relative w-96 h-full m-auto flex flex-col">
        <AppHeader onClickMenu={() => setSidebarToggle(true)} />
        <AppSidebar
          nickname={authUser?.nickname}
          sns={authUser?.provider ?? "google"}
          open={sidebarToggle} 
          onClickOutside={() => setSidebarToggle(false)} 
        />
        <div className="mt-10 pb-10 relative overflow-hidden">
          <div className="text-2xl flex flex-col -space-y-1">
            {
              event
              ? <>
                <p><b>{authUser?.nickname}</b> 님의 기념일의</p>
                <p><span className="text-primary font-bold">{getBeforeDay(event.date)}일</span> 남았어요!</p>
              </>
              : <>
                <p>현재 진행 중인</p>
                <p>이벤트가 없어요 ;(</p>
              </>
            }
          </div>
          <ul className="flex space-x-6 absolute -right-8 top-5">
            <li>
              <Image 
                width={80}
                height={80}
                alt="이미지1"
                src="/img01.png"
              />
            </li>
            <li>
              <Image 
                width={80}
                height={80}
                alt="이미지2"
                src="/img02.png"
              />
            </li>
          </ul>
        </div>
        <div className="relative pt-[118px]">
          <ul className="absolute -top-8 left-0 flex items-end justify-between">
            <Image 
              width={61}
              height={94}
              alt="모자 사진"
              src="/cap01.png"
            />
            <Image 
              width={56}
              height={96}
              alt="모자 사진"
              src="/cap02.png"
            />
            <Image 
              width={61}
              height={109}
              alt="모자 사진"
              src="/cap03.png"
            />
            <Image 
              width={92}
              height={92}
              alt="상자 사진"
              src="/box.png"
            />
            <Image 
              width={79}
              height={155}
              alt="케이크 상태 사진"
              src="/status.png"
            />
            <Image 
              width={38}
              height={72}
              alt="초 사진"
              src="/candle.png"
              className="ml-1"
            />
          </ul>
          <Showcase />
        </div>
        <div className="flex flex-col text-center font-semibold space-y-3 mt-10">
          {
            event 
            ? <>
              <button className="m-auto w-11/12 text-white border border-primary rounded-lg box-border p-2 bg-primary">
                내 이벤트 알리기
              </button>
            </>
            : <>
              <Link href="/create/event" className="m-auto w-11/12 text-white border border-primary rounded-lg box-border p-2 bg-primary">
                내 이벤트 만들기
              </Link>
            </>
          }
        </div>
      </div>
    </section>
  )
}
