import LabelsDensityNone from './LabelsDensityNone'
import LabelsDensityLess from './LabelsDensityLess'
import LabelsDensityMedium from './LabelsDensityMedium'
import LabelsDensityFull from './LabelsDensityFull'

const LabelsDensityConfigs = [
  { value: '0', name: '隱藏', config: LabelsDensityNone },
  { value: '1', name: '少量', config: LabelsDensityLess },
  { value: '2', name: '適中', config: LabelsDensityMedium },
  { value: '3', name: '所有', config: LabelsDensityFull },
]

export default LabelsDensityConfigs
