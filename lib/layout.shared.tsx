import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

const DOCS_TEXT: Record<string, string> = {
  en: 'Documentation',
  'pt-BR': 'Documentação',
};

export function baseOptions(locale: string = i18n.defaultLanguage): BaseLayoutProps {
  const localePrefix = locale === i18n.defaultLanguage ? '' : `/${locale}`;
  return {
    i18n: true,
    nav: {
      title: (
        <>
          <img
            src="/logo.svg"
            alt="Securo"
            width={24}
            height={24}
            className="dark:invert"
          />
          <span className="font-semibold">Securo</span>
        </>
      ),
    },
    links: [
      {
        text: DOCS_TEXT[locale] ?? DOCS_TEXT.en,
        url: `${localePrefix}/docs`,
        active: 'nested-url',
      },
    ],
    githubUrl: 'https://github.com/securo-finance/securo',
  };
}
