import { BiExport } from 'react-icons/bi'
import { useExportContext } from '@/contexts/exportContext'

export default function ExportButton() {
  const { handleExport } = useExportContext()

  return (
    <button
      className="py-2 px-4 text-black hover:bg-gray-200 active:bg-gray-300 rounded-lg"
      onClick={handleExport}
    >
      <div className="flex gap-2 items-center">
        <BiExport className="w-6 h-6" />
        輸出地圖
      </div>
    </button>
  )
}
