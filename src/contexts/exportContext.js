import React from 'react'

const ExportContext = React.createContext()

export function ExportProvider({ children }) {
  const canvasRef = React.useRef(null)
  const [previewUrl, setPreviewUrl] = React.useState(null)

  const handleGeneratePreview = React.useCallback(async () => {
    if (canvasRef.current === null) return
    setPreviewUrl(null)

    const html2canvas = (await import('html2canvas')).default
    html2canvas(canvasRef.current, {
      useCORS: true,
    }).then(function (canvas) {
      const img = canvas.toDataURL('image/png')
      setPreviewUrl(img)
    })
  }, [canvasRef])

  const handleDownload = React.useCallback(async () => {
    if (previewUrl === null) return
    const link = document.createElement('a')
    link.download = 'map.png'
    link.href = previewUrl
    link.click()
  }, [previewUrl])

  const value = { canvasRef, previewUrl, handleGeneratePreview, handleDownload }
  return <ExportContext.Provider value={value}>{children}</ExportContext.Provider>
}

export function useExportContext() {
  const context = React.useContext(ExportContext)
  if (context === undefined) {
    throw new Error('useExportContext must be used within a ExportProvider')
  }
  return context
}
