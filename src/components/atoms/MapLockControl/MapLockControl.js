import { BiLockOpen, BiLock } from 'react-icons/bi'
import { TOGGLE_MAP_CONTROL, useMapContext } from '@/contexts/mapContext'

export default function MapLockControl() {
  const { state, dispatch } = useMapContext()
  const { enableControl } = state

  const handleToggle = () => {
    dispatch({ type: TOGGLE_MAP_CONTROL })
  }

  return (
    <button
      className="py-2 px-4 text-black hover:bg-gray-200 active:bg-gray-300 rounded-lg"
      onClick={handleToggle}
    >
      <div className="flex gap-2 items-center">
        {enableControl ? (
          <>
            <BiLockOpen className="w-6 h-6" />
            鎖定地圖
          </>
        ) : (
          <>
            <BiLock className="w-6 h-6" />
            解鎖地圖
          </>
        )}
      </div>
    </button>
  )
}
