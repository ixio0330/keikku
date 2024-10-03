"use server"

import createSupabase from "@/supabase"
import { getUriFromCookie } from "@/utils/cookie"
import { T_USERS, T_EVENTS, T_EVENT_CATEGORIES, T_CAKES } from "@/constants"

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

export const getEventDetail = async (event_id) => {
  const supabase = createSupabase()

  const { data } = await supabase
    .from(T_EVENTS)
    .select("*")
    .eq("id", event_id)
    .single()

  return data
}

export const getActiveEventByUri = async (uri = "") => {
  const supabase = createSupabase()

  const { data: eventData, error: eventError } = await supabase
    .from(T_EVENTS)
    .select("id, name, date, users!inner(name, uri), event_categories(name)")
    .eq("users.uri", uri)
    .gte("date", new Date().toISOString())
    .single()

  if (eventError) {
    return {
      success: false,
      message: "이벤트 조회 중 오류가 발생했어요",
    }
  }

  const { data: cakeData, error: cakeError } = await supabase
    .from(T_CAKES)
    .select(
      "id, sender_id, sender_name, message, cake_shape, cake_color, text_size, text_styles, text_color, text_align, text_font, outline_shape, outline_color, deco_shape, deco_color, created_at",
    )
    .eq("event_id", eventData.id)

  if (cakeError) {
    return {
      success: false,
      message: "케이크 조회 중 오류가 발생했어요",
    }
  }

  return {
    success: true,
    data: {
      id: eventData.id,
      name: eventData.name,
      date: eventData.date,
      category: eventData.event_categories?.name ?? null,
      username: eventData.users.name,
      cakes: cakeData,
    },
  }
}

export const createEvent = async ({ name, date, description, category_id }) => {
  const uri = getUriFromCookie()
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

export const updateEvent = async ({
  id,
  name,
  date,
  description,
  category_id,
}) => {
  const uri = getUriFromCookie()
  if (uri === null) {
    return { success: false, message: "로그인이 필요해요" }
  }

  const supabase = createSupabase()

  const { error: userError } = await supabase
    .from(T_USERS)
    .select("id")
    .eq("uri", uri)
    .single()
  if (userError) {
    return { success: false, message: "존재하지 않는 사용자에요" }
  }

  const { error: eventError } = await supabase
    .from(T_EVENTS)
    .update({ category_id, name, description, date })
    .eq("id", id)
  if (eventError) {
    return {
      success: false,
      message: "오류가 발생했어요 잠시후 다시 시도해주세요",
    }
  }

  return { success: true }
}

export const deleteEvent = async (event_id) => {
  const supabase = createSupabase()

  const { error: deleteEventError } = await supabase
    .from(T_EVENTS)
    .delete()
    .eq("id", event_id)
  if (deleteEventError) {
    return {
      success: false,
      message: "오류가 발생했어요 잠시후 다시 시도해주세요",
    }
  }

  return { success: true }
}
