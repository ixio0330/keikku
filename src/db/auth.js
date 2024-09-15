"use server"

import createSupabase from "@/supabase"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { oauthProvider, T_USERS } from "@/constants"

export const loginInWithOauth = async (provider = oauthProvider.google) => {
  const supabase = createSupabase()

  const { data } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.DOMAIN}/api/auth/callback`,
    },
  })

  if (data.url) {
    redirect(data.url)
  }
}

export const register = async (name = "") => {
  const supabase = createSupabase()
  const cookieStore = cookies()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError) {
    console.log(`Error: ${authError}`)
    return {
      success: false,
      message: "회원가입 중 오류가 발생했어요 잠시후 시도해주세요",
    }
  }

  const { data, error: userError } = await supabase
    .from(T_USERS)
    .insert([{ name, oauth_uuid: user.id }])
    .select("uri")
    .single()

  if (userError) {
    console.log(`Error: ${userError}`)
    return {
      success: false,
      message: "회원가입 중 오류가 발생했어요 잠시후 시도해주세요",
    }
  }

  cookieStore.set("uri", data.uri)
  return { success: true, data: data.uri }
}

export const autoLogin = async () => {
  const supabase = createSupabase()
  const cookieStore = cookies()

  if (cookieStore.get("uri").value) {
    return { success: true, data: cookieStore.get("uri").value }
  }

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError) {
    return { success: false }
  }

  const { data, error: userError } = await supabase
    .from(T_USERS)
    .select("uri")
    .eq("oauth_uuid", user.id)
    .single()
  if (userError) {
    return { success: false }
  }

  cookieStore.set("uri", data.uri)
  return { success: true, data: data.uri }
}
