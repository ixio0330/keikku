'use client'

import { useEffect } from 'react'
import useAuth from './(hooks)/useAuth'
import { useRouter } from 'next/navigation'
import AppHeader from '@/components/header/AppHeader'
import Showcase from '@/components/svg/Showcase'
import Image from 'next/image'

export default function Home() {
  const { authUser } = useAuth();
  const router = useRouter();

  const redirectToCreateCakePage = () => {
    router.push('/create-cake');
  };

  return (
    <section className="bg-background min-h-screen">
      <div className="w-96 h-full m-auto flex flex-col">
        <AppHeader />
        <div className="mt-10 pb-20 relative overflow-hidden">
          <div className="text-2xl flex flex-col -space-y-1">
            <p><b>{authUser?.nickname ?? "테스트"}</b> 님의 기념일의</p>
            <p><span className="text-primary font-bold">{3}일</span> 남았어요!</p>
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
        <Showcase />
      </div>
    </section>
  )
}
