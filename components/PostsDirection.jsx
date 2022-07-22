import Link from "next/link";

const PostsDirection = ({ data, posts }) => {
    return (  
        <div className="flex flex-row">
            <PreviousDirection data={data} posts={posts} />
            &nbsp;
            <NextDirection data={data} posts={posts} />
        </div>
    );
}

const NextDirection = ({ data, posts }) => {
    const index = posts.findIndex(d => d.data.title === data.title);
    const nextPost = posts[posts.findIndex(d => d.data.title === data.title) - 1];
    return index > 0 && index <= posts.length - 1 ? (
        <Link href="/post/[slug]" as={`/post/${nextPost.slug}`}>
            <button className='flex flex-col justify-center item-start p-5 border-2 rounded-lg 
                transition-all duration-200 delay-75
                hover:bg-blue-600 hover:text-white
            '>
                <p className="text-xs md:text-md">Post Selanjutnya:</p>  
                <p className="text-sm md:text-lg font-semibold">{nextPost.data.title}</p>
            </button>
        </Link>
    ) : null;
}

const PreviousDirection = ({ data, posts }) => {
    const index = posts.findIndex(d => d.data.title === data.title);
    const previousPost = posts[posts.findIndex(d => d.data.title === data.title) + 1];
    return index >= 0 && index < posts.length - 1 ? (
        <Link href="/post/[slug]" as={`/post/${previousPost.slug}`}>
            <button className='flex flex-col justify-center item-start p-5 border-2 rounded-lg 
                transition-all duration-300 delay-100 ease-in-out
                hover:bg-blue-600 hover:text-white
            '>
                <p className="text-xs md:text-md">Post Sebelumnya:</p>  
                <p className="text-sm md:text-lg font-semibold">{ previousPost.data.title }</p>
            </button>
         </Link>
    ) : null;
}
 
export default PostsDirection;
