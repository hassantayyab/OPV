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
      Whether it’s regarding an investement, collaboration or new talent, we’d
      love to hear.
    </Footer>
  </div>
)

export default About
