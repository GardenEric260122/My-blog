import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

import Waline from "@/components/Waline";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf8");

  const { content } = matter(source);

  const { content: mdx } = await compileMDX({
    source: content,
  });

  return (
    <>
      <article className="prose mx-auto p-8">
        {mdx}
      </article>

      <div className="max-w-3xl mx-auto px-8 pb-12">
        <Waline path={`/blog/${slug}`} />
      </div>
    </>
  );
}