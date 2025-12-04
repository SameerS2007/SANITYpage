import Container from "../components/Container";
import { client } from "@/sanity/lib/client";

async function getBlogPosts() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  
  try {
    const query = `*[_type == "blogPost"] | order(date desc) {
      title,
      description,
      date,
      "slug":slug.current,
      image
    }`;

    const posts = await client.fetch(query);
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

import BlogPostCard from "@/app/blog/components/BlogPost";

export const dynamic = 'force-dynamic'

export default async function Blog() {
  const posts = await getBlogPosts();

  if (posts.length === 0 && !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <Container>
        <div className="text-center py-12">
          <p className="text-secondary-300">
            Please configure your Sanity project ID in .env.local to see blog posts.
          </p>
        </div>
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container>
        <div className="py-16 text-center space-y-4">
          <h1 className="text-4xl font-bold text-secondary-50">Blog</h1>
          <p className="text-secondary-300">No blog posts yet. Check back soon.</p>
        </div>
      </Container>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-950 to-secondary-900">
      <Container>
        <div className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block text-5xl mb-4 animate-float">📝</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient">
              Blog
            </h1>
            <p className="text-secondary-300 text-xl max-w-2xl mx-auto">
              Thoughts on development, design, and projects I'm working on
            </p>
            <div className="pt-4">
              <div className="inline-block h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"></div>
            </div>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div 
                  key={post.slug} 
                  className="opacity-0 animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-4">
              <div className="text-6xl">📭</div>
              <p className="text-xl text-secondary-300">No posts yet. More coming soon.</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
