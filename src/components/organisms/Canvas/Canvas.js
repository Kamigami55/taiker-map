import Map from '@/components/organisms/Map'
import { useExportContext } from '@/contexts/exportContext'

import styles from './Canvas.module.scss'

export default function Canvas() {
  const { canvasRef } = useExportContext()
  return (
    <div ref={canvasRef} className={styles.canvas}>
      <Map />
    </div>
  )
}
