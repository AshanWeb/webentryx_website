import { Document } from '@contentful/rich-text-types';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Type for blog post
export interface BlogPost {
    sys: {
        id: string;
    };
    fields: {
        title: string;
        slug: string;
        description: string;
        image?: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
        author: string;
        date: string;
        comments: string;
        content: Document; 
    };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const res = await client.getEntries({ content_type: 'webentryx' });
    return res.items as unknown as BlogPost[];
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
    const res = await client.getEntries({
        content_type: 'webentryx',
        'fields.slug': slug,
        limit: 1
    });
    return res.items[0] as unknown as BlogPost;
}