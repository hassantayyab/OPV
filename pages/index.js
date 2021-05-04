import Head from 'next/head'
import Nav from '../components/nav/index.js'
import Container from '../components/container'
import Hero from '../components/home/hero'
import Contact from '../components/home/contact'

const Home = () => {
	return (
		<div>
			<Head>
				<title>Open Process Ventures</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Nav />
			<Container>
				<Hero />
			</Container>
			<Contact />
		</div>
	)
}

export default Home
