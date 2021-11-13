import LandmarksDensityNone from './LandmarksDensityNone'
import LandmarksDensityLess from './LandmarksDensityLess'
import LandmarksDensityMedium from './LandmarksDensityMedium'
import LandmarksDensityFull from './LandmarksDensityFull'

const LandmarksDensityConfigs = [
  { value: '0', name: '隱藏', config: LandmarksDensityNone },
  { value: '1', name: '少量', config: LandmarksDensityLess },
  { value: '2', name: '適中', config: LandmarksDensityMedium },
  { value: '3', name: '所有', config: LandmarksDensityFull },
]

export default LandmarksDensityConfigs
