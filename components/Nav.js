import Link from 'next/link'

const Nav = () => (
    <ul>
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li><Link href="/Home"><a href="/home">WP Home Page</a></Link></li>
        <li><Link href="/posts"><a href="/posts">Posts</a></Link></li>
    </ul>
)

export default Nav 