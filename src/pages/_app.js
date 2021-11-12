import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

import { NEXT_PUBLIC_GTM_ID } from '@/constants/envValues'
import { pageview } from '@/libs/gtm'

import '../styles/index.css'

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
