import Layout from '@/components/Layout'
import IndexPageTemplate from '@/components/templates/IndexPageTemplate'
import { MapProvider, useMapContext } from '@/contexts/mapContext'
// import { useGeolocation } from '@/hooks/useGeolocation'
import { useAllTourismSpots } from '@/api/useAllTourismSpots'

function IndexPage() {
  // const [position] = useGeolocation()
  const { state } = useMapContext()
  const { spots } = useAllTourismSpots({
    center: state.center,
    distance: state.radius,
  })
  return (
    <Layout>
      <IndexPageTemplate spots={spots} />
    </Layout>
  )
}

export default function IndexPageWithProvider() {
  return (
    <MapProvider>
      <IndexPage />
    </MapProvider>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  }
}
