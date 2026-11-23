import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18n } from '@/lib/i18n';

export default async function LangLayout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  return <RootProvider i18n={i18n.provider(lang)}>{children}</RootProvider>;
}

// Only the configured languages are valid first segments. Anything else
// (e.g. /robots.txt, /favicon.ico) must 404 instead of being treated as a
// language and redirected to /<segment>/docs.
export const dynamicParams = false;

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
