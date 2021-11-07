import { useMemo } from 'react'
import { Disclosure } from '@headlessui/react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import { SpotType, TOGGLE_SPOT, TOGGLE_SPOT_TOTAL, useSpotsContext } from '@/contexts/spotsContext'
import Checkbox from '@/components/atoms/Checkbox'
import { CHECKBOX_STATUS } from '@/components/atoms/Checkbox/CheckboxStatus'
import countSelectedSpots from '@/libs/countSelectedSpots'

export default function SpotsPanel() {
  const {
    state: { scenicSpots, restaurants, hotels, activities },
    dispatch,
  } = useSpotsContext()
  const scenicSpotsSummations = useMemo(() => countSelectedSpots(scenicSpots), [scenicSpots])
  const restaurantsSummations = useMemo(() => countSelectedSpots(restaurants), [restaurants])
  const hotelsSummations = useMemo(() => countSelectedSpots(hotels), [hotels])
  const activitiesSummations = useMemo(() => countSelectedSpots(activities), [activities])

  const sections = [
    {
      name: '景點',
      spots: scenicSpots,
      numOfSpots: scenicSpotsSummations.numOfSpots,
      numOfSelectedSpots: scenicSpotsSummations.numOfSelectedSpots,
      selectedStatus: scenicSpotsSummations.selectedStatus,
      type: SpotType.SCENIC_SPOT,
    },
    {
      name: '餐廳',
      spots: restaurants,
      numOfSpots: restaurantsSummations.numOfSpots,
      numOfSelectedSpots: restaurantsSummations.numOfSelectedSpots,
      selectedStatus: restaurantsSummations.selectedStatus,
      type: SpotType.RESTAURANT,
    },
    {
      name: '旅館',
      spots: hotels,
      numOfSpots: hotelsSummations.numOfSpots,
      numOfSelectedSpots: hotelsSummations.numOfSelectedSpots,
      selectedStatus: hotelsSummations.selectedStatus,
      type: SpotType.HOTEL,
    },
    {
      name: '活動',
      spots: activities,
      numOfSpots: activitiesSummations.numOfSpots,
      numOfSelectedSpots: activitiesSummations.numOfSelectedSpots,
      selectedStatus: activitiesSummations.selectedStatus,
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
                  <Checkbox
                    type="checkbox"
                    status={section.selectedStatus}
                    onClick={(event) => event.stopPropagation()}
                    onChange={() => {
                      dispatch({
                        type: TOGGLE_SPOT_TOTAL,
                        payload: {
                          type: section.type,
                          checked:
                            section.selectedStatus === CHECKBOX_STATUS.Checked ? false : true,
                        },
                      })
                    }}
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="text-1A1A1A">
                    {`${section.name} (${section.numOfSelectedSpots}/${section.numOfSpots})`}
                  </span>
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
                      <Checkbox
                        id={`filter-${spot.id}`}
                        status={spot.selected ? CHECKBOX_STATUS.Checked : CHECKBOX_STATUS.Unchecked}
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
