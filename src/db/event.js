"use server"

import createSupabase from "@/supabase"
import { getUriByCookie } from "@/utils/server"
import { T_USERS, T_EVENTS, T_EVENT_CATEGORIES } from "@/constants"

export const getEventCategories = async () => {
  const supabase = createSupabase()

  const { data, error } = await supabase
    .from(T_EVENT_CATEGORIES)
    .select("id, name")

  if (error) {
    return {
      success: false,
      message: "카테고리 목록을 가져오지 못했어요 새로고침을 해주세요",
    }
  }

  return data
}

export const getActiveEventByUri = async (uri = "") => {
  const supabase = createSupabase()

  const { data, error } = await supabase
    .from(T_EVENTS)
    .select("id, name, date, users!inner(name, uri), event_categories(name)")
    .eq("users.uri", uri)
    .gte("date", new Date().toISOString())
    .single()

  if (error) {
    return null
  }

  return {
    id: data.id,
    name: data.name,
    date: data.date,
    category: data.event_categories?.name ?? null,
    username: data.users.name,
  }
}

export const createEvent = async ({ name, date, description, category_id }) => {
  const uri = getUriByCookie()
  if (uri === null) {
    return { success: false, message: "로그인이 필요해요" }
  }

  const supabase = createSupabase()

  // TODO 활성 이벤트 체크

  const { data: userData, error: userError } = await supabase
    .from(T_USERS)
    .select("id")
    .eq("uri", uri)
    .single()
  if (userError) {
    return { success: false, message: "존재하지 않는 사용자에요" }
  }

  const { error: eventError } = await supabase
    .from(T_EVENTS)
    .insert([{ user_id: userData.id, category_id, name, description, date }])
  if (eventError) {
    return {
      success: false,
      message: "오류가 발생했어요 잠시후 다시 시도해주세요",
    }
  }

  return { success: true }
}