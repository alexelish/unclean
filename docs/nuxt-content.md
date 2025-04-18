# Nuxt Content v3 - Consolidated Reference Guide

This document combines the official Nuxt Content v3 documentation into a single reference file, designed for easy lookup during development.

**Table of Contents**

1.  [Introduction](#introduction)
    *   [What's New?](#whats-new)
        *   [Content Collections](#content-collections-intro)
        *   [Improved Performance](#improved-performance)
        *   [TypeScript Integration](#typescript-integration-intro)
        *   [Nuxt Studio Integration](#nuxt-studio-integration-intro)
    *   [Content V2 Migration](#content-v2-migration-intro)
2.  [Getting Started](#getting-started)
    *   [Installation](#installation)
    *   [Register the Module](#register-the-module)
    *   [Create your First Collection](#create-your-first-collection)
    *   [Create your First Markdown Page](#create-your-first-markdown-page)
    *   [Display your Page](#display-your-page)
3.  [Configuration](#configuration)
    *   [Module Options (`content`)](#module-options-content)
        *   [`build`](#config-build)
        *   [`database`](#config-database)
        *   [`renderer`](#config-renderer)
        *   [`watch`](#config-watch)
        *   [`preview`](#config-preview)
        *   [`experimental`](#config-experimental)
    *   [Markdown Components (`mdc`)](#config-mdc)
    *   [Content Configuration (`content.config.ts`)](#config-content-config)
4.  [Collections](#collections)
    *   [What are Content Collections?](#what-are-content-collections)
    *   [Defining Collections (`content.config.ts`)](#defining-collections-contentconfigts)
        *   [`defineContentConfig()`](#definecontentconfig)
        *   [`defineCollection()`](#definecollection)
        *   [Collection Schema (Zod)](#collection-schema-zod)
    *   [Collection Types](#collection-types)
        *   [Built-in Fields](#built-in-fields)
        *   [Page Type](#page-type)
        *   [Data Type](#data-type)
        *   [Ordering Files](#ordering-files)
    *   [Collection Sources](#collection-sources)
        *   [`source` Property](#source-property)
        *   [Source Object Properties](#source-object-properties)
        *   [Custom Source (`defineCollectionSource`)](#custom-source-definecollectionsource)
5.  [File Types](#file-types)
    *   [Markdown (`.md`)](#file-type-markdown)
        *   [Usage](#markdown-usage)
        *   [Frontmatter](#markdown-frontmatter)
        *   [MDC Syntax](#markdown-mdc-syntax)
        *   [Vue Components in Markdown](#markdown-vue-components)
        *   [Prose Components](#markdown-prose-components)
        *   [Code Highlighting](#markdown-code-highlighting)
        *   [Images](#markdown-images)
        *   [Excerpt](#markdown-excerpt)
        *   [Binding Data](#markdown-binding-data)
    *   [YAML (`.yml`)](#file-type-yaml)
    *   [JSON (`.json`)](#file-type-json)
    *   [CSV (`.csv`)](#file-type-csv)
6.  [Querying Content (Utils)](#querying-content-utils)
    *   [`queryCollection`](#querycollection)
    *   [`queryCollectionNavigation`](#querycollectionnavigation)
    *   [`queryCollectionItemSurroundings`](#querycollectionitemsurroundings)
    *   [`queryCollectionSearchSections`](#querycollectionsearchsections)
    *   [Server Usage](#querying-server-usage)
7.  [Rendering Content (Components)](#rendering-content-components)
    *   [`<ContentRenderer>`](#contentrenderer)
    *   [`<slot>` (in MDC)](#slot-in-mdc)
    *   [Prose Components](#prose-components)
8.  [Deployment](#deployment)
    *   [Server Hosting (Node.js)](#deployment-server-hosting)
    *   [Serverless Hosting](#deployment-serverless-hosting)
        *   [Platform Guides (NuxtHub, Cloudflare Pages, Vercel, Netlify)](#deployment-serverless-platforms)
        *   [General Serverless Deployment Steps](#deployment-serverless-general)
        *   [Optimize with Pre-rendering](#deployment-serverless-prerendering)
    *   [Static Hosting (SSG)](#deployment-static-hosting)
    *   [Docker](#deployment-docker)
9.  [Advanced Topics](#advanced-topics)
    *   [Full-Text Search](#advanced-full-text-search)
    *   [Raw Content Access](#advanced-raw-content-access)
    *   [SQL Storage (Database Internals)](#advanced-sql-storage)
    *   [Hooks](#advanced-hooks)
    *   [LLMs Integration](#advanced-llms-integration)
10. [Nuxt Studio](#nuxt-studio)
    *   [Setup](#studio-setup)
    *   [GitHub Synchronization](#studio-github-synchronization)
    *   [Content Editors](#studio-content-editors)
    *   [Media Library](#studio-media-library)
    *   [App Config (`app.config.ts` / `nuxt.schema.ts`)](#studio-app-config)
    *   [Local Debugging](#studio-local-debugging)
11. [Migration from v2](#migration-from-v2)
    *   [Changes Summary](#migration-changes-summary)
    *   [Implementing Document Driven Mode in v3](#migration-document-driven)
    *   [Converting `queryContent` to `queryCollection`](#migration-querycontent)
    *   [Converting `findSurround`](#migration-findsurround)
    *   [Consolidating Prose Components](#migration-prose-components)
    *   [`_dir.yml` Renamed](#migration-dir-yml)
    *   [Ignoring Dot Files](#migration-dot-files)
12. [Debugging Tools](#debugging-tools)
    *   [VS Code SQLite Extension](#debugging-vscode-extension)
    *   [Locating the Database](#debugging-locate-db)
    *   [Exploring the Database](#debugging-explore-db)
    *   [Fixing Common Issues](#debugging-common-issues)
    *   [Manually Resetting the Database](#debugging-reset-db)
    *   [Other Tools](#debugging-other-tools)

---

## 1. Introduction

Welcome to Nuxt Content v3, a major upgrade that brings enhanced performance and innovative features to your Nuxt projects. This latest iteration of our Git-based CMS is optimized for modern application development.

### What's New?

#### Content Collections <a name="content-collections-intro"></a>

Collections organize related items within your project, helping you manage large datasets more efficiently. Key benefits include:

-   **Structured Data**: Configure database architecture and define collections in [`content.config.ts`](#defining-collections-contentconfigts)
-   **Type-safe Queries**: Direct TypeScript integration across all utilities
-   **Automatic Validation**: Ensure data consistency across frontmatter fields and data files (json, yml...)
-   **Advanced Query Builder**: Filter, sort, and paginate your collections with ease using [`queryCollection`](#querycollection).
-   **Studio Integration**: Enhanced form generation and optimal editing experience through [Studio](#nuxt-studio).

Learn more about [Content Collections](#collections).

#### Improved Performance

A significant challenge in v2 was the large bundle size needed for storing files, particularly affecting serverless deployments.

V3 addresses this by transitioning to SQL-based storage (SQLite by default) in production. This switch requires zero configuration, supporting development mode, static generation, server hosting, serverless and edge deployments.

::prose-note
The new database system enhances the way your data files are stored and structured, ensuring better performance and scalability. This update is entirely behind the scenes and does not affect the file types you can use in Content (`yml`, `json`, and `markdown`). [Learn more](#advanced-sql-storage).
::

Benefits include:

-   **Optimized Queries**: SQL storage enables ultra-fast data retrieval.
-   **Universal Compatibility**: Our adapter-based system integrates SQL databases across all deployment modes ([server](#deployment-server-hosting), [serverless](#deployment-serverless-hosting) and [static](#deployment-static-hosting)). Community contributions for additional [database adapters](#config-database) are welcome.

#### TypeScript Integration <a name="typescript-integration-intro"></a>

The new collections system provides automatic TypeScript types for all your data based on your collection schemas. Every utility and API is strongly typed, ensuring robust type safety throughout development.

#### Nuxt Studio Integration <a name="nuxt-studio-integration-intro"></a> :badge[Soon]{color="neutral"}

[Nuxt Studio](#nuxt-studio) and v3 are designed to complement each other perfectly. The studio module functionality is now integrated directly into Nuxt Content, creating an ideal environment where developers can focus on code while team members manage content through an intuitive interface.

---

### Content V2 Migration <a name="content-v2-migration-intro"></a>

Learn how to migrate from Content v2 to v3 in the [migration guide](#migration-from-v2).

---

## 2. Getting Started

### Installation

Choose your preferred package manager to install Nuxt Content v3:

::code-group
```bash [pnpm]
pnpm add @nuxt/content
```
```bash [yarn]
yarn add @nuxt/content
```
```bash [npm]
npm install @nuxt/content
```
```bash [bun]
bun add @nuxt/content
```
::

### Register the Module

Add the Nuxt Content module to your `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

### Create your First Collection

Create a `content.config.ts` file in your project root directory:

```ts [content.config.ts]
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Defines a 'content' collection
    content: defineCollection({
      // Collection type: 1-to-1 mapping between files and pages
      type: 'page',
      // Source files: All markdown files in the 'content/' directory
      source: '**/*.md'
    })
  }
})
```

This configuration creates a default `content` collection that processes all Markdown files located in the `content/` folder of your project. You can customize the collection settings based on your needs. [Learn more about collections](#collections).

::tip
The `type: 'page'` means there is a 1-to-1 relationship between content files and pages on your site.
::

::note{to="#collections"}
Learn more in the **Collections guide**.
::

### Create your First Markdown Page

Create a `content/index.md` file in your project root directory:

```md [content/index.md]
# My First Page

Here is some content.
```

Read more about writing [Markdown pages](#file-type-markdown).

### Display your Page

Create a `pages/index.vue` file and display the page content:

```vue [pages/index.vue]
<script setup lang="ts">
// Fetch the content for the '/' path from the 'content' collection
const { data: home } = await useAsyncData('home', () =>
  queryCollection('content').path('/').first()
)

// Set SEO meta tags based on the fetched content
useSeoMeta({
  title: () => home.value?.title,
  description: () => home.value?.description
})
</script>

<template>
  <!-- Render the content if found -->
  <ContentRenderer v-if="home" :value="home" />
  <!-- Display a fallback message if not found -->
  <div v-else>Home page content not found</div>
</template>
```

::note{icon="i-lucide-info"}
If you are installing Nuxt Content in a new Nuxt project and you didn't have a `pages` directory, you also need to update the `app.vue` file to allow rendering the pages by adding the `<NuxtPage />` component. (If you already have some pages in your project, you are good to go.)

```vue [app.vue]
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```
::

::tip{icon="i-lucide-rocket"}
That's it! You've now created your first Nuxt Content page.
::

---

## 3. Configuration

Nuxt Content is configured with sensible defaults. You can customize its behavior using the `content` property in your `nuxt.config.ts`.

### Module Options (`content`) <a name="module-options-content"></a>

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    // Content module options go here
  }
})
```

#### `build` <a name="config-build"></a>

Options related to parsing content at build time.

*   **`markdown`**: Configure the markdown parser.
    *   `toc`: Control Table of Contents generation.
        *   `depth`: Max heading depth (default: 2).
        *   `searchDepth`: Max depth of nested tags to search (default: 2).
        ```ts [nuxt.config.ts]
        export default defineNuxtConfig({
          content: {
            build: {
              markdown: {
                toc: { depth: 3 } // Include h1, h2, h3
              }
            }
          }
        })
        ```
    *   `remarkPlugins`: Object mapping plugin names to options or `false` to disable.
        ```ts [nuxt.config.ts]
        export default defineNuxtConfig({
          content: {
            build: {
              markdown: {
                remarkPlugins: {
                  'remark-emoji': { options: { emoticon: true } }, // Override options
                  'remark-gfm': false, // Disable default plugin
                  'remark-oembed': { /* options */ } // Add new plugin
                }
              }
            }
          }
        })
        ```
    *   `rehypePlugins`: Object mapping plugin names to options or `false` to disable.
        ```ts [nuxt.config.ts]
        export default defineNuxtConfig({
          content: {
            build: {
              markdown: {
                rehypePlugins: {
                  'rehype-figure': { /* options */ }
                }
              }
            }
          }
        })
        ```
    *   `highlight`: Configure Shiki syntax highlighting. Set to `false` to disable.
        *   `theme`: Shiki theme name or object for color modes (`default`, `dark`, `sepia`).
        *   `langs`: Array of languages to load (default includes common web languages). Add languages or load custom grammars.
        ```ts [nuxt.config.ts]
        import { readFileSync } from 'node:fs'

        export default defineNuxtConfig({
          content: {
            build: {
              markdown: {
                highlight: {
                  theme: {
                    default: 'github-light',
                    dark: 'github-dark'
                  },
                  langs: [
                    'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', // Defaults
                    'python', 'rust', // Add more languages
                    JSON.parse(readFileSync('./shiki/languages/gdscript.tmLanguage.json', 'utf-8')) // Custom grammar
                  ]
                }
              }
            }
          }
        })
        ```
    *   `csv`: Configure CSV parser options.
        *   `json`: Convert CSV data to JSON objects (default: `true`).
        *   `delimiter`: Specify custom delimiter (default: `,`).
        ```ts [nuxt.config.ts]
        export default defineNuxtConfig({
          content: {
            build: {
              csv: {
                json: true,
                delimiter: ';'
              }
            }
          }
        })
        ```

*   **`pathMeta`**: Customize how path metadata (slug, title, order) is generated.
    *   `forceLeadingSlash`: Ensure path starts with `/` (default: `true`).
    *   `slugifyOptions`: Options for the `slugify` library.

*   **`transformers`**: Array of paths to custom transformer files. Transformers modify content *after* parsing but *before* database insertion.
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        build: {
          transformers: [
            '~/transformers/title-suffix', // Path to transformer file
          ],
        },
      },
    })
    ```
    ```ts [~/transformers/title-suffix.ts]
    import { defineTransformer } from '@nuxt/content'

    export default defineTransformer({
      name: 'title-suffix', // Optional name
      extensions: ['.md'], // Apply only to markdown files
      transform(file) {
        // Modify the parsed file object
        return {
          ...file,
          title: file.title + ' (suffix)',
        }
      },
    })
    ```

#### `database` <a name="config-database"></a>

Configure the database adapter used for storing content in production.

*   **`type: 'sqlite'`** (Default): Uses local SQLite.
    *   `filename`: Path to the SQLite database file (default: `.data/content/contents.sqlite`). Adapters (`better-sqlite3`, `bun:sqlite`, `node:sqlite`) chosen based on environment.
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        database: {
          type: 'sqlite',
          filename: '/path/to/your/db.sqlite' // Optional: Change location
        }
      }
    })
    ```
*   **`type: 'd1'`**: For Cloudflare Workers/Pages using D1.
    *   `bindingName`: Name of the D1 binding configured in Cloudflare (default: `DB`).
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        database: {
          type: 'd1',
          bindingName: 'MY_CONTENT_DB' // Matches CF binding name
        }
      }
    })
    ```
*   **`type: 'postgres'`**: For PostgreSQL databases. Requires `pg` package (`npm i pg`).
    *   `url`: Connection string (e.g., `process.env.POSTGRES_URL`).
    *   Other options passed directly to the `pg` client.
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        database: {
          type: 'postgres',
          url: process.env.POSTGRES_URL,
          // ssl: { rejectUnauthorized: false } // Example other option
        }
      }
    })
    ```
*   **`type: 'libsql'`**: For LibSQL databases (e.g., Turso). Requires `@libsql/client` package (`npm i @libsql/client`).
    *   `url`: Database URL (e.g., `process.env.TURSO_DATABASE_URL`).
    *   `authToken`: Authentication token (e.g., `process.env.TURSO_AUTH_TOKEN`).
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        database: {
          type: 'libsql',
          url: process.env.TURSO_DATABASE_URL,
          authToken: process.env.TURSO_AUTH_TOKEN,
        }
      }
    })
    ```

#### `renderer` <a name="config-renderer"></a>

Configure the `<ContentRenderer>` component.

*   **`anchorLinks`**: Control automatic anchor link generation for headings.
    *   `false`: Disable.
    *   `true`: Enable for H1-H6.
    *   Object (e.g., `{ h2: true, h3: true, h4: true }`): Enable for specific levels (default).
*   **`alias`**: Map markdown elements to custom Vue components.
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        renderer: {
          alias: {
            p: 'MyCustomParagraphComponent', // Render <p> using MyCustomParagraphComponent
            // a: 'MyLinkComponent'
          }
        }
      }
    })
    ```

#### `watch` <a name="config-watch"></a>

Configure content hot reload in development mode.

*   `enabled`: Enable/disable (default: `true`).
*   `port`: WebSocket server port (default: 4000).
*   `showURL`: Show watcher URL in console (default: `false`).

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    watch: {
      // enabled: false, // To disable
      port: 4001,
      showURL: true
    }
  }
})
```

#### `preview` <a name="config-preview"></a>

Enable integration with external preview services like Nuxt Studio.

*   `dev`: Enable preview features in development (default: `false`, automatically enabled if `api` is set). Used for [local debugging](#studio-local-debugging).
*   `api`: URL of the preview service API (e.g., `https://api.nuxt.studio`). Enables preview mode.
*   `gitInfo`: Override Git repository information if auto-detection fails.
    *   `name`, `owner`, `url`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    preview: {
      // dev: true, // For local tunnel debugging
      api: 'https://api.nuxt.studio', // Enables Studio integration
      // gitInfo: { name: 'repo', owner: 'org', url: 'https://github.com/org/repo' } // Optional override
    }
  }
})
```

#### `experimental` <a name="config-experimental"></a>

Enable experimental features.

*   `nativeSqlite`: Use `node:sqlite` if available (Node.js >= v22.5.0). Default: `false`.
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        experimental: { nativeSqlite: true },
      },
    });
    ```

### Markdown Components (`mdc`) <a name="config-mdc"></a>

Configure the underlying Markdown Components (MDC) rendering. Use the `mdc` property in `nuxt.config`.

::note{to="https://github.com/nuxt-modules/mdc#configurations"}
Refer to the MDC module documentation for available options.
::

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    // Content module options
  },
  mdc: {
    // MDC specific options, e.g., custom components, plugins
    // remarkPlugins: { ... }, // Can also be configured here
    // rehypePlugins: { ... }, // Can also be configured here
  }
})
```

### Content Configuration (`content.config.ts`) <a name="config-content-config"></a>

This file, located in the project root, is used specifically for defining [Content Collections](#collections).

---

## 4. Collections

Collections are the core concept for organizing, structuring, and querying content in Nuxt Content v3. They are defined in `content.config.ts`.

### What are Content Collections?

Collections group related content items (like blog posts, docs pages, product data). They provide:

-   **Logical Grouping**: Organize content effectively.
-   **Shared Configuration**: Apply common settings (source, type, schema).
-   **Improved Querying**: Efficiently fetch and filter related items using [`queryCollection`](#querycollection).
-   **Type Safety**: Automatic TypeScript types based on schemas.
-   **Validation**: Enforce data consistency via schemas.
-   **Flexible Structure**: Organize by type, category, or any logical method.

::warning
If no `content.config.ts` file exists, all files in `content/` are parsed by default. Once `content.config.ts` is added, **only files matching collection source patterns** will be included.
::

### Defining Collections (`content.config.ts`) <a name="defining-collections-contentconfigts"></a>

Create a `content.config.ts` file in your project root.

```ts [content.config.ts]
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// Define a collection for blog posts
const blogCollection = defineCollection({
  // Type determines processing and available fields (page or data)
  type: 'page',
  // Source specifies where to find content files (glob pattern or object)
  source: 'content/blog/**/*.md',
  // Schema defines the expected structure and types using Zod
  schema: z.object({
    title: z.string().optional(), // Auto-filled from h1 or frontmatter
    description: z.string().optional(), // Auto-filled from first p or frontmatter
    date: z.date(), // Custom field - requires Zod validation
    tags: z.array(z.string()).optional(), // Optional array of strings
    draft: z.boolean().default(false) // Optional boolean with default
  })
})

// Define a collection for author data
const authorsCollection = defineCollection({
  type: 'data', // Use 'data' for structured data not directly mapping to pages
  source: 'content/authors/*.yml',
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    github: z.string().url()
  })
})

// Export the main content configuration
export default defineContentConfig({
  // Register collections by key
  collections: {
    blog: blogCollection, // Key 'blog' is used for querying
    authors: authorsCollection // Key 'authors' is used for querying
  }
})
```

::warning
Currently, a document should ideally belong to only one collection. If a file matches multiple collection sources, live reload might not work correctly. Use `exclude` patterns in sources to prevent overlaps if necessary. ([Issue #2966](https://github.com/nuxt/content/issues/2966))
::

#### `defineContentConfig()` <a name="definecontentconfig"></a>

The main export function for `content.config.ts`. Takes an object with a `collections` property.

#### `defineCollection()` <a name="definecollection"></a>

Function to define a single collection. Takes a `Collection` object as input.

```ts
type Collection = {
  // 'page' for content mapping to site pages (gets auto fields like path, title, body)
  // 'data' for structured data (e.g., authors, config)
  type: 'page' | 'data'

  // Specifies where content files are located
  source?: string | CollectionSource // See Collection Sources below

  // Zod schema for validation and TypeScript types
  schema?: ZodObject<T> // See Collection Schema below
}

// Returned type after definition
type DefinedCollection = { /* ... */ }
```

#### Collection Schema (Zod) <a name="collection-schema-zod"></a>

Schemas define the expected structure and data types for content within a collection. They use the [Zod](https://zod.dev) library for validation and provide the basis for TypeScript types.

-   Defined using the `schema` property in `defineCollection`.
-   Uses `z` object exposed by `@nuxt/content` (which is Zod).
-   Fields defined here are validated against frontmatter (Markdown) or the entire file content (YAML/JSON).
-   Provides type safety when querying data.
-   `page` type collections automatically get base fields like `path`, `title`, `description`, `body`, `navigation`, `seo` added to their schema unless explicitly overridden.

```ts [content.config.ts - Schema Example]
import { z } from '@nuxt/content' // Use the re-exported z

const blogSchema = z.object({
  // Standard fields often inferred, but can be defined for stricter types or defaults
  title: z.string().max(100).optional(),
  description: z.string().optional(),

  // Custom fields specific to this collection
  date: z.date(), // Zod automatically tries to parse string dates
  tags: z.array(z.string()).optional(),
  coverImage: z.object({
    src: z.string().editor({ input: 'media' }), // Custom Studio input
    alt: z.string()
  }).optional(),
  author: z.string(), // Reference to an author (e.g., stem of an author file)
  featured: z.boolean().default(false),
  category: z.enum(['Tech', 'Travel', 'Food']).default('Tech'),

  // Example of hiding a field from Studio editor
  internalId: z.string().optional().editor({ hidden: true })
})

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'content/blog/**/*.md',
      schema: blogSchema
    })
  }
})
```

::note
`@nuxt/content` re-exports Zod as `z`. Check [Zod's documentation](https://github.com/colinhacks/zod) for all available schemas and features.
::

::tip
Define as many collections as needed to organize different content types.
::

### Collection Types <a name="collection-types"></a>

Specify the `type` for each collection: `page` or `data`.

#### Built-in Fields <a name="built-in-fields"></a>

All collections automatically include these fields:

-   `id`: Unique identifier for the content item.
-   `stem`: File path relative to the source `cwd`, without the extension (used for sorting, identification).
-   `extension`: File extension (e.g., `.md`, `.yml`).
-   `meta`: An object containing any fields present in the content file but *not* defined in the collection's `schema`.

#### Page Type <a name="page-type"></a>

```ts
defineCollection({
  type: 'page',
  source: 'content/docs/**/*.md'
})
```

Use `page` when there's a 1-to-1 relationship between content files and pages on your website.

*   **Path Generation**: Automatically generates a URL-friendly `path` based on the file's location within the `content/` directory (or source `cwd`). Numeric prefixes used for ordering are removed.
    | File                             | Generated Path        |
    | -------------------------------- | --------------------- |
    | `content/index.md`               | `/`                   |
    | `content/about.md`               | `/about`              |
    | `content/blog/index.md`          | `/blog`               |
    | `content/blog/hello-world.md`    | `/blog/hello-world`   |
    | `content/01.guide/02.install.md` | `/guide/install`      |
    | `content/en/index.md` (with `source: 'en/**'`, `prefix: '/en'`) | `/en` |
    | `content/en/index.md` (with `source: { include: 'en/**', prefix: '/' }`) | `/` |
*   **Schema Overrides**: Automatically includes the following fields in the schema. You can override them by defining them explicitly in your `schema` definition.
    *   `path: z.string()`: Generated route path.
    *   `title: z.string()`: Page title (from H1 or frontmatter).
    *   `description: z.string()`: Page description (from first `<p>` or frontmatter).
    *   `seo: z.object({...}).optional().default({})`: SEO metadata (`title`, `description`, `meta`, `link`, etc.) for `useSeoMeta`.
    *   `body: z.object({...})`: Parsed content AST, includes `toc`.
    *   `navigation: z.union([z.boolean(), z.object({...})]).default(true)`: Configuration for [`queryCollectionNavigation`](#querycollectionnavigation). Can be `false` to exclude, `true` (default), or an object with `title`, `description`, `icon`.
    *   `excerpt: z.object({...})`: Parsed content before `<!--more-->` divider (only if `excerpt` is defined in schema).

#### Data Type <a name="data-type"></a>

```ts
defineCollection({
  type: 'data',
  source: 'content/authors/*.yml'
})
```

Use `data` for structured content that doesn't directly map to a page (e.g., author profiles, site settings, product data).

*   No automatic path generation or page-specific schema fields are added.
*   You have complete control over the schema definition.
*   Useful for querying related data to display on pages.

::note
File extensions don't dictate the collection type. A `page` collection can contain `.md`, `.yml`, or `.json` files, as can a `data` collection. The `type` determines how Nuxt Content processes the file and what automatic fields/behavior are applied.
::

#### Ordering Files <a name="ordering-files"></a>

Control the order of items returned by queries (especially `queryCollectionNavigation` and `.all()`) by using numeric prefixes in file and directory names.

*   Prefix file/directory names with numbers followed by a dot (`.`).
*   Nuxt Content uses **alphabetical sorting** by default on the `stem`. To ensure correct numerical order, **zero-pad** single-digit numbers (e.g., `01.`, `02.`, ... `10.`).
*   The numeric prefix is stripped when generating the `path` for `page` collections.

```text [Directory structure for ordering]
content/
  docs/
    01.getting-started/  <-- Directory prefix
      01.introduction.md <-- File prefix
      02.installation.md
    02.concepts/
      01.collections.md
      02.querying.md
    10.advanced/         <-- Zero-padded
      index.md
```

::warning
Use a dot (`.`) as the separator between the number and the name. Other separators might not work reliably.
::

### Collection Sources <a name="collection-sources"></a>

The `source` property in `defineCollection` specifies where the content files for that collection are located.

#### `source` Property <a name="source-property"></a>

Can be:

1.  **String**: A glob pattern relative to the `content/` directory.
    *   `source: '**/*.md'` (All Markdown files recursively)
    *   `source: 'blog/*.yml'` (YAML files directly in `content/blog/`)
    *   `source: '**/*.{json,yml}'` (JSON or YAML files recursively)
2.  **Object**: A `CollectionSource` object for more detailed configuration.

#### Source Object Properties (`CollectionSource`) <a name="source-object-properties"></a>

```ts
type CollectionSource = {
  // Glob pattern for matching files (Required)
  include: string

  // Glob patterns to exclude matched files (Optional)
  exclude?: string[]

  // Path prefix for generated 'path' in 'page' type collections.
  // Overrides auto-detected prefix from 'include'. Set to '/' to remove prefix.
  // Must start with '/'. (Optional)
  prefix?: string

  // Root directory for glob matching. Defaults to Nuxt project's 'content/' dir.
  // Use path.resolve() for absolute paths outside 'content/'. (Optional)
  cwd?: string

  // --- Remote Git Repository ---
  // URL of a remote Git repository (e.g., 'https://github.com/nuxt/content'). (Optional)
  repository?: string
  // Auth token (e.g., GitHub PAT) for private repositories. Use env variables! (Optional)
  authToken?: string
  // Basic auth { username, password } for private repos (e.g., Bitbucket). Use env vars! (Optional)
  authBasic?: { username: string; password: string }
}
```

**Examples:**

*   Include all files, exclude dotfiles and `.navigation.yml`:
    ```ts
    source: {
      include: '**',
      exclude: ['**/.*', '**/.navigation.yml'] // Exclude hidden files/dirs and nav file
    }
    ```
*   Include all files except hidden files, but *keep* `.navigation.yml`:
    ```ts
    source: {
      include: '**',
      // Exclude files/dirs starting with '.', except '.navigation.yml'
      exclude: ['**/.!(navigation.yml)']
    }
    ```
*   Files from a different directory with a specific path prefix:
    ```ts
    import path from 'node:path'
    source: {
      include: '**/*.md',
      cwd: path.resolve('../other-project/docs'), // Absolute path to external docs
      prefix: '/external-docs' // URLs will be like /external-docs/filename
    }
    ```
*   Files from a private GitHub repository:
    ```ts
    source: {
      repository: 'https://github.com/my-org/private-docs',
      include: 'docs/content/**/*.md', // Pattern within the *remote* repo
      authToken: process.env.GITHUB_PAT // Load token securely
    }
    ```

::warning{icon="i-lucide-shield-alert"}
Never commit authentication tokens (`authToken`, `authBasic`) directly in your code. Use environment variables.
::

#### Custom Source (`defineCollectionSource`) <a name="custom-source-definecollectionsource"></a>

For fetching content from sources other than the filesystem or Git (e.g., APIs, databases).

Use `defineCollectionSource` to create a source driver. It requires implementing `getKeys` (to list all item identifiers) and `getItem` (to fetch a single item by its key).

```ts [content.config.ts - Custom Source Example]
import { defineContentConfig, defineCollectionSource, defineCollection, z } from '@nuxt/content'
import type { ParsedContent } from '@nuxt/content'

// Define the custom source driver
const hackernewsSource = defineCollectionSource({
  // Fetches the list of top story IDs and formats them as keys
  async getKeys() {
    const topStoryIds = await $fetch<number[]>('https://hacker-news.firebaseio.com/v0/topstories.json')
    // Return keys like '12345.json', '67890.json'
    return topStoryIds.slice(0, 50).map(id => `${id}.json`) // Limit for example
  },

  // Fetches the data for a single story based on its key
  async getItem(key: string): Promise<ParsedContent> {
    const id = key.split('.')[0]
    const item = await $fetch<any>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

    // Map the fetched data to a structure Nuxt Content understands
    // Need to match the schema defined in the collection
    return {
      // Required fields by Nuxt Content internal system:
      _id: `hackernews:${id}`, // Unique ID within Nuxt Content
      _path: `/hackernews/${id}`, // Optional: if you want a navigable path
      _stem: `${id}`, // Stem for identification
      _extension: 'json', // File extension hint
      _type: 'json', // Source type hint

      // Fields matching the collection schema:
      title: item.title,
      // HN uses Unix timestamps (seconds), Zod expects Date or parsable string/number (milliseconds)
      date: new Date(item.time * 1000),
      type: item.type,
      score: item.score,
      url: item.url || `https://news.ycombinator.com/item?id=${id}`, // Provide fallback URL
      by: item.by,

      // Include the original body if needed (optional)
      body: item // Or transform as needed
    }
  },

  // Optional: getItemMeta for faster fetching of only metadata (not implemented here)
  // async getItemMeta(key: string) { /* ... */ }
})

// Define the collection using the custom source
const hackernewsCollection = defineCollection({
  type: 'data', // Could be 'page' if you map _path correctly and provide 'body' AST
  source: hackernewsSource, // Use the custom source driver
  schema: z.object({
    // Schema must match the structure returned by getItem
    title: z.string(),
    date: z.date(),
    type: z.string(),
    score: z.number().optional(),
    url: z.string().url().optional(),
    by: z.string(),
  }),
})

// Export the main content configuration
export default defineContentConfig({
  collections: {
    hackernews: hackernewsCollection,
  },
})
```

---

## 5. File Types

Nuxt Content supports Markdown, YAML, JSON, and CSV files out of the box.

### Markdown (`.md`) <a name="file-type-markdown"></a>

The most common format for page content, allowing rich text formatting and embedding Vue components.

#### Usage <a name="markdown-usage"></a>

1.  **Define Collection**: Usually `type: 'page'`.
    ```ts [content.config.ts]
    import { defineCollection, defineContentConfig, z } from '@nuxt/content'

    export default defineContentConfig({
      collections: {
        blog: defineCollection({
          type: 'page',
          source: 'content/blog/*.md',
          schema: z.object({ // Define expected frontmatter fields
            date: z.date(),
            tags: z.array(z.string()).optional()
          })
        })
      }
    })
    ```
2.  **Create Files**: Place `.md` files in the source directory (e.g., `content/blog/`).
    ```md [content/blog/my-first-post.md]
    ---
    title: "My First Blog Post"
    description: "An exciting journey into Nuxt Content."
    date: 2024-01-15
    tags: ["nuxt", "content", "getting started"]
    ---

    # Welcome to Nuxt Content

    This is the main content of the post. You can use **Markdown** formatting.

    <!-- This is a comment -->

    <!--more-->

    This content appears after the excerpt divider.

    ::alert{type="info"}
    You can even use Vue components!
    ::
    ```
3.  **Query**: Use [`queryCollection`](#querycollection).
    ```ts
    const { data: post } = await useAsyncData('post', () =>
      queryCollection('blog').path('/blog/my-first-post').first()
    )

    const { data: posts } = await useAsyncData('posts', () =>
      queryCollection('blog').order('date', 'DESC').all()
    )
    ```
4.  **Display**: Use [`<ContentRenderer>`](#contentrenderer).
    ```vue [pages/blog/[slug].vue]
    <script setup lang="ts">
    const route = useRoute()
    const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug
    const path = `/blog/${slug}`

    const { data: post } = await useAsyncData(`blog-${path}`, () =>
      queryCollection('blog').path(path).first()
    )

    useSeoMeta({
      title: () => post.value?.title,
      description: () => post.value?.description,
    })
    </script>

    <template>
      <article v-if="post">
        <h1>{{ post.title }}</h1>
        <p>Published on: {{ new Date(post.date).toLocaleDateString() }}</p>
        <ContentRenderer :value="post" />
      </article>
      <div v-else>Post not found</div>
    </template>
    ```

#### Frontmatter <a name="markdown-frontmatter"></a>

YAML block at the top of the Markdown file, enclosed by `---`, used for metadata.

*   **Syntax**: `key: value` pairs.
*   **Schema**: Fields must be defined in the collection's `schema` to be queryable and type-safe. Undefined fields are available under the `meta` property.
*   **Native/Inferred Parameters (for `page` type):**
    *   `title` (string): Defaults to first H1. Overrides inferred title.
    *   `description` (string): Defaults to first `<p>`. Overrides inferred description.
    *   `navigation` (boolean | object): Defaults to `true`. Controls inclusion in `queryCollectionNavigation`. Can be `false` or an object `{ title, description, icon }`.
    *   `seo` (object): Merged into the automatically generated `seo` object.

#### MDC Syntax <a name="markdown-mdc-syntax"></a>

Markdown Components (MDC) syntax allows embedding Vue components directly into Markdown.

::callout{icon="i-simple-icons-visualstudiocode" to="https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc"}
Install the **MDC VS Code extension** for syntax highlighting.
::

#### Vue Components in Markdown <a name="markdown-vue-components"></a>

Use Vue components (from `components/content/` or globally registered components) within `.md` files.

::warning
Components used in Markdown *must* be globally available. Components in `components/content/` are automatically global within the scope of MDC rendering. For components outside this directory, ensure they are registered globally in Nuxt (e.g., via `components: { global: true, dirs: ['~/components/shared'] }` in `nuxt.config.ts` or manually). See [Nuxt Component Registration](https://nuxt.com/docs/guide/directory-structure/components).
::

*   **Block Components**: Components that accept markdown content via `<slot>`. Use `::component-name ... ::` syntax.
    ```mdc [content/index.md]
    ::card
    This content goes into the default slot of the Card component.

    #footer
    This content goes into the named 'footer' slot.
    ::
    ```
    ```vue [components/content/Card.vue]
    <template>
      <div class="card">
        <div class="card-body">
          <slot /> <!-- Default slot -->
        </div>
        <div v-if="$slots.footer" class="card-footer">
          <slot name="footer" /> <!-- Named slot -->
        </div>
      </div>
    </template>
    ```
*   **Slots**: Use `#slot-name` for named slots. The content above `#` goes to the default slot. Use `<slot mdc-unwrap="p">` inside the component to remove wrapping `<p>` tags if needed ([See `<slot>` component](#slot-in-mdc)).
*   **Props**: Pass data to components.
    *   **Inline Method**: `{key="value" :boolean-prop="true" :number-prop="123"}`. Use spaces to separate props. Use `:` prefix for non-string values (binds to frontmatter/data) or JSON strings.
        ```mdc
        ::alert{type="warning" icon="i-lucide-alert-triangle" :show-details="true"}
        An important warning.
        ::

        ::chart{:options='{"responsive": true, "type": "bar"}'}
        Chart component needs JSON options.
        ::
        ```
    *   **YAML Method**: Use `---` inside the block component for complex or multi-line props.
        ```mdc
        ::user-profile
        ---
        name: Jane Doe
        userId: 123
        roles:
          - editor
          - admin
        ---
        User bio content goes here (default slot).
        ::
        ```
*   **Attributes**: Apply HTML attributes (style, class, id) to inline elements (`span`, links, images, code, strong, em) using `[Text]{.class-name #id style="color: red;"}` syntax.
    ```mdc
    This is [important]{.text-red-500 style="font-weight: bold;"} text.
    An image: ![Alt text](/image.png){.rounded .shadow}
    A link: [Nuxt Content](https://content.nuxt.com){target="_blank"}
    Inline `code`{.bg-gray-200}.
    **Bold**{.underline} and _Italic_{.opacity-75}.
    ```

#### Prose Components <a name="markdown-prose-components"></a>

Standard HTML tags generated from Markdown (e.g., `p`, `h1`, `a`, `ul`) are rendered using corresponding Vue components (e.g., `<ProseP>`, `<ProseH1>`, `<ProseA>`, `<ProseUl>`). This allows customization by overriding these components in `components/content/`. [See Prose Components List](#prose-components).

#### Code Highlighting <a name="markdown-code-highlighting"></a>

Uses Shiki for syntax highlighting in code blocks (``` `` ```) and inline code (`` ` ``).

*   Configure themes and languages in `nuxt.config.ts` under `content.build.markdown.highlight`. [See Configuration](#config-build).
*   Code block syntax:
    ````md
    ```js [my-file.js]{2,4-5} someMeta=value
    // Code goes here
    // Line 2 will be highlighted
    console.log('Hello');
    // Line 4 will be highlighted
    // Line 5 will be highlighted
    ```
    ````
    *   `[my-file.js]` : Optional filename.
    *   `{2,4-5}` : Optional line highlighting (lines or ranges).
    *   `someMeta=value` : Optional metadata string passed to `<ProsePre>`.

#### Images <a name="markdown-images"></a>

Place images in the `public/` directory and reference them using standard Markdown syntax:

```md
![Alternative text for the image](/images/my-image.png)
```

#### Excerpt <a name="markdown-excerpt"></a>

Create a summary or excerpt by placing `<!--more-->` in your Markdown. The content *before* this marker becomes the excerpt.

*   The excerpt is available as the `excerpt` property on the queried document (as a parsed AST object).
*   Requires `excerpt: z.object({...})` to be defined in the collection `schema`.
*   If no `<!--more-->` marker exists, `excerpt` will be null or undefined.
*   If a `description` is set in frontmatter, it takes precedence over the auto-generated excerpt for the `description` field, but the `excerpt` field will still contain the content before `<!--more-->`.

```md [content/post.md]
---
title: Post with Excerpt
# description: Optional explicit description override
excerpt: z.object({}) # Add this to your schema
---

This is the summary content.
It will be available in the `excerpt` field.

<!--more-->

This is the rest of the content, part of the main `body` but not the `excerpt`.
```

#### Binding Data <a name="markdown-binding-data"></a>

Inject dynamic data into Markdown using `{{ $doc.variableName || 'defaultValue' }}` syntax.

*   Variables (`variableName`) can come from:
    1.  The document's **frontmatter**.
    2.  The `data` prop passed to `<ContentRenderer>`.

*   **Example 1: Using Frontmatter**
    ```mdc [content/greeting.md]
    ---
    user: Jane Doe
    location: "Nuxt City"
    ---

    # Hello {{ $doc.user || 'World' }}!

    Welcome to {{ $doc.location }}.
    The current time is {{ $doc.currentTime || 'not available' }}.
    ```

*   **Example 2: Using `<ContentRenderer>` Data Prop**
    ```vue [pages/greeting.vue]
    <script setup lang="ts">
    const { data: page } = await useAsyncData('greeting', () =>
      queryCollection('content').path('/greeting').first()
    );

    // Data to inject into the markdown
    const injectedData = ref({
      currentTime: new Date().toLocaleTimeString(),
      // user: 'Override Frontmatter User' // This would override frontmatter
    });

    // Update time every second for demonstration
    import { onMounted, onUnmounted } from 'vue'
    let intervalId: NodeJS.Timeout;
    onMounted(() => {
      intervalId = setInterval(() => {
        injectedData.value.currentTime = new Date().toLocaleTimeString();
      }, 1000);
    });
    onUnmounted(() => clearInterval(intervalId));
    </script>

    <template>
      <ContentRenderer v-if="page" :value="page" :data="injectedData" />
      <div v-else>Page not found</div>
    </template>
    ```

### YAML (`.yml`) <a name="file-type-yaml"></a>

Suitable for structured data, configuration, or lists. Often used with `type: 'data'` collections.

1.  **Define Collection**:
    ```ts [content.config.ts]
    import { z } from '@nuxt/content';
    export default defineContentConfig({
      collections: {
        authors: defineCollection({
          type: 'data',
          source: 'content/authors/*.yml',
          schema: z.object({
            name: z.string(),
            avatar: z.string().url().optional(),
            website: z.string().url().optional()
          })
        })
      }
    })
    ```
2.  **Create Files**: (e.g., `content/authors/jane-doe.yml`)
    ```yaml [content/authors/jane-doe.yml]
    name: Jane Doe
    avatar: https://example.com/avatar.png
    website: https://jane.example.com
    ```
3.  **Query**:
    ```ts
    const { data: author } = await useAsyncData('jane', () =>
      queryCollection('authors').where('stem', '=', 'jane-doe').first()
    )
    const { data: allAuthors } = await useAsyncData('authors', () =>
      queryCollection('authors').order('name', 'ASC').all()
    )
    ```

### JSON (`.json`) <a name="file-type-json"></a>

Similar to YAML, used for structured data. Often used with `type: 'data'` collections.

1.  **Define Collection**:
    ```ts [content.config.ts]
    import { z } from '@nuxt/content';
    export default defineContentConfig({
      collections: {
        products: defineCollection({
          type: 'data',
          source: 'content/products/*.json',
          schema: z.object({
            sku: z.string(),
            name: z.string(),
            price: z.number(),
            categories: z.array(z.string())
          })
        })
      }
    })
    ```
2.  **Create Files**: (e.g., `content/products/widget-a.json`)
    ```json [content/products/widget-a.json]
    {
      "sku": "WIDGET-A-001",
      "name": "Awesome Widget A",
      "price": 19.99,
      "categories": ["widgets", "awesome"]
    }
    ```
    ::warning
    Each JSON file in a `data` collection should represent a single object. A top-level array in the JSON file might lead to unexpected query results.
    ::
3.  **Query**:
    ```ts
    const { data: product } = await useAsyncData('widget-a', () =>
      queryCollection('products').where('sku', '=', 'WIDGET-A-001').first()
    )
    const { data: allProducts } = await useAsyncData('products', () =>
      queryCollection('products').order('price', 'DESC').all()
    )
    ```

### CSV (`.csv`) <a name="file-type-csv"></a>

Support for Comma Separated Values files, useful for tabular data.

1.  **Configure (Optional)**: Set options in `nuxt.config.ts`.
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        build: {
          csv: {
            json: true, // Convert rows to JSON objects (default: true)
            delimiter: ',' // CSV delimiter (default: ',')
          }
        }
        // csv: false // To disable CSV parsing entirely
      }
    })
    ```
2.  **Define Collection**: Typically `type: 'data'`. Schema fields should match CSV headers if `json: true`.
    ```ts [content.config.ts]
    import { z } from '@nuxt/content';
    export default defineContentConfig({
      collections: {
        users: defineCollection({
          type: 'data',
          source: 'content/data/users.csv',
          schema: z.object({ // Schema matching CSV headers
            id: z.string(), // CSV values are initially strings
            name: z.string(),
            email: z.string().email()
          }).transform(row => ({ // Optional transform to convert types
            ...row,
            id: parseInt(row.id, 10)
          }))
        })
      }
    })
    ```
3.  **Create Files**: (e.g., `content/data/users.csv`)
    ```csv [content/data/users.csv]
    id,name,email
    1,Alice Wonderland,alice@example.com
    2,Bob The Builder,bob@example.com
    3,Charlie Chaplin,charlie@example.com
    ```
4.  **Query**: If `json: true`, each row becomes an object.
    ```vue
    <script setup>
    // Assuming 'users' collection defined as above
    const { data: users } = await useAsyncData('users-data', () =>
      queryCollection('users').order('name', 'ASC').all()
    )
    </script>

    <template>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </template>
    ```

---

## 6. Querying Content (Utils) <a name="querying-content-utils"></a>

Nuxt Content provides composable functions for querying your defined collections. These work in both Vue components (`.vue`) and server routes/middleware (`server/`).

### `queryCollection` <a name="querycollection"></a>

The primary utility for fetching content items from a collection.

*   **Type Signature**:
    ```ts
    function queryCollection<T extends keyof Collections>(
      collection: T, // Name of the collection defined in content.config.ts
      event?: H3Event // Required for server-side usage
    ): CollectionQueryBuilder<Collections[T]>

    interface CollectionQueryBuilder<T> {
      // Filtering
      path(path: string): CollectionQueryBuilder<T> // Filter by generated path (page type only)
      where(field: keyof T | string, operator: SQLOperator, value?: unknown): CollectionQueryBuilder<T>
      andWhere(groupFactory: QueryGroupFunction<T>): CollectionQueryBuilder<T>
      orWhere(groupFactory: QueryGroupFunction<T>): CollectionQueryBuilder<T>

      // Ordering
      order(field: keyof T, direction: 'ASC' | 'DESC'): CollectionQueryBuilder<T>

      // Selecting Fields
      select(...fields: Array<keyof T>): CollectionQueryBuilder<T>

      // Pagination
      limit(limit: number): CollectionQueryBuilder<T>
      skip(skip: number): CollectionQueryBuilder<T>

      // Fetching Results
      first(): Promise<T | null> // Get the first matching item
      all(): Promise<T[]> // Get all matching items
      count(): Promise<number> // Count matching items
    }

    // SQL Operators: '=', '>', '<', '<>', 'IN', 'NOT IN', 'BETWEEN', 'NOT BETWEEN', 'IS NULL', 'IS NOT NULL', 'LIKE', 'NOT LIKE'
    ```
*   **Usage**:
    *   Start with `queryCollection('collectionName')`.
    *   Chain methods like `.where()`, `.order()`, `.limit()`, `.select()`.
    *   End with `.first()`, `.all()`, or `.count()` to execute the query.
*   **Examples**:
    *   Fetch a single page by path:
        ```ts
        const { data: page } = await useAsyncData('page', () =>
          queryCollection('docs').path('/introduction').first()
        )
        ```
    *   Fetch latest 5 blog posts with specific fields:
        ```ts
        const { data: posts } = await useAsyncData('latest-posts', () =>
          queryCollection('blog')
            .where('draft', '<>', true) // Using '<>' for not equal
            .order('date', 'DESC')
            .limit(5)
            .select('title', 'path', 'date', 'description') // Select only needed fields
            .all()
        )
        ```
    *   Fetch authors matching certain criteria using OR:
        ```ts
        const { data: specificAuthors } = await useAsyncData('authors', () =>
          queryCollection('authors')
            .orWhere(q => q.where('name', 'LIKE', 'Jane%').where('website', 'IS NOT NULL'))
            .all()
        )
        ```
    *   Count published articles:
        ```ts
        const { data: count } = await useAsyncData('published-count', () =>
          queryCollection('articles').where('published', '=', true).count()
        )
        ```

### `queryCollectionNavigation` <a name="querycollectionnavigation"></a>

Generates a hierarchical navigation tree based on the file structure and ordering within a `page` type collection. Useful for sidebars or menus.

*   **Type Signature**:
    ```ts
    function queryCollectionNavigation<T extends keyof PageCollections>(
      collection: T,
      fields?: Array<keyof PageCollections[T]>, // Additional fields to include
      event?: H3Event // Required for server-side usage
    ): ChainablePromise<T, ContentNavigationItem[]> // Returns a chainable query builder

    interface ContentNavigationItem {
      title: string
      path: string
      // children?: ContentNavigationItem[] // Nested items
      // ... other fields from frontmatter/schema + any 'extraFields' requested
      // ... fields from .navigation.yml (title, icon)
    }
    ```
*   **Usage**:
    *   Call `queryCollectionNavigation('collectionName')`.
    *   Optionally chain `.where()`, `.order()` etc. to filter/sort the items *before* the tree is built.
    *   The final result is an array of root-level navigation items, each potentially containing a `children` array.
*   **Navigation Metadata (`.navigation.yml`)**: Create a `.navigation.yml` file inside a directory to add metadata (like `title`, `icon`) to that directory node in the navigation tree.
    ```yaml [content/docs/concepts/.navigation.yml]
    title: Core Concepts # Overrides directory name as title
    icon: i-lucide-box # Adds an icon property
    ```
    ::note
    Ensure your collection `source` includes `**/*.yml` or specifically `.navigation.yml` if you use these files. The default `**/*.md` source will *not* include them. The exclude pattern `**/.*` will exclude these files; use `**/.!(navigation.yml)` to keep them while excluding other dotfiles.
    ::
*   **Examples**:
    *   Basic navigation tree:
        ```vue
        <script setup lang="ts">
        const { data: nav } = useAsyncData('navigation', () =>
          queryCollectionNavigation('docs')
        )
        </script>
        <template>
          <nav v-if="nav">
            <!-- Recursive component to render tree -->
            <NavigationTree :items="nav" />
          </nav>
        </template>
        ```
    *   Filtered navigation including extra fields:
        ```ts
        const { data } = await useAsyncData('nav-filtered', () =>
          queryCollectionNavigation('docs', ['description', 'badge']) // Fetch extra fields
            .where('draft', '=', false) // Exclude drafts
            .order('navOrder', 'ASC') // Assuming a 'navOrder' field exists
        )
        ```

### `queryCollectionItemSurroundings` <a name="querycollectionitemsurroundings"></a>

Finds the previous and next items relative to a given item's path within a `page` type collection. Useful for "Next/Prev" links.

*   **Type Signature**:
    ```ts
    function queryCollectionItemSurroundings<T extends keyof PageCollections>(
      collection: T,
      path: string, // Path of the current item
      opts?: SurroundOptions<keyof PageCollections[T]>,
      event?: H3Event // Required for server-side usage
    ): ChainablePromise<T, Array<ContentNavigationItem | null>> // Returns a chainable query builder

    interface SurroundOptions<K> {
      before?: number // Number of items before (default: 1)
      after?: number // Number of items after (default: 1)
      fields?: K[] // Additional fields to include
    }
    ```
*   **Usage**:
    *   Call `queryCollectionItemSurroundings('collectionName', '/current/item/path')`.
    *   Optionally chain `.where()`, `.order()` etc. to filter the pool of potential surrounding items. The `order` clause determines the sequence for "previous" and "next".
    *   The result is an array, typically `[previousItem, nextItem]` (or `[null, nextItem]`, `[previousItem, null]`, `[null, null]`). If `before` or `after` > 1, the array contains more items.
*   **Example**:
    ```vue [components/PrevNext.vue]
    <script setup lang="ts">
    const props = defineProps<{ currentPath: string }>()

    const { data: surround } = await useAsyncData(`surround-${props.currentPath}`, () =>
      queryCollectionItemSurroundings('docs', props.currentPath, { fields: ['title'] })
        .where('draft', '=', false) // Only consider published items
        // Order must match the main navigation order
        // e.g., .order('orderInSidebar', 'ASC') or rely on default file ordering
    )

    const prev = computed(() => surround.value?.[0])
    const next = computed(() => surround.value?.[1])
    </script>

    <template>
      <div class="prev-next-nav">
        <NuxtLink v-if="prev" :to="prev.path">← {{ prev.title }}</NuxtLink>
        <span v-else>&nbsp;</span>
        <NuxtLink v-if="next" :to="next.path">{{ next.title }} →</NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
    </template>
    ```

### `queryCollectionSearchSections` <a name="querycollectionsearchsections"></a>

Breaks down documents in a `page` type collection into smaller, searchable sections based on headings. Useful for building full-text search indexes.

*   **Type Signature**:
    ```ts
    function queryCollectionSearchSections(
      collection: keyof PageCollections,
      opts?: { ignoredTags?: string[] }, // Tags to ignore (e.g., 'code', 'script')
      event?: H3Event // Required for server-side usage
    ): ChainablePromise<keyof PageCollections, Section[]> // Returns a chainable query builder

    interface Section {
      id: string // Unique ID, often path + heading anchor
      title: string // Heading text of the section
      titles: string[] // Array of parent heading texts (hierarchy)
      content: string // Text content within the section
      level: number // Heading level (1-6)
      // ... includes all fields from the original document (path, etc.)
    }
    ```
*   **Usage**:
    *   Call `queryCollectionSearchSections('collectionName')`.
    *   Optionally chain `.where()` etc. to filter which documents are processed into sections.
    *   Returns a promise resolving to an array of `Section` objects.
*   **Example**: (See also [Full-Text Search](#advanced-full-text-search))
    ```ts
    const { data: sections } = await useAsyncData('search-index', () =>
      queryCollectionSearchSections('docs', { ignoredTags: ['code', 'pre'] })
        .where('published', '=', true) // Only index published docs
    )

    // Now 'sections' can be used with a search library like Fuse.js or MiniSearch
    // Example with MiniSearch:
    // import MiniSearch from 'minisearch'
    // const miniSearch = new MiniSearch({ fields: ['title', 'titles', 'content'], storeFields: ['title', 'id'] })
    // miniSearch.addAll(sections.value)
    // const results = miniSearch.search('search query')
    ```

### Server Usage <a name="querying-server-usage"></a>

All query utils (`queryCollection`, `queryCollectionNavigation`, etc.) can be used in Nitro server routes (`server/api/`, `server/routes/`, `server/middleware/`).

**The key difference is you MUST pass the `event` object as the first argument.**

```ts [server/api/posts/[slug].ts]
export default eventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }

  const path = `/posts/${slug}` // Construct path based on your structure

  // Pass 'event' as the first argument
  const post = await queryCollection(event, 'blog')
                        .path(path)
                        .where('draft', '<>', true)
                        .first()

  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return post
})
```

:::note
For proper type checking in server files, ensure you have a `server/tsconfig.json` file extending the main one:
```json [server/tsconfig.json]
{
  "extends": "../.nuxt/tsconfig.server.json"
}
```
:::

---

## 7. Rendering Content (Components) <a name="rendering-content-components"></a>

Components used to display parsed content, primarily for Markdown.

### `<ContentRenderer>` <a name="contentrenderer"></a>

The primary component for rendering parsed content documents (especially Markdown). It takes the result from `queryCollection().first()` or an item from `.all()` and renders it as HTML, using Prose components or custom components defined in Markdown.

*   **Works primarily with `Markdown` files parsed into an AST.**
*   **Props**:
    *   `value` (object, required): The parsed content object (e.g., from `queryCollection().first()`).
    *   `tag` (string, default: `'div'`): The root HTML tag if the content itself doesn't have a single root node (rare).
    *   `excerpt` (boolean, default: `false`): Render only the content defined as the [excerpt](#markdown-excerpt).
    *   `components` (object, default: `{}`): Map of custom components to dynamically pass to the renderer (advanced use).
    *   `data` (object, default: `{}`): Object of variables to inject into the Markdown for [data binding](#markdown-binding-data) (`{{ $doc.variable }}`).
    *   `prose` (boolean, default: `undefined`): Explicitly enable/disable rendering using [Prose components](#prose-components) vs. plain HTML tags. By default, it uses Prose components. Setting to `false` renders raw HTML tags.
    *   `class` (string | object): CSS class(es) to apply to the root element.
    *   `unwrap` (boolean | string, default: `false`): If the content has a single root element, specify tags (space-separated, e.g., `'p div'`) to unwrap/remove. `true` unwraps the first element.
*   **Example Usage**:
    ```vue [pages/[...slug].vue]
    <script lang="ts" setup>
    const route = useRoute()
    const path = '/' + (Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug || '')

    const { data: page } = await useAsyncData(`content-${path}`, () =>
      queryCollection('docs').path(path).first()
    )

    // Inject reactive data into the markdown
    const reactiveData = reactive({ visitCount: 1 })
    </script>

    <template>
      <main v-if="page">
        <ContentRenderer :value="page" :data="reactiveData" class="prose dark:prose-invert max-w-none" />
      </main>
      <div v-else>
        <!-- Handling Missing Pages -->
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the content for "{{ path }}" could not be found.</p>
        <NuxtLink to="/">Go Home</NuxtLink>
      </div>
      <!-- Handling Empty Pages (page exists but body is empty) -->
      <div v-else-if="page && !page.body?.children?.length">
         <h1>{{ page.title || 'Page Found' }}</h1>
         <p>This page exists but currently has no content.</p>
      </div>
    </template>
    ```

### `<slot>` (in MDC) <a name="slot-in-mdc"></a>

Used inside Vue components (`components/content/*.vue`) to render content passed from Markdown using the `::component ... ::` syntax. This is Vue's native `<slot>` component enhanced with an MDC-specific prop.

*   **Usage**: Place `<slot />` where you want the default content from Markdown to appear. Use `<slot name="slotName" />` for named slots (`#slotName` in Markdown).
*   **`mdc-unwrap` Prop**: (string | boolean) Removes wrapping HTML tags (like `<p>`, `<ul>`, `<li>`) from the rendered slot content. Useful for integrating Markdown content seamlessly.
    *   `mdc-unwrap="p"`: Removes wrapping `<p>` tags.
    *   `mdc-unwrap="ul li"`: Removes wrapping `<ul>` and `<li>` tags.
    *   `mdc-unwrap` (or `mdc-unwrap="true"`): Removes the first wrapping element.
*   **Example**:
    ```vue [components/content/Callout.vue]
    <template>
      <div class="callout">
        <h3 v-if="$slots.title">
          <slot name="title" mdc-unwrap="p" /> <!-- Unwrap title's <p> tag -->
        </h3>
        <div class="callout-content">
          <slot /> <!-- Render default content (likely wrapped in <p>) -->
        </div>
      </div>
    </template>
    ```
    ```mdc [content/page.md]
    ::callout
    #title
    Important Note!

    This is the main callout text, which will be rendered inside the default slot.
    ::
    ```
    Rendered HTML (simplified):
    ```html
    <div class="callout">
      <h3>Important Note!</h3>
      <div class="callout-content">
        <p>This is the main callout text...</p>
      </div>
    </div>
    ```

### Prose Components <a name="prose-components"></a>

Vue components used by `<ContentRenderer>` to render standard HTML elements generated from Markdown syntax. They allow for consistent styling and customization.

*   **Location**: Built-in components live internally but can be overridden.
*   **Overriding**: Create a Vue component with the **exact same name** (e.g., `ProseP.vue`, `ProseA.vue`) inside your project's `components/content/` directory. Your component will be used instead of the default.
*   **Recommendation**: When overriding, check the [original component source](https://github.com/nuxt-modules/mdc/tree/main/src/runtime/components/prose) and accept the same props for compatibility.
*   **List of Common Prose Components**:
    *   `ProseA`: Renders links (`<a>`). Props: `href`, `target`.
    *   `ProseBlockquote`: Renders blockquotes (`<blockquote>`).
    *   `ProseCode`: Renders inline code (`<code>`). Props: `language`, `code`.
    *   `ProsePre`: Renders code blocks (`<pre><code>`). Props: `code`, `language`, `filename`, `highlights` (array), `meta`.
    *   `ProseEm`: Renders emphasis (`<em>`).
    *   `ProseH1` to `ProseH6`: Renders headings (`<h1>` to `<h6>`). Props: `id` (anchor link ID).
    *   `ProseHr`: Renders horizontal rules (`<hr>`).
    *   `ProseImg`: Renders images (`<img>`). Props: `src`, `alt`, `title`, `width`, `height`.
    *   `ProseLi`: Renders list items (`<li>`).
    *   `ProseOl`: Renders ordered lists (`<ol>`).
    *   `ProseUl`: Renders unordered lists (`<ul>`).
    *   `ProseP`: Renders paragraphs (`<p>`).
    *   `ProseStrong`: Renders strong emphasis (`<strong>`).
    *   `ProseTable`, `ProseTbody`, `ProseTd`, `ProseTh`, `ProseThead`, `ProseTr`: Render tables and their parts.

*   **Example Override**:
    ```vue [components/content/ProseA.vue]
    <template>
      <NuxtLink :href="href" :target="target" class="custom-link-style">
        <slot /> <sup v-if="target === '_blank'">↗</sup>
      </NuxtLink>
    </template>

    <script setup>
    defineProps({
      href: { type: String, default: '' },
      target: { type: String, default: undefined, required: false }
    })
    </script>

    <style scoped>
    .custom-link-style {
      /* Your styles */
      text-decoration: underline;
      color: blue;
    }
    .custom-link-style sup {
       font-size: 0.7em;
    }
    </style>
    ```

---

## 8. Deployment <a name="deployment"></a>

Deploying Nuxt Content v3 depends on your target environment (server, serverless, static).

### Server Hosting (Node.js) <a name="deployment-server-hosting"></a>

This is the default Nuxt preset. Suitable for traditional Node.js hosting environments (VPS, Docker, etc.).

*   **Preset**: `node` (default, no need to set explicitly unless overriding).
*   **Database**: Uses SQLite by default (`.data/content/contents.sqlite`). The database file is read/written on the server. Client-side navigation uses a WASM version synced from the server dump.
*   **Build**: `npx nuxi build`
*   **Run**: `node .output/server/index.mjs`
*   **Environment Requirement**: If using the default `better-sqlite3` adapter (common in Node), the deployment OS needs GLibc >= 2.29 (e.g., Debian 11+, Ubuntu 20.04+). Use `ldd --version` to check. Consider using `node:sqlite` via `experimental.nativeSqlite` on Node >= 22.5 or switching database adapters if this is an issue.

### Serverless Hosting <a name="deployment-serverless-hosting"></a>

For platforms like AWS Lambda, Vercel Serverless Functions, Cloudflare Workers, Netlify Functions, NuxtHub.

*   **Challenge**: Serverless functions are often stateless (filesystem is temporary or read-only) and cold starts can impact performance.
*   **Database**: **Cannot** use the default file-based SQLite reliably. You **must** configure an external database adapter:
    *   `d1` (Cloudflare)
    *   `postgres` (Various providers)
    *   `libsql` (Turso)
    *   See [Database Configuration](#config-database).
*   **Build**: Nuxt automatically detects many serverless providers (Vercel, Netlify, Cloudflare Pages/Workers, NuxtHub) when building (`npx nuxi build`). For others, you might need to specify a Nitro preset (e.g., `aws-lambda`).
*   **Client-side**: Still uses WASM SQLite, downloading the dump from the server on first client-side query.
*   **Optimization**: Pre-rendering is crucial for performance.

#### Platform Guides <a name="deployment-serverless-platforms"></a>

*   **NuxtHub**:
    1.  Install `@nuxthub/core`: `npx nuxi module add hub`.
    2.  Module automatically configures D1 database (`DB` binding).
    3.  Deploy: `npx nuxthub deploy`.
    *   [Docs](https://hub.nuxt.com/docs/getting-started/deploy)
*   **Cloudflare Pages**:
    1.  Build Preset: `cloudflare_pages` (set via `nuxi build --preset=cloudflare_pages` or `nitro: { preset: 'cloudflare_pages' }` in `nuxt.config.ts`).
    2.  Database: Configure `d1` adapter in `nuxt.config.ts`. Create a D1 database in Cloudflare and bind it to your Pages project (default binding name `DB`).
    3.  Deploy via Git integration or Wrangler.
    *   [Nuxt CF Deploy Docs](https://nuxt.com/deploy/cloudflare)
*   **Vercel**:
    1.  Zero configuration needed for deployment. Build command: `npx nuxi build`.
    2.  Database: Defaults to SQLite in `/tmp` (temporary). **Recommended**: Configure an external adapter (`postgres`, `libsql`) for persistent data. Vercel integrates well with Neon (Postgres), Turso (LibSQL).
    3.  Deploy via Git integration or `npx vercel deploy`.
    *   [Nuxt Vercel Deploy Docs](https://nuxt.com/deploy/vercel)
*   **Netlify**:
    1.  Zero configuration needed for deployment. Build command: `npx nuxi build`.
    2.  **Important**: Set Node.js version to **20.x or higher** in Netlify Site settings (`Site Configuration` > `Dependency management`). Default Node 18 is too old.
    3.  Database: Defaults to SQLite in a temporary location. **Recommended**: Configure an external adapter (`postgres`, `libsql`).
    4.  Deploy via Git integration.
    *   [Nuxt Netlify Deploy Docs](https://nuxt.com/deploy/netlify)

#### General Serverless Deployment Steps <a name="deployment-serverless-general"></a>

1.  **Choose & Configure Database**: Select `d1`, `postgres`, or `libsql` and configure it in `nuxt.config.ts` (see [Database Config](#config-database) and platform guides).
2.  **Build**: Use `npx nuxi build`. Set the correct Nitro preset if auto-detection doesn't work for your platform.
3.  **Deploy**: Follow your platform's deployment instructions.

#### Optimize with Pre-rendering <a name="deployment-serverless-prerendering"></a>

Reduce cold starts and improve performance by pre-rendering pages.

*   Use `routeRules` in `nuxt.config.ts`:
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      routeRules: {
        '/': { prerender: true }, // Prerender homepage
        '/about': { prerender: true },
        '/blog/**': { isr: 60 * 10 } // Prerender blog posts, revalidate every 10 mins
      }
    })
    ```
*   ::tip{to="https://hub.nuxt.com/docs/recipes/pre-rendering"}
    See **NuxtHub's Pre-rendering guide** for strategies applicable to all serverless platforms.
    ::

### Static Hosting (SSG) <a name="deployment-static-hosting"></a>

Deploy Nuxt Content as a fully static site (e.g., GitHub Pages, Netlify Static, S3).

*   **Build**: `npx nuxi generate`
*   **Output**: Creates a `dist/` (or `.output/public/`) directory with static HTML, CSS, JS.
*   **Database**: The full SQLite database dump is included in the build output. Client-side navigation loads this dump into a WASM SQLite instance in the browser. All content querying happens client-side after the initial page load.
*   **Behavior**: Initial page loads are static HTML. Subsequent navigation fetches data from the client-side WASM database.
*   **Crawling**: Nuxt automatically crawls links to discover pages to pre-render. Configure with `nitro.prerender` options.
*   ::note{to="https://nuxt.com/docs/getting-started/prerendering"}
    Learn more about pre-rendering in Nuxt.
    ::

### Docker <a name="deployment-docker"></a>

Containerize your Nuxt Content app using Docker, typically for the Node.js server preset.

*   **Dockerfile Example (Node.js)**:
    ```docker [Dockerfile]
    # Build Stage
    FROM node:22-alpine AS build
    WORKDIR /app
    RUN corepack enable
    COPY package.json pnpm-lock.yaml .npmrc ./
    RUN pnpm i --frozen-lockfile
    COPY . .
    RUN pnpm run build

    # Production Stage
    FROM node:22-alpine
    WORKDIR /app
    COPY --from=build /app/.output ./
    ENV PORT 80
    ENV HOST 0.0.0.0
    # Ensure SQLite db path is writable if using default /app/.data
    # Consider mounting a volume for .data if needed
    # RUN mkdir -p /app/.data/content && chown node:node /app/.data/content
    USER node # Run as non-root user
    EXPOSE 80
    CMD ["node", "/app/server/index.mjs"]
    ```
*   **Dockerfile Example (Bun)**:
    ```docker [Dockerfile]
    # Build Stage
    FROM oven/bun:1 AS build
    WORKDIR /app
    COPY package.json bun.lockb ./
    # Avoid building native deps like better-sqlite3 if not needed for prod
    RUN bun install --frozen-lockfile --ignore-scripts
    COPY . .
    RUN bun --bun run build

    # Production Stage
    FROM oven/bun:1
    WORKDIR /app
    COPY --from=build /app/.output /app
    # Ensure SQLite db path is writable if using default /app/.data
    ENV PORT 3000
    ENV HOST 0.0.0.0
    EXPOSE 3000
    CMD ["bun", "--bun", "run", "/app/server/index.mjs"]
    ```
*   **Considerations**:
    *   Ensure the directory for the SQLite database (`.data/content/`) is writable by the user running the Node/Bun process inside the container (or use a volume).
    *   Use multi-stage builds for smaller production images.

---

## 9. Advanced Topics <a name="advanced-topics"></a>

### Full-Text Search <a name="advanced-full-text-search"></a>

Implement search functionality using `queryCollectionSearchSections` to break documents into indexable chunks.

1.  **Generate Sections**: Fetch sections using the utility.
    ```ts
    const { data: files } = await useAsyncData('search-index', () =>
      queryCollectionSearchSections('docs') // Fetch sections from 'docs' collection
    )
    ```
2.  **Use a Search Library**: Integrate with client-side search libraries.
    *   **Nuxt UI Pro (`<UContentSearch>`)**: Recommended if using Nuxt UI Pro. Pass `files` and optionally `navigation` data.
        ```vue
        <script setup lang="ts">
        const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
        const { data: files } = await useAsyncData('search', () => queryCollectionSearchSections('docs'))
        </script>
        <template>
          <UContentSearch :files="files" :navigation="navigation" />
        </template>
        ```
    *   **MiniSearch**: Lightweight client-side search.
        ```vue
        <script setup lang="ts">
        import MiniSearch from 'minisearch'
        const { data } = await useAsyncData('search', () => queryCollectionSearchSections('docs'))
        const query = ref('')
        const miniSearch = new MiniSearch({ fields: ['title', 'titles', 'content'], storeFields: ['title', 'id'] })
        miniSearch.addAll(data.value || [])
        const results = computed(() => query.value ? miniSearch.search(query.value) : [])
        </script>
        <template>
          <input v-model="query" placeholder="Search...">
          <ul><li v-for="res in results" :key="res.id"><NuxtLink :to="res.id">{{ res.title }}</NuxtLink></li></ul>
        </template>
        ```
    *   **Fuse.js**: Another popular fuzzy search library.
        ```vue
        <script setup lang="ts">
        import Fuse from 'fuse.js'
        const { data } = await useAsyncData('search', () => queryCollectionSearchSections('docs'))
        const query = ref('')
        const fuse = new Fuse(data.value || [], { keys: ['title', 'content', 'titles'], threshold: 0.4 })
        const results = computed(() => query.value ? fuse.search(query.value).map(r => r.item) : [])
        </script>
        <template>
          <input v-model="query" placeholder="Search...">
          <ul><li v-for="res in results" :key="res.id"><NuxtLink :to="res.id">{{ res.title }}</NuxtLink></li></ul>
        </template>
        ```

### Raw Content Access <a name="advanced-raw-content-access"></a>

Access the original, unparsed content of a file in production.

1.  **Define Schema**: Add a `rawbody: z.string()` field to your collection's schema.
    ```ts [content.config.ts]
    import { z } from '@nuxt/content';
    export default defineContentConfig({
      collections: {
        docs: defineCollection({
          type: 'page',
          source: '**/*.md',
          schema: z.object({
            // other fields...
            rawbody: z.string() // Add this magical field
          })
        })
      }
    })
    ```
2.  **Query**: The `rawbody` field will be automatically populated with the raw file content.
    ```vue
    <script setup lang="ts">
    const { data } = await useAsyncData('page-raw', () =>
      queryCollection('docs').path('/some-page').select('rawbody', 'title').first()
    )
    </script>
    <template>
      <pre v-if="data">{{ data.rawbody }}</pre>
    </template>
    ```
3.  **Opt-out per file**: To prevent shipping the raw content for a specific file, set `rawbody: ''` (empty string) in its frontmatter.
    ```md [content/docs/secret.md]
    ---
    title: Secret Page
    rawbody: '' # Do not include raw content in production build
    ---
    This content is secret.
    ```
    ::warning
    Ensure the frontmatter value matches the schema type (string). Do not use `false` or `null`.
    ::

### SQL Storage (Database Internals) <a name="advanced-sql-storage"></a>

Content v3 uses an SQL-based storage layer (defaulting to SQLite) for improved performance and scalability compared to v2's file-based cache.

*   **Build Time (Database Dump Generation)**:
    1.  Content files are read from configured `source`s.
    2.  Files are parsed into an Abstract Syntax Tree (AST) by relevant transformers (Markdown, YAML, JSON, CSV).
    3.  A database schema is created based on defined `collections`.
    4.  Parsed content (including AST `body` and schema fields) is inserted into corresponding database tables.
    5.  The entire database state is saved as a compressed dump file (e.g., `.data/content/content.sqlite.dump`).
*   **Runtime (Dump Restoration)**:
    1.  On the server's first query (cold start), the module checks if the database needs initialization/update.
    2.  If needed, it reads the dump file and restores it into the target database (SQLite file, D1, Postgres, etc.).
    3.  An integrity check prevents duplicate imports and ensures the database reflects the latest build dump.
*   **Client-Side (WASM SQLite)**:
    1.  On the first client-side query (e.g., after navigation), the browser downloads the database dump from the server.
    2.  A WebAssembly (WASM) version of SQLite initializes a local database in the browser's memory using the dump.
    3.  Subsequent client-side queries run directly against this local WASM database, avoiding server roundtrips for faster navigation.

This architecture optimizes both server performance (fast queries, minimal runtime parsing) and client-side experience (quick navigation after initial load).

### Hooks <a name="advanced-hooks"></a>

Nuxt build-time hooks provided by the Content module to modify content during the build process. Define these in `nuxt.config.ts`.

*   **`content:file:beforeParse`**: Called *before* a file's raw content is parsed.
    *   Use case: Modify the raw string content before transformers run.
    *   Context (`ctx`): `{ file: { id: string, path: string, extension: string, raw: string } }`
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      hooks: {
        'content:file:beforeParse'(fileCtx) {
          if (fileCtx.file.extension === '.md') {
            // Example: Inject a disclaimer at the top of every markdown file
            fileCtx.file.raw = `> **Disclaimer:** Content may be outdated.\n\n${fileCtx.file.raw}`;
          }
        }
      }
    })
    ```
*   **`content:file:afterParse`**: Called *after* a file has been parsed into an object (AST for Markdown, JSON object for YAML/JSON/CSV) but *before* it's saved to the database dump.
    *   Use case: Modify the parsed data structure, add/remove fields before database insertion.
    *   Context (`ctx`): `{ file: ParsedContent }` (Includes `_id`, `body`, schema fields, etc.)
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      hooks: {
        'content:file:afterParse'(parsedFile) {
          if (parsedFile._extension === '.md' && parsedFile.title) {
            // Example: Add a prefix to all markdown titles
            parsedFile.title = `[DOC] ${parsedFile.title}`;
          }
          // Example: Add a lastModified timestamp
          parsedFile.lastModified = new Date().toISOString();
          // Ensure 'lastModified' is in the schema if you want it queryable
        }
      }
    })
    ```

### LLMs Integration <a name="advanced-llms-integration"></a>

Seamlessly prepare your content for use with Large Language Models (LLMs) via the `nuxt-llms` module.

1.  **Install `nuxt-llms`**:
    ```bash
    npm install nuxt-llms
    # or
    yarn add nuxt-llms
    # or
    pnpm add nuxt-llms
    ```
2.  **Configure**: Add `nuxt-llms` to modules and configure it in `nuxt.config.ts`.
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: [
        '@nuxt/content',
        'nuxt-llms' // Add the LLMs module
      ],
      content: {
        // Your content config...
      },
      llms: {
        // Required nuxt-llms config
        domain: 'https://your-website.com', // Your site's canonical domain
        title: 'My Awesome Site',
        description: 'Site description for LLMs',

        // Optional: Define custom sections for LLM context
        sections: [
          {
            title: 'Documentation Pages',
            description: 'Guides and API reference',
            // Specify the Nuxt Content collection to use
            contentCollection: 'docs',
            // Filter content within the collection (uses queryCollection syntax)
            contentFilters: [
              { field: 'draft', operator: '<>', value: true }, // Only published
              { field: 'extension', operator: '=', value: 'md' } // Only markdown
            ]
          },
          {
            title: 'Blog Posts',
            description: 'Articles and news',
            contentCollection: 'blog',
            contentFilters: [
              { field: 'path', operator: 'LIKE', value: '/blog/%' }
            ]
          }
          // If no sections with 'contentCollection' are defined,
          // Nuxt Content automatically adds sections for all 'page' type collections.
        ]
      },
    })
    ```
3.  **Build**: During `nuxi build` or `nuxi generate`, `nuxt-llms` will:
    *   Use the `contentCollection` and `contentFilters` to query Nuxt Content via `queryCollectionSearchSections`.
    *   Generate `llms.txt` and `llms_full.txt` files in your output directory (`.output/public/`), formatted for consumption by LLMs.

::tip
Refer to the [nuxt-llms documentation](https://github.com/nuxtlabs/nuxt-llms) for more details on its configuration and output format.
::

---

## 10. Nuxt Studio <a name="nuxt-studio"></a>

Nuxt Studio ([nuxt.studio](https://nuxt.studio)) is the official Git-based CMS interface for visually editing Nuxt Content websites.

### Setup <a name="studio-setup"></a>

1.  **Authentication**: Log in to [nuxt.studio](https://nuxt.studio) using GitHub or Google. (GitHub login required for importing repositories).
2.  **Connect Repository**:
    *   Import an existing GitHub repository containing your Nuxt Content project.
    *   Requires installing the [Nuxt Studio GitHub App](#studio-github-synchronization) on your account/organization.
3.  **Enable Full Editing Experience (Live Preview, Forms, etc.)**:
    *   **Configure Preview API**: Add the `preview.api` setting in `nuxt.config.ts`.
        ```ts [nuxt.config.ts]
        export default defineNuxtConfig({
          content: {
            preview: {
              api: 'https://api.nuxt.studio'
            }
            // Optionally add preview.dev = true for local debugging
            // Optionally add preview.gitInfo = { ... } if auto-detection fails
          }
        })
        ```
    *   **Deploy**: Deploy your site with this configuration.
    *   **Verify Metadata**: Check that `https://your-deployed-site.com/__preview.json` is accessible and contains correct information (especially `gitInfo`).
    *   **Set URL in Studio**: In your Studio project settings, go to the "Deployment" or "Self-hosted" section and enter your deployed site's URL.
    *   **Troubleshooting `Forbidden error: invalid property check`**:
        *   Ensure `gitInfo` in `__preview.json` is correct. If not, override it in `nuxt.config.ts` using `content.preview.gitInfo`.
        *   Redeploy and try setting the URL again. Contact Studio support if issues persist.

### GitHub Synchronization <a name="studio-github-synchronization"></a>

Studio integrates deeply with GitHub via the Nuxt Studio GitHub App.

*   **Installation**: Install the app during project setup, granting necessary permissions (read/write access to content, workflows, PRs, etc.). Choose which repositories the app can access.
*   **Functionality**: Studio acts on your behalf to:
    *   Read repository content.
    *   Create branches for edits.
    *   Commit changes made in Studio.
    *   Create Pull Requests for review (optional workflow).
    *   Merge changes directly to the main branch.
    *   Manage secrets for deployments (e.g., GitHub Pages).
*   **Uninstall**: Removing the GitHub App installation removes Studio's access and associated data linked to that installation. Deleting the GitHub repo also removes the Studio project.

### Content Editors <a name="studio-content-editors"></a>

Studio provides multiple editors, configurable per-project:

1.  **Notion-like Editor (Markdown)**:
    *   Visual, block-based editor for `.md` files.
    *   **Frontmatter**: Edits frontmatter via an auto-generated [form](#studio-form-editor) based on the collection [schema](#collection-schema-zod).
    *   **Toolbar**: Standard text formatting (bold, italic, headings, lists, links, etc.).
    *   **Medias**: Drag-and-drop uploads, insert from [Media Library](#studio-media-library), set alt text.
    *   **Vue Components**: Insert components from `components/content/` or globally registered components using `/` command. Edit slots and props visually. ([See MDC Syntax](#markdown-mdc-syntax)).
2.  **Form Editor (YAML, JSON, Markdown Frontmatter)** <a name="studio-form-editor"></a>:
    *   Auto-generates forms based on the Zod schema defined in the collection (`content.config.ts`).
    *   Provides appropriate inputs for primitive types (string, number, boolean, date, enum, arrays).
    *   Supports custom inputs via `.editor()` method in Zod schema:
        *   `z.string().editor({ input: 'media' })`: Media picker input.
        *   `z.string().editor({ input: 'icon' })`: Icon picker input.
        *   `z.any().editor({ hidden: true })`: Hide field from the form.
3.  **Code Editor (Any File Type)**:
    *   Raw text editor with syntax highlighting.
    *   For users comfortable with Markdown, YAML, JSON syntax.
    *   Provides precise control over file structure and formatting.

### Media Library <a name="studio-media-library"></a>

*   Accessible via the "Media" tab in Studio.
*   Browses files and folders within your project's `/public` directory.
*   Allows uploading new media, creating folders, and moving files via drag-and-drop.
*   Integrates with the Notion-like editor and `media` input type in the Form editor.

### App Config (`app.config.ts` / `nuxt.schema.ts`) <a name="studio-app-config"></a>

Customize website settings defined in `app.config.ts` directly from Studio.

1.  **Create `app.config.ts`**: Ensure your project has at least an empty `app.config.ts`.
    ```ts [app.config.ts]
    export default defineAppConfig({
      // Your application configurations
      theme: { primaryColor: 'blue' },
      siteName: 'My Awesome Site'
    })
    ```
2.  **Create `nuxt.schema.ts`**: Define the structure and metadata for editing `app.config.ts` in Studio.
    ```ts [nuxt.schema.ts]
    import { field, group } from '@nuxt/content/preview' // Helpers from Content Preview API

    export default defineNuxtSchema({
      // Must match the structure of app.config.ts
      appConfig: {
        // Use group for nested objects
        theme: group({
          title: 'Theme Settings',
          description: 'Customize site appearance',
          icon: 'i-ph-palette-duotone',
          fields: {
            // Use field for individual settings
            primaryColor: field({
              type: 'string', // Input type ('string', 'number', 'boolean', 'icon', 'media', 'array', 'object')
              title: 'Primary Color',
              description: 'Main accent color for UI elements.',
              icon: 'i-ph-paint-brush-duotone',
              // Example: Use 'required' to create a select dropdown for string type
              required: ['blue', 'green', 'red', 'purple', 'orange']
            })
          }
        }),
        siteName: field({
          type: 'string',
          title: 'Site Name',
          description: 'The public name of the website.',
          icon: 'i-ph-identification-card-duotone',
          default: 'Default Site Name' // Optional default value
        })
      }
    })
    ```
3.  **Edit in Studio**: The "Config" (or "Data") tab in Studio will display a form based on `nuxt.schema.ts`, allowing users to modify `app.config.ts` values, which are then committed to the repository.

### Local Debugging <a name="studio-local-debugging"></a>

Test Studio integration (App Config schema, custom Vue component rendering/editing) locally before deploying.

1.  **Import Project**: Ensure your project is already imported into Studio.
2.  **Clone Repo**: Have the repository cloned locally.
3.  **Enable Dev Preview**: Add `dev: true` to the `content.preview` config in `nuxt.config.ts`.
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      content: {
        preview: {
          dev: true // Force preview features in dev mode
        }
      }
    })
    ```
4.  **Start Dev Server with Tunnel**: Use `--tunnel` to expose your local server to the internet (requires Cloudflared or similar).
    ```bash
    npx nuxi dev --tunnel
    ```
    Note the public URL provided (e.g., `https://<random-name>.trycloudflare.com`).
5.  **Verify Metadata**: Check that `https://<your-tunnel-url>/__preview.json` is accessible.
6.  **Set URL in Studio**: In Studio project settings > Deployment > Self-hosted, paste the tunnel URL.
7.  **Test**: Open your project in Studio. The interface should now connect to your local dev server. You can test App Config forms and Vue component editing in the Notion-like editor.
    ::warning
    Restart the Nuxt dev server (`npx nuxi dev --tunnel`) after changes to `nuxt.config.ts`, `nuxt.schema.ts`, or Vue components. You may need to sync metadata in Studio (Cmd/Ctrl+K -> "Sync meta") or refresh the Studio page.
    ::

---

## 11. Migration from v2 <a name="migration-from-v2"></a>

Nuxt Content v3 is a complete rewrite. While concepts are similar, breaking changes exist. **Content files (`.md`, `.yml`, etc.) generally do not need modification.**

### Changes Summary <a name="migration-changes-summary"></a>

*   **Vue Utils**:
    *   `queryContent()` -> [`queryCollection('collectionName')`](#querycollection) (Requires defining collections).
    *   `fetchContentNavigation()` -> [`queryCollectionNavigation('collectionName')`](#querycollectionnavigation).
    *   Surround query (`findSurround()`) -> [`queryCollectionItemSurroundings('collectionName', path)`](#querycollectionitemsurroundings).
    *   `useContent()` -> Removed. Use specific query utils instead.
    *   `searchContent()` -> Replaced by [`queryCollectionSearchSections`](#querycollectionsearchsections) for building search indexes.
    *   Document Driven Mode -> Removed. Implement manually with a catch-all page. [See below](#migration-document-driven).
*   **Components**:
    *   `<ContentDoc>`, `<ContentList>`, `<ContentNavigation>`, `<ContentQuery>` -> Removed. Use [`<ContentRenderer>`](#contentrenderer) combined with query utils.
    *   `<ContentSlot>`, `<MDCSlot>` -> Removed. Use native `<slot>` with [`mdc-unwrap` prop](#slot-in-mdc).
    *   Components in `components/content/` -> Still auto-imported for MDC rendering, but *not* globally registered for use outside Markdown unless configured in `nuxt.config.ts`.
*   **Types**:
    *   `NavItem` -> `ContentNavigationItem`. Import path changed.
*   **General**:
    *   `_dir.yml` -> Renamed to `.navigation.yml`. Ensure your collection `source` includes them.
    *   Module option `source` -> Removed. Define sources within collections in `content.config.ts`.
    *   Document `_path` -> Renamed to `path`. Internal fields (`_variable`) generally removed or renamed.
    *   `useContentHelpers()` -> Removed.
    *   Dot files (`.**`) -> Not ignored by default. Add `exclude: ['**/.*']` or `exclude: ['**/.!(navigation.yml)']` to collection source if needed.
    *   Sorting -> Now uses alphabetical order due to SQL backend. Use zero-padding for numerical file prefixes (`01.`, `02.`, ... `10.`). [See Ordering Files](#ordering-files).
    *   Module options -> Changed significantly. Refer to [Configuration](#configuration).
*   **Nuxt Studio Integration**:
    *   `@nuxthq/studio` module -> Deprecated and removed. Functionality integrated into Nuxt Content via the `content.preview` option.
    *   Update `nuxt.config.ts`: Remove `@nuxthq/studio` from `modules`, add `content.preview` block. [See Configuration](#config-preview).
    *   Update `nuxt.schema.ts` import: Change `@nuxthq/studio/theme` to `@nuxt/content/preview`.

### Implementing Document Driven Mode in v3 <a name="migration-document-driven"></a>

Create a catch-all page (`pages/[...slug].vue`) that fetches and renders content based on the route path.

```vue [pages/[...slug].vue]
<script lang="ts" setup>
const route = useRoute()
// Construct the path, ensuring leading slash and handling index routes
const path = '/' + (Array.isArray(route.params.slug) ? route.params.slug.join('/') : (route.params.slug || ''))

const { data: page, error } = await useAsyncData(`content-${path}`, () => {
  // Assuming a 'pages' collection covering all markdown files
  return queryCollection('pages').path(path).first()
})

// Handle content not found
if (error.value || !page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

// Set meta tags
useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
  // You might want to map page.value.seo fields here too
})
</script>

<template>
  <main>
    <ContentRenderer v-if="page" :value="page" />
    <!-- Fallback or loading state could go here if not using createError -->
  </main>
</template>
```

### Converting `queryContent` to `queryCollection` <a name="migration-querycontent"></a>

1.  Replace `queryContent()` with `queryCollection('yourCollectionName')`.
2.  Map `.findOne()` to `.first()`, `.find()` to `.all()`.
3.  Adapt `.where()` clauses. Some operators might change (e.g., regex needs `LIKE` operator).
4.  Ensure the queried fields exist in the v3 collection schema.

```ts [Find content by path]
// Content v2
const v2Query = await queryContent(route.path).findOne()
// Content v3 (assuming 'pages' collection covers the path)
const v3Query = await queryCollection('pages').path(route.path).first()
```

```ts [Find content with filter]
// Content v2
const v2Query = await queryContent().where({ _path: /^\/blog\/.*/ }).find()
// Content v3 (assuming 'blog' collection)
const v3Query = await queryCollection('blog').where('path', 'LIKE', '/blog/%').all()
// Or if filtering within a broader 'pages' collection:
// const v3Query = await queryCollection('pages').where('path', 'LIKE', '/blog/%').all()
```

### Converting `findSurround` <a name="migration-findsurround"></a>

Use the dedicated `queryCollectionItemSurroundings` utility.

```ts
const targetPath = '/docs/current-page'

// Content v2
const v2Surround = await queryContent() // Optional: queryContent(targetPath) first
  .only(['title', 'description', '_path'])
  .findSurround(targetPath) // Pass path to findSurround

// Content v3 (assuming 'docs' collection)
const v3Surround = await queryCollectionItemSurroundings(
  'docs', // Collection name
  targetPath, // Path of the *current* item
  {
    fields: ['title', 'description', 'path'] // Fields to fetch for prev/next
  }
)
  // Optionally add .where() or .order() here to filter/sort candidates
  // .where('draft', '=', false)
  // .order('date', 'ASC')

// v3Surround will be Promise<[prevItem | null, nextItem | null]>
```

### Consolidating Prose Components <a name="migration-prose-components"></a>

`ProseCodeInline` is removed. Inline code (single backticks `` ` ``) now uses `<ProseCode>`. Code blocks (triple backticks ` ``` `) use `<ProsePre>`.

**Action:**

1.  If you customized `ProseCode` in v2 for *block* code, move that logic to a custom `ProsePre` component in v3.
2.  If you customized `ProseCodeInline` in v2, rename that component to `ProseCode` in v3.

### `_dir.yml` Renamed <a name="migration-dir-yml"></a>

Rename `_dir.yml` files to `.navigation.yml`. These files provide metadata for directories in `queryCollectionNavigation`. Ensure your collection `source` includes these files (e.g., `include: '**'`, `exclude: ['**/.!(navigation.yml)']`).

### Ignoring Dot Files <a name="migration-dot-files"></a>

Dotfiles (e.g., `.DS_Store`, `.env`) are **not** ignored by default in v3. Exclude them explicitly in your collection `source` if needed:

```ts [content.config.ts]
defineCollection({
  source: {
    include: '**',
    exclude: [
      '**/.*', // Ignore all dotfiles/dirs
      '**/README.md' // Example: ignore specific files
    ]
  }
})

// To ignore dotfiles EXCEPT .navigation.yml:
defineCollection({
  source: {
    include: '**',
    exclude: ['**/.!(navigation.yml)']
  }
})
```

---

## 12. Debugging Tools <a name="debugging-tools"></a>

Tools and techniques for troubleshooting Nuxt Content issues.

### VS Code SQLite Extension <a name="debugging-vscode-extension"></a>

A convenient way to inspect the SQLite database (`contents.sqlite`).

1.  **Install**: Search "SQLite" by `alexcvzz` in VS Code Extensions and install.
2.  **Open Database**: Locate your database file (see below) and right-click -> "Open Database".
3.  **Explore**: Use the "SQLite Explorer" panel to view tables (corresponding to collections) and their data. Run custom SQL queries.

### Locating the Database <a name="debugging-locate-db"></a>

By default, the SQLite database is stored at:

```
.data/content/contents.sqlite
```

This file is generated when you run `npx nuxi dev` or `npx nuxi build`.

::tip{icon="i-lucide-lightbulb"}
If the file doesn't exist, run your Nuxt app first.
::

### Exploring the Database <a name="debugging-explore-db"></a>

Once opened in the VS Code extension (or another tool):

*   Each collection defined in `content.config.ts` should have a corresponding table.
*   Inspect the rows to see if your content files have been parsed and stored correctly.
*   Check column values against your schemas and file content.

### Fixing Common Issues <a name="debugging-common-issues"></a>

*   **Content Not Showing / Missing Items**:
    1.  Verify the `.data/content/contents.sqlite` file exists.
    2.  Run `npx nuxi cleanup && npx nuxi dev` to clear caches and force a rebuild/reparse.
    3.  Check the database tables using the SQLite extension to see if the expected content rows are present.
    4.  Verify your `content.config.ts` `source` patterns are correctly including the files.
    5.  Check for parsing errors in the terminal output during `nuxi dev` or `nuxi build`.
*   **Slow Queries / Performance Issues**:
    1.  Ensure you are selecting only necessary fields using `.select()`.
    2.  Check if complex `.where()` clauses can be simplified.
    3.  Consider if pre-rendering pages ([Static](#deployment-static-hosting) or [Serverless](#deployment-serverless-prerendering)) is appropriate.
    4.  In serverless environments, ensure you're using a suitable external database adapter.

### Manually Resetting the Database <a name="debugging-reset-db"></a>

If the database seems corrupted or you suspect stale build artifacts:

1.  **Stop** your Nuxt dev server.
2.  **Delete** the database file: `rm .data/content/contents.sqlite` (or delete via file explorer).
3.  **Clean up** Nuxt caches: `npx nuxi cleanup`
4.  **Restart** Nuxt: `npx nuxi dev` (This will regenerate the database from scratch based on your content files and config).

### Other Tools <a name="debugging-other-tools"></a>

*   **DB Browser for SQLite**: [sqlitebrowser.org](https://sqlitebrowser.org/) - A standalone GUI tool for SQLite databases.
*   **SQLite Command Line**: `sqlite3 .data/content/contents.sqlite` - Use SQL directly in your terminal.