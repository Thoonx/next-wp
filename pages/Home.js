import Head from 'next/head'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Card from '../components/Card'
import Link from 'next/link'



export async function getStaticProps(){
  const frontRes = await fetch('https://antuncrnja.com/blearn/wp-json/wp/v2/pages?search=naslovna');
  const front = await frontRes.json();

  const res = await fetch('https://antuncrnja.com/blearn/wp-json/wp/v2/posts?per_page=2&page=1&_embed');
  const posts = await res.json();

  //custom blog // plugin: Custom Post type UI - show in REST API & create custom REST API base slug
  const blogRes = await fetch('https://antuncrnja.com/blearn/wp-json/wp/v2/custom-blog?per_page=3');
  const blog = await blogRes.json();

  return {
    props: {
      front,
      posts,
      blog
    }
  }
}

const WpHome = ({ front, posts, blog }) => (
  
    <div>
  {console.log(front)}    
      <Head>
        <title>Next WP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container key={front.id}>
        
        <h1 style={{ color: front[0].acf.color}}>{ front[0].acf.proba}</h1>
		   <img src={front[0].acf.slika1}/>
       
       
      </Container>

      <Container>
        <h1>Posts</h1>
        <Flex>
          
          {posts.map(post => {
            //console.log(post);
              return (
                
                <Card key={ post.id }>    
                  <Link href={ `/posts/${ post.id }` }>
                    <a  href={ `/posts/${ post.id }` }>
                          <h3 >{ post.title.rendered }</h3>

                            <small>{ post.date.replace('T', ' ') }</small>

                              <p style={{color: post.acf.css}}>acf color = { post.acf.css }</p>

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

        <div>
        <h1>Blog posts</h1>


        <Flex>
          {blog.map(x => {
            console.log('custom blog post: ', x)
              return (
                
                <Card key={ x.id }>
                  <Link href={ `/blog/${ x.id }` }>
                    <a  href={ `/blog/${ x.id }` }>

                
                
                  <h3>{x.title.rendered}</h3>

                

                 
                
                  </a>
          </Link>
                </Card>
         
              
              )
            })}
        </Flex>
        </div>
      </Container>

    </div>
  )

  export default WpHome
