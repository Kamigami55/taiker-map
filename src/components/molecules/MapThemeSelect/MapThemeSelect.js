import Image from 'next/image'
import cn from 'classnames'

import { CHANGE_MAP_THEME, useStyleContext } from '@/contexts/styleContext'
import MapThemes from '@/mapStyles/themes'

export default function MapThemeSelect() {
  const {
    state: { theme: selectedTheme },
    dispatch,
  } = useStyleContext()

  const handleSelect = (theme) => {
    dispatch({
      type: CHANGE_MAP_THEME,
      payload: { theme },
    })
  }

  return (
    <div className="w-full">
      <p className="mb-2 text-sm font-bold text-191919">主題</p>
      <div className="flex overflow-x-auto gap-5 pb-4">
        {MapThemes.map((theme) => (
          <button
            key={theme.id}
            className={cn(
              'flex flex-col flex-shrink-0 items-center rounded-lg border-2 border-transparent',
              theme.id === selectedTheme.id ? 'border-blue-400' : 'hover:border-blue-300'
            )}
            onClick={() => {
              handleSelect(theme)
            }}
          >
            <Image
              src={theme.imageSrc}
              alt=""
              width={87}
              height={70}
              className="object-cover rounded-lg"
            />
            <p className="text-sm">{theme.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
