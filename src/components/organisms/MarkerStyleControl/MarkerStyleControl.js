import cn from 'classnames'

import { CHANGE_MARKER_SHAPE, useStyleContext } from '@/contexts/styleContext'
import { MARKER_SHAPE_CONFIGS } from '@/components/atoms/MarkerCustom/markerShape'

export default function MarkerStyleControl() {
  const {
    state: {
      markerStyle: { shape: selectedShape },
    },
    dispatch,
  } = useStyleContext()

  const handleSelect = (shape) => {
    dispatch({
      type: CHANGE_MARKER_SHAPE,
      payload: { shape },
    })
  }

  return (
    <div className="w-full">
      <p className="mb-2 text-sm font-bold text-191919">地標形狀</p>
      <div className="flex flex-wrap gap-5 pb-4">
        {Object.values(MARKER_SHAPE_CONFIGS).map((shapeConfig) => {
          const { id, component: ShapeComponent } = shapeConfig
          return (
            <button
              key={id}
              className={cn(
                'flex flex-col flex-shrink-0 items-center rounded-lg border-2 border-transparent',
                id === selectedShape ? 'border-blue-400' : 'hover:border-blue-300'
              )}
              onClick={() => {
                handleSelect(id)
              }}
            >
              <ShapeComponent
                className="w-10 h-10"
                style={{
                  fill: '#f87171',
                  stroke: 'black',
                }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
