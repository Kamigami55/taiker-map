import ExportButton from '@/components/atoms/ExportButton'
import MapLockControl from '@/components/atoms/MapLockControl'

export default function TopBar() {
  return (
    <header className="p-4 bg-white shadow">
      <div className="flex flex-row gap-4 items-center">
        <MapLockControl />
        <ExportButton />
      </div>
    </header>
  )
}
