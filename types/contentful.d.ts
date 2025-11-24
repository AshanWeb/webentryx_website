// Import Contentful's rich text types
import { Document } from '@contentful/rich-text-types';

declare namespace Contentful {
  /**
   * System metadata properties
   */
  interface Sys {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  }

  /**
   * File details for assets
   */
  interface FileDetails {
    size: number;
    image?: {
      width: number;
      height: number;
    };
  }

  /**
   * File structure
   */
  interface File {
    url: string;
    details: FileDetails;
    fileName: string;
    contentType: string;
  }

  /**
   * Asset (image) structure
   */
  interface Asset {
    sys: Sys;
    fields: {
      title: string;
      description: string;
      file: File;
    };
  }

  /**
   * Blog post fields structure
   */
  interface BlogPostFields {
    title: string;
    slug: string;
    description: string;
    image?: Asset;
    author: string;
    date: string;
    comments: string;
    content: Document; // Use Contentful's Document type
    titleTag: string;
  }

  /**
   * Full blog post entry
   */
  interface BlogPost {
    sys: Sys;
    fields: BlogPostFields;
  }
}

