import NavBar from '../components/Navbar'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <NavBar/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
