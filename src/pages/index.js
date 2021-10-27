import Layout from '@/components/Layout'
import IndexPageTemplate from '@/components/templates/IndexPageTemplate'
import { useGeolocation } from '@/hooks/useGeolocation'
import { useTourismSpots } from '@/hooks/useTourismSpots'

export default function IndexPage() {
  const [position] = useGeolocation()
  const { tourismSpots } = useTourismSpots()

  return (
    <Layout>
      <IndexPageTemplate />

      <p>{position?.coords?.latitude}</p>
      <p>{position?.coords?.longitude}</p>

      {tourismSpots.map((spot) => (
        <p key={spot.id}>{spot.name}</p>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  }
}
