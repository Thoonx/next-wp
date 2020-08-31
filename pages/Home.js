import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'



export async function getStaticProps(){
  const res = await fetch('https://antuncrnja.com/blearn/wp-json/wp/v2/pages?search=naslovna');
  const pages = await res.json();

  return {
    props: {
      pages
    }
  }
}

const WpHome = ({ pages }) => (
  
    <div>
  {console.log(pages)}    
      <Head>
        <title>Next WP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container key={pages.id}>
        
        <h1 style={{ color: pages[0].acf.color}}>{ pages[0].acf.proba}</h1>
		   <img src={pages[0].acf.slika1}/>
       
       
      </Container>

    </div>
  )

  export default WpHome
