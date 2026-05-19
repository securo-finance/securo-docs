import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18n } from '@/lib/i18n';

export default async function LangLayout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  return <RootProvider i18n={i18n.provider(lang)}>{children}</RootProvider>;
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
