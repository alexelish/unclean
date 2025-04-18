Okay, here is a consolidated Markdown file combining the information from all the provided Nuxt.js documentation files. This aims to be a comprehensive reference for your AI assistant.

```markdown
# Comprehensive Nuxt.js Guide and API Reference

This document consolidates various Nuxt.js documentation files into a single reference, covering core concepts, directory structure, features, API references, and more.

---

## 1. Introduction

Nuxt is a free and [open-source framework](https://github.com/nuxt/nuxt) with an intuitive and extendable way to create type-safe, performant and production-grade full-stack web applications and websites with [Vue.js](https://vuejs.org).

Nuxt's goal is to make web development intuitive and performant with a great Developer Experience in mind. It enables you to start writing `.vue` files from the beginning while enjoying hot module replacement in development and a performant application in production with server-side rendering by default.

Nuxt has no vendor lock-in, allowing you to deploy your application [**everywhere, even on the edge**](/blog/nuxt-on-the-edge).

> **Tip:** If you want to play around with Nuxt in your browser, you can [try it out in one of our online sandboxes](/docs/getting-started/installation#play-online).

### Automation and Conventions

Nuxt uses conventions and an opinionated directory structure to automate repetitive tasks and allow developers to focus on pushing features. The configuration file can still customize and override its default behaviors.

*   **File-based routing:** Define routes based on the structure of your [`pages/` directory](/docs/guide/directory-structure/pages).
*   **Code splitting:** Nuxt automatically splits your code into smaller chunks.
*   **Server-side rendering out of the box:** Built-in SSR capabilities without manual server setup.
*   **Auto-imports:** Write Vue composables and components without manual imports, benefiting from tree-shaking.
*   **Data-fetching utilities:** Composables for SSR-compatible data fetching with different strategies.
*   **Zero-config TypeScript support:** Auto-generated types and `tsconfig.json` for type-safe code.
*   **Configured build tools:** Uses [Vite](https://vite.dev) by default for HMR and production bundling.

### Server-Side Rendering (SSR)

Nuxt comes with built-in SSR capabilities by default, providing benefits like:

*   **Faster initial page load:** Sends fully rendered HTML to the browser.
*   **Improved SEO:** Search engines can index content immediately.
*   **Better performance on low-powered devices:** Reduces client-side JavaScript execution.
*   **Better accessibility:** Content is available on initial load for assistive technologies.
*   **Easier caching:** Pages can be cached server-side.

Nuxt is versatile:
*   Statically render your site with `nuxt generate`.
*   Disable SSR globally with `ssr: false`.
*   Use hybrid rendering with `routeRules`.

> **Read More:** [Nuxt rendering modes](/docs/guide/concepts/rendering)

### Server Engine (Nitro)

Nuxt's server engine, [Nitro](https://nitro.unjs.io), unlocks full-stack capabilities:

*   Uses Rollup and Node.js workers in development.
*   Generates server API (`server/api/`) and middleware (`server/middleware/`).
*   Builds app and server into a universal `.output` directory for production.
*   Lightweight output, deployable on Node.js, Serverless, Workers, Edge, or static hosting.

> **Read More:** [Nuxt server engine](/docs/guide/concepts/server-engine)

### Production-ready & Deployment

Deploy Nuxt applications on Node/Deno servers, static hosting, or serverless/edge providers.

> **Read More:** [Deployment section](/docs/getting-started/deployment)
> **Read More:** [Hosting providers](/deploy)

### Modular

Extend Nuxt with custom features and integrations using the module system.

> **Read More:** [Nuxt Modules Concept](/docs/guide/concepts/modules)

### Architecture

Nuxt consists of core packages:
*   Core Engine: [nuxt](https://github.com/nuxt/nuxt/tree/main/packages/nuxt)
*   Bundlers: [@nuxt/vite-builder](https://github.com/nuxt/nuxt/tree/main/packages/vite) and [@nuxt/webpack-builder](https://github.com/nuxt/nuxt/tree/main/packages/webpack)
*   CLI: [nuxi](https://github.com/nuxt/nuxt/tree/main/packages/nuxi)
*   Server Engine: [nitro](https://github.com/nitrojs/nitro)
*   Development Kit: [@nuxt/kit](https://github.com/nuxt/nuxt/tree/main/packages/kit)

---

## 2. Installation

### Play Online

Try Nuxt without local setup:
*   [Open on StackBlitz](https://nuxt.new/s/v3)
*   [Open on CodeSandbox](https://nuxt.new/c/v3)

### New Project

**Prerequisites:**

*   **Node.js:** `18.x` or newer (active LTS recommended). Use even-numbered versions (18, 20, etc.).
*   **Text Editor:** VS Code with the official Vue extension (Volar) or WebStorm (or other JetBrains IDEs) recommended.
*   **Terminal:** For running Nuxt commands.
*   *(Optional Extensions/Tools):* [Nuxtr VS Code extension](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode), [WSL on Windows](https://docs.microsoft.com/en-us/windows/wsl/install) for potential performance improvements.

**Create Project:**

Open a terminal and run:

```bash
# npm
npm create nuxt <project-name>

# yarn
yarn create nuxt <project-name>

# pnpm
pnpm create nuxt <project-name>

# bun
bun create nuxt <project-name>
```

> **Tip:** Explore other starters/themes at [nuxt.new](https://nuxt.new).

Navigate into your project:

```bash
cd <project-name>
```

**(Optional) Open in VS Code:**

```bash
code .
```

### Development Server

Start the development server:

```bash
# npm
npm run dev -- -o

# yarn
yarn dev --open

# pnpm
pnpm dev -o

# bun
bun run dev -o
# To use the Bun runtime during development
# bun --bun run dev -o
```

The app will be available at `http://localhost:3000`.

### Next Steps

> **Read More:** [Nuxt Concepts](/docs/guide/concepts)

---

## 3. Core Concepts

### 3.1. Vue.js Development Integration

Nuxt is built on Vue 3, offering:

*   **Performance:** Faster rendering and smaller bundle sizes due to VDOM rewrite and tree-shaking.
*   **Composition API:** Enables better logic reuse and code organization alongside the traditional Options API.
*   **TypeScript Support:** Nuxt and Vue 3 are written in TypeScript, providing optional but robust type safety.

**Key Nuxt Features for Vue Devs:**

*   **Single File Components (SFCs):** `.vue` files with `<template>`, `<script>`, and `<style>`. Zero-config setup with Hot Module Replacement (HMR).
*   **Auto-imports:** Components in `components/`, composables in `composables/`, and utilities in `utils/` are automatically imported. Vue APIs (`ref`, `computed`, etc.) are also auto-imported.
*   **File-based Routing:** The `pages/` directory structure automatically creates routes using Vue Router.

**Composition API Example:**

```vue
<script setup lang="ts">
// ref and computed are auto-imported by Nuxt
const count = ref(0)
const double = computed(() => count.value * 2)

const increment = () => count.value++
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
  <p>Double: {{ double }}</p>
</template>
```

> **Read More:** [Vue.js documentation](https://vuejs.org)
> **Read More:** [Nuxt Auto-imports](#32-auto-imports)
> **Read More:** [Nuxt Routing](#35-routing)

### 3.2. Auto-imports

Nuxt automatically imports components, composables, utility functions, and Vue APIs without explicit import statements.

```vue
<script setup lang="ts">
const count = ref(1) // ref is auto-imported from Vue
const double = useDouble(count) // useDouble can be auto-imported from composables/
</script>
```

*   **How it works:** Based on directory structure (`components/`, `composables/`, `utils/`).
*   **Benefits:** Preserves typings, IDE support, and only includes used code in production.
*   **Server Directory:** Auto-imports utilities from `server/utils/`.
*   **Customization:** Configure additional auto-imports via `nuxt.config#imports`.

**Built-in Auto-imports:**
*   Nuxt composables: `useFetch`, `useAsyncData`, `useNuxtApp`, `useRuntimeConfig`, `useState`, etc.
*   Vue APIs: `ref`, `reactive`, `computed`, `watch`, lifecycle hooks (`onMounted`, etc.).

**Context Awareness:**
*   Many composables (`useNuxtApp`, `useState`, `useRoute`, etc.) need to be called within the correct Nuxt/Vue lifecycle context (setup functions, plugins, middleware).
*   Avoid using `await` before calling composables unless in specific contexts like `<script setup>`, `defineNuxtComponent`, `defineNuxtPlugin`, `defineNuxtRouteMiddleware`.
*   The `Nuxt instance is unavailable` error usually means a composable was called outside its valid context. Use `asyncContext` experimental feature or `runWithContext` if needed.

**Directory-based Auto-imports:**
*   `components/`: Vue components.
*   `composables/`: Vue composables (functions using Composition API).
*   `utils/`: Helper functions.

**Explicit Imports:**
If needed, explicitly import from `#imports`:

```vue
<script setup lang="ts">
import { ref, computed } from '#imports'
</script>
```

**Disabling Auto-imports:**
*   **Completely:** Set `imports.autoImport: false` in `nuxt.config`.
*   **For User Code Only:** Set `imports.scan: false` in `nuxt.config` (framework functions like `ref` remain auto-imported). This has limitations with layers.

**Component Auto-imports:**
*   Managed separately via the `components` config.
*   Disable via `components: { dirs: [] }` in `nuxt.config`.

> **Read More:** [Components Directory](#42-components)

**Third-Party Packages:**
Modules often configure auto-imports. Manually configure via `imports.presets` in `nuxt.config`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n']
      }
    ]
  }
})
```

### 3.3. Rendering Modes

Nuxt provides flexibility in how pages are rendered.

*   **Universal Rendering (Default - SSR + Hydration):**
    *   Initial request is server-rendered, sending full HTML.
    *   Client-side JavaScript (Vue) takes over (hydrates) for interactivity.
    *   **Pros:** Fast initial load, good SEO, balances server/client benefits.
    *   **Cons:** Requires Node.js server, potential hydration mismatches if server/client code differs significantly.
    *   **Use Cases:** Content-heavy sites (blogs, marketing, e-commerce).
    *   _Implementation Detail:_ Code in `<script setup>` runs on both server (initial) and client (hydration). Event handlers (`@click`) run only on the client.

*   **Client-Side Rendering (CSR - SPA):**
    *   Browser downloads JS, Vue renders HTML entirely on the client.
    *   Enabled via `ssr: false` in `nuxt.config.ts`.
    *   **Pros:** Cheaper hosting (static servers), works offline, potentially faster development (no server constraints).
    *   **Cons:** Slower initial load (Time To Interactive), potentially poorer SEO without pre-rendering or specific crawler handling.
    *   **Use Cases:** Highly interactive apps (SaaS, back-offices, dashboards, games).
    *   **Static Deployment (`nuxi generate` with `ssr: false`):** Produces `index.html`, `200.html`, `404.html`. Configure prerender hooks to customize output.
    *   **SPA Loading Template:** Use `app/spa-loading-template.html` for a loading screen before hydration.

*   **Hybrid Rendering:**
    *   Configure rendering modes per-route using `routeRules` in `nuxt.config.ts`.
    *   Allows mixing SSR, CSR, ISR (Incremental Static Regeneration), SWR (Stale-While-Revalidate), and pre-rendering within one app.
    *   **Use Cases:** Complex applications needing varied optimization strategies (e.g., static marketing pages, dynamic admin section).
    *   **Example `routeRules`:**
        ```ts
        // nuxt.config.ts
        export default defineNuxtConfig({
          routeRules: {
            '/': { prerender: true }, // Prerender homepage
            '/admin/**': { ssr: false }, // Client-render admin section
            '/api/**': { cors: true }, // Add CORS headers to API
            '/products/**': { swr: 3600 }, // Cache product pages for 1 hour (SWR)
            '/blog/**': { isr: true }, // Cache blog posts on CDN until next deploy (ISR)
            '/old-page': { redirect: '/new-page' } // Redirect
          }
        })
        ```
    *   **Important:** Hybrid rendering is not for fully static (`nuxi generate`) deployments.

*   **Edge-Side Rendering (ESR):**
    *   Renders application on CDN edge servers close to the user.
    *   Reduces latency, improves performance.
    *   Enabled via Nitro presets for platforms like Cloudflare Workers, Vercel Edge, Netlify Edge.
    *   Not a distinct mode but a deployment target compatible with Universal/Hybrid rendering.

### 3.4. Server Engine (Nitro)

Nuxt uses [Nitro](https://nitro.unjs.io) as its server engine.

*   **Features:** Cross-platform, serverless support, API routes, code splitting, hybrid rendering, dev server with HMR.
*   **API Layer:** Uses [h3](https://github.com/unjs/h3) internally. Handles JSON responses, promises, provides helpers (body parsing, cookies, redirects).
*   **Direct API Calls (`$fetch`):** When used server-side to call internal API routes (`/api/...`), `$fetch` directly invokes the function, avoiding an HTTP request. On the client, it makes a standard HTTP request. Uses [ofetch](https://github.com/unjs/ofetch).
*   **Typed API Routes:** Nitro generates types for API routes if they return values directly (not using `res.end()`), usable with `$fetch` and `useFetch`.
*   **Standalone Server:** `nuxi build` creates a self-contained `.output` directory, deployable anywhere without `node_modules`.

> **Read More:** [Server Directory](#410-server)
> **Read More:** [Nitro Concepts](https://nitro.unjs.io/guide)

### 3.5. Routing

Nuxt uses file-system routing based on [vue-router](https://router.vuejs.org).

*   **Pages Directory (`pages/`):** Every `.vue` (or `.js`, `.ts`, `.jsx`, `.tsx`) file creates a route. `pages/index.vue` maps to `/`.
*   **`<NuxtPage>` Component:** Required in `app.vue` (or layouts) to display the current page component. Must have a single root element for transitions.
*   **Navigation (`<NuxtLink>`):** Built-in component for linking between pages. Handles internal/external links, prefetching, active classes. Replaces `<a>` and `<RouterLink>`.
*   **Dynamic Routes:** Use square brackets `[]` for parameters (e.g., `pages/users/[id].vue` maps to `/users/:id`). Optional parameters use double brackets `[[slug]].vue`.
*   **Catch-all Routes:** Use brackets with three dots `[...slug].vue` to match everything under a path.
*   **Nested Routes:** Create a `parent.vue` file and a `parent/` directory with child pages. Use `<NuxtPage />` inside `parent.vue` to render children.
*   **Route Groups:** Use parentheses `()` around a folder name (e.g., `pages/(marketing)/about.vue`) to group routes without affecting the URL structure (`/about`).
*   **Route Parameters Access:** Use `useRoute().params` or `useRoute().query` in `<script setup>`, or `$route.params`/`$route.query` in templates/Options API.
*   **Route Middleware (`middleware/`):** Run code before navigation. Can be global (`.global.ts`), named (in `middleware/`, referenced in page meta), or anonymous (inline function in page meta). Used for auth, redirects, etc. They run on server (initial load) and client (navigation/hydration).
*   **Route Validation (`definePageMeta`):** Add a `validate` function in `definePageMeta` within a page to check route params before rendering. Return `true` for valid, `false` (or error object) for invalid (results in 404 or error page).
*   **Programmatic Navigation (`navigateTo`):** Utility function for navigating programmatically. Use `await` or `return` with it.
*   **Custom Routing:** Extend routes via `app/router.options.ts` or `pages:extend` hook in `nuxt.config`.

> **Read More:** [Pages Directory](#46-pages)
> **Read More:** [Middleware Directory](#45-middleware)
> **Read More:** [`<NuxtLink>` API](#api-reference-components)
> **Read More:** [`useRoute` API](#api-reference-composables)
> **Read More:** [`navigateTo` API](#api-reference-utilities)
> **Read More:** [Custom Routing Recipe](#61-custom-routing)

### 3.6. Data Fetching

Nuxt provides composables for fetching data in an SSR-friendly way.

*   **`$fetch`:**
    *   Global helper based on [ofetch](https://github.com/unjs/ofetch).
    *   Makes direct function calls on server for internal API routes (`/api/...`).
    *   Makes standard HTTP requests on the client.
    *   **Use Case:** Best for event-driven fetching (e.g., form submissions) or when used *inside* `useAsyncData`.
    *   **Warning:** Using `$fetch` directly in `<script setup>` *without* `useAsyncData`/`useFetch` causes double fetching (once on server, once on client hydration).

*   **`useFetch`:**
    *   Wrapper around `useAsyncData` + `$fetch`.
    *   Automatically generates a key based on URL and options.
    *   Handles SSR data transfer (payload) to prevent double fetching.
    *   Infers response types from API routes.
    *   **Use Case:** Preferred method for fetching data for components/pages.
    *   **Returns:** `{ data, pending, error, refresh, execute, status, clear }` (data, pending, error, status are refs).

*   **`useAsyncData`:**
    *   Wraps any async function (not just `$fetch`).
    *   Requires a unique key for de-duplication and caching (can be auto-generated but explicit key recommended, especially for custom composables).
    *   Handles SSR data transfer (payload).
    *   **Use Case:** Fetching data using third-party libraries, complex fetching logic involving multiple calls.
    *   **Returns:** Same as `useFetch`.

**Key Options (for `useFetch`/`useAsyncData`):**

*   `key`: Unique identifier for caching/deduplication.
*   `server` (default `true`): Fetch on server. `false` fetches only client-side (after hydration).
*   `lazy` (default `false`): Don't block client-side navigation; handle pending state manually. `useLazyFetch`/`useLazyAsyncData` are shortcuts.
*   `immediate` (default `true`): Fetch immediately. `false` requires manual `execute()` call.
*   `default`: Factory function for placeholder data while loading (useful with `lazy` or `immediate: false`).
*   `transform`: Function to modify fetched data before assigning to `data` ref.
*   `pick`: Array of keys to pick from the response (reduces payload size).
*   `watch`: Array of reactive sources; re-fetches when they change.
*   `deep` (default `false`): Use `ref` instead of `shallowRef` for `data`. Less performant for large objects.
*   `dedupe` (default `'cancel'`): Strategy for concurrent requests with the same key (`'cancel'` or `'defer'`).
*   `getCachedData`: Function to retrieve cached data (advanced).

**Managing Data:**

*   `refresh()` / `execute()`: Manually re-trigger the fetch.
*   `clear()`: Reset data to `undefined`, error to `null`, status to `idle`.
*   `useNuxtData(key)`: Access cached data by key elsewhere.
*   `refreshNuxtData(key?)`: Globally refresh cached data.
*   `clearNuxtData(key?)`: Globally clear cached data.

**SSR Considerations:**

*   **Headers/Cookies:** `useFetch` automatically forwards request headers/cookies for internal API calls on the server via `useRequestFetch`. `$fetch` does not; manual forwarding with `useRequestHeaders` is needed if required. Be cautious about which headers to forward.
*   **Serialization:**
    *   **Payload (`useAsyncData`/`useFetch`):** Uses [`devalue`](https://github.com/Rich-Harris/devalue) to serialize/deserialize complex types (Dates, Maps, Sets, Refs, etc.) between server and client. Custom serializers possible via payload plugins.
    *   **API Routes (`server/`):** Uses `JSON.stringify` by default. Nuxt attempts type conversion for basic types (like Date strings back to Date objects). Define a `toJSON()` method on returned objects for custom serialization or use `transform` on the client.

> **Read More:** [Data Fetching Concepts](/docs/getting-started/data-fetching)
> **Read More:** [`$fetch` API](#api-reference-utilities)
> **Read More:** [`useFetch` API](#api-reference-composables)
> **Read More:** [`useAsyncData` API](#api-reference-composables)
> **Read More:** [`useLazyFetch` API](#api-reference-composables)
> **Read More:** [`useLazyAsyncData` API](#api-reference-composables)
> **Read More:** [`useNuxtData` API](#api-reference-composables)
> **Read More:** [`refreshNuxtData` API](#api-reference-utilities)
> **Read More:** [`clearNuxtData` API](#api-reference-utilities)
> **Read More:** [Custom useFetch Recipe](#62-custom-usefetch)

### 3.7. State Management

Nuxt provides `useState` for creating reactive, SSR-friendly shared state.

*   **`useState(key, init)`:**
    *   Creates a reactive `ref`.
    *   `key`: Unique string identifier.
    *   `init`: Factory function (`() => value`) returning the initial value (run only if state isn't already set).
    *   Values are preserved during SSR and hydrated on the client (via payload).
    *   Shared across components using the same key.
    *   **Important:** State must be JSON-serializable (no functions, classes, Symbols).

**Best Practice:** Define shared state within composables for type safety and reusability.

```ts
// composables/states.ts
export const useColor = () => useState<string>('color', () => 'pink')

// app.vue
const color = useColor() // Access the 'color' state
```

**Initializing State Asynchronously:** Use `callOnce` in `app.vue` or a plugin.

```vue
// app.vue
<script setup lang="ts">
const websiteConfig = useState('config')

// Fetches config only once (on server or first client load)
await callOnce(async () => {
  websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
})
</script>
```

**Comparison with `ref`:** `useState` handles SSR state transfer, `ref` does not. Using `ref` outside setup can lead to shared state across requests on the server (bad).

**Global State Management Libraries:**
*   [Pinia](/modules/pinia): Official Vue recommendation. Integrates well with Nuxt via its module.
*   Other options available as modules (Harlem, XState).

**Clearing State:** Use `clearNuxtState(key?)` to remove cached state.

> **Read More:** [State Management Concepts](/docs/getting-started/state-management)
> **Read More:** [`useState` API](#api-reference-composables)
> **Read More:** [`clearNuxtState` API](#api-reference-utilities)
> **Read More:** [`callOnce` API](#api-reference-utilities)

### 3.8. Modules

Modules extend Nuxt's core functionality. They are async functions run at build/dev time.

*   **Use Cases:** Add integrations (UI libraries, analytics, CMS), enforce configurations, share reusable logic.
*   **Adding Modules:** List them in the `modules` array in `nuxt.config.ts`.
    ```ts
    // nuxt.config.ts
    export default defineNuxtConfig({
      modules: [
        '@nuxtjs/tailwindcss', // From npm
        './modules/my-local-module', // Local module
        ['@some/module', { option: true }] // With options
      ]
    })
    ```
*   **Creating Modules:** Use `defineNuxtModule` from `@nuxt/kit`. Modules can interact with Nuxt hooks and utilities.
    > **Read More:** [Module Author Guide](#52-module-author-guide)
*   **Finding Modules:** Explore the [Nuxt Modules website](/modules).

> **Read More:** [Modules Concept](/docs/guide/concepts/modules)

### 3.9. ES Modules (ESM)

Nuxt 3+ is built entirely on native ES Modules, both for the server and client builds.

*   **Background:** JavaScript has evolved from CommonJS (`require`, `module.exports`) used initially by Node.js, to the standardized ES Modules (`import`, `export`). Browsers support ESM natively. Modern Node.js also supports ESM (using `.mjs` files or `"type": "module"` in `package.json`).
*   **Nuxt Output:** Nitro outputs an `.mjs` entry point (`.output/server/index.mjs`), signalling Node.js to treat it as ESM.
*   **Import Resolution:** Node.js resolves `import 'package-name'` differently in ESM context, looking at `exports` or `module` fields in `package.json`, not `main`.
*   **Common Issues:** Older libraries might provide ESM-syntax builds (`.esm.js`) in their `module` field but haven't configured their `package.json` or file extensions correctly for native Node.js ESM consumption. This can lead to `SyntaxError: Unexpected token 'export'` or `Named export '...' not found` errors.
*   **Troubleshooting:**
    *   **Transpile:** Add problematic dependencies to `build.transpile` in `nuxt.config.ts`. Nuxt will process them.
        ```ts
        // nuxt.config.ts
        export default defineNuxtConfig({
          build: {
            transpile: ['some-legacy-library']
          }
        })
        ```
    *   **Alias (Less Common):** Manually alias to the CJS version if available (`alias: { 'lib': 'lib/dist/lib.cjs.js' }`).
    *   **Default Exports:** Sometimes, importing CJS modules with default exports in ESM context results in `{ default: ... }`. Use `import { default as pkg } from 'pkg'` or helper libraries like `mlly`'s `interopDefault`.

*   **Library Author Guide:**
    *   **Recommended:** Rename ESM files to `.mjs` and CJS files to `.cjs`.
    *   **Alternative:** Set `"type": "module"` in `package.json` (makes entire library ESM by default).
    *   Update `require` to `import`.
    *   Replace CJS globals (`__dirname`, `__filename`, `require`) with ESM equivalents (`import.meta.url`, `import()`). Use `fileURLToPath(new URL('./path', import.meta.url))` for path resolution.
    *   Use the `exports` field in `package.json` for clear entry points.
    *   Prefer named exports over default exports.

### 3.10. TypeScript

Nuxt has first-class TypeScript support.

*   **Configuration:** Using `.ts` extension for `nuxt.config.ts` and `app.config.ts` is recommended for type safety and autocompletion.
*   **Auto-generated Types (`.nuxt/`):**
    *   `nuxt.d.ts`: Contains types for modules and core Nuxt functionalities. Your IDE should pick these up automatically. Requires `nuxi dev` or `nuxi build` to be generated.
    *   `tsconfig.json`: Generated base TSConfig with aliases (`~`, `#imports`, etc.) and recommended settings. Extend this in your project's root `tsconfig.json`.
        ```json
        // tsconfig.json
        {
          "extends": "./.nuxt/tsconfig.json"
          // Add your custom overrides here, but avoid overwriting 'paths'
        }
        ```
    *   Use `nuxt.config#alias` to add custom path aliases recognized by TypeScript.
*   **Type Checking:**
    *   Not performed by default during `dev` or `build` for performance.
    *   Run `npx nuxi typecheck` manually.
    *   Enable automatic checking via `typescript.typeCheck: true` in `nuxt.config.ts`. Requires `vue-tsc` and `typescript` dev dependencies.
*   **Strict Checks:** Enabled by default (`strict: true`). Can be disabled via `typescript.strict: false` in `nuxt.config.ts` if needed during migration.

### 3.11. Nuxt Lifecycle

Understanding the sequence of events in Nuxt helps in debugging and extending the framework.

**Server-Side (Initial Request):**

1.  **Nitro Setup:** Nitro server starts, runs `server/plugins/` (once per server boot, potentially per request in serverless).
2.  **Nitro Middleware:** Runs `server/middleware/` for *every* incoming request.
3.  **Nuxt App Init & Plugins:** Vue/Nuxt instances created. Nuxt server plugins (`plugins/*.server.ts`, `plugins/*.ts`) execute sequentially. `app:created` hook runs.
4.  **Route Validation:** `validate` function in `definePageMeta` runs (if defined).
5.  **Nuxt App Middleware:** Global (`middleware/*.global.ts`), then named/inline middleware for the matched route execute. `navigateTo` on server causes a browser redirect.
6.  **Page/Component Setup & Data Fetching:** Page/Component `setup` runs. `useFetch`/`useAsyncData` calls execute. Server-specific Vue lifecycle hooks (`onServerPrefetch`) run. `onBeforeMount`, `onMounted` do *not* run.
7.  **Render HTML:** Vue app renders to HTML. `app:rendered` hook runs. Nitro `render:html` hook runs (allows HTML modification). HTML (+ payload) sent to client.

**Client-Side (Hydration / Navigation):**

1.  **Nuxt App Init & Plugins:** Similar to server, but runs client plugins (`plugins/*.client.ts`, `plugins/*.ts`). `app:created` hook runs.
2.  **Route Validation:** `validate` runs again if defined for the route.
3.  **Nuxt App Middleware:** Middleware runs again for the route.
4.  **Mount & Hydrate:** `app:beforeMount` hook runs. Vue app mounts to DOM (`#__nuxt`). If SSR/SSG, hydration occurs (matching virtual DOM to server-rendered HTML, attaching listeners). `app:mounted` hook runs.
5.  **Vue Lifecycle:** Full Vue client-side lifecycle hooks execute (`onMounted`, `onUpdated`, `onUnmounted`, etc.).

**Key Takeaways:**

*   Nitro runs first (plugins, middleware).
*   Nuxt app initializes, runs plugins, then middleware.
*   Data fetching happens during component setup.
*   Server renders HTML; Client hydrates/mounts.
*   Middleware and validation run on both server (initial) and client (hydration/navigation).
*   Be mindful of code placement (server-only vs. client-only vs. universal).

> **Read More:** [Lifecycle Hooks](#71-lifecycle-hooks)
> **Read More:** [Nuxt Internals](#72-how-nuxt-works)
> **Read More:** [NuxtApp Interface](#73-nuxtapp)

---

## 4. Directory Structure

Nuxt uses a convention-based directory structure to auto-configure many aspects of your application.

### 4.1. `.nuxt/`
*   **Purpose:** Development directory generated by Nuxt. Contains the built Vue application, generated types, and virtual files.
*   **Usage:** Primarily for internal Nuxt use and debugging/understanding generated code (via DevTools Virtual Files tab).
*   **Git:** Should be added to `.gitignore`.
*   **Modification:** Do not modify files directly; they are regenerated on `nuxi dev`.

### 4.2. `.output/`
*   **Purpose:** Production build directory created by `nuxi build`. Contains the optimized, deployable application (server, static assets).
*   **Usage:** This is the directory you deploy to your hosting provider.
*   **Git:** Should be added to `.gitignore`.
*   **Modification:** Do not modify files directly; they are regenerated on `nuxi build`.

### 4.3. `assets/`
*   **Purpose:** Stores assets (stylesheets, fonts, images not in `public/`) that need processing by the build tool (Vite/webpack).
*   **Usage:** Referenced in components/CSS using `~/assets/path/to/asset.ext`. Build tools process these for optimization (minification, hashing).
*   **Serving:** Files are *not* served directly at static URLs (like `/assets/image.png`). They are bundled/processed. Use `public/` for direct serving.

> **Read More:** [Assets Handling](#413-assets-handling)

### 4.4. `components/`
*   **Purpose:** Stores Vue components.
*   **Usage:** Components placed here are automatically imported and available throughout your application templates without explicit imports.
*   **Naming:**
    *   `components/AppHeader.vue` -> `<AppHeader />`
    *   `components/base/Button.vue` -> `<BaseButton />` (duplicate segments removed)
    *   Configure `pathPrefix: false` for Nuxt 2-style naming (`<Button />`).
*   **Dynamic Components:** Use `<component :is="resolveComponent('ComponentName')">` or import explicitly from `#components`.
*   **Lazy Loading:** Prefix component name with `Lazy` (e.g., `<LazyMyComponent />`) to dynamically import its code chunk only when needed.
*   **Delayed Hydration:** Use `hydrate-*` props on `<Lazy>` components (e.g., `<LazyMyComponent hydrate-on-visible />`) to control when they become interactive client-side. Strategies include `on-visible`, `on-idle`, `on-interaction`, `on-media-query`, `after` (delay), `when` (boolean), `never`. Emit `@hydrated` event.
*   **Client Components (`.client.vue`):** Render only on the client-side, after mount.
*   **Server Components (`.server.vue`):** Experimental feature (`experimental.componentIslands: true`). Render on the server, potentially reducing client bundle size. Can be standalone (Islands) or paired with a `.client.vue` component. Uses `<NuxtIsland>` internally.
*   **Custom Directories:** Configure additional component directories via `components.dirs` in `nuxt.config`.
*   **Library Authors:** Use `components:dirs` hook in modules to register components from packages.

> **Read More:** [Components API](#api-reference-components)

### 4.5. `composables/`
*   **Purpose:** Stores Vue Composition API functions (composables).
*   **Usage:** Functions exported from `.ts` or `.js` files here are auto-imported across your app. Ideal for reusable stateful logic.
*   **Naming:** `composables/useFoo.ts` or `composables/use-foo.ts` -> `useFoo()`. Named exports also work.
*   **Scanning:** By default, only scans top-level files (`index.ts`, `useSomething.ts`). Re-export from `index.ts` or configure `imports.dirs` in `nuxt.config` to scan nested directories.
*   **Context:** Composables run within the Nuxt/Vue context (setup, plugins, middleware) unless designed otherwise.

> **Read More:** [Composables API](#api-reference-composables)

### 4.6. `content/`
*   **Purpose:** File-based CMS directory used by the `@nuxt/content` module.
*   **Usage:** Place `.md`, `.yml`, `.csv`, `.json` files here. Query and render them using Content module components and composables.
*   **Setup:** Requires installing and adding `@nuxt/content` module (`npx nuxi module add content`).

> **Read More:** [Nuxt Content Documentation](https://content.nuxt.com)

### 4.7. `layouts/`
*   **Purpose:** Define reusable page layouts (e.g., header, footer, sidebar structure).
*   **Usage:**
    *   Enable by adding `<NuxtLayout>` in `app.vue`.
    *   Create layout files (e.g., `layouts/default.vue`, `layouts/custom.vue`).
    *   Layouts *must* have a single root element and contain a `<slot />` to render page content.
    *   Apply layouts to pages via `definePageMeta({ layout: 'custom' })` or set dynamically via `<NuxtLayout name="custom">`.
    *   `layouts/default.vue` is used if no layout is specified.
*   **Naming:** Kebab-case (e.g., `CustomLayout.vue` -> `custom-layout`). Nested paths influence names (e.g., `layouts/desktop/default.vue` -> `desktop-default`).
*   **Overriding:** Set `layout: false` in `definePageMeta` and use `<NuxtLayout>` directly within the page for full control.

> **Read More:** [`<NuxtLayout>` API](#api-reference-components)

### 4.8. `middleware/`
*   **Purpose:** Stores route middleware functions.
*   **Usage:** Code runs before navigating to specific routes.
*   **Types:**
    1.  **Global:** Filename ends with `.global.ts`. Runs on *every* route change. Order determined alphabetically or by numerical prefix (e.g., `01.auth.global.ts`).
    2.  **Named:** File name becomes middleware name (kebab-case, e.g., `auth.ts` -> `auth`). Applied via `definePageMeta({ middleware: 'auth' })` or `middleware: ['auth', 'other']`.
    3.  **Anonymous (Inline):** Defined directly as a function within `definePageMeta({ middleware: [...] })`.
*   **Function Signature:** `export default defineNuxtRouteMiddleware((to, from) => { ... })`
*   **Control Flow:**
    *   Return nothing: Proceed to next middleware/page.
    *   `return navigateTo('/path', { redirectCode: 301/302 })`: Redirect.
    *   `return abortNavigation(error?)`: Stop navigation.
*   **Execution:** Runs on server (initial load) and client (hydration/navigation). Use `import.meta.server`/`client` to differentiate.

> **Read More:** [Routing Middleware](#35-routing)
> **Read More:** [`defineNuxtRouteMiddleware` API](#api-reference-utilities)

### 4.9. `modules/`
*   **Purpose:** Stores local Nuxt modules developed within your project.
*   **Usage:** Modules placed here (`modules/my-module/index.ts` or `modules/my-module.ts`) are automatically registered. No need to add them to `nuxt.config#modules`.
*   **Order:** Runs after modules listed in `nuxt.config`. Alphabetical order for local modules, controllable via numerical prefix on directory names.

> **Read More:** [Module Author Guide](#52-module-author-guide)

### 4.10. `node_modules/`
*   **Purpose:** Standard Node.js directory where project dependencies (installed via npm, yarn, pnpm, bun) are stored.
*   **Git:** Should *always* be added to `.gitignore`.

### 4.11. `pages/`
*   **Purpose:** Creates routes based on file structure. Optional directory; if absent, `vue-router` isn't included.
*   **Usage:** `.vue` (or other supported extensions) files map to routes.
    *   `pages/index.vue` -> `/`
    *   `pages/about.vue` -> `/about`
    *   `pages/users/[id].vue` -> `/users/:id` (dynamic route)
    *   `pages/[[slug]].vue` -> `/` or `/:slug` (optional parameter)
    *   `pages/[...slug].vue` -> `/any/path/here` (catch-all route)
*   **`<NuxtPage>`:** Required in `app.vue` or layouts to render the matched page component.
*   **Nested Routes:** Create `parent.vue` and `parent/child.vue`. Use `<NuxtPage />` inside `parent.vue`.
*   **Route Groups:** Use `(group-name)/` folders to organize files without affecting URLs.
*   **Page Metadata (`definePageMeta`):** Compiler macro to set route-specific options (layout, middleware, transition, keepalive, alias, validate, title, custom meta).
*   **Client/Server Only Pages:** Use `.client.vue` or `.server.vue` suffixes.

> **Read More:** [Routing Concepts](#35-routing)
> **Read More:** [`<NuxtPage>` API](#api-reference-components)
> **Read More:** [`definePageMeta` API](#api-reference-utilities)

### 4.12. `plugins/`
*   **Purpose:** Register Vue plugins and other setup code to run when the Vue app is created.
*   **Usage:** Files here are auto-registered. Executed sequentially based on filename (use number prefixes for ordering).
    *   `.server.ts`: Runs only on server.
    *   `.client.ts`: Runs only on client.
    *   `.ts`: Runs on both.
*   **Signature:** `export default defineNuxtPlugin((nuxtApp) => { ... })`
*   **Providing Helpers:** Return `{ provide: { helperName: value } }` to inject helpers accessible via `useNuxtApp().$helperName` or `$helperName` in templates. Composables are generally preferred over provide.
*   **Object Syntax:** Use `defineNuxtPlugin({ name, setup, hooks, ... })` for more control (parallel loading, dependencies, env conditions).
*   **Context:** Plugins have access to `nuxtApp`. Can use composables, but be mindful of execution order and lifecycle dependencies.

> **Read More:** [NuxtApp Interface](#73-nuxtapp)
> **Read More:** [Plugins API (Kit)](#api-reference-kit)

### 4.13. `public/`
*   **Purpose:** Serve static assets directly from the server root.
*   **Usage:** Files here (e.g., `public/robots.txt`, `public/favicon.ico`, `public/img/logo.png`) are served as-is at the root URL (e.g., `/robots.txt`, `/favicon.ico`, `/img/logo.png`).
*   **Processing:** Files are *not* processed by the build tool. Ideal for files that must keep their name or won't change.
*   **Contrast with `assets/`:** `assets/` is for files processed by the build (CSS, fonts, bundled images), `public/` is for direct serving.

> **Read More:** [Assets Handling](#413-assets-handling)

### 4.14. `server/`
*   **Purpose:** Define server-side API endpoints, middleware, and utilities using Nitro.
*   **Structure:**
    *   `server/api/`: Creates API routes prefixed with `/api/`.
        *   `hello.ts` -> `/api/hello`
        *   `hello.get.ts` -> `/api/hello` (GET method only)
        *   `users/[id].ts` -> `/api/users/:id` (dynamic param)
        *   `[...slug].ts` -> `/api/catch/all/here` (catch-all)
    *   `server/routes/`: Creates server routes *without* the `/api/` prefix.
        *   `hello.ts` -> `/hello`
    *   `server/middleware/`: Runs Nitro middleware on *every* request *before* API/route handlers. Should not return a response; used for logging, auth checks, modifying request context (`event.context`).
    *   `server/plugins/`: Nitro plugins run once when Nitro starts (or per request in serverless). Used for hooking into Nitro lifecycle, setting up connections, etc.
    *   `server/utils/`: Auto-imported utility functions available *only* within the `server/` directory.
*   **Handlers:** Export a default function using `defineEventHandler((event) => { ... })`. Can return data directly (JSON), promises, or use low-level Node response methods via `event.node.res`.
*   **Utilities:** Access H3 helpers (`readBody`, `getQuery`, `setCookie`, `sendRedirect`, `createError`) and Nitro storage (`useStorage`).
*   **Context:** Has access to runtime config (`useRuntimeConfig(event)`).

> **Read More:** [Server Engine (Nitro)](#34-server-engine-nitro)
> **Read More:** [Nitro Documentation](https://nitro.unjs.io)

### 4.15. `shared/`
*   **Purpose:** Share isomorphic code (runs on both Vue app and Nitro server) without dependencies on Vue or Nitro specifics. (Available Nuxt v3.14+)
*   **Usage:**
    *   `shared/utils/`: Utilities auto-imported in both Vue app and `server/`.
    *   `shared/types/`: Type definitions auto-imported in both contexts.
    *   Other files/folders need manual import using `#shared/...` alias.
*   **Constraints:** Code here *cannot* import Vue APIs (`ref`, etc.) or Nitro/H3 APIs (`defineEventHandler`, etc.).
*   **Auto-imports:** Requires `future.compatibilityVersion: 4` to be enabled.

### 4.16. `utils/`
*   **Purpose:** Auto-imported utility functions for the *Vue application* part.
*   **Usage:** Export functions (named or default). Available in components, composables, plugins.
*   **Distinction from `composables/`:** Semantically for stateless helper functions, whereas `composables/` often implies stateful logic using Vue's Composition API. Functionally, auto-import mechanism is identical.
*   **Scope:** Not available in the `server/` directory (use `server/utils/` or `shared/utils/` instead).

> **Read More:** [Auto-imports](#32-auto-imports)

### 4.17. Top-Level Files

*   **`app.vue`:**
    *   Main entry point component. Renders its content for *every* route.
    *   Use `<NuxtPage />` to display the current page component if using the `pages/` directory.
    *   Use `<NuxtLayout>` to incorporate layouts.
    *   If only one layout is needed, `app.vue` can serve as that layout.
    *   If `pages/` directory doesn't exist, `app.vue` defines the entire application view.

*   **`nuxt.config.ts` (or `.js`, `.mjs`):**
    *   Primary configuration file for Nuxt.
    *   Use `defineNuxtConfig` helper for type safety.
    *   Defines modules, runtime config, build options, aliases, plugins, CSS, etc.
    *   Changes trigger a full restart in development.

*   **`app.config.ts` (or `.js`, `.mjs`):**
    *   Exposes *public*, *build-time* configuration.
    *   Reactive and accessible via `useAppConfig()`.
    *   Cannot be overridden by environment variables after build.
    *   Suitable for theme config, titles, non-sensitive project settings.
    *   Values are bundled directly into the client code.
    *   Located in `srcDir` (root by default, or `app/` with v4 structure).

*   **`package.json`:**
    *   Standard Node.js manifest file. Defines dependencies, scripts (`dev`, `build`, `generate`), project metadata.
    *   Should include `nuxt` as a dependency/devDependency.
    *   Typically includes `"type": "module"` for native ESM support.

*   **`tsconfig.json`:**
    *   TypeScript configuration file.
    *   Should extend `./.nuxt/tsconfig.json` to inherit Nuxt's generated settings and aliases.
    *   Allows customizing TS compiler options.

*   **`.env`:**
    *   Stores environment variables for *development* and *build time*.
    *   Loaded automatically by Nuxi (`dev`, `build`, `generate`).
    *   Use `NUXT_`-prefixed variables to override `runtimeConfig`.
    *   **Not used in production runtime.** Set environment variables via hosting provider methods.
    *   Should be added to `.gitignore`.

*   **`.gitignore`:**
    *   Specifies files/directories Git should ignore.
    *   Must include `.nuxt/`, `.output/`, `node_modules/`, `.env*` (except `.env.example`).

*   **`.nuxtignore`:**
    *   Specifies files/directories Nuxt should ignore during build scans (layouts, pages, components, middleware, etc.). Uses `.gitignore` syntax.

*   **`.nuxtrc`:**
    *   Alternative configuration file using a flat INI-like syntax.
    *   Less common than `nuxt.config.ts`.
    *   Can be global (`~/.nuxtrc`) or project-level. `nuxt.config.ts` overrides `.nuxtrc`.

*   **`error.vue`:**
    *   Custom error page component. Displayed for fatal errors (SSR or client-side with `fatal: true`).
    *   Receives `error` prop (`{ statusCode, statusMessage, message, ... }`).
    *   Use `clearError({ redirect: '/path' })` to dismiss the error page.
    *   Not a regular page/route; lives in `srcDir`.

---

## 5. Extensibility

### 5.1. Modules Usage

Modules extend Nuxt core. Add them via the `modules` array in `nuxt.config.ts`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    // ... other modules
  ]
})
```

Modules can add components, composables, plugins, server routes, modify config, hook into the build/runtime process, etc.

> **Read More:** [Explore Nuxt Modules](/modules)

### 5.2. Module Author Guide

Creating custom modules allows encapsulating reusable logic and integrations.

**Quick Start:** Use the official module starter:
`npx create-nuxt@latest -t module my-module`

**Anatomy:**
*   **`src/module.ts`:** The main module definition file.
*   **`src/runtime/`:** Directory for runtime code (plugins, components, composables, server handlers) injected by the module.
*   **`playground/`:** A Nuxt app for developing and testing the module locally.

**Module Definition (`defineNuxtModule`):**
*   Provides structure, defaults, meta-information, and type safety.
*   `meta`: Name, configKey, compatibility.
*   `defaults`: Default options for the module.
*   `setup(options, nuxt)`: Main function containing module logic. Access resolved options and the Nuxt instance (`nuxt`).

```ts
// src/module.ts
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
    compatibility: { nuxt: '^3.0.0' }
  },
  defaults: {
    apiKey: ''
  },
  setup(options, nuxt) {
    // Access resolved options (user config merged with defaults)
    console.log(options.apiKey)

    // Get resolver for runtime paths
    const { resolve } = createResolver(import.meta.url)

    // Add runtime plugin
    addPlugin(resolve('./runtime/plugin'))

    // Expose options to runtime config
    nuxt.options.runtimeConfig.public.myModule = { apiKey: options.apiKey }
  }
})
```

**Nuxt Kit (`@nuxt/kit`):**
*   Provides utilities for module authors:
    *   `addPlugin`, `addComponent`, `addImports`, `addLayout`, `addServerHandler`, `addTemplate`, etc.
    *   `extendPages`, `extendRouteRules`
    *   `resolvePath`, `createResolver`
    *   `installModule` (to use other modules within yours)
    *   `useLogger`
    *   `defineNuxtModule`
    *   Compatibility checkers (`isNuxt2`, `assertNuxtCompatibility`)
*   Should be listed as a dependency in your module's `package.json`.

**Testing:**
*   Use `@nuxt/test-utils` for end-to-end testing with fixtures.
*   Unit/Integration testing setup is evolving (see RFC #18399).

**Best Practices:**
*   Prefix exposed interfaces (components, composables) (`<MyModuleButton>`).
*   Provide types (use TypeScript).
*   Use native ESM syntax.
*   Document usage clearly.
*   Provide StackBlitz examples.
*   Use `meta.compatibility` for version constraints.
*   Defer heavy async logic to Nuxt hooks.
*   Clean up resources (watchers, intervals) in the `close` hook.

> **Read More:** [Nuxt Kit API](#api-reference-kit)

### 5.3. Layers

Layers allow extending a Nuxt application with features from another Nuxt project structure (local or remote).

*   **Use Cases:** Component libraries, shared utils/config, themes, modular architecture (Domain-Driven Design).
*   **Usage:**
    *   Place layers in `~/layers/` for auto-registration (Nuxt >= 3.12).
    *   Explicitly extend via `extends` array in `nuxt.config.ts`:
        ```ts
        // nuxt.config.ts
        export default defineNuxtConfig({
          extends: [
            '../base-layer', // Local path
            '@my-themes/core', // npm package
            'github:user/repo#main', // Git repo
            ['github:user/private-repo', { auth: process.env.GITHUB_TOKEN }] // Private repo
          ]
        })
        ```
*   **Structure:** Layers have the same structure as a Nuxt app (components, pages, server, config files).
*   **Merging:** Config (`nuxt.config`, `app.config`) and files (components, pages, etc.) are merged. Project files override layer files. Earlier layers in `extends` override later ones.
*   **Named Aliases:** Access layer files using `#layers/layer-name/...`. Define name via `meta.name` in layer's `nuxt.config` or config object in `extends`. Auto-aliases created for `~/layers/`.
*   **Relative Paths:** Use relative paths or named aliases within layers for imports. Resolve paths carefully in layer `nuxt.config.ts` using `createResolver` or `path.join`.
*   **Publishing:** Layers can be published as npm packages or hosted on Git. Ensure `package.json` includes necessary files and dependencies.

> **Read More:** [Layers Concepts](/docs/getting-started/layers)

---

## 6. Development Experience

### 6.1. Styling

Nuxt offers flexible styling options.

*   **Local Stylesheets (`assets/`):**
    *   Place CSS, SCSS, etc., files in `assets/`.
    *   Import within components (`<script>` or `<style>`).
    *   Include globally via `css` array in `nuxt.config.ts`.
    *   Styles are processed by the build tool (Vite/webpack) and usually inlined or bundled.

*   **Public Stylesheets (`public/`):**
    *   Files are served directly. Not processed.
    *   Reference via root path (e.g., `<link rel="stylesheet" href="/my-style.css">`). Use `app.head` in `nuxt.config` or `useHead` to add links.

*   **External Stylesheets:**
    *   Add `<link>` tags via `app.head` in `nuxt.config` or `useHead`.
    *   Can be added dynamically with `useHead`.
    *   Can be injected server-side via Nitro `render:html` hook.

*   **CSS Preprocessors (SCSS, Sass, Less, Stylus):**
    *   Install the preprocessor (`npm install -D sass`).
    *   Use `<style lang="scss">` in components or import `.scss` files.
    *   Inject global variables/mixins via `vite.css.preprocessorOptions` in `nuxt.config`.

*   **Single File Component (SFC) Styling:**
    *   `<style>` block: Write standard CSS.
    *   `<style scoped>`: Styles only apply to the current component.
    *   `<style module>`: Use CSS Modules (`$style.className`).
    *   `v-bind()` in CSS: Use JavaScript variables/expressions in styles (`color: v-bind(myColor)`).
    *   Class/Style Bindings: Dynamically bind classes/styles using `:class` and `:style`.

*   **PostCSS:**
    *   Built-in and configurable via `postcss.plugins` in `nuxt.config`.
    *   Default plugins: `postcss-import`, `postcss-url`, `autoprefixer`, `cssnano`.

*   **CSS Frameworks & UI Libraries:**
    *   Integrate frameworks like Tailwind CSS or UnoCSS, often via dedicated Nuxt modules (`@nuxtjs/tailwindcss`, `@unocss/nuxt`).
    *   Use UI libraries like Nuxt UI.
    *   Modules simplify integration but manual setup is possible via plugins/config.

*   **Fonts:**
    *   Place local font files in `public/fonts/`.
    *   Reference using `@font-face` in CSS (`url('/fonts/myfont.woff')`).
    *   Use modules like `@nuxtjs/google-fonts` or UnoCSS web font presets.
    *   Consider font optimization modules like `@nuxtjs/fontaine`.

*   **Advanced Optimization:**
    *   Fontaine module for CLS reduction.
    *   LCP optimizations (CDN, compression, HTTP/2, same domain).
    *   Experimentally disable external CSS file generation if all CSS is inlined (`build:manifest` hook).

### 6.2. Assets Handling

Nuxt uses two directories for assets:

*   **`public/` Directory:**
    *   Content is served directly at the server root (e.g., `public/favicon.ico` -> `/favicon.ico`).
    *   Files are *not* processed by the build tool.
    *   Suitable for: `robots.txt`, `favicon.ico`, images, files that must retain their exact name/location.
    *   Reference using root path: `<img src="/img/nuxt.png">` (for `public/img/nuxt.png`).

*   **`assets/` Directory:**
    *   Content is processed by the build tool (Vite/webpack).
    *   Suitable for: Stylesheets (CSS, SASS), fonts, images that benefit from optimization/bundling.
    *   Reference using `~/assets/` path: `<img src="~/assets/img/nuxt.png">`.
    *   Files are *not* served at a static `/assets/` URL; their final URL depends on the build process (often hashed).

### 6.3. SEO and Meta Tags

Nuxt uses [Unhead](https://unhead.unjs.io) for managing `<head>` tags.

*   **`nuxt.config.ts` (`app.head`):**
    *   Set static, app-wide head tags (default title, language, favicon).
    *   Cannot use reactive data.
    *   Good for unchanging defaults.
    *   Nuxt provides default `charset` and `viewport` tags, which can be overridden here.
    ```ts
    // nuxt.config.ts
    export default defineNuxtConfig({
      app: {
        head: {
          title: 'Nuxt App',
          htmlAttrs: { lang: 'en' },
          link: [{ rel: 'icon', href: '/favicon.ico' }],
          meta: [{ name: 'description', content: 'My Nuxt App' }]
        }
      }
    })
    ```

*   **`useHead(metaObject)`:**
    *   Composable for managing head tags programmatically within components or plugins.
    *   Supports reactive data (refs, computed properties).
    *   Recommended for dynamic or page-specific tags.
    *   Input object keys: `title`, `titleTemplate`, `meta`, `link`, `style`, `script`, `noscript`, `htmlAttrs`, `bodyAttrs`.
    ```vue
    <script setup lang="ts">
    const pageTitle = ref('My Page')
    useHead({
      title: pageTitle,
      meta: [
        { name: 'description', content: () => `Description for ${pageTitle.value}` }
      ]
    })
    </script>
    ```

*   **`useHeadSafe(metaObject)`:**
    *   Similar to `useHead` but sanitizes input to prevent XSS attacks from user-provided data. Only allows specific, safe attributes. Recommended when using external data.

*   **`useSeoMeta(options)`:**
    *   Composable for defining common SEO meta tags (Open Graph, Twitter Cards) with type safety.
    *   Helps avoid typos and ensures correct `name` vs. `property` attributes.
    *   Supports reactivity like `useHead`.
    ```vue
    <script setup lang="ts">
    useSeoMeta({
      title: 'My Amazing Site',
      ogTitle: 'My Amazing Site',
      description: 'This is my amazing site.',
      ogDescription: 'This is my amazing site.',
      ogImage: 'https://example.com/image.png',
      twitterCard: 'summary_large_image',
    })
    </script>
    ```

*   **`useServerSeoMeta(options)` (Deprecated):**
    *   Previously used for non-reactive SEO meta tags rendered only on the server.
    *   **Replacement:** Use `useSeoMeta` inside `if (import.meta.server) { ... }` for better performance.

*   **Head Components (`<Title>`, `<Meta>`, `<Link>`, etc.):**
    *   Alternative way to define head tags directly in templates.
    *   Note the capitalization (`<Meta>`, not `<meta>`).
    *   Accept reactive props.
    *   `<Head>` and `<Body>` components can wrap other head components for organization (doesn't affect render location).

*   **Features:**
    *   **Reactivity:** All composables accept refs/computed values.
    *   **Title Template:** Define a template in `app.vue` or `nuxt.config` to format page titles (`titleTemplate: '%s - Site Name'`).
    *   **Template Params:** Provide additional placeholders for `titleTemplate`.
    *   **Body Tags:** Use `tagPosition: 'bodyClose'` on `script`/`style` tags in `useHead` to append them to `<body>`.

### 6.4. Error Handling

Nuxt handles errors in different contexts (Vue rendering, server/client startup, Nitro server).

*   **Vue Errors:**
    *   Use `onErrorCaptured` lifecycle hook within components.
    *   Use Nuxt's `vue:error` app hook in plugins for top-level handling.
    *   Use `vueApp.config.errorHandler` in plugins for global handling (receives handled and unhandled errors).

*   **Startup Errors:**
    *   Nuxt calls the `app:error` hook for errors during plugin execution, initial rendering, or app mounting.

*   **Nitro Server Errors:**
    *   Currently no specific server-side handler hook, but fatal errors render the error page.

*   **JS Chunk Errors:**
    *   Nuxt automatically handles chunk loading errors during navigation by hard reloading (default).
    *   Configure via `experimental.emitRouteChunkError` (`false`, `manual`, `automatic-immediate`).
    *   Handle manually using `app:chunkError` hook.
    *   Use `reloadNuxtApp()` utility for manual reloads.

*   **Error Page (`error.vue`):**
    *   Custom page displayed for fatal errors (unhandled server errors, client errors with `fatal: true`).
    *   Place `error.vue` in the source directory (root or `srcDir`).
    *   Receives `error` prop (`{ statusCode, statusMessage, message, data, ... }`).
    *   Use `clearError({ redirect: '/path' })` to dismiss the error page.
    *   Not a regular page; doesn't use `pages/` routing or `definePageMeta`. Can use `<NuxtLayout>`.

*   **Error Utilities:**
    *   `useError()`: Accesses the current global Nuxt error being handled (client/server).
    *   `createError(err)`: Creates an error object (`{ statusCode, message, fatal, data, ... }`). Meant to be `throw`n. Triggers error page if fatal or on server. Throws normally on client if not fatal.
    *   `showError(err)`: Programmatically triggers the full-screen error page (client/server). Prefer `throw createError()`.
    *   `clearError(options?)`: Clears the current error, optionally redirects.

*   **Component Error Boundary (`<NuxtErrorBoundary>`):**
    *   Component that catches client-side errors within its default slot.
    *   Prevents errors from reaching the global handler.
    *   Renders the `#error` slot when an error occurs.
    *   `#error` slot receives `error` prop and a `clearError` function.
    *   Emits `@error` event.

### 6.5. Transitions

Nuxt leverages Vue's `<Transition>` for page and layout transitions.

*   **Page Transitions:**
    *   Enable globally via `app.pageTransition` in `nuxt.config.ts` (e.g., `{ name: 'page', mode: 'out-in' }`).
    *   Define corresponding CSS classes (`.page-enter-active`, `.page-leave-to`, etc.) in `app.vue` or global CSS.
    *   Override per-page using `definePageMeta({ pageTransition: { ... } })`.
    *   Disable per-page with `definePageMeta({ pageTransition: false })`.

*   **Layout Transitions:**
    *   Enable globally via `app.layoutTransition` in `nuxt.config.ts`.
    *   Define CSS classes (`.layout-enter-active`, etc.).
    *   Applied when navigating between pages that use *different* layouts.
    *   Override per-page using `definePageMeta({ layoutTransition: { ... } })`.
    *   Disable per-page with `definePageMeta({ layoutTransition: false })`.

*   **Global Settings:**
    *   `app.pageTransition` and `app.layoutTransition` accept [`TransitionProps`](https://vuejs.org/api/built-in-components.html#transition).
    *   Disabling globally: set to `false` in `nuxt.config`.

*   **JavaScript Hooks:**
    *   Use JS hooks (`onBeforeEnter`, `onEnter`, etc.) within transition options (in `nuxt.config` or `definePageMeta`) for complex animations (e.g., with GSAP).

*   **Dynamic Transitions:**
    *   Use inline middleware within `definePageMeta` to change `to.meta.pageTransition.name` based on navigation direction (e.g., sliding left/right).

*   **`<NuxtPage>` Transition Prop:**
    *   Can set transitions directly on `<NuxtPage :transition="{...}" />`. This cannot be overridden by `definePageMeta`.

*   **View Transitions API (Experimental):**
    *   Native browser API for transitions, potentially between unrelated elements.
    *   Enable via `experimental.viewTransition: true` (or `'always'`) in `nuxt.config`.
    *   Handles page transitions automatically when enabled.
    *   Can be disabled globally (`app.viewTransition: false`) or per-page (`definePageMeta({ viewTransition: false })`).
    *   If using alongside Vue transitions, disable Vue transitions when View Transitions are supported using middleware.
    *   **Known Issues:** May freeze DOM updates during data fetching within `<Suspense>`.

### 6.6. Views (`app.vue`, Components, Pages, Layouts)

Nuxt uses several layers to build the UI:

1.  **`app.vue`:**
    *   The main, root component. Entry point for the Vue application.
    *   Renders its content on *every* route.
    *   If `pages/` directory exists, it *must* include `<NuxtPage />` (optionally wrapped by `<NuxtLayout>`).
    *   If `pages/` directory doesn't exist, `app.vue` defines the entire view.
    *   Suitable for global elements (headers, footers) if not using layouts, or for wrapping layouts.

2.  **`components/`:**
    *   Reusable UI pieces (buttons, menus, etc.).
    *   Auto-imported.

3.  **`pages/`:**
    *   Vue components representing specific routes.
    *   Rendered within `<NuxtPage />`.

4.  **`layouts/`:**
    *   Wrappers for pages, defining common structure (header, footer, sidebar).
    *   Contain `<slot />` to render page content.
    *   Activated via `<NuxtLayout>` component or page metadata.

**Advanced HTML Template:**
*   Modify the base HTML structure (`<html>`, `<head>`, `<body>`) server-side using a Nitro plugin and the `render:html` hook.

### 6.7. Code Style (ESLint)

*   **Recommended:** Use the [`@nuxt/eslint`](https://eslint.nuxt.com/packages/module) module.
*   **Setup:** `npx nuxi module add eslint`. This installs dependencies and generates `eslint.config.mjs` (for ESLint Flat Config, default in v9+).
*   **Configuration:** Customise the generated `eslint.config.mjs`.
*   **Legacy:** For older `.eslintrc` format, use `@nuxt/eslint-config` manually. Migration to flat config is recommended.

### 6.8. Debugging

*   **Sourcemaps:** Enabled by default for server build and client dev build. Configure via `sourcemap: { server: true, client: true }` in `nuxt.config`.
*   **Node Inspector:** Run `nuxi dev --inspect`. Attach Chrome DevTools debugger (Node icon). Requires Node/Chrome on the same platform (no Docker).
*   **IDE Debugging (VS Code Example):**
    *   Create `.vscode/launch.json`.
    *   Add configurations for "client: chrome" (launching Chrome) and "server: nuxt" (launching `nuxi dev` via Node).
    *   Add a "compound" configuration to launch both.
    *   *(Requires `nuxi` installed as devDependency if using pnpm).*
*   **IDE Debugging (JetBrains Example):**
    *   Create `nuxt.run.xml` in the project root.
    *   Add configurations for "client: chrome", "server: nuxt", and "fullstack: nuxt" compound.

### 6.9. Testing

Nuxt supports testing via `@nuxt/test-utils`.

**Unit Testing:**

*   **Setup:**
    *   Install deps: `npm i -D @nuxt/test-utils vitest @vue/test-utils happy-dom`
    *   Add `@nuxt/test-utils/module` to `modules` in `nuxt.config` (optional, for DevTools integration).
    *   Create `vitest.config.ts` using `defineVitestConfig`.
    *   Ensure `"type": "module"` in `package.json` or use `.mjs` extension for config.
    *   Use `.env.test` for test environment variables.
*   **Nuxt Runtime Environment:**
    *   Opt-in per file: Add `.nuxt.` to filename (e.g., `test.nuxt.spec.ts`) or add `// @vitest-environment nuxt` comment.
    *   Opt-in globally: Set `test.environment: 'nuxt'` in `vitest.config.ts`. Allows configuring `rootDir`, `domEnvironment` (`happy-dom` or `jsdom`), Nuxt overrides.
    *   Runs tests in a DOM environment (`happy-dom`/`jsdom`) with a global Nuxt app initialized (plugins run, etc.). Be careful with global state mutations.
*   **Built-in Mocks:** Configure mocks like `intersectionObserver` (default `true`) and `indexedDB` (default `false`) in `environmentOptions.nuxt.mock`.
*   **Helpers (`@nuxt/test-utils/runtime`):**
    *   `mountSuspended(Component, options)`: Mounts Vue components within Nuxt context (like `@vue/test-utils`' `mount` but handles async setup/injections).
    *   `renderSuspended(Component, options)`: Renders components using `@testing-library/vue` within Nuxt context. Requires `@testing-library/vue` installed and Vitest `globals: true`.
    *   `mockNuxtImport('composableName', factoryFn)`: Mocks auto-imported composables (uses `vi.mock`). Use `vi.hoisted` for dynamic mock implementations.
    *   `mockComponent('ComponentName' | path, factoryFn | path)`: Mocks auto-imported components.
    *   `registerEndpoint('/api/path', handlerFn | { method, handler })`: Mocks Nitro API endpoints for testing components that fetch data.
*   **Using `@vue/test-utils` Standalone:** Possible for components *not* relying on Nuxt context/auto-imports. Requires separate Vitest setup (`@vitejs/plugin-vue`, `happy-dom`).

**End-To-End (E2E) Testing:**

*   **Setup (`@nuxt/test-utils/e2e`):**
    *   Call `await setup({ ...options })` within `describe` blocks (or globally). Handles Nuxt app building/serving.
    *   **Options:** `rootDir`, `configFile`, `build` (default `true`), `server` (default `true`), `port`, `host` (use existing server/URL), `browser` (default `false`, enable Playwright), `browserOptions` (type, launch options), `runner` (`vitest`, `jest`, `cucumber`).
*   **APIs:**
    *   `$fetch(url)`: Fetches HTML of a server-rendered page.
    *   `fetch(url)`: Fetches full response object.
    *   `url(path)`: Gets full URL including test server port.
*   **Browser Testing (Playwright):**
    *   **Programmatic:** If `browser: true` in `setup`, use `createPage(path?)` to get a Playwright `Page` instance.
    *   **Playwright Test Runner:**
        *   Install `@playwright/test`.
        *   Configure Nuxt options globally in `playwright.config.ts` under `use.nuxt`.
        *   Import `test`, `expect` from `@nuxt/test-utils/playwright`.
        *   Use `goto(path, options)` within tests.

**Conflict:** E2E (`@nuxt/test-utils/e2e`) and Runtime (`@nuxt/test-utils/runtime`) utilities cannot be used in the same test file due to different environment needs. Split tests or use file naming/comments to specify environment.

### 6.10. Configuration

Nuxt uses multiple files for configuration.

*   **`nuxt.config.ts`:**
    *   Primary configuration file (root directory).
    *   Overrides default Nuxt behavior.
    *   Use `defineNuxtConfig` helper.
    *   Configure modules, build options, runtime config, plugins, CSS, aliases, app head defaults, etc.
    *   Supports environment overrides (`$production`, `$development`, `$env.staging`). Select via `nuxi --envName staging`.
    *   Cannot contain non-serializable values directly if needed at runtime (use plugins).
    *   **Environment Variables:** `runtimeConfig` values can be overridden by `NUXT_` prefixed env vars at *runtime*. `.env` file loaded only at *build/dev* time.

*   **`app.config.ts`:**
    *   Located in `srcDir` (root or `app/`).
    *   Exposes *public*, *build-time* configuration.
    *   Reactive, accessed via `useAppConfig()`.
    *   Values are bundled; cannot be changed by env vars after build.
    *   Use `defineAppConfig` helper.
    *   Suitable for theme config, titles, non-sensitive settings.
    *   Can be updated at runtime with `updateAppConfig()`.
    *   Supports layer merging strategies using function mergers.

*   **`runtimeConfig` vs. `app.config`:**
    *   `runtimeConfig`: For private keys or public values needing override via environment variables *after* build. Hydrated client-side (public keys only).
    *   `app.config`: For public, build-time determined config. Bundled client-side. Supports non-primitive JS types, HMR.

*   **External Configuration Files:**
    *   Nuxt aims for `nuxt.config.ts` as the single source of truth for *its* integrations (Nitro, PostCSS, Vite, webpack). Configure these via dedicated keys (`nitro`, `postcss`, `vite`, `webpack`).
    *   Other tool configs (TypeScript, ESLint, Prettier, Tailwind, Vitest) remain in their standard files (`tsconfig.json`, `eslint.config.js`, etc.).

*   **Vue Configuration:**
    *   Pass options to Vite's Vue plugins: `vite.vue`, `vite.vueJsx`.
    *   Pass options to webpack's `vue-loader`: `webpack.loaders.vue`.
    *   Enable experimental Vue features: `vue.propsDestructure`, etc.

### 6.11. Nuxt Upgrade Guide

*   **Latest Release:** Use `npx nuxi upgrade`.
*   **Nightly Channel:** Test upcoming features. Use `npm:nuxt-nightly@latest` (tracks v4) or `npm:nuxt-nightly@3x` in `package.json`. Be cautious of breaking changes.
*   **Testing Nuxt 4 (Before Release):**
    *   Upgrade to latest Nuxt 3 release (>= 3.12).
    *   Set `future: { compatibilityVersion: 4 }` in `nuxt.config.ts`. This changes defaults to v4 behavior.
    *   Use codemods (`npx codemod@latest nuxt/4/migration-recipe`) to automate common migrations.
    *   **Key v4 Changes (Opt-in via `compatibilityVersion: 4`):**
        *   **New Directory Structure:** `srcDir` defaults to `app/`. `server/`, `layers/`, `modules/`, `public/`, `content/` resolve relative to root. Migration involves moving folders into `app/`. Not required if Nuxt detects old structure.
        *   **Route Metadata Deduplication:** Meta like `name`, `path` only on `route` object, not `route.meta`.
        *   **Normalized Component Names:** Vue component names match Nuxt auto-import pattern (`SomeFolderMyComponent`). Affects `<KeepAlive>` by name and test utils `findComponent`.
        *   **Unhead v2:** Updated `<head>` management. Removed `vmid`, `hid`, `children`, `body` props. Requires explicit opt-in for Template Params/Alias Sorting plugins.
        *   **SPA Loading Template Location:** Defaults to rendering *alongside* `#__nuxt`, not *within*. Affects CSS/DOM selectors targeting the template.
        *   **Granular Inline Styles:** Only inlines Vue component CSS by default, not global CSS.
        *   **Scan Page Meta After Resolution:** `pages:extend` hook runs before meta scanning; use new `pages:resolved` hook to modify scanned meta.
        *   **Shared Prerender Data:** `useAsyncData`/`useFetch` data is shared across prerendered pages by default. Ensure unique keys resolve to unique data.
        *   **`useAsyncData` Defaults:** `data`/`error` default to `undefined`, not `null`.
        *   **`refresh` `dedupe` option:** Removed `boolean` aliases; use `'cancel'` or `'defer'`.
        *   **`clearNuxtData` with `default`:** Resets `useAsyncData` to its provided `default` factory value, not `undefined`.
        *   **Shallow Data Reactivity:** `data` from `useAsyncData`/`useFetch` is `shallowRef` by default. Use `{ deep: true }` option for deep reactivity if needed.
        *   **Absolute Watch Paths:** `builder:watch` hook emits absolute paths.
        *   **Removal of `window.__NUXT__`:** Use `useNuxtApp().payload` instead.
        *   **Directory Index Scanning:** `middleware/` subfolders scanned for `index` files.
        *   **Template Compilation:** Removes `lodash/template` (.ejs) support and template utilities (`serialize`, etc.). Use `getContents()` function or libraries like `knitwork`.
        *   **Removed Experimental Flags:** `treeshakeClientOnly`, `configSchema`, `polyfillVueUseHead`, `respectNoSSRHeader`, `vite.devBundler` are no longer configurable.

*   **Nuxt 2 to Nuxt 3+:** Use the detailed [Migration Guide](/docs/migration/overview).
*   **Nuxt 2 to Nuxt Bridge:** Progressive migration path. Use the [Bridge Guide](/docs/bridge/overview).

### 6.12. Recipes

#### Custom useFetch

Create a reusable composable wrapping `useFetch` or `useAsyncData` to encapsulate common options (baseURL, headers, error handling).

1.  **Create Custom `$fetch` Instance:**
    *   Use a Nuxt plugin (`plugins/api.ts`).
    *   Use `$fetch.create({ baseURL, onRequest, onResponseError, ... })`.
    *   `onRequest`: Add auth tokens from session/state.
    *   `onResponseError`: Handle errors globally (e.g., redirect on 401).
    *   Provide the instance: `return { provide: { api: customFetch } }`.

2.  **Create Custom Composable:**
    *   `composables/useMyFetch.ts`.
    *   Define `useMyFetch(url, options)` that calls `useFetch(url, { ...options, $fetch: useNuxtApp().$api })`.
    *   Can also wrap `useAsyncData`.

#### Sessions and Authentication

Use `nuxt-auth-utils` module for simple session management.

1.  **Install:** `npx nuxi module add auth-utils`.
2.  **Configure:** Set `NUXT_SESSION_PASSWORD` (at least 32 chars) in `.env` (dev) and production environment.
3.  **Login API (`/api/login.post.ts`):**
    *   Read validated email/password (`readValidatedBody`).
    *   Verify credentials.
    *   On success, call `await setUserSession(event, { user: { ... } })`.
    *   On failure, `throw createError({ statusCode: 401 })`.
4.  **Login Page (`pages/login.vue`):**
    *   Use `useUserSession()` composable (`loggedIn`, `fetch`).
    *   Create login form.
    *   On submit, `$fetch('/api/login')`. On success, call `await fetch()` (to refresh client session) and `navigateTo('/')`.
5.  **Protect API Routes:**
    *   In protected API handlers (`/api/user/stats.get.ts`), call `const { user } = await requireUserSession(event)` at the beginning. Throws 401 if not authenticated.
6.  **Protect App Routes (Middleware):**
    *   Create `middleware/authenticated.ts`.
    *   Use `const { loggedIn } = useUserSession()`.
    *   If `!loggedIn.value`, `return navigateTo('/login')`.
    *   Apply middleware to pages: `definePageMeta({ middleware: ['authenticated'] })`.
7.  **Authenticated Page (`pages/index.vue`):**
    *   Apply middleware.
    *   Use `useUserSession()` (`user`, `clear`).
    *   Display user info.
    *   Add logout button: calls `await clear()`, then `navigateTo('/login')`.

#### Custom Routing

Modify Nuxt's file-based routing.

*   **`app/router.options.ts`:**
    *   Export a config object satisfying `RouterConfig`.
    *   `routes`: Function `(_routes) => [...]` returning a completely custom route array. Overrides file-based routes. Useful for non-page-based apps. Does *not* automatically apply page meta.
    *   `history`: Function `(base) => createWebHistory(base)` (or `createMemoryHistory`, `createWebHashHistory`).
    *   `scrollBehavior`: Customize scroll behavior on navigation.
*   **`pages:extend` Hook (in `nuxt.config.ts`):**
    *   Modify the array of `NuxtPage` objects scanned from the `pages/` directory.
    *   Add/remove/modify routes *before* they are passed to `vue-router`. Preserves page meta integration.
*   **Nuxt Module:** Use Kit utilities `extendPages` or `extendRouteRules` for packaged routing solutions.

#### Using Vite Plugins

Integrate Vite plugins not available as Nuxt modules.

1.  Install the Vite plugin (`npm i -D @rollup/plugin-yaml`).
2.  Import the plugin in `nuxt.config.ts`.
3.  Add it to the `vite.plugins` array.

```ts
// nuxt.config.ts
import yaml from '@rollup/plugin-yaml'

export default defineNuxtConfig({
  vite: {
    plugins: [
      yaml()
    ]
  }
})
```

### 6.13. Advanced Topics

#### Hooks

Nuxt provides hooks to tap into different lifecycle stages.

*   **Nuxt Hooks (Build Time):** Used in modules and `nuxt.config`. Examples: `ready`, `close`, `modules:done`, `build:before`, `build:done`, `pages:extend`, `nitro:config`.
*   **App Hooks (Runtime):** Used in plugins and composables. Run on server and/or client. Examples: `app:created`, `app:error`, `vue:error`, `app:rendered` (server), `app:mounted` (client), `page:start`, `page:finish`.
*   **Nitro Hooks (Runtime, Server-Side):** Used in server plugins (`server/plugins/`). Examples: `render:html`, `render:response`, `request`, `error`.
*   **Adding Custom Hooks:** Augment types (`RuntimeNuxtHooks`, `NuxtHooks`, `NitroRuntimeHooks`).

> **Read More:** [Full Hook List](#api-reference-advanced)

#### Import Meta

Object providing metadata about the current module.

*   **Runtime Properties (App):**
    *   `import.meta.client`, `import.meta.browser`: True on client.
    *   `import.meta.server`, `import.meta.nitro`: True on server.
    *   `import.meta.dev`: True in development.
    *   `import.meta.test`: True during tests.
    *   `import.meta.prerender`: True during build-time prerendering.
    *   _Use these for tree-shaking code specific to an environment._
*   **Builder Properties (Modules, `nuxt.config`):**
    *   `import.meta.env`: Alias for `process.env`.
    *   `import.meta.url`: Resolvable path/URL for the current file (useful with `createResolver`).

#### Nuxt Internals

*   **Nuxt Interface (Build Context):** Created by `nuxi dev`/`build`. Holds options, state, build hooks. Accessed via Kit utilities (`useNuxt`). One instance per process. Extended by Modules.
*   **NuxtApp Interface (Runtime Context):** Created per request (SSR) or once (CSR). Holds Vue app instance, runtime hooks, payload, ssrContext. Accessed via `useNuxtApp()`. Extended by Plugins.
*   **Context Separation:** Build context and runtime context are isolated.

#### Experimental Features

Opt-in features subject to change. Enable via `experimental` key in `nuxt.config.ts`. Examples:
*   `asyncContext`: Native async context for composables.
*   `viewTransition`: View Transitions API integration.
*   `componentIslands`: Server components (`.server.vue`, `<NuxtIsland>`).
*   `typedPages`: Type-safe routing (`unplugin-vue-router`).
*   `payloadExtraction`: Extract static page payloads during `generate`.
*   `inlineRouteRules`: Use `defineRouteRules` macro in pages.
*   `sharedPrerenderData`: Share `useAsyncData` results across prerendered pages.
*   `clientFallback`: Use `<NuxtClientFallback>` component.
*   `restoreState`: Restore `useState` values after `reloadNuxtApp`.
*   `buildCache`: Cache build artifacts.
*   ...and many others. Check the latest Nuxt docs/schema for current flags.

#### Nightly Release Channel

Use the latest (potentially unstable) Nuxt builds.
*   **Opt-in:** Change `nuxt` dependency in `package.json` to `"npm:nuxt-nightly@latest"` (for v4) or `"npm:nuxt-nightly@3x"`. Remove lockfile and reinstall.
*   **Use Nuxi Nightly:** `npx nuxi-nightly@latest <command>`.

---

## 7. API Reference

### 7.1. Built-in Components

*   **`<ClientOnly>`:** Renders slot content only on the client-side.
    *   Props: `fallbackTag`, `fallback` (for SSR placeholder).
    *   Slot: `#fallback` (SSR placeholder content).
    *   Useful for components relying heavily on browser APIs or causing hydration mismatches.

*   **`<DevOnly>`:** Renders slot content only during development (`nuxi dev`). Content is removed from production build.
    *   Slot: `#fallback` (content to render in production).

*   **`<NuxtClientFallback>` (Experimental):** Renders slot content on the client if any child component errors during SSR. Requires `experimental.clientFallback: true`.
    *   Props: `fallbackTag`, `fallback`, `keepFallback`.
    *   Slot: `#fallback`.
    *   Event: `@ssr-error`.

*   **`<NuxtErrorBoundary>`:** Catches client-side errors within its default slot.
    *   Slot: `#error` (receives `error` prop and `clearError` function).
    *   Event: `@error`.

*   **`<NuxtIsland>` (Experimental):** Renders a component as an island (server-rendered HTML without client-side JS, unless interactive parts are marked). Used by `.server.vue` components. Requires `experimental.componentIslands: true`.
    *   Props: `name` (component name), `props`, `lazy`, `source`, `dangerouslyLoadClientComponents`.
    *   Slot: `#fallback`.
    *   Ref method: `refresh()`.
    *   Event: `@error`.

*   **`<NuxtLayout>`:** Wraps pages to apply layouts defined in `layouts/`.
    *   Props: `name` (layout name, defaults to 'default'), `fallback`. Accepts additional props passed down to the layout component via `$attrs`.
    *   Ref property: `layoutRef` (to access layout component instance).

*   **`<NuxtLink>`:** Handles internal and external links intelligently.
    *   Props: `to` (URL or route object), `href` (alias for `to`), `external` (force `<a>` tag), `replace`, `custom`, `activeClass`, `exactActiveClass`, `prefetch` (default `true`), `noPrefetch`, `prefetchOn` ('visibility' | 'interaction'), `prefetchedClass`, `target`, `rel`, `noRel`.
    *   Uses Vue Router for internal links, renders `<a>` for external.
    *   Smart prefetching based on viewport visibility or interaction.

*   **`<NuxtLoadingIndicator>`:** Displays a progress bar during page navigation.
    *   Place in `app.vue` or layouts.
    *   Props: `color`, `errorColor`, `height`, `duration`, `throttle`, `estimatedProgress`.
    *   Slot: `#default` (custom indicator HTML/component).

*   **`<NuxtPage>`:** Displays the current page component matched by the router. Required if using `pages/`.
    *   Props: `name`, `route`, `pageKey`, `transition`, `keepalive`. Accepts additional props passed down to the page component.
    *   Ref property: `pageRef` (to access page component instance).
    *   Wraps page in `<Suspense>`, `<KeepAlive>`, `<Transition>` based on props/config.

*   **`<NuxtPicture>`:** Drop-in replacement for `<picture>`. Optimizes images and serves modern formats (WebP). Requires `@nuxt/image` module.

*   **`<NuxtImg>`:** Drop-in replacement for `<img>`. Optimizes images. Requires `@nuxt/image` module.

*   **`<NuxtRouteAnnouncer>` (Nuxt >= 3.12):** Adds hidden element to announce route title changes for assistive technologies. Place in `app.vue` or layouts.
    *   Props: `atomic`, `politeness`.
    *   Slot: `#default` (customize announcement message).

*   **`<NuxtWelcome>`:** Default welcome page component for new Nuxt projects.

*   **`<Teleport>`:** Standard Vue component. Teleports content to another part of the DOM. SSR only supported for `to="#teleports"`. Use `<ClientOnly>` wrapper for other targets.

### 7.2. Built-in Composables

*   **`useAppConfig()`:** Accesses reactive configuration defined in `app.config.ts`.
*   **`useAsyncData(key?, handler, options?)`:** Fetches async data, handling SSR payload transfer. See [Data Fetching](#36-data-fetching).
*   **`useCookie(name, options?)`:** SSR-friendly way to read/write cookies. Returns a `Ref`. Options control `maxAge`, `expires`, `httpOnly`, `secure`, `sameSite`, `path`, `domain`, `encode`, `decode`, `default`, `readonly`, `watch`.
*   **`useError()`:** Returns the global Nuxt error object being handled (e.g., for display in `error.vue`).
*   **`useFetch(url, options?)`:** Wrapper around `useAsyncData` + `$fetch`. See [Data Fetching](#36-data-fetching).
*   **`useHead(metaObject)`:** Programmatically manage `<head>` tags. Accepts reactive object/properties. See [SEO & Meta Tags](#63-seo--meta-tags).
*   **`useHeadSafe(metaObject)`:** Sanitized version of `useHead` for user-provided data. See [SEO & Meta Tags](#63-seo--meta-tags).
*   **`useHydration(key, get, set)`:** Advanced composable for controlling hydration state synchronization between server and client, typically used in plugins/modules.
*   **`useLazyAsyncData(key?, handler, options?)`:** Like `useAsyncData` but with `lazy: true` by default (doesn't block client navigation).
*   **`useLazyFetch(url, options?)`:** Like `useFetch` but with `lazy: true` by default.
*   **`useLoadingIndicator()`:** Access and control the state (`isLoading`, `progress`, `error`) and methods (`start`, `finish`, `clear`, `set`) of the `<NuxtLoadingIndicator>`.
*   **`useNuxtApp()`:** Accesses the Nuxt runtime context (`nuxtApp`). Provides access to `vueApp`, `ssrContext`, `payload`, hooks, provided helpers. See [NuxtApp Interface](#73-nuxtapp).
*   **`useNuxtData(key)`:** Accesses the cached data previously fetched by `useAsyncData`/`useFetch` using the specified key. Returns `{ data: Ref }`.
*   **`usePreviewMode(options?)`:** Checks and controls preview mode state. Forces data refetch when enabled/disabled. Options to customize enable check, state, and callbacks.
*   **`useRequestEvent()`:** Accesses the underlying H3 request event object (server-only). Returns `undefined` on client.
*   **`useRequestFetch()`:** Returns a `$fetch` instance that automatically forwards request headers/cookies during SSR. Behaves like normal `$fetch` on client.
*   **`useRequestHeader(name)`:** Accesses a specific incoming request header by name (server-only). Returns `undefined` on client.
*   **`useRequestHeaders(include?)`:** Accesses all or a subset of incoming request headers (server-only). Returns `{}` on client.
*   **`useRequestURL()`:** Returns the full request URL object (works server/client, but check limitations with caching).
*   **`useResponseHeader(name)` (Nuxt >= 3.14):** Sets a server response header. Returns a `Ref` to set the header value. No effect on client.
*   **`useRoute()`:** Returns the current route object (reactive). Provides `params`, `query`, `path`, `fullPath`, `name`, `meta`, etc.
*   **`useRouteAnnouncer(options?)` (Nuxt >= 3.12):** Access and control the state (`message`, `politeness`) and methods (`set`, `polite`, `assertive`) of the route announcer used by `<NuxtRouteAnnouncer>`.
*   **`useRouter()`:** Returns the Vue Router instance. Provides methods like `push`, `replace`, `back`, `forward`, `go`, `resolve`, `addRoute`, etc. Use `navigateTo` for programmatic navigation where possible.
*   **`useRuntimeConfig()`:** Accesses runtime configuration defined in `nuxt.config#runtimeConfig`. Returns public config on client, full config on server.
*   **`useRuntimeHook(name, fn)` (Nuxt >= 3.14):** Registers a runtime Nuxt hook that is automatically cleaned up when the component unmounts.
*   **`useSeoMeta(options)`:** Type-safe composable for setting common SEO meta tags. See [SEO & Meta Tags](#63-seo--meta-tags).
*   **`useServerSeoMeta(options)` (Deprecated):** Non-reactive version of `useSeoMeta` for server-only rendering. Replace with `useSeoMeta` inside `if (import.meta.server)`.
*   **`useState(key, init?)`:** Creates reactive, SSR-friendly shared state. See [State Management](#37-state-management).
*   **`onBeforeRouteLeave(guard)`:** Vue Router navigation guard called before leaving the current component's route.
*   **`onBeforeRouteUpdate(guard)`:** Vue Router navigation guard called when the route changes but the component is reused.
*   **`onNuxtReady(callback)`:** Runs callback on client-side after the app finishes initializing/hydrating. Safe to call even after initialization.
*   **`onPrehydrate(callback)` (Nuxt >= 3.12):** Runs callback on client *before* hydration. Callback is stringified and inlined in HTML. Server-only effect.

### 7.3. Built-in Utilities

*   **`$fetch(url, options?)`:** Global isomorphic fetch utility. See [Data Fetching](#36-data-fetching).
*   **`abortNavigation(error?)`:** Stops current navigation. Usable only in route middleware. Returns `false`.
*   **`addRouteMiddleware(name | middleware, middlewareFn?, options?)`:** Dynamically adds route middleware from plugins.
*   **`callOnce(key?, fn, options?)` (Nuxt >= 3.9):** Runs function only once (SSR or first client render). Optional `mode: 'navigation'` runs once per navigation. Useful for non-data-fetching side effects.
*   **`clearError(options?)`:** Clears the current global Nuxt error and optionally redirects.
*   **`clearNuxtData(key?)`:** Clears cached data from `useAsyncData`/`useFetch`.
*   **`clearNuxtState(key?)`:** Clears cached state from `useState`.
*   **`createError(error)`:** Creates a Nuxt error object to be thrown. See [Error Handling](#64-error-handling).
*   **`defineNuxtComponent(options)`:** Helper like `defineComponent` but adds support for `asyncData` and `head` options in Options API components.
*   **`defineNuxtRouteMiddleware(middlewareFn)`:** Helper for defining type-safe route middleware functions in `middleware/`.
*   **`definePageMeta(meta)`:** Compiler macro in `pages/` components to define route metadata.
*   **`defineRouteRules(rules)` (Experimental):** Compiler macro in `pages/` components to define route rules inline. Requires `experimental.inlineRouteRules: true`.
*   **`navigateTo(to, options?)`:** Programmatic navigation utility (SSR/CSR). Handles internal/external routes. Options for `replace`, `redirectCode`, `external`, `open` (new tab). Recommended over `router.push/replace`.
*   **`prefetchComponents(name | names[])`:** Manually prefetch component code chunks.
*   **`preloadComponents(name | names[])`:** Manually preload component code chunks (higher priority than prefetch).
*   **`preloadRouteComponents(path)`:** Manually preload components needed for a specific route path.
*   **`prerenderRoutes(path | paths[])`:** Hint to Nitro to prerender additional routes during build/generate. Can include API routes.
*   **`refreshCookie(name)` (Nuxt >= 3.10):** Manually refreshes the value of a specific `useCookie` ref.
*   **`refreshNuxtData(key?)`:** Globally refresh cached data from `useAsyncData`/`useFetch`.
*   **`reloadNuxtApp(options?)`:** Performs a hard browser reload. Options to control path, TTL, force reload, and state persistence (requires `experimental.restoreState`).
*   **`setPageLayout(name)`:** Dynamically changes the layout for the current page. Must be called within Nuxt context, before layout renders on server.
*   **`setResponseStatus(event, code?, message?)`:** Sets the HTTP response status code and message (server-only).
*   **`showError(error)`:** Programmatically displays the full-screen error page. Prefer `throw createError()`.
*   **`updateAppConfig(newConfig)`:** Merges new values into the reactive `app.config` object at runtime.

### 7.4. Nuxi CLI Commands

*   **`nuxi add <template> <name>`:** Scaffolds components, pages, layouts, plugins, middleware, composables, API routes, layers. Modifiers like `--client`, `--server`, `--global`, `--method`.
*   **`nuxi analyze [rootDir]`:** Builds and analyzes the production bundle (experimental).
*   **`nuxi build [rootDir]`:** Builds the application for production into `.output/`. Options: `--prerender` (alias for `generate`), `--preset`, `--dotenv`, `--envName`.
*   **`nuxi build-module [rootDir]`:** Builds a Nuxt module using `@nuxt/module-builder`.
*   **`nuxi cleanup [rootDir]`:** Removes `.nuxt`, `.output`, and other cache directories.
*   **`nuxi dev [rootDir]`:** Starts the development server with HMR. Options: `--port`, `--host`, `--open`, `--https`, `--clipboard`, `--tunnel`, `--dotenv`, `--envName`.
*   **`nuxi devtools <enable|disable>`:** Enables/disables Nuxt DevTools for the project.
*   **`nuxi generate [rootDir]`:** Pre-renders the application into static HTML files (uses `nuxi build --prerender`).
*   **`nuxi info [rootDir]`:** Displays information about the Nuxt project environment.
*   **`nuxi init [dir]`:** Initializes a new Nuxt project from a template. Options: `--template`, `--force`, `--no-install`, `--gitInit`, `--packageManager`.
*   **`nuxi module add <moduleName>`:** Installs a module dependency and adds it to `nuxt.config`. Options: `--skipInstall`, `--skipConfig`, `--dev`.
*   **`nuxi module search <query>`:** Searches for compatible Nuxt modules. Option: `--nuxtVersion`.
*   **`nuxi prepare [rootDir]`:** Generates `.nuxt` directory and types (useful for CI/postinstall).
*   **`nuxi preview [rootDir]`:** Starts a local server to preview the *production build* from `.output/`. Loads `.env` for convenience in this mode only.
*   **`nuxi typecheck [rootDir]`:** Runs `vue-tsc` to type-check the project.
*   **`nuxi upgrade [rootDir]`:** Upgrades Nuxt dependency to the latest version (or nightly channel via `--channel nightly`). Options: `--force`, `--dedupe`.

### 7.5. Nuxt Kit (`@nuxt/kit`) API

Utilities primarily for module authors.

*   **Module Definition (`defineNuxtModule`)**: Standard way to define modules. See [Module Author Guide](#52-module-author-guide).
*   **Programmatic Usage (`loadNuxt`, `buildNuxt`, `loadNuxtConfig`)**: Load/build Nuxt programmatically (e.g., for CLIs, testing).
*   **Compatibility (`checkNuxtCompatibility`, `assertNuxtCompatibility`, `hasNuxtCompatibility`, `isNuxt2`, `isNuxt3`, `getNuxtVersion`)**: Check module compatibility with Nuxt versions/features.
*   **Auto-imports (`addImports`, `addImportsDir`, `addImportsSources`)**: Register composables/utils for auto-import.
*   **Components (`addComponentsDir`, `addComponent`)**: Register component directories or individual components for auto-import.
*   **Context (`useNuxt`, `tryUseNuxt`)**: Access the Nuxt build instance.
*   **Pages (`extendPages`, `extendRouteRules`, `addRouteMiddleware`)**: Modify routing configuration.
*   **Layouts (`addLayout`)**: Register layouts programmatically.
*   **Plugins (`addPlugin`, `addPluginTemplate`)**: Register runtime plugins.
*   **Runtime Config (`useRuntimeConfig` (build-time), `updateRuntimeConfig`)**: Access/modify runtime config during build.
*   **Templates (`addTemplate`, `addTypeTemplate`, `updateTemplates`)**: Generate virtual files in `.nuxt/`.
*   **Nitro (`addServerHandler`, `addDevServerHandler`, `useNitro`, `addServerPlugin`, `addPrerenderRoutes`, `addServerImportsDir`, `addServerScanDir`)**: Interact with the Nitro server engine build process.
*   **Resolving (`resolvePath`, `resolveAlias`, `findPath`, `createResolver`)**: Utilities for resolving file paths, aliases within modules.
*   **Logging (`useLogger`)**: Get a tagged logger instance (Consola).
*   **Builder (`extendWebpackConfig`, `extendViteConfig`, `addWebpackPlugin`, `addVitePlugin`, `addBuildPlugin`)**: Modify build tool configurations.

---

This consolidated document provides a broad overview and specific details across the Nuxt.js framework and its ecosystem based on the provided files. Remember to consult the official Nuxt documentation for the most up-to-date and detailed information.
```