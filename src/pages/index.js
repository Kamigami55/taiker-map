import Layout from '@/components/Layout'
import IndexPageTemplate from '@/components/templates/IndexPageTemplate'
import { MapProvider, useMapContext } from '@/contexts/mapContext'
import { useGeolocation } from '@/hooks/useGeolocation'
import { useTourismSpots } from '@/hooks/useTourismSpots'

function IndexPage() {
  const [position] = useGeolocation()
  const { state } = useMapContext()
  const { tourismSpots } = useTourismSpots({
    center: state.center,
    distance: state.distance,
  })
  return (
    <Layout>
      <IndexPageTemplate tourismSpots={tourismSpots} />

      <p>{position?.coords?.latitude}</p>
      <p>{position?.coords?.longitude}</p>

      {tourismSpots.map((spot) => (
        <p key={spot.id}>{spot.name}</p>
      ))}
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
