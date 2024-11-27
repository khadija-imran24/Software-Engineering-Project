import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function getPostData() {
  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  // Convert Markdown to HTML
  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();

  return { data, contentHtml };
}

