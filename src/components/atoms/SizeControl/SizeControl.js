import { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { Popover } from '@headlessui/react'

import { MdFitScreen } from 'react-icons/md'
import { CHANGE_CANVAS_SIZE, useStyleContext } from '@/contexts/styleContext'

export default function SizeControl() {
  const {
    state: {
      canvasSize: { width, height },
    },
    dispatch,
  } = useStyleContext()

  const [formWidth, setFormWidth] = useState(width)
  const [formHeight, setFormHeight] = useState(height)

  const isSizeTooSmall = formWidth < 200 || formHeight < 200

  const handleChangeSize = debounce(() => {
    if (isSizeTooSmall) return
    dispatch({
      type: CHANGE_CANVAS_SIZE,
      payload: { width: formWidth, height: formHeight },
    })
  }, 500)

  useEffect(() => {
    handleChangeSize(formWidth, formHeight)
  }, [formWidth, formHeight])

  return (
    <Popover className="relative">
      <Popover.Button className="py-2 px-4 text-black hover:bg-gray-200 active:bg-gray-300 rounded-lg">
        <div className="flex gap-2 items-center">
          <MdFitScreen className="w-6 h-6" />
          調整尺寸
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 p-8 mt-2 bg-white rounded-lg shadow-lg">
        <p className="mb-4 text-lg font-bold">地圖尺寸</p>

        <div className="flex gap-6">
          <div>
            <p className="mb-2">寬度 (px)</p>
            <input
              type="number"
              className="p-2 w-40 rounded border-2 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              value={formWidth}
              onChange={(e) => {
                setFormWidth(e.target.value)
              }}
            />
          </div>

          <div>
            <p className="mb-2">高度 (px)</p>
            <input
              type="number"
              className="p-2 w-40 rounded border-2 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              value={formHeight}
              onChange={(e) => {
                setFormHeight(e.target.value)
              }}
            />
          </div>
        </div>

        {isSizeTooSmall && <p className="mt-2 text-sm text-red-400">寬度與高度不能小於 200 px</p>}
      </Popover.Panel>
    </Popover>
  )
}
