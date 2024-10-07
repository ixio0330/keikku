"use server"

import createSupabase from "@/supabase"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { oauthProvider, T_USERS } from "@/constants"
import {
  getUserIdFromCookie,
  getUriFromCookie,
  resetCookie,
} from "@/utils/cookie"

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
    .insert([
      { name, oauth_uuid: user.id, provider: user.app_metadata.provider },
    ])
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
  if (getUserIdFromCookie() && getUriFromCookie()) {
    return { success: true, data: getUriFromCookie() }
  }

  return { success: false }
}

export const logout = async () => {
  const supabase = createSupabase()
  const { error } = await supabase.auth.signOut()
  if (error) {
    return false
  }
  if (!resetCookie()) {
    return false
  }
  return redirect("/")
}

export const isExistUser = async (uri = "") => {
  const supabase = createSupabase()

  const { data } = await supabase
    .from(T_USERS)
    .select("id")
    .eq("uri", uri)
    .single()

  return !!data
}

export const getUserInfo = async () => {
  if (!getUserIdFromCookie()) {
    return null
  }

  const supabase = createSupabase()

  const { data, error } = await supabase
    .from(T_USERS)
    .select("name, provider")
    .eq("id", Number(getUserIdFromCookie()))
    .single()

  if (error) {
    console.log(error)
    return null
  }

  return data
}
