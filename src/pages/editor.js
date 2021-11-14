import { useEffect } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Layout from '@/components/Layout'
import EditorPageTemplate from '@/components/templates/EditorPageTemplate'
import { MapProvider, useMapContext } from '@/contexts/mapContext'
import { SET_SPOTS, SpotsProvider, useSpotsContext } from '@/contexts/spotsContext'
// import { useGeolocation } from '@/hooks/useGeolocation'
import { useAllTourismSpots } from '@/api/useAllTourismSpots'
import { ExportProvider } from '@/contexts/exportContext'
import { StyleProvider } from '@/contexts/styleContext'
import { SITE_TITLE, SITE_URL } from '@/constants/siteMeta'

function EditorPage() {
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
      <NextSeo
        canonical={SITE_URL + 'editor'}
        title={`建立地圖 - ${SITE_TITLE}`}
        openGraph={{
          title: `建立地圖 - ${SITE_TITLE}`,
        }}
      />

      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <EditorPageTemplate />
    </Layout>
  )
}

export default function EditorPageWithProvider() {
  return (
    <SpotsProvider>
      <MapProvider>
        <StyleProvider>
          <ExportProvider>
            <EditorPage />
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
