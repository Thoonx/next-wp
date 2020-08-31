import Link from 'next/link'

const Nav = () => (
    <ul>
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li><Link href="/Home"><a href="/home">WP Home Page</a></Link></li>
        <li><Link href="/posts"><a href="/posts">Posts</a></Link></li>

        <style jsx>{`
        ul{
            background: #381798;
            color: white;
            display: inline-block;
            margin: 0;
            padding: 8px 20px;
            border-radius: 50px;
            position: fixed;
            top: 20px;
            left: 20px;
            box-shadow: 9px 15px 23px #38179852;
        }    

        ul li{
            padding: 15px 10px;
            list-style: none;
            display: inline-block;
        }
        ul li:nth-child(even){
            border-left: 1px solid #2b2b2b;
            border-right: 1px solid #2b2b2b;
        }
        `}</style>
    </ul>
)

export default Nav 