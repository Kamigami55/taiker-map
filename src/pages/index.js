import { useEffect } from 'react'

import Layout from '@/components/Layout'
import IndexPageTemplate from '@/components/templates/IndexPageTemplate'
import { MapProvider, useMapContext } from '@/contexts/mapContext'
import { SET_SPOTS, SpotsProvider, useSpotsContext } from '@/contexts/spotsContext'
// import { useGeolocation } from '@/hooks/useGeolocation'
import { useAllTourismSpots } from '@/api/useAllTourismSpots'
import { ExportProvider } from '@/contexts/exportContext'
import { StyleProvider } from '@/contexts/styleContext'

function IndexPage() {
  // const [position] = useGeolocation()
  const { state: { center, radius } = {} } = useMapContext()
  const { scenicSpots, restaurants, hotels, activities, isLoading } = useAllTourismSpots({
    center,
    distance: radius,
  })
  const { dispatch: dispatchSpots } = useSpotsContext()

  useEffect(() => {
    if (!isLoading) {
      dispatchSpots({
        type: SET_SPOTS,
        payload: { scenicSpots, restaurants, hotels, activities },
      })
    }
  }, [scenicSpots, restaurants, hotels, activities, isLoading])

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default function IndexPageWithProvider() {
  return (
    <SpotsProvider>
      <MapProvider>
        <StyleProvider>
          <ExportProvider>
            <IndexPage />
          </ExportProvider>
        </StyleProvider>
      </MapProvider>
    </SpotsProvider>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  }
}
