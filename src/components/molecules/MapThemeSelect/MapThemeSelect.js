import { CHANGE_MAP_THEME, useStyleContext } from '@/contexts/styleContext'
import MapThemes from '@/mapStyles/themes'

export default function MapThemeSelect() {
  const {
    state: { theme },
    dispatch,
  } = useStyleContext()

  const handleChange = (event) => {
    dispatch({
      type: CHANGE_MAP_THEME,
      payload: { theme: MapThemes.find((theme) => theme.id === event.target.value) },
    })
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select value={theme.id} onChange={handleChange}>
      {MapThemes.map((theme) => (
        <option value={theme.id} key={theme.id}>
          {theme.name}
        </option>
      ))}
    </select>
  )
}
