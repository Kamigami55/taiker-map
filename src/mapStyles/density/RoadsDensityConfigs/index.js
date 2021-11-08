import RoadsDensityNone from './RoadsDensityNone'
import RoadsDensityLess from './RoadsDensityLess'
import RoadsDensityMedium from './RoadsDensityMedium'
import RoadsDensityFull from './RoadsDensityFull'

const RoadsDensityConfigs = [
  { value: '0', name: '無', config: RoadsDensityNone },
  { value: '1', name: '少量', config: RoadsDensityLess },
  { value: '2', name: '適中', config: RoadsDensityMedium },
  { value: '3', name: '所有', config: RoadsDensityFull },
]

export default RoadsDensityConfigs
