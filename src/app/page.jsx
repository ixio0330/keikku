import { autoLogin } from "@/db/auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const { success, data } = await autoLogin()

  if (success) {
    redirect(`/${data}`)
  } else {
    redirect("/auth/login")
  }
}
