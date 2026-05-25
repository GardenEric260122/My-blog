import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-10">
        My Blog
      </h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {post.title}
            </h2>

            <p className="text-gray-500 mb-3">
              {post.date}
            </p>

            <p className="text-gray-700">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
} 