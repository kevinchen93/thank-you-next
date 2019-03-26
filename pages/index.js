import Layout from '../components/Layout.js'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'thank-you-next', title: ' thank you, next.js' },
    { id: 'learn-next', title: 'learn next.js' },
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
    li {
      list-style: none;
      margin: 5px 0;
    }
    
    a {
      text-decoration: none;
      color: blue;
    }
    
    a:hover {
      opacity: 0.6;
    }
  `}</style>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Awesome Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }
        
        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  )
}