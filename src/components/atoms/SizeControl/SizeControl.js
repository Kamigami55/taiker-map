import { MdFitScreen } from 'react-icons/md'

export default function SizeControl() {
  return (
    <button
      className="py-2 px-4 text-black hover:bg-gray-200 active:bg-gray-300 rounded-lg"
      // onClick={handleExport}
    >
      <div className="flex gap-2 items-center">
        <MdFitScreen className="w-6 h-6" />
        調整尺寸
      </div>
    </button>
  )
}
