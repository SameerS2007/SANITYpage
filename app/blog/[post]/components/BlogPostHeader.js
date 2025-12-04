import DatePill from "../../components/DatePill";

export default function BlogPostHeader({ post }) {
  if (!post) {
    return null;
  }

  return (
    <header className="text-center space-y-6">
      {post.date && (
        <div className="flex justify-center">
          <DatePill date={post.date} />
        </div>
      )}
      <div className="space-y-4">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient leading-tight">
          {post.title || 'Untitled'}
        </h1>
        {post.description && (
          <p className="font-medium text-secondary-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {post.description}
          </p>
        )}
      </div>
      <div className="pt-4">
        <div className="inline-block h-1 w-32 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"></div>
      </div>
    </header>
  );
}