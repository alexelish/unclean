# Nuxt SEO Comprehensive Guide

**Description:** A consolidated reference guide covering the installation, configuration, usage, and troubleshooting of Nuxt SEO and its related modules. Based on Nuxt SEO documentation files.

---

## Table of Contents

1.  [What Is Nuxt SEO?](#what-is-nuxt-seo)
    *   [Background](#background)
    *   [Nuxt SEO Modules](#nuxt-seo-modules)
    *   [Nuxt SEO Alias Module: @nuxtjs/seo](#nuxt-seo-alias-module-nuxtjsseo)
    *   [Site Config](#site-config)
2.  [Installation](#installation)
    *   [Install Nuxt SEO Alias](#install-nuxt-seo-alias)
    *   [Manual Installation](#manual-installation)
    *   [Next Steps](#next-steps)
3.  [Quick Module Setup Guide](#quick-module-setup-guide)
    *   [Introduction](#introduction-setup)
    *   [Sitemap (`@nuxtjs/sitemap`)](#sitemap-nuxtjssitemap)
    *   [Robots (`@nuxtjs/robots`)](#robots-nuxtjsrobots)
    *   [OG Image (`nuxt-og-image`)](#og-image-nuxt-og-image)
    *   [Schema.org (`nuxt-schema-org`)](#schemaorg-nuxt-schema-org)
    *   [Link Checker (`nuxt-link-checker`)](#link-checker-nuxt-link-checker)
    *   [SEO Utils (`nuxt-seo-utils`)](#seo-utils-nuxt-seo-utils)
    *   [Shared Configuration (Nuxt Site Config)](#shared-configuration-nuxt-site-config)
4.  [Advanced Configuration & Usage](#advanced-configuration--usage)
    *   [Disabling Modules](#disabling-modules)
    *   [Nuxt Content Integration](#nuxt-content-integration)
5.  [Troubleshooting](#troubleshooting)
    *   [StackBlitz Playgrounds](#stackblitz-playgrounds)
    *   [Troubleshooting FAQ](#troubleshooting-faq)
6.  [Community Videos](#community-videos)

---

## 1. What Is Nuxt SEO?

### Background

Technical SEO is tricky and requires many moving parts that need to work well together. Configuring all of these parts correctly is a challenge. Nuxt SEO aims to simplify this process.

### Nuxt SEO Modules

Nuxt SEO is the collective name of modules focused on improving your technical SEO. These modules include:

*   **@nuxtjs/sitemap:** Generates `sitemap.xml`.
*   **@nuxtjs/robots:** Generates `robots.txt` and meta tags.
*   **nuxt-og-image:** Generates dynamic Open Graph images.
*   **nuxt-schema-org:** Manages Schema.org structured data (JSON-LD).
*   **nuxt-link-checker:** Checks site links during build or via DevTools.
*   **nuxt-seo-utils:** Provides extra SEO utilities like automatic icons, default meta, breadcrumbs, etc.
*   **nuxt-site-config:** (Internal dependency) Centralized configuration for all SEO modules.

### Nuxt SEO Alias Module: @nuxtjs/seo

The `@nuxtjs/seo` module is simply an alias that combines all the other SEO modules into a single installation.

```typescript
// This is essentially what the alias module does:
import { defineNuxtModule, installModule, resolvePath } from '@nuxt/kit'

// List of core SEO modules managed by the alias
const modules = [
  'nuxt-site-config', // Foundational config module
  '@nuxtjs/robots',
  '@nuxtjs/sitemap',
  'nuxt-og-image',
  'nuxt-schema-org',
  'nuxt-seo-utils', // Formerly Nuxt SEO Experiments
  'nuxt-link-checker'
]

export default defineNuxtModule({
  async setup() {
    for (const module of modules) {
      // Installs each module if not already installed
      await installModule(await resolvePath(module), { /* options */ })
    }
  },
})
```

You are free to use this alias (`@nuxtjs/seo`) or install the modules individually based on your site's requirements.

### Site Config

**Module:** `nuxt-site-config`

To ensure all modules work well together, Nuxt SEO includes `nuxt-site-config`. This module is used across all SEO modules to ensure they are configured correctly with shared site information (like URL, name, description, locale).

You do not need to install this module manually; it is installed automatically when you install `@nuxtjs/seo` or any individual SEO module that depends on it.

---

## 2. Installation

### Install Nuxt SEO Alias

The easiest way to get started is by installing the `@nuxtjs/seo` alias module, which bundles all core SEO modules.

**1. Install the dependency:**

```bash
# Using pnpm
pnpm add -D @nuxtjs/seo

# Using yarn
yarn add --dev @nuxtjs/seo

# Using npm
npm install --save-dev @nuxtjs/seo
```

**2. Add it to your `nuxt.config.ts`:**

```typescript [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo'
  ]
})
```

### Manual Installation

If you prefer more control, you can install individual modules separately. Refer to each module's specific documentation for detailed installation instructions. The modules are:

*   `@nuxtjs/sitemap`
*   `@nuxtjs/robots`
*   `nuxt-og-image`
*   `nuxt-schema-org`
*   `nuxt-link-checker`
*   `nuxt-seo-utils`
*   (`nuxt-site-config` - usually installed automatically as a dependency)

### Next Steps

Once installed (either via alias or manually), the modules are generally configured to work out-of-the-box for basic scenarios.

*   See the [Quick Module Setup Guide](#quick-module-setup-guide) section to learn how to configure and use them effectively.
*   Check out the [SEO Go Live Checklist](https://nuxtseo.com/learn/going-live) before deploying.
*   If you encounter issues, refer to the [Troubleshooting](#troubleshooting) section.

---

## 3. Quick Module Setup Guide

### Introduction (Setup)

While most Nuxt SEO modules work with minimal setup, some configuration might be needed depending on your site. This guide provides a quick overview.

See the [Stackblitz Demo](https://stackblitz.com/edit/nuxt-starter-gfrej6?file=nuxt.config.ts) for a working example.

### Sitemap (`@nuxtjs/sitemap`)

*   **What it does:** Generates a `sitemap.xml` file based on your site routes and data sources.
*   **Default behavior:** Automatically generates a sitemap for static or prerendered routes.
*   **Configuration needed:** If you have dynamic routes (e.g., `/products/[id]`), you need to set up a handler for [Dynamic URLs](https://nuxtseo.com/sitemap/guides/dynamic-urls).
*   **I18n:** Automatically generates multi-sitemap structure for `@nuxtjs/i18n` projects. See [I18n Sitemap](https://nuxtseo.com/sitemap/guides/i18n).
*   **Access:** `/sitemap.xml`

### Robots (`@nuxtjs/robots`)

*   **What it does:** Generates `/robots.txt`, adds `<meta name="robots">`, and sets the `X-Robots-Tag` HTTP header.
*   **Default behavior:** Allows all routes for all user-agents in production. Disallows all in non-production environments by default.
*   **Configuration needed:**
    *   Configure the `env` option if you have environments other than `development` and `production`. See [Disabling Indexing](https://nuxtseo.com/robots/guides/disable-indexing).
    *   Add rules to block specific routes or user-agents. See [Disabling Page Indexing](https://nuxtseo.com/robots/guides/disable-page-indexing).
*   **I18n:** Automatically adds locale prefixes to `Disallow` rules. See [I18n Robots](https://nuxtseo.com/robots/guides/i18n).
*   **Access:** `/robots.txt`

### OG Image (`nuxt-og-image`)

*   **What it does:** Generates dynamic Open Graph images for your pages.
*   **Default behavior:** Opt-in. Does nothing by default.
*   **Configuration needed:** Requires setup to define templates or providers. See the [Getting Familiar With Nuxt OG Image](https://nuxtseo.com/og-image/getting-started/getting-familar-with-nuxt-og-image) tutorial.
*   **Note:** If you don't need dynamic OG images, consider [disabling this module](#disabling-modules) to reduce build size, especially for serverless environments aiming for <1MB workers. See [Zero Runtime mode](https://nuxtseo.com/og-image/guides/zero-runtime).

### Schema.org (`nuxt-schema-org`)

*   **What it does:** Automatically generates schema.org JSON-LD structured data.
*   **Default behavior:** Provides [default Schema.org](https://nuxtseo.com/schema-org/guides/default-schema-org) (like `WebSite`, `Organization`/`Person`, `WebPage`).
*   **Configuration needed:**
    *   Recommended: [Setup Your Identity](https://nuxtseo.com/schema-org/guides/setup-identity) (Organization or Person).
    *   Opt-in to more specific schemas using `useSchemaOrg()` composable. See [Full Documentation](https://nuxtseo.com/schema-org/guides/full-documentation).

### Link Checker (`nuxt-link-checker`)

*   **What it does:** Checks all internal and external links for issues (e.g., broken links) that could affect SEO.
*   **Usage:**
    *   Runs automatically during `nuxi build`.
    *   Can be run manually via the "Link Checker" tab in Nuxt DevTools.

### SEO Utils (`nuxt-seo-utils`)

*   **What it does:** Provides extra SEO features and utilities.
*   **Features:**
    *   Automatic file-based metadata: [App Icons](https://nuxtseo.com/seo-utils/guides/app-icons) (`favicon.ico`, `apple-touch-icon.png`, etc.) and [Open Graph Images](https://nuxtseo.com/seo-utils/guides/open-graph-images) (`og-image.png`).
    *   Configurable SEO metadata via `nuxt.config` or route rules ([`seoMeta`](https://nuxtseo.com/seo-utils/guides/nuxt-config-seo-meta)).
    *   Automatic [default meta tags](https://nuxtseo.com/seo-utils/guides/default-meta).
    *   Automatic [fallback title template](https://nuxtseo.com/seo-utils/guides/fallback-title).
    *   Opt-in [breadcrumbs](https://nuxtseo.com/seo-utils/api/breadcrumbs) composable with Schema.org support.
*   See [SEO Utils Features](https://nuxtseo.com/seo-utils/getting-started/features) for more details.

### Shared Configuration (Nuxt Site Config)

**Module:** `nuxt-site-config`

This module allows configuring all Nuxt SEO modules centrally, at build time and runtime. This is powerful for multi-tenant or i18n apps.

It's recommended to set the following in your `nuxt.config.ts`:

```typescript [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo'
    // ... other modules
  ],
  site: {
    // Required: The canonical URL of your site
    url: 'https://example.com',
    // Required: The name of your site
    name: 'Awesome Site',
    // Required: The description of your site
    description: 'Welcome to my awesome site!',
    // Optional: The default locale of your site (used if @nuxtjs/i18n is not installed)
    defaultLocale: 'en',
    // Optional: Handles trailing slashes in generated URLs
    trailingSlash: false, // or true
    // Optional: Provides site name separation character in titles
    titleSeparator: '|', // Default is '|'
  }
})
```

*   **`url`**: Essential for canonical URLs, sitemaps, OG images, etc. Avoids duplicate content issues.
*   **`name`**: Used in titles, Schema.org, etc.
*   **`description`**: Used in meta tags, Schema.org, etc.
*   **`defaultLocale`**: Used for `lang` attributes and locale-specific URLs (omit if using `@nuxtjs/i18n`).

**I18n:** Site config can be dynamically set based on the current locale, useful for locale-specific `url`, `name`, etc. See [I18n Site Config](https://nuxtseo.com/site-config/guides/i18n).

---

## 4. Advanced Configuration & Usage

### Disabling Modules

If you installed Nuxt SEO via the `@nuxtjs/seo` alias but don't need all the bundled modules, you can disable specific ones in your `nuxt.config.ts`.

Use the module's specific config key and set `enabled: false`:

```typescript [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo'
  ],

  // Example: Disable OG Image and Link Checker
  ogImage: {
    enabled: false
  },
  linkChecker: {
    enabled: false
  },

  // All module config keys for disabling:
  // sitemap: { enabled: false },
  // robots: { enabled: false },
  // seo: { enabled: false }, // This refers to nuxt-seo-utils
  // schemaOrg: { enabled: false },
})
```

**Module Config Keys:**

*   `nuxt-og-image` -> `ogImage`
*   `@nuxtjs/sitemap` -> `sitemap`
*   `@nuxtjs/robots` -> `robots`
*   `nuxt-seo-utils` -> `seo` (or `seoExperiments` in older versions)
*   `nuxt-schema-org` -> `schemaOrg`
*   `nuxt-link-checker` -> `linkChecker`

### Nuxt Content Integration

Most Nuxt SEO modules integrate with Nuxt Content (`@nuxt/content`).

**Nuxt Content v3 Setup:**

1.  **Augment Collection:** Use `asSeoCollection()` from `@nuxtjs/seo/content` in your `content.config.ts`.

    ```typescript [content.config.ts]
    import { defineCollection, defineContentConfig } from '@nuxt/content'
    import { asSeoCollection } from '@nuxtjs/seo/content'

    export default defineContentConfig({
      // Define a collection named 'docs'
      collections: {
        docs: defineCollection(
          // Augment it for SEO features
          asSeoCollection({
            // Collection configuration (e.g., matching markdown files)
            type: 'page', // Example type
            source: 'content/docs/**/*.md',
          }),
        ),
        // Define other collections as needed
      },
    })
    ```

2.  **Render SEO Data:** In your page component (e.g., `[...slug].vue`), ensure you use the data fetched from the collection to apply SEO metadata.

    ```vue [[...slug].vue]
    <script setup lang="ts">
    import { queryCollection, useRoute } from '#imports'

    const route = useRoute()
    // Fetch data from the 'docs' collection based on the route path
    const { data: page } = await useAsyncData(`content-${route.path}`, () => {
      return queryCollection('docs').path(route.path).first()
    })

    // Handle potential errors or missing pages (recommended)
    if (!page.value) {
      // Consider throwing createError or redirecting
    }

    // Apply SEO data from the fetched page document:
    if (page.value) {
      // Nuxt OG Image: Use defineOgImage if ogImage data exists in frontmatter
      if (page.value.ogImage) {
        defineOgImage(page.value.ogImage)
      }
      // Nuxt Schema.org: Use useHead to render schema.org JSON-LD
      // The `head` property is automatically populated by asSeoCollection
      useHead(page.value.head || {})
      // Nuxt Robots & Meta: Use useSeoMeta for title, description, robots, etc.
      // The `seo` property is automatically populated by asSeoCollection
      useSeoMeta(page.value.seo || {})
    }
    </script>

    <template>
      <main v-if="page">
        <h1>{{ page.title }}</h1>
        <ContentRenderer :value="page" />
      </main>
      <div v-else>
        <!-- Handle page not found state -->
        Page not found.
      </div>
    </template>
    ```

3.  **Module Order:** Ensure `@nuxtjs/seo` is loaded *before* `@nuxt/content` in your `nuxt.config.ts`.

    ```typescript [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: [
        '@nuxtjs/seo',    // Must be before @nuxt/content
        '@nuxt/content'
      ]
    })
    ```

**Usage in Markdown Frontmatter:**

You can configure SEO properties directly in your Markdown files' frontmatter:

```markdown
---
title: "My Awesome Document"
description: "A description for SEO and OG tags."
# Nuxt OG Image configuration
ogImage:
  component: MyOgImageTemplate # Use a custom component
  props:
    title: "Custom OG Title"
    description: "Slightly different description for the image."
# Nuxt Sitemap configuration
sitemap:
  lastmod: 2024-01-15
  changefreq: weekly
  priority: 0.8
# Nuxt Robots configuration (overrides global rules for this page)
robots: index, follow
# Nuxt Schema.org: Define specific schemas for this page
schemaOrg:
  - "@type": BlogPosting
    headline: "My Awesome Document"
    author:
      type: Person
      name: "Your Name"
    datePublished: "2024-01-15"
---

# My Awesome Document

Your content goes here...
```

Refer to individual module documentation for all available frontmatter options:
*   Robots: [`robots`](https://nuxtseo.com/robots/guides/content)
*   Sitemap: [`sitemap`](https://nuxtseo.com/sitemap/guides/content)
*   OG Image: [`ogImage`](https://nuxtseo.com/og-image/integrations/content)
*   Schema.org: [`schemaOrg`](https://nuxtseo.com/schema-org/guides/content)

---

## 5. Troubleshooting

### StackBlitz Playgrounds

Use these playgrounds to experiment or create minimal reproductions for issues:

*   **Basic:** [https://stackblitz.com/edit/nuxt-starter-gfrej6?file=nuxt.config.ts](https://stackblitz.com/edit/nuxt-starter-gfrej6?file=nuxt.config.ts)
*   **I18n:** [https://stackblitz.com/edit/nuxt-starter-dh68fjqb?file=nuxt.config.ts](https://stackblitz.com/edit/nuxt-starter-dh68fjqb?file=nuxt.config.ts)
*   **Nuxt Content:** [https://stackblitz.com/edit/nuxt-starter-xlkqkcqr?file=nuxt.config.ts](https://stackblitz.com/edit/nuxt-starter-xlkqkcqr?file=nuxt.config.ts)

Learn more about [Why Reproductions are Required](https://antfu.me/posts/why-reproductions-are-required).

### Troubleshooting FAQ

*   **Q: Can I just use the modules separately?**
    *   A: Yes! Nuxt SEO is designed to be flexible. You can install and use only the modules you need.

*   **Q: Why does my production build size increase significantly?**
    *   A: Nuxt SEO includes server-side features (especially `nuxt-og-image`) that run only on the server. These can add a few megabytes to the `.output/server` directory but don't affect client-side performance as they are often lazy-loaded. If build size is critical (e.g., serverless limits), you can [disable unused modules](#disabling-modules). `nuxt-og-image` contributes the most; consider its [Zero Runtime](/docs/og-image/guides/zero-runtime) mode if needed.

*   **Q: What happened To Nuxt SEO Kit?**
    *   A: Nuxt SEO Kit was the initial version, primarily for SSR-only sites with a more limited feature set. It has been deprecated in favour of the current Nuxt SEO modules. See the [migration guide](https://nuxtseo.com/nuxt-seo/migration-guide/nuxt-seo-kit) for details.

*   **Q: Have a question not answered here?**
    *   A: [Jump in the Nuxt Discord](https://discord.com/invite/5jDAMswWwX) (find the `#seo` channel) and ask directly!

---

## 6. Community Videos

Learn from the Nuxt community about using Nuxt SEO:

*   **Nuxt 3 SEO (intro to Nuxt SEO)** by LearnVue: [YouTube Link](https://www.youtube.com/watch?v=OyVI8zmDqWU)
*   **Easy SEO with Nuxt and Storyblok** by Storyblok: [YouTube Link](https://www.youtube.com/watch?v=CPZTMlarbKg)

---
```