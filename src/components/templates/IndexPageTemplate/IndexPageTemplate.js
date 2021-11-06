import SideBar from '@/components/organisms/SideBar'
import TopBar from '@/components/organisms/TopBar'
import CanvasContainer from '@/components/organisms/CanvasContainer'
import Canvas from '@/components/organisms/Canvas'
import { useExportContext } from '@/contexts/exportContext'

export default function IndexPageTemplate() {
  const { previewUrl } = useExportContext()
  return (
    <div className="flex flex-row min-h-screen text-gray-800 bg-gray-100">
      <SideBar />
      <main className="flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in main">
        <TopBar />
        <CanvasContainer>
          <Canvas />
        </CanvasContainer>

        {previewUrl && (
          <div>
            <img src={previewUrl} alt="preview" />
          </div>
        )}
      </main>
    </div>
  )
}
