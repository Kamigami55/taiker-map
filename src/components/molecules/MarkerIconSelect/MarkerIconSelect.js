import cn from 'classnames'
import { Disclosure } from '@headlessui/react'

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import {
  CHANGE_MARKER_COLOR,
  CHANGE_MARKER_ICON,
  MarkerColorType,
  useStyleContext,
} from '@/contexts/styleContext'
import {
  MARKER_ICON_CONFIGS,
  SPECIAL_ICON_TYPE_ALPHABET,
  SPECIAL_ICON_TYPE_NUMBER,
} from '@/components/atoms/MarkerCustom/markerIcon'
import { SpotType } from '@/contexts/spotsContext'
import ColorInput from '@/components/atoms/ColorInput'

const Sections = [
  {
    name: '景點',
    type: SpotType.SCENIC_SPOT,
  },
  {
    name: '餐廳',
    type: SpotType.RESTAURANT,
  },
  {
    name: '旅館',
    type: SpotType.HOTEL,
  },
  {
    name: '活動',
    type: SpotType.ACTIVITY,
  },
]

export default function MarkerIconSelect() {
  const {
    state: {
      markerStyle: {
        icon: selectedIconTextsByType,
        iconColor: markerIconColorOfTypes,
        shapeColor: markerShapeColorOfTypes,
        borderColor: markerBorderColorOfTypes,
      },
    },
    dispatch,
  } = useStyleContext()

  const handleChangeColor = (spotType, colorType, color) => {
    dispatch({
      type: CHANGE_MARKER_COLOR,
      payload: { spotType, colorType, color },
    })
  }

  const handleSelectIcon = (type, icon) => {
    dispatch({
      type: CHANGE_MARKER_ICON,
      payload: { type, icon },
    })
  }

  return (
    <div className="w-full">
      <p className="mb-2 text-sm font-bold text-191919">地標圖示</p>

      {Sections.map(({ name, type }) => (
        <Disclosure as="div" key={name} className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center py-2 px-4 w-full bg-F4F7FB rounded-lg">
                <div className="flex gap-2 items-center">
                  <span className="font-material-icons text-2xl">
                    {/* TODO change preview icon color based on selected style */}
                    {selectedIconTextsByType[type]}
                  </span>
                  <span className="text-1A1A1A">{name}</span>
                </div>
                <span className="flex items-center ml-6">
                  {open ? (
                    <MdKeyboardArrowUp className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MdKeyboardArrowDown className="w-6 h-6" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>

              <Disclosure.Panel className="pl-1 mt-2">
                <div className="flex flex-wrap gap-2 pb-4">
                  <ColorInput
                    value={markerShapeColorOfTypes[type]}
                    onChange={(value) => handleChangeColor(type, MarkerColorType.shapeColor, value)}
                    label="地標顏色"
                    id={`shapeColor-${type}`}
                  />
                  <ColorInput
                    value={markerIconColorOfTypes[type]}
                    onChange={(value) => handleChangeColor(type, MarkerColorType.iconColor, value)}
                    label="圖示顏色"
                    id={`iconColor-${type}`}
                  />
                  <ColorInput
                    value={markerBorderColorOfTypes[type]}
                    onChange={(value) =>
                      handleChangeColor(type, MarkerColorType.borderColor, value)
                    }
                    label="邊線顏色"
                    id={`borderColor-${type}`}
                  />
                </div>

                <div className="flex flex-wrap gap-2 pb-4">
                  {MARKER_ICON_CONFIGS.map(({ code, specialText }) => {
                    const isSpecial = [
                      SPECIAL_ICON_TYPE_NUMBER,
                      SPECIAL_ICON_TYPE_ALPHABET,
                    ].includes(code)
                    return (
                      <button
                        key={code}
                        className={cn(
                          'flex flex-col flex-shrink-0 items-center rounded-lg border-2 border-transparent',
                          code === selectedIconTextsByType[type]
                            ? 'border-blue-400 text-red-500'
                            : 'hover:border-blue-300'
                        )}
                        onClick={() => {
                          handleSelectIcon(type, code)
                        }}
                      >
                        <div
                          className={cn(
                            'text-xl h-7',
                            isSpecial ? 'w-[68px]' : 'w-7 font-material-icons'
                          )}
                        >
                          {isSpecial ? specialText : code}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
