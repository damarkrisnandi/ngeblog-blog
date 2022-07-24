import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getPosts from '../helpers/getPosts';

import PostCard from '../components/PostCard';
import Link from 'next/link'
import PagesDirection from '../components/PagesDirection';


export const getStaticProps = ({params}) => {
    const pageSize = 5;
    const posts = getPosts()
    const { page } = params;
    const slicedPosts = posts.slice(pageSize * (parseInt(page) - 1), (pageSize * parseInt(page)));
    return {
        props: {
        posts: slicedPosts,
        page,
        pageSize,
        pages: Math.ceil(posts.length / pageSize) 
        },
    };
};

export const getStaticPaths = async () => {
    const pageSize = 5;
    const posts = await getPosts();
    const allPages = Array.from({length: Math.ceil(posts.length / 3)}, (_, i) => i + 1);
    const paths = allPages.map((page) => ({ params: { page: page.toString() } }));
    return {
      paths,
      fallback: false,
    };
  };

export default function Home({ posts, page, pages, pageSize }) {
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
      <PagesDirection page={page} pages={pages} />
      
    </div>
    </div>
  )
}


  