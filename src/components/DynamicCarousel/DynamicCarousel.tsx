import styled from 'styled-components'
import PCD_Carousel from '../../assets/images/PCD-carousel.png'

const Container = styled.div`
  display: block;
  position: relative;
  overflow-x: hidden !important;
  height: 100px;
`

const Carousel = styled.img`
  position: absolute;
  animation: moveSlideshow 100s linear infinite;
  height: 100px;

  @keyframes moveSlideshow {
    100% {
      transform: translateX(-66.6666%);
    }
  }
`

export const DynamicCarousel = () => {
  return (
    <Container>
      <Carousel src={PCD_Carousel} />
    </Container>
  )
}