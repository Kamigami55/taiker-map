import { useExportContext } from '@/contexts/exportContext'

export default function ExportButton() {
  const { handleExport } = useExportContext()

  return <button onClick={handleExport}>匯出</button>
}
