import DensitySelect from '@/components/molecules/DensitySelect'
import DensitySelectType from '@/components/molecules/DensitySelect/DensitySelectType'
import MapStyleSelect from '@/components/molecules/MapStyleSelect'

export default function StylePanel() {
  return (
    <div>
      <MapStyleSelect />
      <DensitySelect type={DensitySelectType.ROADS} />
      <DensitySelect type={DensitySelectType.LANDMARKS} />
      <DensitySelect type={DensitySelectType.LABELS} />
    </div>
  )
}
