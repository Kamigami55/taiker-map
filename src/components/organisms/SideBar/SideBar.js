import { useState } from 'react'

import SpotsPanel from '@/components/organisms/SpotsPanel'
import StylePanel from '@/components/organisms/StylePanel'
import ToggleButton from '@/components/atoms/ToggleButton'

const SPOTS_PANEL = 'SPOTS_PANEL'
const STYLE_PANEL = 'STYLE_PANEL'

export default function SideBar() {
  const [activePanel, setActivePanel] = useState(SPOTS_PANEL)

  return (
    <aside className="w-64 bg-indigo-500 md:shadow">
      <div className="p-4">
        <div className="inline-flex flex-row items-center">
          <svg className="w-10 h-10 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1 text-2xl font-bold leading-10 text-gray-100">Maper</span>
        </div>
      </div>

      <div className="py-6 px-4">
        <div className="flex gap-4 content-evenly items-center mb-4">
          <ToggleButton
            onClick={() => setActivePanel(SPOTS_PANEL)}
            active={activePanel === SPOTS_PANEL}
          >
            景點清單
          </ToggleButton>
          <ToggleButton
            onClick={() => setActivePanel(STYLE_PANEL)}
            active={activePanel === STYLE_PANEL}
          >
            地圖樣式
          </ToggleButton>
        </div>

        {activePanel === SPOTS_PANEL && <SpotsPanel />}
        {activePanel === STYLE_PANEL && <StylePanel />}
      </div>
    </aside>
  )
}
