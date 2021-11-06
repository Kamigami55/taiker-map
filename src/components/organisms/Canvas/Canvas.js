import Map from '@/components/organisms/Map'
import { useExportContext } from '@/contexts/exportContext'

export default function Canvas() {
  const { canvasRef } = useExportContext()
  return (
    <div ref={canvasRef}>
      <Map />
    </div>
  )
}
