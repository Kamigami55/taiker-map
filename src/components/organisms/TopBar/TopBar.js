import ExportButton from '@/components/atoms/ExportButton'
import MapLockControl from '@/components/atoms/MapLockControl'
import SizeControl from '@/components/atoms/SizeControl'

export default function TopBar() {
  return (
    <header className="flex gap-4 justify-between items-center py-7 px-6">
      <div>
        <SizeControl />
      </div>
      <div className="flex gap-2">
        <ExportButton />
        <MapLockControl />
      </div>
    </header>
  )
}
