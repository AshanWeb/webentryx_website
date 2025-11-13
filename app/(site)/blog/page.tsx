import { getBlogPosts } from '@/lib/contentful';
import BlogGridWithSearch from '@/app/components/blog/BlogGridWithSearch';
import BlogHero from '@/app/components/reusable/BlogHero';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <BlogHero title="Blog" backgroundImage="/images/blog_header.webp" />
      <div className="container mx-auto py-20 px-4">
        <BlogGridWithSearch posts={posts} />
      </div>
    </>
  );
}
