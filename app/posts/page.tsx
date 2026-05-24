'use client';

import Link from 'next/link';
import { getAllPosts } from '@/lib/posts-data';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Posts Center</h1>
        <p className="text-lg text-gray-600">Do Anything Interesting!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group">
              <div className="p-5">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-gray-600">+{post.tags.length - 2}</span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('zh-CN')}</span>
                  <span>⏱️ {post.readTime} 分钟阅读</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}