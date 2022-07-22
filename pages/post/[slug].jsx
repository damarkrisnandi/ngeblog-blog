import Head from 'next/head'
import { MDXRemote } from "next-mdx-remote";
import getPost from "../../helpers/getPost";
import getPosts from "../../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import OtherPostCard from "../../components/OtherPostCard";
import PostsDirection from "../../components/PostsDirection";
import { useRouter } from 'next/router'

function Post({ data, content, posts }) {
  const router = useRouter()
  const { slug } = router.query
  const { title, description, date, tags } = data;
  return (
    <div>
      <Head>
        <title>ngeblog - { title }</title>
        <meta name="description" content={ description } />
        <link rel="icon" href="/pixel_me_cropped.png" />
      </Head>

      <h1 className="font-bold text-4xl md:text-7xl mt-24 mb-12">{ title }</h1>
      <time className="text-gray-500 italic">{ date }</time>
      <div className="text-xs">Tag: <p className='text-semibold'>{tags.join(', ')}</p></div>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="prose mt-12 md:mr-72 basis-3/4">
          <MDXRemote {...content} />
        </div>
        <div className="basis-1/4 mt-20 md:mt-0">
          <h1 className="text-md md:text-xl font-semibold">Postingan lainnya...</h1>
          {posts.filter(post => post.slug !== slug).slice(0,3).map((post) => (
            // eslint-disable-next-line react/jsx-no-undef
            <OtherPostCard
              key={post.slug}
              title={post.data.title}
              date={post.data.date}
              description={post.data.description}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
      <PostsDirection data={data} posts={posts}/>
      
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  const posts = getPosts();
  return {
    props: {
      data: post.data,
      content: mdxSource,
      posts
    },
  };
};