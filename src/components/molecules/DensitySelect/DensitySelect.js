import PropTypes from 'prop-types'

import RangeInput from '@/components/atoms/RangeInput'
import { CHANGE_ROADS_DENSITY, useStyleContext } from '@/contexts/styleContext'
import RoadsDensityConfigs from '@/mapStyles/density/RoadsDensityConfigs'

import DensitySelectType from './DensitySelectType'

const TypeToConfigs = {
  [DensitySelectType.ROADS]: {
    label: '道路密度',
    configs: RoadsDensityConfigs,
    stateName: 'roadsDensity',
    actionType: CHANGE_ROADS_DENSITY,
  },
}

export default function DensitySelect({ type }) {
  const config = TypeToConfigs[type]
  const { state, dispatch } = useStyleContext()
  const selectedDensity = state[config.stateName]

  const handleChange = (event) => {
    dispatch({
      type: config.actionType,
      payload: { value: event.target.value },
    })
  }

  return (
    <div>
      <p className="mb-3">{config.label}</p>
      <RangeInput
        className="w-full"
        min={0}
        max={3}
        step={1}
        value={selectedDensity.value}
        onChange={handleChange}
      />
      <div className="flex justify-between -mx-3 mt-1 text-xs text-gray-600">
        {config.configs.map((item) => (
          <span key={item.name} className="w-10 text-center">
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

DensitySelect.propTypes = {
  type: PropTypes.string.isRequired,
}
