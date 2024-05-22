import Link from "next/link";
import ProfileHeader from "@/components/header/ProfileHeader";

const data = [
  {
    id: 1,
    title: "공지사항",
    time: "3/30 12:00",
    subTitle: "[업데이트] 1차 소프트웨어 업데이트 일정 안내",
    description: "업데이트로 인한 접속 불가에 대한 내용",
  },
  {
    id: 2,
    title: "공지사항",
    time: "2/03 11:48",
    subTitle: "[복구완료] 접속 오류 개선",
    description: "접속 지연이 되던 오류가 있었습니다. 현재는 정상적으로 이용 가능...",
  },
  {
    id: 3,
    title: "공지사항",
    time: "1/12 14:20",
    subTitle: "[복구완료] 지도 접근성 정보 오류 개선",
    description: "인허가 데이터의 오류로 매칭되지 않던 지도 접근성 정보를 점검 완료...",
  },
];

export default function ProfilePage() {
  return (
    <section className="bg-[#FFF8EB] min-h-screen">
      <div className="w-96 h-full m-auto flex flex-col">
        <ProfileHeader title="공지사항" className="border-b" />
        <ul>
          {
            data.map(({ id, title, time, subTitle, description }, idx) => 
              <li key={title + idx}>
                <Link
                  href={`/notice/${id}`}
                  className="text-sm flex flex-col space-y-0.5 py-5 border-b"
                >
                  <div className="flex justify-between items-center text-gray-500">
                    <h2>{title}</h2>
                    <p className="text-xs">{time}</p>
                  </div>
                  <h3 className="font-semibold">{subTitle}</h3>
                  <p className="text-xs">{description}</p>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </section>
  )
}