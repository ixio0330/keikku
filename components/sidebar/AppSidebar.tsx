import Link from "next/link";
import Image from "next/image";

const menuData = [
  { text: "마이페이지", href: "/profile" },
  { text: "받은 케이크", href: "/receive-cake" },
  { text: "선물한 케이크", href: "/give-cake" },
];

export interface AppSidebarProps {
  nickname: string | undefined; 
  sns: string;
  open: boolean; 
  onClickOutside: (status: boolean) => void; 
}

export default function AppSidebar({ open, onClickOutside, nickname, sns }: AppSidebarProps) {
  if (!open) return null;
  
  return (
    <article className="absolute top-0 left-0 min-h-screen w-full">
      <div
        onClick={() => onClickOutside(false)} 
        className="w-full h-full bg-black bg-opacity-30 fixed top-0 left-0 z-10"
      />
      <div className="w-8/12 h-full z-30 absolute top-0 left-0 z-20">
        <div className="h-1/5 bg-primary flex flex-col justify-center items-center text-white">
          {
            nickname 
            ? <>
              <div className="w-12 h-12 bg-white rounded-full mb-2"></div>
              <p className="text-xl">
                {nickname} 님
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>로그인 계정</span>
                <Image 
                  src={`/${sns}-logo.png`}
                  alt={`${sns} 로고`}
                  width={20}
                  height={20}
                />
              </div>
            </>
            : <>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="30" fill="#CECECE"/>
                <g clipPath="url(#clip0_681_1196)">
                <path d="M29.9998 29.9998C33.6832 29.9998 36.6665 27.0165 36.6665 23.3332C36.6665 19.6498 33.6832 16.6665 29.9998 16.6665C26.3165 16.6665 23.3332 19.6498 23.3332 23.3332C23.3332 27.0165 26.3165 29.9998 29.9998 29.9998ZM29.9998 33.3332C25.5498 33.3332 16.6665 35.5665 16.6665 39.9998V43.3332H43.3332V39.9998C43.3332 35.5665 34.4498 33.3332 29.9998 33.3332Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_681_1196">
                <rect width="40" height="40" fill="white" transform="translate(10 10)"/>
                </clipPath>
                </defs>
              </svg>
              <p className="text-xl mt-5">
                로그인이 필요해요
              </p>
            </>
          }
        </div>
        <ul className="h-4/5 bg-white flex flex-col pt-10 font-medium">
          {
            menuData.map(({ text, href }, idx) => (
              <Link 
                key={text + idx} 
                href={href}
                className="p-5 text-xl text-gray-400" 
              >
                {text}
              </Link>
            ))
          }
        </ul>
      </div>
    </article>
  )
}
