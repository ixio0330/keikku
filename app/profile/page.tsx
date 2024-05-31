'use client'

import Link from "next/link";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import ProfileHeader from "@/components/header/ProfileHeader";

const menulist = [
  { title: "공지사항", description: "", href: "/notice" },
  { title: "개인정보 처리방침 / 이용약관", description: "", href: "" },
  { title: "자주 묻는 질문", description: "", href: "/faq" },
  { title: "앱 정보", description: "v 1.1.0" },
];

export default function ProfilePage() {
  const { authUser, signOut } = useAuth();
  const sns = authUser?.provider ?? "google";
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  }

  return (
    <section className="bg-background min-h-screen">
      <div className="w-96 h-full m-auto flex flex-col space-y-10">
        <ProfileHeader title="계정 설정" />

        {/* 사진, 닉네임 */}
        <div className="flex items-center space-x-5">
          <div className="w-28 h-28 bg-green-800 rounded-full"></div>
          <div>
            <p className="font-bold text-xl">
              {authUser?.nickname}
              <span className="ml-1 text-gray-600">님</span>
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span>로그인 계정</span>
              <Image 
                src={`/${sns}-logo.png`}
                alt={`${sns} 로고`}
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        {/* 케이크 */}
        <ul className="bg-white border flex items-center justify-center text-center pt-3 pb-2 rounded-xl shadow">
          <li className="w-6/12">
            <h2 className="text-xs">선물한 케이크</h2>
            <p className="text-lg font-bold">{19}개</p>
          </li>
          <li className="w-6/12">
            <h2 className="text-xs">선물 받은 케이크</h2>
            <p className="text-lg font-bold">{8}개</p>
          </li>
        </ul>

        {/* 메뉴 */}
        <ul>
          {
            menulist.map(({ title,description, href }) =>
              <li 
                key={title}
                className="p-5 border-b flex justify-between items-center"
              >
                {
                  href 
                  ? <Link href={href}>{title}</Link>
                  : <p>{title}</p>
                }
                <p className="text-sm text-gray-500">{description}</p>
              </li> 
            )
          }
        </ul>

        {/* 로그아웃 | 탈퇴 */}
        <ul className="flex justify-end items-center text-sm">
          <li onClick={handleSignOut}>로그아웃</li>
          <li className="w-px h-3 border-l mx-1 border-black"></li>
          <li>탈퇴하기</li>
        </ul>
      </div>
    </section>
  )
}