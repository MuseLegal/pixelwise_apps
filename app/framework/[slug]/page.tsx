import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { DocLayout } from '@/components/doc-layout';
import { getFrameworkChapter, getFrameworkChapters } from '@/lib/content';
import { useMDXComponents } from '@/mdx-components';

export function generateStaticParams() {
  return getFrameworkChapters().map((chapter) => ({ slug: chapter.slug }));
}

export default async function FrameworkChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapters = getFrameworkChapters();
  const chapter = getFrameworkChapter(slug);

  if (!chapter) {
    notFound();
  }

  const { content } = await compileMDX({
    source: chapter.content,
    components: useMDXComponents({}),
  });

  return (
    <DocLayout chapters={chapters} currentSlug={slug}>
codex/convert-static-html-to-next.js-mdx-app-73bfih
      <div className="page active">
        <h1 className="page-title">{chapter.frontmatter.title}</h1>
        <div className="divider" />
        <p className="page-intro">{chapter.frontmatter.description}</p>
        {content}
      </div>

      <header className="doc-header">
        <p className="eyebrow">Chapter</p>
        <h1>{chapter.frontmatter.title}</h1>
        <p>{chapter.frontmatter.description}</p>
      </header>
      {content}
 main
    </DocLayout>
  );
}
