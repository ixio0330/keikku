'use client'

import { useEffect } from 'react'
import useAuth from './(hooks)/useAuth'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { initAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    initAuth();
  }, []);

  const redirectToCreateCakePage = () => {
    router.push('/create-cake');
  };

  return (
    <>
      <h1>Home</h1>
      {/* TODO 본인 체크 */}
      <button onClick={redirectToCreateCakePage}>케이크 만들러 가기</button>
    </>
  )
}
