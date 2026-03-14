// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'Securo',
			defaultLocale: 'root',

			locales: {
				root: { label: 'English', lang: 'en' },
				pt: { label: 'Português (Brasil)', lang: 'pt-BR' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/securo-finance/securo' },
			],
			logo: {
				src: './src/assets/logo.svg',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Quick Start', slug: 'guides/quick-start' },
						{ label: 'Bank Sync', slug: 'guides/bank-sync' },
					],
				},
				{
					label: 'Development',
					items: [{ label: 'Development Guide', slug: 'guides/development' }],
				},
				{
					label: 'Reference',
					items: [{ label: 'Tech Stack', slug: 'reference/tech-stack' }],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
