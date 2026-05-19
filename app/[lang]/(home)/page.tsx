import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n';

export default async function HomePage({
  params,
}: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const prefix = lang === i18n.defaultLanguage ? '' : `/${lang}`;
  redirect(`${prefix}/docs`);
}
