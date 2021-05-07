import Header from '../components/about/header'
import Main from '../components/about/main'
import Profiles from '../components/about/profiles'
import Footer from '../components/utils/footer'
import Nav from '../components/nav'

const About = () => (
  <div>
    <Nav theme="dark" />
    <Header />
    <Profiles />
    <Main />
    <Footer>
      <div>Whether it’s regarding an investement,</div>
      <div>collaboration or new talent,</div>
      <div>we’d love to hear.</div>
    </Footer>
  </div>
)

export default About
