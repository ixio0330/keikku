import Link from "next/link";
import CakeStatus from "@/components/svg/CakeStatus";
import { MdHomeFilled } from "react-icons/md";

export interface CreateLayoutProps extends React.PropsWithChildren {
  title: string;
}

export default function CreateLayout({ children, title }: CreateLayoutProps) {
  return (
    <div className='w-96 px-3 m-auto border-box min-h-screen relative'>
      <header className='py-3.5 flex justify-between items-center'>
        <Link href="/">
          <MdHomeFilled size="30" />
        </Link>
        <h1 className='text-lg font-bold'>
          {title}
        </h1>
        <CakeStatus hasCake={false} />
      </header>
      {children}
    </div>
  )
}