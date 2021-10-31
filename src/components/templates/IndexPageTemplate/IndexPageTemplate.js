import { useCallback, useRef, useState } from 'react'

import IndexHeading from '@/components/atoms/IndexHeading'
import Container from '@/components/molecules/Container'
import MapStyleSelect from '@/components/molecules/MapStyleSelect'
import Map from '@/components/organisms/Map'
import ExportButton from '@/components/atoms/ExportButton'

export default function IndexPageTemplate({ spots }) {
  const ref = useRef(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleExport = useCallback(async () => {
    if (ref.current === null) {
      return
    }

    const html2canvas = (await import('html2canvas')).default
    html2canvas(ref.current, {
      useCORS: true,
    }).then(function (canvas) {
      const img = canvas.toDataURL('image/png')
      setPreviewUrl(img)
      const link = document.createElement('a')
      link.download = 'map.png'
      link.href = img
      link.click()
    })
  }, [ref])

  return (
    <Container>
      <div ref={ref}>
        <IndexHeading />
        <Map spots={spots} />
        <MapStyleSelect />
      </div>

      <ExportButton onClick={handleExport} />

      {previewUrl && (
        <div>
          <img src={previewUrl} alt="preview" />
        </div>
      )}
    </Container>
  )
}
