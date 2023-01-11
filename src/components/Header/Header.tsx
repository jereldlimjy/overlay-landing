import styled from 'styled-components'
import {device} from '../../theme/theme'
import {ExternalIcon, Icon} from '../Icon/Icon'
import {Menu, ArrowRight} from 'react-feather'
import {StyledCTAButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'
import OverlayLogo from '../../assets/images/updated-overlay-icon.png'

export const HeaderContainer = styled.div`
  display: flex;
  margin: 32px auto 64px;
  max-width: 1200px;
  justify-content: space-between;
  width: 100%;
  font-family: 'Inter', sans-serif;
`

export const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`

const LinksContainer = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
    flex-direction: row;
  }
`

const Link = styled.a`
  display: flex;
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin: auto 16px;
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
    flex-direction: row;
  }
`

const MobileOnly = styled.div`
  display: flex;
  margin-right: 8px;

  @media ${device.sm} {
    display: none;
  }
`

const TokenFaucetButton = styled.button`
  font-family: 'Inter', sans-serif;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 8px 16px;
  margin-right: 48px;
  font-weight: bold;
  cursor: pointer;
`

const AppButton = styled.button`
  font-family: 'Inter', sans-serif;
  background: #71ceff;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Icon src={OverlayLogo} alt="Overlay Logo" width={140} margin="auto" />
      </LogoContainer>

      <LinksContainer>
        <Link>Governance</Link>
        <Link>Documentation</Link>
      </LinksContainer>

      <ButtonsContainer>
        <TokenFaucetButton>Get OVL</TokenFaucetButton>
        <StyledCTAButton href={GENERAL_LINKS.LAUNCH_APP}>
          Launch App
          <ExternalIcon margin="4px">
            <ArrowRight size={16} />
          </ExternalIcon>
        </StyledCTAButton>
      </ButtonsContainer>

      <MobileOnly>
        <ExternalIcon margin="auto" width={40} center={true}>
          <Menu />
        </ExternalIcon>
      </MobileOnly>
    </HeaderContainer>
  )
}

export default Header
