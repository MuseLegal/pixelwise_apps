import { redirect } from 'next/navigation';
import { getFrameworkChapters } from '@/lib/content';

export default function FrameworkIndexPage() {
  const firstChapter = getFrameworkChapters()[0];

  if (!firstChapter) {
    redirect('/');
  }

  redirect(`/framework/${firstChapter.slug}`);
}
