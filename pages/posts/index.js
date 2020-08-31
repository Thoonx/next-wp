import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Flex from '../../components/Flex'
import Container from '../../components/Container'
import Link from 'next/link'
import Card from '../../components/Card'


let page = 1;

export async function getStaticProps(){
  
  const res = await fetch(`https://antuncrnja.com/blearn/wp-json/wp/v2/posts?per_page=2&page=${page}&_embed`);
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}

const Posts = ({ posts }) => (
 
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
		  <Flex>

       {posts.map(post => {
         console.log(post);

         return (
            
            <Card>    
              <Link href={ `/posts/${ post.id }` }>
                <a key= { post.id } href={ `/posts/${ post.id }` }>
                      <h3 >{ post.title.rendered }</h3>
                        <small>{ post.date.replace('T', ' ') }</small>

                        { post._embedded['wp:featuredmedia'][0].media_details.sizes.large  
                        ? <img src={ post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url }/>
                        : <img src={ 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png' }/>
                        }
                </a>
              </Link>
            </Card>
           )
         })}
      </Flex>
      <a onClick={ () =>  router.push()}>Next page</a>
     
      </Container>

    </div>
  )


export default Posts
