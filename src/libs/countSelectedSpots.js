import { CHECKBOX_STATUS } from '@/components/atoms/Checkbox/CheckboxStatus'

export default function countSelectedSpots(spots) {
  const numOfSpots = spots.length
  const numOfSelectedSpots = spots.filter((spot) => spot.selected).length
  const selectedStatus =
    numOfSelectedSpots === numOfSpots
      ? CHECKBOX_STATUS.Checked
      : numOfSelectedSpots === 0
      ? CHECKBOX_STATUS.Unchecked
      : CHECKBOX_STATUS.Indeterminate
  return { numOfSpots, numOfSelectedSpots, selectedStatus }
}
