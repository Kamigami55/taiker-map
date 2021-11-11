import MarkerShapePin from '@/components/atoms/MarkerShapePin'
import MarkerShapeCircle from '@/components/atoms/MarkerShapeCircle'

export const MARKER_SHAPE_PIN = 'MARKER_SHAPE_PIN'
export const MARKER_SHAPE_CIRCLE = 'MARKER_SHAPE_CIRCLE'

export const MARKER_SHAPE_CONFIGS = {
  [MARKER_SHAPE_PIN]: {
    id: MARKER_SHAPE_PIN,
    iconProps: {
      path: 'M25.015 2.4c-7.8 0-14.121 6.204-14.121 13.854 0 7.652 14.121 32.746 14.121 32.746s14.122-25.094 14.122-32.746c0-7.65-6.325-13.854-14.122-13.854z',
      anchor: { x: 25, y: 50 },
      labelOrigin: { x: 25, y: 19 },
      scale: 0.8,
    },
    component: MarkerShapePin,
  },
  [MARKER_SHAPE_CIRCLE]: {
    id: MARKER_SHAPE_CIRCLE,
    iconProps: {
      path: 'M 25 25 m -15, 0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0',
      anchor: { x: 25, y: 25 },
      labelOrigin: { x: 25, y: 25 },
      scale: 0.8,
    },
    component: MarkerShapeCircle,
  },
}
