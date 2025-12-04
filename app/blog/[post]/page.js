import { client } from "@/sanity/lib/client";
import BlogPostHeader from "./components/BlogPostHeader";
import Container from "@/app/components/Container";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlFor(value).fit("max").auto("format").url()}
      width={width}
      height={height}
      alt={value.alt || 'Blog post image'}
      loading="lazy"
      className="mx-auto md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}


async function getBlogPost(slug) {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  
  try {
    const query = `*[_type == "blogPost" && slug.current == $slug] {
      title,
      description,
      date,
      "slug":slug.current,
      image,
      content
    }`;

    const posts = await client.fetch(query, { slug });
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return [];
  }
}

export const dynamic = 'force-dynamic'

export default async function Page({ params }) {
  const { post } = await params;
  const posts = await getBlogPost(post);

  if (posts.length === 0) {
    return (
      <Container>
        <div className="text-center py-12">
          <p className="text-secondary-300">
            Blog post not found. {!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 'Please configure your Sanity project ID in .env.local.'}
          </p>
        </div>
      </Container>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-950 to-secondary-900">
      <Container>
        <div className="mx-auto max-w-4xl space-y-12 py-16">
          <div className="animate-fade-in">
            <BlogPostHeader post={posts[0]} />
          </div>
          
          {posts[0].image && (
            <div className="relative overflow-hidden rounded-2xl border-2 border-secondary-700 shadow-xl bg-gradient-to-br from-secondary-800 to-secondary-900">
              <Image
                src={urlFor(posts[0].image).width(1200).height(600).fit("max").auto("format").url()}
                width={1200}
                height={600}
                alt={posts[0].title || 'Blog post image'}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          <div className="flex items-center gap-4 text-secondary-400 text-sm">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary-600 to-transparent"></div>
            <span>Article</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary-600 to-transparent"></div>
          </div>

          <article className="prose prose-lg md:prose-xl prose-invert mx-auto prose-headings:font-bold prose-headings:text-secondary-50 prose-p:text-secondary-200 prose-p:leading-relaxed prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary-100 prose-code:text-primary-300 prose-code:bg-secondary-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary-950 prose-pre:text-secondary-100 prose-pre:border prose-pre:border-secondary-700">
            <PortableText value={posts[0].content} components={portableTextComponents} />
          </article>

          <div className="pt-8 border-t border-secondary-800">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
            >
              <span>←</span>
              <span>back to blog</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}