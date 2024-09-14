import { NextResponse } from "next/server"
import createSupabase from "@/supabase"

export async function GET(request) {
  try {
    const supabase = createSupabase()
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get("code")
    const next = searchParams.get("next") ?? "/"

    if (!code) {
      console.log(`Error: code가 존재하지 않음`)
      return NextResponse.redirect(`/`)
    }

    const { error: sessionError } =
      await supabase.auth.exchangeCodeForSession(code)
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    const { data, error: userError } = await supabase
      .from("users")
      .select("id")
      .eq("oauth_uuid", user.id)
      .single()

    if (sessionError) {
      console.log(`Error: ${sessionError}`)
      return NextResponse.redirect(`/`)
    }

    if (authError) {
      console.log(`Error: ${authError}`)
      return NextResponse.redirect(`/`)
    }

    if (userError) {
      console.log(`Error: ${userError}`)
      return NextResponse.redirect(`/`)
    }

    // 사용자 정보가 없을 경우, 회원가입 페이지로 이동
    if (!data) {
      return NextResponse.redirect(`/`)
    }

    // 사용자 정보가 있을 경우, 로그인 처리
    if (data?.id) {
      return NextResponse.redirect(`${origin}/${next}`)
    }
  } catch (err) {
    console.log(`Error: ${err}`)
    return NextResponse.redirect(`/`)
  }
}
