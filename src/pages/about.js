import { NextSeo } from 'next-seo'

import Layout from '@/components/Layout'
import AboutPageTemplate from '@/components/templates/AboutPageTemplate'
import { SITE_TITLE, SITE_URL } from '@/constants/siteMeta'

export default function AboutPage() {
  return (
    <Layout>
      <NextSeo
        canonical={SITE_URL + 'about'}
        title={`關於我們 - ${SITE_TITLE}`}
        openGraph={{
          title: `關於我們 - ${SITE_TITLE}`,
        }}
      />
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
