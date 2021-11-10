import Navigation from '@/components/molecules/Navigation'

import { IoMdMap } from 'react-icons/io'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-10 w-full bg-white">
      <div className="flex flex-row gap-2 items-center text-172A50">
        <IoMdMap className="w-[40px] h-[40px]" />
        <span className="ml-1 text-2xl font-bold leading-10 text-1A1A1A">Maper</span>
      </div>

      <Navigation />
    </header>
  )
}
