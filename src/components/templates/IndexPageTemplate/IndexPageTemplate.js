import SideBar from '@/components/organisms/SideBar'
import TopBar from '@/components/organisms/TopBar'
import CanvasContainer from '@/components/organisms/CanvasContainer'
import Canvas from '@/components/organisms/Canvas'

export default function IndexPageTemplate() {
  return (
    <div className="flex flex-row min-h-screen text-gray-800 bg-F4F7FB">
      <SideBar />
      <main className="flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <TopBar />
        <CanvasContainer>
          <Canvas />
        </CanvasContainer>
      </main>
    </div>
  )
}
