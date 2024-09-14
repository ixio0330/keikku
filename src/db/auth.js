"use server"

import createSupabase from "@/supabase"
import { redirect } from "next/navigation"
import { oauthProvider } from "@/constants"

const T_USERS = "users"

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
    return { success: false }
  }

  const { data, error: userError } = await supabase
    .from(T_USERS)
    .insert([{ name, oauth_uuid: user.id }])
    .select("uri")
    .single()

  if (userError) {
    console.log(`Error: ${userError}`)
    return { success: false }
  }

  return { success: true, data: data.uri }
}
