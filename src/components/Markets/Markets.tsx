import styled from 'styled-components'
import {device} from '../../theme/theme'
import {StyledCTAButton} from '../Button/Button'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  padding: 45px 16px;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  @media ${device.sm} {
    flex-direction: row;
  }
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 36px;
  max-width: 300px;
  margin-bottom: 20px;

  @media ${device.sm} {
    max-width: 450px;
  }
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #7b7b7b;
  max-width: 650px;
  margin-bottom: 20px;
`

const ExploreButton = styled.button`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 18px;
  font-weight: 600;
  background: #71CEFF;
  color: white;
  border-radius: 10px;
  outline: none;
  box-shadow; none;
  border: none;
  padding: 12px 24px;
`

const Markets = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <div>
          <Title>Discover a wide world of new markets</Title>
          <Description>
            Overlay can spin up markets on nearly any scalar data. From DeFi to the real world,
            nothing will be illiquid again.
          </Description>
        </div>
        <div>
          <StyledCTAButton>Explore</StyledCTAButton>
        </div>
      </HeaderContainer>
    </MainContainer>
  )
}

export default Markets
