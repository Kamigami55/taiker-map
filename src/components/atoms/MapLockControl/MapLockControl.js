import { TOGGLE_MAP_CONTROL, useMapContext } from '@/contexts/mapContext'

export default function MapLockControl() {
  const { state, dispatch } = useMapContext()
  const { enableControl } = state

  const handleToggle = () => {
    dispatch({ type: TOGGLE_MAP_CONTROL })
  }

  return <button onClick={handleToggle}>{enableControl ? '鎖定地圖' : '解鎖地圖'}</button>
}
