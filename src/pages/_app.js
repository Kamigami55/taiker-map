import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

import { NEXT_PUBLIC_GTM_ID } from '@/constants/envValues'
import { pageview } from '@/libs/gtm'

import '../styles/index.css'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_TITLE_DEFAULT, SITE_URL } from '@/constants/siteMeta'

function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <DefaultSeo
        defaultTitle={SITE_TITLE_DEFAULT}
        description={SITE_DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          type: 'website',
          url: SITE_URL,
          title: SITE_TITLE_DEFAULT,
          description: SITE_DESCRIPTION,
          images: [
            {
              url: SITE_URL + 'og-image.png',
              width: 1200,
              height: 630,
              alt: SITE_TITLE,
            },
          ],
        }}
      />

      {/* Google Tag Manager - Global base code */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${NEXT_PUBLIC_GTM_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
