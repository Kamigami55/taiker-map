import { CHANGE_MAP_STYLE, useMapContext } from '@/contexts/mapContext'
import MapStyles from '@/mapStyles'

export default function MapStyleSelect() {
  const { state, dispatch } = useMapContext()
  const handleChange = (event) => {
    dispatch({
      type: CHANGE_MAP_STYLE,
      payload: { style: MapStyles.find((style) => style.id === event.target.value) },
    })
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select value={state.style.id} onChange={handleChange}>
      {MapStyles.map((style) => (
        <option value={style.id} key={style.id}>
          {style.name}
        </option>
      ))}
    </select>
  )
}
