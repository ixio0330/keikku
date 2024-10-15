import createSupabase from "@/supabase"
import { setUserInfoInCookie } from "@/utils/cookie"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const supabase = createSupabase()
    const { searchParams } = new URL(request.url)
    const code = searchParams.get("code")

    if (!code) {
      console.log(`Error: code가 존재하지 않음`)
      return NextResponse.redirect(new URL("/auth/login", process.env.DOMAIN))
    }

    await supabase.auth.exchangeCodeForSession(code)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const { data } = await supabase
      .from("users")
      .select("id, uri, name, provider")
      .eq("oauth_uuid", user.id)
      .single()

    // 사용자 정보가 없을 경우, 회원가입 페이지로 이동
    if (!data) {
      return NextResponse.redirect(
        new URL("/auth/register", process.env.DOMAIN),
      )
    }

    // 사용자 정보가 있을 경우, 로그인 처리
    setUserInfoInCookie(data)
    return NextResponse.redirect(new URL(data.uri, process.env.DOMAIN))
  } catch (err) {
    console.log(`Error: ${err}`)
    return NextResponse.redirect(new URL("/", process.env.DOMAIN))
  }
}
