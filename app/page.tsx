'use client'

import { useEffect } from "react"
import useAuth from "./(hooks)/useAuth"

export default function Home() {
  const { initAuth } = useAuth();
  useEffect(() => {
    initAuth();
  }, []);

  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}
