import styled from 'styled-components'
import {device} from '../../theme/theme'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import HeroBackground from '../../assets/images/hero-background.png'

const Wrapper = styled.div`
  background: url(${HeroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 16px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  padding: 45px 0 135px;
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 32px;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #232323;
  padding-bottom: 30px;

  @media ${device.sm} {
    font-size: 54px;
  }
`

const CarouselContainer = styled.div`
  display: flex;
  padding-top: 45px;
`

const TwitterEmbedContainer = styled.div`
  width: 350px;
  height: 700px;
`

const MediaCarousel = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Title>Latest Updates</Title>
        <CarouselContainer>
          <TwitterEmbedContainer>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="OverlayProtocol"
              options={{height: 700}}
            />
          </TwitterEmbedContainer>
        </CarouselContainer>
      </MainContainer>
    </Wrapper>
  )
}

export default MediaCarousel
