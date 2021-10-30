import IndexHeading from '@/components/atoms/IndexHeading'
import Container from '@/components/molecules/Container'
import Map from '@/components/organisms/Map'

export default function IndexPageTemplate({ tourismSpots }) {
  return (
    <Container>
      <IndexHeading />
      <Map spots={tourismSpots} />
    </Container>
  )
}
