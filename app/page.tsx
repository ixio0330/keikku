'use client'

import { useEffect } from 'react'
import useAuth from './(hooks)/useAuth'
import { useRouter } from 'next/navigation'
import AppHeader from '@/components/header/AppHeader'
import Showcase from '@/components/svg/Showcase'

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
        <Showcase />
      </div>
    </section>
  )
}
