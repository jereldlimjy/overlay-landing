import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {Market, TermsOfService} from './pages'
import {Nav} from './components'
import Hero from './components/Hero/Hero'
import Investors from './components/Investors/Investors'
import ValueProposition from './components/ValueProposition/ValueProposition'
import News from './components/News/News'
import Audits from './components/Audits/Audits'
import Contributing from './components/Contributing/Contributing'
import './App.scss'

const Wrapper = styled.div`
  background: #f0f0f0;
  padding: 75px 0 55px;
`

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: auto;
`

const InteractiveContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BrandLogoContainer = styled.div``

const LinksContainer = styled.div``

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: black;
`
const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <InteractiveContentsContainer>
          <BrandLogoContainer></BrandLogoContainer>
          <LinksContainer></LinksContainer>
        </InteractiveContentsContainer>
        <Line />
      </FooterContainer>
    </Wrapper>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* TO DO: add Landing Page components in / route */}
        <Route path="/" exact>
          <Hero />
          <Investors />
          <ValueProposition />
          <News />
          <Audits />
          <Contributing />
        </Route>
        <Route exact strict path="/markets" component={Market} />
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
