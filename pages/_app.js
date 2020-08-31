import '../styles/globals.css'
import Nav from '../components/Nav'

const MyApp = ({ Component, pageProps, router }) => (

  <>
      <Nav />
    <Component {...pageProps} key={router.route}/>
  </>
)


export default MyApp
