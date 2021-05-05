import Header from '../components/about/header'
import Main from '../components/about/main'
import Profiles from '../components/about/profiles'
import Contact from '../components/contact'
import Nav from '../components/nav'

const About = () => {
  return (
    <div>
      <Nav theme="dark" />
      <Header />
      <Profiles />
      <Main />
      <Contact />
    </div>
  )
}

export default About
