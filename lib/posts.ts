import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fullPath = path.join(postsDirectory, file);

    const source = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(source);

    return {
      slug,
      title: data.title,
      date: new Date(data.date).toLocaleDateString(),
      description: data.description,
    };
  });
}