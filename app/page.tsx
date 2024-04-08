'use client'

import { useEffect } from "react"
import useAuth from "./(hooks)/useAuth"

export default function Home() {
  const { initAuth } = useAuth();
  useEffect(() => {
    initAuth();
  }, []);

  return (
    <h1>Home</h1>
  )
}
