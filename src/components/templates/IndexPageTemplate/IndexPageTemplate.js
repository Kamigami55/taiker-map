import IndexHeading from '@/components/atoms/IndexHeading'
import Container from '@/components/molecules/Container'
import MapStyleSelect from '@/components/molecules/MapStyleSelect'
import Map from '@/components/organisms/Map'

export default function IndexPageTemplate({ spots }) {
  return (
    <Container>
      <IndexHeading />
      <Map spots={spots} />
      <MapStyleSelect />
    </Container>
  )
}
