"use client"

// store
import useCake from "@/stores/cake"

// component
import Tab from "../Tab"

export default function CreateCakeShapePage() {
  const { cake } = useCake()

  return (
    <>
      <Tab currentTab="모양" />

      <section></section>
    </>
  )
}
