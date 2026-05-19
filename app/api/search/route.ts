import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source, {
  localeMap: {
    en: { language: 'english' },
    'pt-BR': { language: 'portuguese' },
  },
});
