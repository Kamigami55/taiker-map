import { CHANGE_MARKER_SHOW_LABEL, useStyleContext } from '@/contexts/styleContext'
import ToggleInput from '@/components/atoms/ToggleInput'

export default function MarkerShowLabelControl() {
  const {
    state: {
      markerStyle: { showLabel },
    },
    dispatch,
  } = useStyleContext()

  const handleChange = (event) => {
    dispatch({
      type: CHANGE_MARKER_SHOW_LABEL,
      payload: { showLabel: event.target.checked },
    })
  }

  return (
    <div className="mb-4 w-full">
      <ToggleInput
        id="show-label-toggle"
        onChange={handleChange}
        checked={showLabel}
        label="顯示地標名稱"
      />
    </div>
  )
}
