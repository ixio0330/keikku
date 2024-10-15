"use server"

import { oauthProvider, T_LEAVES, T_USERS } from "@/constants"
import createSupabase from "@/supabase"
import {
  getUserInfoFromCookie,
  resetCookie,
  setUserInfoInCookie,
} from "@/utils/cookie"
import { redirect } from "next/navigation"

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
    .select("id, uri, name, provider")
    .single()

  if (userError) {
    console.log(`Error: ${userError}`)
    return {
      success: false,
      message: "회원가입 중 오류가 발생했어요 잠시후 시도해주세요",
    }
  }

  setUserInfoInCookie(data)
  return { success: true, data: data.uri }
}

export const autoLogin = async () => {
  const userInfo = getUserInfoFromCookie()
  if (userInfo) {
    return { success: true, data: userInfo.uri }
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
  const userInfo = getUserInfoFromCookie()
  if (!userInfo) {
    return null
  }

  const supabase = createSupabase()

  const { data, error } = await supabase
    .from(T_USERS)
    .select("name, provider")
    .eq("id", Number(userInfo.id))
    .single()

  if (error) {
    console.log(error)
    return null
  }

  return data
}

export const updateUsername = async (name) => {
  const userInfo = getUserInfoFromCookie()
  if (!userInfo) {
    return {
      success: false,
      message: "로그인을 해주세요.",
    }
  }

  const supabase = createSupabase()

  const { data, error } = await supabase
    .from(T_USERS)
    .update({ name })
    .eq("id", Number(userInfo.id))
    .select("id, name, uri, provider")
    .single()

  setUserInfoInCookie(data)

  if (error) {
    return {
      success: false,
      message: "이름을 수정하던중 오류가 발생했어요.",
    }
  }

  return {
    success: true,
  }
}

export const removeUser = async ({ leave_category_id = null }) => {
  const userInfo = getUserInfoFromCookie()
  if (!userInfo || !Number(userInfo.id)) {
    return {
      success: false,
      message: "존재하지 않는 사용자에요",
    }
  }

  const supabase = createSupabase()
  const { error: userError } = await supabase
    .from(T_USERS)
    .select("id")
    .eq("id", userInfo.id)
    .single()

  if (userError) {
    return {
      success: false,
      message: "존재하지 않는 사용자에요",
    }
  }

  const { error: userRemoveError } = await supabase
    .from(T_USERS)
    .delete("id")
    .eq("id", userInfo.id)

  if (userRemoveError) {
    console.log(userRemoveError)
    return {
      success: false,
      message: "탈퇴중 오류가 발생했어요",
    }
  }
  resetCookie()

  if (leave_category_id) {
    await supabase.from(T_LEAVES).insert([{ category_id: leave_category_id }])
  }

  return {
    success: true,
    data: "다음에 또 만나요 :)",
  }
}
