import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import HeroSection from '@/components/organisms/HeroSection'
import ShowcaseSection from '@/components/organisms/ShowcaseSection'

export default function IndexPageTemplate() {
  return (
    <div className="bg-F4F7FB">
      <Header />
      <HeroSection />
      <ShowcaseSection />
      <Footer />
    </div>
  )
}
