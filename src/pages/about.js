import Layout from '@/components/Layout'
import AboutPageTemplate from '@/components/templates/AboutPageTemplate'

export default function AboutPage() {
  return (
    <Layout>
      <AboutPageTemplate />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  }
}
