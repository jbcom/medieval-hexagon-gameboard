import { defineConfig, mkdocs } from 'sourcey';

export default defineConfig({
  name: 'declarative-hex-worlds',
  siteUrl: 'https://jonbogaty.com',
  baseUrl: '/declarative-hex-worlds',
  prettyUrls: 'slash',
  repo: 'https://github.com/jbcom/declarative-hex-worlds',
  editBranch: 'main',
  // Sourcey appends the configured content-relative path (`content/site/...`).
  // Keep the repository prefix at `docs` so edit links target real sources.
  editBasePath: 'docs',
  logo: { light: './content/site/assets/logo.svg', dark: './content/site/assets/logo.svg' },
  favicon: './content/site/assets/favicon.svg',
  // A static vector avoids generating a large per-page OG bitmap for the
  // 1,300-page TypeDoc reference while preserving an intentional social card.
  ogImage: './content/site/assets/logo.svg',
  theme: {
    preset: 'default',
    colors: { primary: '#8b5e34', light: '#b98247', dark: '#5d3a1e' },
    fonts: { sans: 'Atkinson Hyperlegible, system-ui, sans-serif', mono: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
    layout: { sidebar: '17rem', content: '54rem', toc: '15rem' },
    css: ['./brand.css'],
  },
  navigation: {
    tabs: [
      { tab: 'Documentation', slug: '', source: mkdocs('./content/site/mkdocs.yml') },
      { tab: 'API Reference', slug: 'reference', source: mkdocs('./api-reference.mkdocs.yml') },
    ],
  },
  navbar: {
    links: [
      { type: 'github', href: 'https://github.com/jbcom/declarative-hex-worlds', label: 'GitHub' },
      { type: 'npm', href: 'https://www.npmjs.com/package/declarative-hex-worlds', label: 'npm' },
    ],
    primary: { type: 'button', label: 'Get started', href: '/declarative-hex-worlds/guides/getting-started/' },
  },
  footer: {
    links: [
      { type: 'link', href: 'https://github.com/jbcom/declarative-hex-worlds/blob/main/LICENSE', label: 'MIT License' },
      { type: 'link', href: 'https://kaylousberg.com/', label: 'KayKit assets' },
    ],
  },
  search: { featured: ['home', 'guides/getting-started', 'guides/cli-reference', 'features/index'] },
});
