import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function BlogPostCard({ post }) {
  if (!post || !post.slug) {
    return null;
  }

  const imageUrl = post.image 
    ? urlFor(post.image).auto("format").size(1920, 1080).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-secondary-800 rounded-2xl border-2 border-secondary-700 overflow-hidden hover:border-primary-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {imageUrl && (
        <div className="relative overflow-hidden bg-gradient-to-br from-secondary-700 to-secondary-800">
          <Image
            src={imageUrl}
            width={1920}
            height={1080}
            alt={post.title || 'Blog post image'}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-6 space-y-4">
        {post.date && <DatePill date={post.date} />}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-secondary-50 group-hover:text-primary-400 transition-colors line-clamp-2">
            {post.title || 'Untitled'}
          </h2>
          {post.description && (
            <p className="line-clamp-3 text-sm text-secondary-300 leading-relaxed">
              {post.description}
            </p>
          )}
        </div>
        <div className="pt-2 flex items-center text-sm font-semibold text-primary-400 group-hover:text-primary-300">
          <span>Read more</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
