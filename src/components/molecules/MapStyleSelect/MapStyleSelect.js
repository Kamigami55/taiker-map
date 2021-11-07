import { CHANGE_MAP_STYLE, useStyleContext } from '@/contexts/styleContext'
import MapStyles from '@/mapStyles'

export default function MapStyleSelect() {
  const { state, dispatch } = useStyleContext()
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
