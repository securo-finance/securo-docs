import { source } from '@/lib/source';
import { i18n } from '@/lib/i18n';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';

export default async function Page(
  props: PageProps<'/[lang]/docs/[[...slug]]'>,
) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/[lang]/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const languages: Record<string, string> = {};
  for (const lang of i18n.languages) {
    const translated = source.getPage(params.slug, lang);
    if (translated) languages[lang] = translated.url;
  }
  if (languages[i18n.defaultLanguage]) {
    languages['x-default'] = languages[i18n.defaultLanguage];
  }

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
      languages,
    },
  };
}
