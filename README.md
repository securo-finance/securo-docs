# securo-docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

- **Install dependencies:**

  ```bash
  pnpm i
  ```

- **Run the dev server:**

  ```bash
  pnpm dev
  ```

- **Format:**

  ```bash
  pnpm format
  ```

- **Workflow:**
  - English content (root): add pages under `src/content/docs/` (e.g. `src/content/docs/guides/quick-start.md`).
  - Localization: add translations under `src/content/docs/{{locale}}/` using the same filenames from root.
  - UI translations: edit or add JSON files in `src/content/i18n/` (e.g. `en.json`, `pt-BR.json`).

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
