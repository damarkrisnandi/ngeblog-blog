import Link from "next/link";

function PostCard({ title, date, description, slug }) {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-xl mt-2 mb-1">{title}</h2>
      <time className="text-gray-400 text-sm">{date}</time>
      <p className="mt-2 italic text-xs">{description}</p>

      <Link href="/post/[slug]" as={`/post/${slug}`}>
        <button className="text-blue-600 mt-2 mb-2 py-2 px-4 block border-2 border-blue-600 rounded-lg text-xs
            transition-all duration-300 delay-100 ease-in-out
            hover:bg-blue-600 hover:text-white
        ">Read this</button>
      </Link>
    </div>
  );
}

export default PostCard;