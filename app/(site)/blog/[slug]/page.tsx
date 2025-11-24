import { getBlogPosts, getBlogPost, BlogPost } from "@/lib/contentful";
import { notFound } from "next/navigation";
import RichTextRender from "@/app/components/reusable/RichTextRender";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.fields.slug }));
}

// Define a type for params
type BlogPageParams = { slug: string };

// Metadata using only titleTag
export async function generateMetadata({ params }: { params: BlogPageParams }): Promise<Metadata> {
  const post: BlogPost | undefined = await getBlogPost(params.slug);

  if (!post || !post.fields.titleTag) {
    return { title: "Webentryx Blog | Insights on Digital Marketing & Analytics" };
  }

  return { title: post.fields.titleTag };
}

// Page component
export default async function BlogPostPage({ params }: { params: BlogPageParams }) {
  const post: BlogPost | undefined = await getBlogPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="py-16 md:py-20 lg:py-24">
      {post.fields.image && (
        <Image
          src={`https:${post.fields.image.fields.file.url}`}
          alt={post.fields.title}
          width={1920}
          height={1080}
          className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
        />
      )}

      <article className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 1440xl:px-30 2xl:px-0 gap-12 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <RichTextRender content={post.fields.content} />
        </div>
      </article>
    </div>
  );
}
