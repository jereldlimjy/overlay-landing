import styled from 'styled-components'
import {Icon} from '../Icon/Icon'
import OverlayLogo from '../../assets/images/updated-overlay-icon.png'

export const HeaderContainer = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 64px;
  max-width: 1200px;
  justify-content: space-between;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: row;
`

const TokenFaucetButton = styled.button`
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 8px 16px;
  margin-right: 48px;
  font-weight: bold;
  cursor: pointer;
`

const AppButton = styled.button`
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
        <Icon src={OverlayLogo} alt="Overlay Logo" width={140} margin={'auto'} />
      </LogoContainer>

      <LinksContainer>
        <Link>Governance</Link>
        <Link>Documentation</Link>
      </LinksContainer>

      <ButtonsContainer>
        <TokenFaucetButton>Get OVL</TokenFaucetButton>
        <AppButton>Launch App</AppButton>
      </ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header