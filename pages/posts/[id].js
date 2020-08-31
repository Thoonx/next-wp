const endpoint = 'https://antuncrnja.com/blearn/wp-json/wp/v2/posts/'
import Container from '../../components/Container'
import Head from 'next/head'

function PostPage({ post }) {


  return (
<>
<Head>
  <title>{post.title.rendered}</title>
</Head>
      <Container key={ post.id }>
		  <img style={{width: 500}}  src={ post.better_featured_image.source_url }/> {/*WP PLUGIN: Better REST API Featured Images*/}
		  {console.log(post)}
		<h2>{post.title.rendered }</h2>
	
		<h2>acf css: {post.acf.css }</h2> {/*WP PLUGIN: ACF to REST-API*/}
		<div dangerouslySetInnerHTML={ {__html: post.content.rendered } } />
      </Container>
</>
  )
}


export async function getServerSideProps({ query }){

	const { id } = query;
	const res = await fetch(`https://antuncrnja.com/blearn/wp-json/wp/v2/posts/${id}`)
	const post = await res.json();
	
	  return { props: {post} }
	}

	export default PostPage



