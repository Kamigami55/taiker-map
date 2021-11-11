import DensitySelect from '@/components/molecules/DensitySelect'
import DensitySelectType from '@/components/molecules/DensitySelect/DensitySelectType'
import MapThemeSelect from '@/components/molecules/MapThemeSelect'
import MarkerStyleControl from '@/components/organisms/MarkerStyleControl'

export default function StylePanel() {
  return (
    <div className="overflow-y-auto flex-grow">
      <MapThemeSelect />
      <DensitySelect type={DensitySelectType.ROADS} />
      <DensitySelect type={DensitySelectType.LANDMARKS} />
      <DensitySelect type={DensitySelectType.LABELS} />
      <MarkerStyleControl />
    </div>
  )
}
