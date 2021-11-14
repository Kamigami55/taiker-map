import Link from 'next/link'
import Image from 'next/image'

import Navigation from '@/components/molecules/Navigation'
import { SITE_TITLE } from '@/constants/siteMeta'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-10 w-full bg-white">
      <Link href="/">
        <a className="flex flex-row gap-2 items-center text-172A50">
          <Image src="/logo.svg" alt="" width={40} height={40} />
          <span className="text-2xl font-bold leading-10">{SITE_TITLE}</span>
        </a>
      </Link>

      <Navigation />
    </header>
  )
}
