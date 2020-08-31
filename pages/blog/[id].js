import Container from '../../components/Container'
import Head from 'next/head'


export async function getServerSideProps({ query }){

	const { id } = query;
	 //custom blog plugin: Custom Post type UI - show in REST API & create custom REST API base slug
	 const blogRes = await fetch(`https://antuncrnja.com/blearn//wp-json/wp/v2/custom-blog/${id}`);
	 const blog = await blogRes.json();
	
	  return { props: {blog} }
	}


const BlogPage = ({ blog }) => (

		<>
		<Head>
		<title>{blog.title.rendered}</title>
		</Head>

			<Container key={ blog.id }>
				<img style={{width: 500}}  src={ blog.better_featured_image.source_url }/> {/*WP PLUGIN: Better REST API Featured Images*/}
				
				<h2>{blog.title.rendered }</h2>
			
				<h2>acf css: {blog.acf.css }</h2> {/*WP PLUGIN: ACF to REST-API*/}
				<div dangerouslySetInnerHTML={ {__html: blog.content.rendered } } />
			</Container>
		</>
  )

	export default BlogPage



