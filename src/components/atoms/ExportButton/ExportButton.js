import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { usePopper } from 'react-popper'

import { BiExport } from 'react-icons/bi'

import { useExportContext } from '@/contexts/exportContext'

export default function ExportButton() {
  const { previewUrl, handleGeneratePreview, handleDownload } = useExportContext()
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <Popover className="relative">
      <button
        className="text-black hover:bg-gray-200 active:bg-gray-300 rounded-lg"
        onClick={handleGeneratePreview}
      >
        <Popover.Button
          as="div"
          className="flex gap-2 items-center py-2 px-4"
          ref={setReferenceElement}
        >
          <BiExport className="w-6 h-6" />
          輸出地圖
        </Popover.Button>
      </button>

      <Popover.Panel
        className="absolute z-10 p-8 mt-2 w-80 bg-white rounded-lg shadow-lg"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {({ close }) => (
          <div>
            <p className="mb-4 text-lg font-bold">預覽</p>

            {previewUrl ? (
              <img src={previewUrl} alt="preview" className="w-full" />
            ) : (
              <div className="text-center">
                <p className="text-gray-500">輸出中...</p>
              </div>
            )}

            <button
              onClick={() => {
                handleDownload()
                close()
              }}
              disabled={!previewUrl}
              className="py-2 px-4 mt-4 w-full text-white bg-172A50 rounded-lg disabled:opacity-50"
            >
              下載地圖
            </button>
          </div>
        )}
      </Popover.Panel>
    </Popover>
  )
}
