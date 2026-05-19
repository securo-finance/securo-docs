import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18n = defineI18nUI(
  {
    defaultLanguage: 'en',
    languages: ['en', 'pt-BR'],
    hideLocale: 'default-locale',
    parser: 'dir',
  },
  {
    translations: {
      en: { displayName: 'English' },
      'pt-BR': { displayName: 'Português (BR)' },
    },
  },
);
