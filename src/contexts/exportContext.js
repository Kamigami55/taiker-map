import React from 'react'

const ExportContext = React.createContext()

export function ExportProvider({ children }) {
  const canvasRef = React.useRef(null)
  const [previewUrl, setPreviewUrl] = React.useState(null)

  const handleExport = React.useCallback(async () => {
    if (canvasRef.current === null) return

    const html2canvas = (await import('html2canvas')).default
    html2canvas(canvasRef.current, {
      useCORS: true,
    }).then(function (canvas) {
      const img = canvas.toDataURL('image/png')
      setPreviewUrl(img)
      const link = document.createElement('a')
      link.download = 'map.png'
      link.href = img
      link.click()
    })
  }, [canvasRef])

  const value = { canvasRef, previewUrl, handleExport }
  return <ExportContext.Provider value={value}>{children}</ExportContext.Provider>
}

export function useExportContext() {
  const context = React.useContext(ExportContext)
  if (context === undefined) {
    throw new Error('useExportContext must be used within a ExportProvider')
  }
  return context
}
