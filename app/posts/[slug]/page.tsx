import Link from 'next/link';
import { getPostById } from '@/lib/posts-data';
import type { BlogPost } from '@/lib/posts-data';

export default function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostById(params.slug);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">404 - 博文未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，您要查找的博文不存在。</p>
          <Link
            href="/posts"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回博文列表
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/posts" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
        ← 返回列表
      </Link>

      <article>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{post.category}</span>
          <span>{new Date(post.date).toLocaleDateString('zh-CN')}</span>
          <span>✍️ {post.author}</span>
          <span>⏱️ {post.readTime} 分钟阅读</span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-xl text-gray-600 mb-10">{post.description}</p>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
          {post.content ? (
            post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <div className="bg-gray-50 p-6 rounded text-gray-600 italic">
              📝 博文内容暂未编写。请在 lib/posts-data.ts 中为此博文添加 content 字段。
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
