import Layout from '@/components/Layout'
import IndexPageTemplate from '@/components/templates/IndexPageTemplate'
import { useGeolocation } from '@/hooks/useGeolocation'

export default function IndexPage() {
  const [position] = useGeolocation()
  return (
    <Layout>
      <IndexPageTemplate />

      <p>{position?.coords?.latitude}</p>
      <p>{position?.coords?.longitude}</p>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  }
}
