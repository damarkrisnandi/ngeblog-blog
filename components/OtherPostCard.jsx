import Link from "next/link";

function OtherPostCard({ title, description, slug }) {
  return (
    <div className="border-b-2 p-2">
      <h2 className="font-semibold text-md md:text-lg">{title}</h2>
      <p className=" italic text-xs">{description}</p>

      <Link href="/post/[slug]" as={`/post/${slug}`}>
        <a className="text-blue-500 block text-xs">Read this</a>
      </Link>
    </div>
  );
}

export default OtherPostCard;