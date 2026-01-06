import { getBlogPosts } from "@/lib/contentful";
import BlogGridWithSearch from "@/app/components/blog/BlogGridWithSearch";
import BlogHero from "@/app/components/reusable/BlogHero";


export const revalidate = 60;

export const metadata = {
  title: "Webentryx Blog | Insights on Digital Marketing & Analytics",
  description:
    "Read the latest insights, guides, and expert analysis on digital marketing, web optimization and performance strategies from the Webentryx team.",
  alternates: {
    canonical: "https://www.webentryx.com/blog",
  },
};

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
