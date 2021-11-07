import { Disclosure } from '@headlessui/react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import { SpotType, TOGGLE_SPOT, useSpotsContext } from '@/contexts/spotsContext'

export default function SpotsPanel() {
  const {
    state: { scenicSpots, restaurants, hotels, activities },
    dispatch,
  } = useSpotsContext()

  const sections = [
    {
      name: '景點',
      spots: scenicSpots,
      type: SpotType.SCENIC_SPOT,
    },
    {
      name: '餐廳',
      spots: restaurants,
      type: SpotType.RESTAURANT,
    },
    {
      name: '旅館',
      spots: hotels,
      type: SpotType.HOTEL,
    },
    {
      name: '活動',
      spots: activities,
      type: SpotType.ACTIVITY,
    },
  ]

  return (
    <div className="overflow-y-auto flex-grow">
      {sections.map((section) => (
        <Disclosure as="div" key={section.name} className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center py-2 px-4 w-full bg-F4F7FB rounded-lg">
                <div className="flex gap-2 items-center">
                  <input
                    // id={`filter-${spot.id}`}
                    // name={`${section.id}[]`}
                    // defaultValue={spot.checked}
                    type="checkbox"
                    // defaultChecked={spot.checked}
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="text-1A1A1A">{section.name}</span>
                </div>
                <span className="flex items-center ml-6">
                  {open ? (
                    <MdKeyboardArrowUp className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MdKeyboardArrowDown className="w-6 h-6" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>

              <Disclosure.Panel className="pl-7 mt-2">
                <div className="space-y-4">
                  {section.spots.map((spot) => (
                    <div key={spot.id} className="flex items-center">
                      <input
                        id={`filter-${spot.id}`}
                        type="checkbox"
                        checked={spot.selected}
                        onChange={() => {
                          dispatch({
                            type: TOGGLE_SPOT,
                            payload: {
                              id: spot.id,
                              type: section.type,
                            },
                          })
                        }}
                        className="flex-shrink-0 w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <label htmlFor={`filter-${spot.id}`} className="ml-3 text-sm text-gray-600">
                        {spot.name}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
