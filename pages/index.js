import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getPosts from '../helpers/getPosts';

import PostCard from '../components/PostCard';


export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>ngeblog</title>
        <meta name="description" content="Mari ngeblog, blog" />
        <link rel="icon" href="/pixel_me_cropped.png" />
      </Head>

      <div>
      <h1 className="mt-24 mb-12 font-bold text-4xl md:text-7xl">Lastest Post</h1>
      {posts.map((post) => (
        // eslint-disable-next-line react/jsx-no-undef
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          slug={post.slug}
        />
      ))}
    </div>
    </div>
  )
}
