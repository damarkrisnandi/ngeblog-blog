import { MDXRemote } from "next-mdx-remote";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import OtherPostCard from "../components/OtherPostCard";
import PostsDirection from "../components/PostsDirection";

function Post({ data, content, posts }) {
  return (
    <div>
      <h1 className="font-bold text-2xl md:text-7xl mt-24 mb-12">{data.title}</h1>
      <time className="text-gray-500 italic">{data.date}</time>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="prose mt-12 md:mr-72 basis-3/4">
          <MDXRemote {...content} />
        </div>
        <div className="basis-1/4 mt-20 md:mt-0">
          <h1 className="text-md md:text-xl font-semibold">Postingan lainnya...</h1>
          {posts.slice(0,2).map((post) => (
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