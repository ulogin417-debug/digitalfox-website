#!/usr/bin/env node
/**
 * Script para importar archivos Markdown desde `src/content/blog/`
 * y generar `src/data/blogPosts.generated.js` con un array exportado.
 * Requiere: `npm install gray-matter` antes de ejecutar.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
const outFile = path.join(process.cwd(), 'src', 'data', 'blogPosts.generated.js');

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const posts = files.map((file, idx) => {
  const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
  const parsed = matter(raw);
  const data = parsed.data || {};
  const body = parsed.content || '';
  return {
    id: data.id || idx + 1,
    slug: data.slug || path.basename(file, '.md'),
    title: data.title || '',
    category: data.category || '',
    description: data.description || '',
    bullets: (body.match(/^✓\s.*$/gm) || []).map(l => l.replace(/^✓\s*/, '').trim()),
    content: body.split(/\n\n/).map(p => p.trim()).filter(Boolean),
    author: data.author || 'DigitalFox',
    date: data.date || new Date().toISOString().slice(0,10),
    locations: data.locations || [],
    metaKeywords: data.keywords || []
  };
});

const out = `export const BLOG_POSTS = ${JSON.stringify(posts, null, 2)};\n`;
fs.writeFileSync(outFile, out, 'utf-8');
console.log('Generado:', outFile);
