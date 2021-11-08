import PropTypes from 'prop-types'

import RangeInput from '@/components/atoms/RangeInput'
import { CHANGE_DENSITY, useStyleContext } from '@/contexts/styleContext'
import RoadsDensityConfigs from '@/mapStyles/density/RoadsDensityConfigs'
import LandmarksDensityConfigs from '@/mapStyles/density/LandmarksDensityConfigs'
import LabelsDensityConfigs from '@/mapStyles/density/LabelsDensityConfigs'

import DensitySelectType from './DensitySelectType'

const TypeToSelectConfigs = {
  [DensitySelectType.ROADS]: {
    label: '道路密度',
    options: RoadsDensityConfigs,
    stateName: 'roadsDensity',
  },
  [DensitySelectType.LANDMARKS]: {
    label: '地標密度',
    options: LandmarksDensityConfigs,
    stateName: 'landmarksDensity',
  },
  [DensitySelectType.LABELS]: {
    label: '文字密度',
    options: LabelsDensityConfigs,
    stateName: 'labelsDensity',
  },
}

export default function DensitySelect({ type }) {
  const selectConfig = TypeToSelectConfigs[type]
  const { stateName, label, options } = selectConfig
  const { state, dispatch } = useStyleContext()
  const selectedDensityOption = state[stateName]

  const handleChange = (event) => {
    dispatch({
      type: CHANGE_DENSITY,
      payload: {
        stateName,
        option: options.find((option) => option.value === event.target.value),
      },
    })
  }

  return (
    <div>
      <p className="mb-3">{label}</p>
      <RangeInput
        className="w-full"
        min={0}
        max={3}
        step={1}
        value={selectedDensityOption.value}
        onChange={handleChange}
      />
      <div className="flex justify-between -mx-3 mt-1 text-xs text-gray-600">
        {options.map((option) => (
          <span key={option.name} className="w-10 text-center">
            {option.name}
          </span>
        ))}
      </div>
    </div>
  )
}

DensitySelect.propTypes = {
  type: PropTypes.string.isRequired,
}
