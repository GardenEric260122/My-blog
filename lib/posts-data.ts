// 博文数据类型定义
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content?: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  readTime: number;
  image?: string;
}

// 模拟数据 - 可扩展，支持从数据库获取
export const blogPosts: BlogPost[] = [
  {
    id: 'hello-world',
    title: 'Hello world',
    description: 'My first blog post',
    content: 'This is the content of my first blog post. Welcome to my blog!',
    category: 'Essay',
    tags: ['Test'],
    date: '2026-05-24',
    author: '逸風Ventus',
    readTime: 1,
  },
];

// 获取所有博文
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 按 ID 获取博文
export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

// 按分类获取博文
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

// 按标签获取博文
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}

// 获取所有分类
export function getAllCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.category));
  return Array.from(categories);
}

// 获取所有标签
export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}
