import DensitySelect from '@/components/molecules/DensitySelect'
import DensitySelectType from '@/components/molecules/DensitySelect/DensitySelectType'
import MapThemeSelect from '@/components/molecules/MapThemeSelect'

export default function StylePanel() {
  return (
    <div>
      <MapThemeSelect />
      <DensitySelect type={DensitySelectType.ROADS} />
      <DensitySelect type={DensitySelectType.LANDMARKS} />
      <DensitySelect type={DensitySelectType.LABELS} />
    </div>
  )
}
