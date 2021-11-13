import MarkerIconSelect from '@/components/molecules/MarkerIconSelect'
import MarkerShapeSelect from '@/components/molecules/MarkerShapeSelect'
import MarkerShowLabelControl from '@/components/molecules/MarkerShowLabelControl'

export default function MarkerStyleControl() {
  return (
    <div>
      <MarkerShapeSelect />
      <MarkerShowLabelControl />
      <MarkerIconSelect />
    </div>
  )
}
