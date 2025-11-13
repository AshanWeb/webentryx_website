"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Document } from "@contentful/rich-text-types";
import Image from "next/image";

type Props = { content: Document };

export default function RichTextRenderer({ content }: Props) {
  return (
    <div className="prose prose-lg max-w-none text-[#4f4f4f] text-[12px] md:text-[18px]">
      {documentToReactComponents(content, {
        renderMark: {
          [MARKS.BOLD]: (text) => <strong>{text}</strong>,
          [MARKS.ITALIC]: (text) => <em>{text}</em>,
          [MARKS.CODE]: (text) => (
            <code className="bg-gray-100 px-1 rounded">{text}</code>
          ),
        },
        renderNode: {
          [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className="text-2xl font-normal text-[#410083] my-6">
              {children}
            </h2>
          ),
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="leading-7 my-4">{children}</p>
          ),
          [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="list-disc ps-6">{children}</ul>
          ),
          [BLOCKS.OL_LIST]: (node, children) => (
            <ol className="list-decimal ps-6">{children}</ol>
          ),
          [INLINES.HYPERLINK]: (node, children) => (
            <a
              href={node.data.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              {children}
            </a>
          ),
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const file = node.data.target.fields.file;
            if (!file) return null;
            const url = file.url.startsWith("//")
              ? `https:${file.url}`
              : file.url;

            return (
              <Image
                src={url}
                alt={node.data.target.fields.title || "Contentful asset"}
                width={file.details.image?.width || 800}
                height={file.details.image?.height || 600}
                className="rounded-xl my-6"
              />
            );
          },
        },
      })}
    </div>
  );
}
