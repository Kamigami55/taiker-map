import { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import { FaListUl } from 'react-icons/fa'
import { BsMap } from 'react-icons/bs'
import { IoMdMap } from 'react-icons/io'

import SpotsPanel from '@/components/organisms/SpotsPanel'
import StylePanel from '@/components/organisms/StylePanel'
import ToggleButton from '@/components/atoms/ToggleButton'

import styles from './SideBar.module.scss'

const SPOTS_PANEL = 'SPOTS_PANEL'
const STYLE_PANEL = 'STYLE_PANEL'

export default function SideBar() {
  const [activePanel, setActivePanel] = useState(SPOTS_PANEL)

  return (
    <aside className={cn('w-[280px] h-screen bg-white p-4 flex flex-col', styles.sidebar)}>
      <Link href="/">
        <a className="inline-flex flex-row items-center mb-6 text-172A50 cursor-pointer">
          <IoMdMap className="w-[40px] h-[40px]" />
          <span className="ml-1 text-2xl font-bold leading-10 text-1A1A1A">Maper</span>
        </a>
      </Link>

      <div className="flex gap-2 content-evenly items-center mb-4">
        <ToggleButton
          onClick={() => setActivePanel(SPOTS_PANEL)}
          active={activePanel === SPOTS_PANEL}
        >
          <div className="flex gap-2 items-center">
            <FaListUl /> 景點清單
          </div>
        </ToggleButton>
        <ToggleButton
          onClick={() => setActivePanel(STYLE_PANEL)}
          active={activePanel === STYLE_PANEL}
        >
          <div className="flex gap-2 items-center">
            <BsMap /> 地圖樣式
          </div>
        </ToggleButton>
      </div>

      {activePanel === SPOTS_PANEL && <SpotsPanel />}
      {activePanel === STYLE_PANEL && <StylePanel />}
    </aside>
  )
}
