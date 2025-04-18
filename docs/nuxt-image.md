# Nuxt Image Module - Consolidated Documentation

This document combines the official documentation for the `@nuxt/image` module, covering installation, configuration, providers, usage of components like `<NuxtImg>` and `<NuxtPicture>`, the `useImage()` composable, and contribution guidelines.

**Note:** This documentation corresponds to `v1` of `@nuxt/image`, compatible with **Nuxt 3**. For the Nuxt 2 compatible version (`v0`), refer to [v0.image.nuxtjs.org](https://v0.image.nuxtjs.org/).

## Table of Contents

1.  [Installation](#installation)
    *   [Automatic Installation](#automatic-installation)
    *   [Manual Installation](#manual-installation)
    *   [Initial Configuration Snippet](#initial-configuration-snippet)
    *   [Edge Channel](#edge-channel)
    *   [Troubleshooting](#troubleshooting)
2.  [Configuration (`image` options in `nuxt.config.ts`)](#configuration)
    *   [`inject`](#inject)
    *   [`quality`](#quality)
    *   [`format`](#format)
    *   [`screens`](#screens)
    *   [`domains`](#domains)
    *   [`presets`](#presets)
    *   [`providers`](#providers-configuration)
    *   [`provider`](#provider-configuration)
    *   [`modifiers` (under provider config)](#modifiers-under-provider-config)
    *   [`densities`](#densities)
    *   [`dir`](#dir)
    *   [`alias`](#alias)
3.  [Providers](#providers)
    *   [Introduction to Providers](#introduction-to-providers)
    *   [Default Provider (IPX/IPX Static)](#default-provider-ipxipx-static)
        *   [Local Images](#local-images)
        *   [Remote Images](#remote-images)
        *   [Environment Detection](#environment-detection)
    *   [Custom Provider](#custom-provider)
4.  [Usage: Components and Composables](#usage-components-and-composables)
    *   [`<NuxtImg>` Component](#nuxtimg-component)
        *   [Usage](#nuxtimg-usage)
        *   [Props](#nuxtimg-props)
            *   [`custom`](#custom)
            *   [`src`](#src)
            *   [`width` / `height`](#width--height)
            *   [`alt`](#alt)
            *   [`sizes`](#sizes)
            *   [`densities` (prop)](#densities-prop)
            *   [`placeholder`](#placeholder)
            *   [`placeholder-class`](#placeholder-class)
            *   [`provider` (prop)](#provider-prop)
            *   [`preset`](#preset)
            *   [`format` (prop)](#format-prop)
            *   [`quality` (prop)](#quality-prop)
            *   [`fit`](#fit)
            *   [`modifiers` (prop)](#modifiers-prop)
            *   [`preload`](#preload)
            *   [`loading`](#loading)
            *   [`nonce`](#nonce)
        *   [Events](#nuxtimg-events)
    *   [`<NuxtPicture>` Component](#nuxtpicture-component)
        *   [Props](#nuxtpicture-props)
            *   [`format` (prop)](#format-prop-1)
            *   [`legacyFormat`](#legacyformat)
            *   [`imgAttrs`](#imgattrs)
        *   [Inherited Props from `<NuxtImg>`](#inherited-props-from-nuxtimg)
    *   [`useImage()` Composable](#useimage-composable)
        *   [Usage](#useimage-usage)
        *   [`img.getSizes`](#imggetsizes)
5.  [Contributing](#contributing)
    *   [How to contribute?](#how-to-contribute)
        *   [Nuxt Image Development](#nuxt-image-development)
        *   [Documentation Development](#documentation-development)

---

## 1. Installation

Using the image module in your Nuxt project is straightforward.

### Automatic Installation

To get started, add `@nuxt/image` to your project using the Nuxt CLI:

```bash
npx nuxi@latest module add image
```

### Manual Installation

1.  Add `@nuxt/image` dependency to your project:

    ```bash
    # npm
    npm i @nuxt/image

    # yarn
    yarn add @nuxt/image

    # pnpm
    pnpm add @nuxt/image

    # bun
    bun add @nuxt/image
    ```

2.  Add it to the `modules` array in your `nuxt.config.ts`:

    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: [
        '@nuxt/image'
      ]
    })
    ```

### Initial Configuration Snippet

Add an `image` section in your `nuxt.config.ts` to customize options:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    // Options described in the Configuration section below
  }
})
```

### Edge Channel

For beta testing the latest changes, you can use the nightly build:

1.  Update `package.json`:

    ```diff [package.json]
    {
      "devDependencies": {
    -   "@nuxt/image": "^1.0.0"
    +   "@nuxt/image": "npm:@nuxt/image-nightly@latest"
      }
    }
    ```

2.  Remove lockfile (`package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`) and reinstall dependencies.

To opt out, reverse the change in `package.json`, remove the lockfile, and reinstall.

### Troubleshooting

If an error occurs during installation:

*   Ensure you are using an LTS version of NodeJS ([NodeJS Download page](https://nodejs.org/en/download)).
*   Try upgrading `@nuxt/image` to the latest version:
    ```bash
    # npm
    npm up @nuxt/image
    # yarn
    yarn upgrade @nuxt/image
    # pnpm
    pnpm up @nuxt/image
    # bun
    bun update @nuxt/image
    ```
*   Try recreating the lockfile:
    ```bash
    npx nuxi@latest upgrade --force
    ```
*   If there is an error related to `sharp` and `node-gyp` (common on architectures like Apple M1), it might need building from source. Check [node-gyp installation requirements](https://github.com/nodejs/node-gyp#installation).
*   If problems persist, [open an issue](https://github.com/nuxt/image/issues) with error details, OS, Node version, and package manager used.

---

## 2. Configuration

Customize the image module using the `image` property in your `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    // Global options here
  }
})
```

### `inject`

*   **Type:** `boolean`
*   **Default:** `false`

By default, Nuxt Image v1 uses a composable approach (`useImage`). Set to `true` to globally initialize an `$img` helper available throughout your application (useful for Options API or accessing it directly in templates without importing).

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    inject: true
  }
})
```

### `quality`

*   **Type:** `number`
*   **Default:** `75` (Implicit default of most providers)

Sets the default quality (0-100) for generated images. Can be overridden by the `quality` prop on components.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    quality: 80
  }
})
```

### `format`

*   **Type:** `string[]`
*   **Default:** `['webp']`

Default image format(s) used by `<NuxtPicture>`. Available formats: `webp`, `avif`, `jpeg`, `jpg`, `png`, `gif`. Order matters: the first format supported by the browser is used. Can be overridden by the `format` prop on `<NuxtPicture>`.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    format: ['avif', 'webp'] // Try AVIF first, then WebP
  }
})
```

### `screens`

*   **Type:** `Record<string, number>`
*   **Default:** `{ xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, '2xl': 1536 }`

Defines named screen size breakpoints (in pixels). Used by the `sizes` prop/modifier to generate responsive image variants. Follows Tailwind CSS naming convention with added `xs` and `xxl`.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
    }
  }
})
```

### `domains`

*   **Type:** `string[]`
*   **Default:** `[]`

A list of allowed external domains for image optimization. This is a security measure to prevent misuse of the image optimization endpoint. Required when using the default provider (IPX) with remote images. Can also be set via the `NUXT_IMAGE_DOMAINS` environment variable (comma-separated).

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    domains: ['nuxtjs.org', 'images.unsplash.com']
  }
})
```

### `presets`

*   **Type:** `Record<string, { modifiers: Record<string, any>, provider?: string }>`
*   **Default:** `{}`

Define named collections of modifiers for consistent image styling. Presets can be applied using the `preset` prop on components.

```ts [nuxt.config.ts]
// nuxt.config.ts
export default defineNuxtConfig({
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50,
          fit: 'cover'
        }
      },
      thumbnail: {
        modifiers: {
          width: 200,
          height: 200,
          fit: 'contain'
        }
      }
    }
  }
})

// Usage in component:
// <NuxtImg preset="avatar" src="/user-icon.png" />
```

### `providers` (Configuration)

*   **Type:** `Record<string, { provider: string, options?: Record<string, any> }>`
*   **Default:** `{}`

Used to register and configure custom providers. The key is the provider name used in components, `provider` points to the provider implementation file, and `options` are passed to the provider setup.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    providers: {
      // Example custom provider registration
      myProvider: {
        provider: '~/providers/my-custom-provider.ts', // Path to provider file
        options: {
          // Custom options for this provider
          apiKey: '...'
        }
      }
    }
  }
})
```
See also: [Creating a Custom Provider](#custom-provider).

### `provider` (Configuration)

*   **Type:** `string`
*   **Default:** `ipx` (or `ipxStatic` for `nuxt generate`, or auto-detected like `vercel`)

Specifies the default image provider to use globally if not overridden by the `provider` prop on a component. Can also be set via the `NUXT_IMAGE_PROVIDER` environment variable.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    provider: 'cloudinary',
    cloudinary: { // Provider-specific options
      baseURL: 'https://res.cloudinary.com/nuxt/image/upload/'
    }
  }
})
```

### `modifiers` (under provider config)

*   **Type:** `Record<string, any>`
*   **Default:** `{}`

Defines default modifiers specific to a chosen provider, applied globally unless overridden. Place these inside the provider's configuration block.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/<company>/image/fetch',
      modifiers: {
        // Cloudinary specific default modifiers
        effect: 'sharpen:100',
        quality: 'auto:best'
      }
    }
  }
})
```

### `densities`

*   **Type:** `number[]`
*   **Default:** `[1, 2]`

Specifies the device pixel ratio (DPR) values to generate image variants for (e.g., for Retina displays). Use `1` for standard, `2` for 2x density, `3` for 3x, etc. Applied when using the `densities` prop on components.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    densities: [1, 2, 3] // Generate 1x, 2x, and 3x density images
  }
})
```

### `dir`

*   **Type:** `string`
*   **Default:** `public`

Specifies the directory where source images are located when using the `ipx` or `ipxStatic` provider. Useful if you want to store images outside the `public` directory (e.g., in `assets/images`) to prevent them from being copied directly to the build output.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    // Use assets/images/ as the source for IPX
    dir: 'assets/images'
  }
})
```
**Notes:**
*   `ipxStatic`: Changing `dir` might cause 404s if images aren't crawled during generation.
*   `ipx`: Ensure the custom `dir` is deployed along with your application.
*   Some providers (like Vercel) might require images to be in `public/` as they fetch sources from the deployment URL at runtime.

### `alias`

*   **Type:** `Record<string, string>`
*   **Default:** `{}`

Defines URL aliases for image `src` paths.
*   With `ipx` (default provider): Aliases are resolved server-side, shortening the final URL and hiding the original external URL structure.
*   With other providers: Aliases are resolved client-side at runtime; only simplifies usage in templates.

```ts [nuxt.config.ts]
// nuxt.config.ts
export default defineNuxtConfig({
  image: {
    domains: [
      'images.unsplash.com' // Domain must still be listed if external
    ],
    alias: {
      // Map '/unsplash/' prefix to the base Unsplash URL
      unsplash: 'https://images.unsplash.com'
    }
  }
})

// Usage: <NuxtImg src="/unsplash/photo-12345" />
// IPX Output: <img src="/_ipx/unsplash/photo-12345"> (server resolves 'unsplash' alias)
// Other Provider Output: <img src="PROVIDER_URL/https://images.unsplash.com/photo-12345?MODIFIERS"> (client resolves)
```

---

## 3. Providers

### Introduction to Providers

Providers are integrations connecting Nuxt Image with image transformation services (like Cloudinary, TwicPics, IPX, etc.). They generate the correct URLs needed by the service based on the props and modifiers you use. Nuxt Image comes with several built-in providers and allows creating custom ones.

### Default Provider (IPX/IPX Static)

*   **IPX:** The default provider for development and server environments (`nuxt dev`, `nuxt start`). It's an open-source, self-hostable image optimizer.
*   **IPX Static:** Used automatically when generating a static site (`nuxt generate`). It pre-renders image transformations at build time.

Both IPX options work without extra configuration for local images.

#### Local Images

Place images in the `public/` directory of your Nuxt project (unless `dir` option is changed). For `<NuxtImg src="/my-image.jpg" />`, the file should be at `public/my-image.jpg`. Images in the `assets/` directory are processed by the build tool (Vite/Webpack) and are *not* handled by Nuxt Image.

#### Remote Images

To optimize external images using the default IPX provider, you **must** list their domains in the `image.domains` configuration option or the `NUXT_IMAGE_DOMAINS` environment variable.

```bash
# Example environment variable
NUXT_IMAGE_DOMAINS="img.example.com,cdn.anothersite.org"
```

#### Environment Detection

*   The default provider can be overridden using the `NUXT_IMAGE_PROVIDER` environment variable.
*   Nuxt Image automatically detects and uses the `vercel` provider when deployed on Vercel.

### Custom Provider

You can create your own provider to integrate with any image service.
1.  Create the provider logic file (e.g., `~/providers/my-provider.ts`).
2.  Register it in `nuxt.config.ts` using the `image.providers` option (see [`providers` configuration](#providers-configuration)).
Learn more in the (hypothetical/advanced) documentation section on creating custom providers.

---

## 4. Usage: Components and Composables

### `<NuxtImg>` Component

`<NuxtImg>` is a drop-in replacement for the native `<img>` tag, adding optimization, resizing, and responsive generation features.

*   Source Link: [nuxt-img.ts](https://github.com/nuxt/image/blob/main/src/runtime/components/nuxt-img.ts)

#### `<NuxtImg>` Usage

Use it like a standard `<img>` tag. It renders a plain `<img>` element.

```vue
<template>
  <!-- Assuming nuxt-icon.png is in public/ -->
  <NuxtImg src="/nuxt-icon.png" alt="Nuxt Logo" width="200" height="200" />
</template>
```

Resulting HTML (with default IPX provider):

```html
<img src="/_ipx/_/nuxt-icon.png" alt="Nuxt Logo" width="200" height="200">
<!-- Actual URL path might differ based on IPX configuration -->
```

#### `<NuxtImg>` Props

*   **`src`**: (Required) `string`
    Path to the image.
    *   For local images (using IPX): Absolute path relative to the `public/` directory (or configured `dir`), e.g., `/images/banner.jpg`.
    *   For remote images: Full URL, e.g., `https://example.com/image.jpg`. Domain must be whitelisted via `image.domains` if using IPX.
    *   Can use aliases defined in `image.alias`.

*   **`width` / `height`**: `string | number`
    Desired dimensions of the image in pixels.
    *   Provide specific dimensions for fixed-size images (icons, avatars).
    *   Provide the *original* dimensions for responsive images when using the `sizes` prop to ensure correct aspect ratio calculation.

*   **`alt`**: `string`
    Native `alt` attribute text. Crucial for accessibility. Describe the image content or its function if it's a link. Use `alt=""` for purely decorative images.

*   **`sizes`**: `string`
    Defines responsive sizes using screen breakpoint/width pairs (e.g., `sm:100px md:200px lg:300px`). Uses screen names defined in `image.screens`. Nuxt generates appropriate `srcset` and `sizes` attributes on the `<img>` tag.
    *   Syntax: `[breakpoint:]<width>[unit]` (unit defaults to `px`, `vw` is common).
    *   Example: `sizes="100vw sm:50vw md:400px"` (Full viewport width on smallest screens, 50% viewport width from `sm` up, fixed 400px from `md` up).
    *   If no breakpoint prefix is given (e.g., `sizes="300px"`), that size applies from the smallest screen upwards. If multiple sizes are given without a default, the smallest is used as default.

*   **`densities`** (prop): `string`
    Specifies pixel densities for `srcset` generation (e.g., `x1 x2`). Uses values configured in `image.densities`.
    ```vue
    <NuxtImg src="/logo.png" height="50" densities="x1 x2" />
    <!-- Generates srcset with 1x and 2x density variants -->
    ```

*   **`placeholder`**: `string | boolean | number | [number, number] | [number, number, number, number]`
    Displays a placeholder while the main image loads.
    *   `placeholder`: `true` - Automatically generates a low-quality blurred version of the source image.
    *   `placeholder="[width, height]"` (e.g., `:[placeholder]="[50, 25]"`) - Auto-generated placeholder with specified dimensions.
    *   `placeholder="[width, height, quality, blur]"` - Auto-generated placeholder with more control.
    *   `placeholder="size"` (e.g., `:placeholder="15"`) - Auto-generated square placeholder of `size` x `size`.
    *   `placeholder="/path/to/placeholder.jpg"` - Use a specific static image URL as the placeholder.
    *   Can also use `useImage()` to generate a dynamic placeholder URL:
        ```vue
        <template>
          <NuxtImg src="/nuxt.svg" :placeholder="imgPlaceholder" />
        </template>
        <script setup>
        const img = useImage()
        const imgPlaceholder = img('/nuxt.svg', { h: 10, f: 'png', blur: 2, q: 50 })
        </script>
        ```

*   **`placeholder-class`**: `string`
    CSS class applied to the main `<img>` element *while* the placeholder is visible. Useful for styling transitions.

*   **`provider`** (prop): `string`
    Overrides the default provider set in `nuxt.config.ts` for this specific image instance.
    ```vue
    <NuxtImg provider="cloudinary" src="/remote/image.jpg" ... />
    ```

*   **`preset`**: `string`
    Applies a predefined set of modifiers defined in the `image.presets` configuration.
    ```vue
    <NuxtImg preset="avatar" src="/user.png" ... />
    ```

*   **`format`** (prop): `string`
    Forces a specific output format (`webp`, `avif`, `jpeg`, `png`, `gif`, `svg`) for this image. Overrides provider defaults.
    ```vue
    <NuxtImg src="/image.png" format="webp" ... />
    ```

*   **`quality`** (prop): `string | number`
    Overrides the default quality setting for this image.
    ```vue
    <NuxtImg src="/image.jpg" quality="90" ... />
    ```

*   **`fit`**: `string`
    Determines how the image should be resized to fit the specified dimensions (`width`, `height`). Standard values:
    *   `cover`: (Default) Crops to fill dimensions, preserves aspect ratio.
    *   `contain`: Letterboxes to fit within dimensions, preserves aspect ratio.
    *   `fill`: Stretches to fill dimensions, ignores aspect ratio.
    *   `inside`: Resizes to be as large as possible *within* dimensions.
    *   `outside`: Resizes to be as small as possible *while covering* dimensions.
    ```vue
    <NuxtImg src="/image.png" width="300" height="150" fit="contain" />
    ```
    Providers might support additional values.

*   **`modifiers`** (prop): `Record<string, any>`
    Applies provider-specific transformation parameters not covered by standard props. Refer to the documentation of the used provider.
    ```vue
    <NuxtImg provider="cloudinary" src="/image.jpg" :modifiers="{ effect: 'grayscale', roundCorner: 'max' }" />
    ```

*   **`preload`**: `boolean`
    If `true`, adds a `<link rel="preload">` tag to the page's head for this image, hinting the browser to fetch it earlier.
    ```vue
    <NuxtImg src="/hero.jpg" preload />
    ```

*   **`loading`**: `'lazy' | 'eager'`
    Native `loading` attribute. `'lazy'` defers loading until the image enters the viewport. `'eager'` (default browser behavior) loads immediately.
    ```vue
    <NuxtImg src="/footer-logo.png" loading="lazy" />
    ```

*   **`nonce`**: `string`
    Native `nonce` attribute for Content Security Policy (CSP). Value should typically be provided by another module or server-side logic (e.g., `nuxt-security`).
    ```vue
    <template>
      <NuxtImg src="/icon.png" :nonce="nonce" />
    </template>
    <script setup>
    // Assuming useNonce() is provided elsewhere
    const nonce = useNonce()
    </script>
    ```
*   **`custom`**: `boolean`
    Default: `false`. If set to `true`, `<NuxtImg>` doesn't render an `<img>` tag itself but provides data to its default slot for custom rendering. Useful for complex placeholders or wrappers.
    Slot props:
    *   `src` (string): Computed image source URL.
    *   `isLoaded` (boolean): True if the image has loaded.
    *   `imgAttrs` (object): Attributes intended for the `<img>` tag (like `alt`, `width`, `height`, `srcset`, `sizes`).
    ```vue
    <NuxtImg
      src="/image.png" alt="description" width="400" height="300"
      :custom="true"
      v-slot="{ src, isLoaded, imgAttrs }"
    >
      <img v-if="isLoaded" v-bind="imgAttrs" :src="src">
      <div v-else class="placeholder">Loading...</div>
    </NuxtImg>
    ```

#### `<NuxtImg>` Events

Native HTML `<img>` events can be listened to directly on the `<NuxtImg>` component.

```vue
<template>
  <NuxtImg src="/my-image.jpg" @load="onImageLoad" @error="onImageError" />
</template>

<script setup>
function onImageLoad(event) {
  console.log('Image loaded:', event.target.src);
}
function onImageError(event) {
  console.error('Image failed to load:', event.target.src);
}
</script>
```

### `<NuxtPicture>` Component

`<NuxtPicture>` is a drop-in replacement for the native `<picture>` element, designed primarily for serving modern image formats (like WebP, AVIF) with automatic fallbacks.

*   Source Link: [nuxt-picture.ts](https://github.com/nuxt/image/blob/main/src/runtime/components/nuxt-picture.ts)

Usage is similar to `<NuxtImg>`, but it generates a `<picture>` element containing `<source>` tags for different formats and a fallback `<img>` tag.

```vue
<template>
  <NuxtPicture
    src="/nuxt-icon.png"
    format="avif,webp"
    width="300"
    height="169"
    alt="Nuxt Icon"
  />
</template>
```

Resulting HTML (simplified):

```html
<picture>
  <source type="image/avif" srcset="..."> <!-- AVIF source -->
  <source type="image/webp" srcset="..."> <!-- WebP source -->
  <img src="..." alt="Nuxt Icon" width="300" height="169"> <!-- Fallback image -->
</picture>
```

**Limitation:** Currently does not support manually specifying multiple different source images (like the native `<picture>` element allows for art direction). It focuses on format negotiation for a single source image. See [#309](https://github.com/nuxt/image/issues/309).

#### `<NuxtPicture>` Props

Includes all props from `<NuxtImg>` plus the following:

*   **`format`** (prop): `string`
    Comma-separated list of preferred modern formats (e.g., `avif,webp`). The component will generate `<source>` elements for these formats in the specified order. A fallback format is generated automatically. Available: `webp`, `avif`, `jpeg`, `jpg`, `png`, `gif`. Overrides the global `image.format` config.

*   **`legacyFormat`**: `string`
    Specifies the format for the fallback `<img>` tag.
    *   Default: `png` if the original format supports transparency (`png`, `webp`, `gif`), otherwise `jpeg`.

*   **`imgAttrs`**: `Record<string, string>`
    Allows setting additional HTML attributes directly on the nested `<img>` element.
    ```vue
    <NuxtPicture
      src="/image.png"
      :imgAttrs="{ id: 'main-image', 'data-custom': 'value' }"
    />
    ```

#### Inherited Props from `<NuxtImg>`

`<NuxtPicture>` accepts and uses most props from `<NuxtImg>`, including `src`, `width`, `height`, `alt`, `sizes`, `quality`, `fit`, `provider`, `preset`, `modifiers`, `preload`, `loading`, etc. These props influence all generated `<source>` tags and the fallback `<img>`.

### `useImage()` Composable

Provides direct access to the image URL generation logic used by the components. Useful for scenarios where you need the optimized URL string itself (e.g., CSS backgrounds, custom components).

*   Source Link: [composables.ts](https://github.com/nuxt/image/blob/main/src/runtime/composables.ts)

#### `useImage()` Usage

```js
import { useImage } from '#imports' // Auto-imported in Nuxt 3

const img = useImage()

// Generate a URL with modifiers
const imageUrl = img('/path/to/image.jpg', { width: 300, format: 'webp' })

// Generate a URL using a specific provider and preset
const avatarUrl = img('/user-icon.png', { preset: 'avatar' }, { provider: 'cloudinary' })
```

**Signature:** `img(src, modifiers, options)`

*   `src`: (string) Image source path or URL.
*   `modifiers`: (object) Transformation modifiers (e.g., `width`, `height`, `quality`, `format`, provider-specific modifiers).
*   `options`: (object) Optional configuration:
    *   `provider`: (string) Specify provider (overrides default).
    *   `preset`: (string) Apply a configured preset.

**Example:** Setting a CSS background image.

```vue
<template>
  <div :style="backgroundStyle"></div>
</template>

<script setup>
import { computed } from 'vue'
import { useImage } from '#imports'

const img = useImage()

const backgroundStyle = computed(() => {
  const imgUrl = img('/backgrounds/hero.jpg', { width: 1920, quality: 80 })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>
```

#### `img.getSizes`

**(Unstable API - may change)**

A helper function returned by `useImage()` to generate `srcset` and `sizes` attributes for responsive images, often used with UI libraries or custom implementations.

**Signature:** `img.getSizes(src, options)`

*   `src`: (string) Image source path or URL.
*   `options`: (object)
    *   `sizes`: (string) Responsive sizes string (same format as `<NuxtImg>` `sizes` prop, e.g., `100vw sm:50vw`).
    *   `modifiers`: (object) Transformations to apply to all generated sizes (e.g., `format`, `quality`, `height`).
    *   `provider?`: (string) Optional provider override.
    *   `preset?`: (string) Optional preset name.

**Returns:** `{ srcset: string, sizes: string }`

**Example:** Generating `srcset` for Vuetify `v-img`.

```vue
<template>
  <v-img
    :lazy-src="lazySrc"
    :src="mainSrc"
    :srcset="responsiveSizes.srcset"
    :sizes="responsiveSizes.sizes"
    :height="height"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useImage } from '#imports'

const props = defineProps({
  src: { type: String, required: true },
  height: { type: [Number, String], default: 500 }
})

const img = useImage()

// Generate a small blurry placeholder URL
const lazySrc = computed(() => img(props.src, { width: 20, quality: 30, blur: 5 }))

// Generate the main src URL (optional, could rely purely on srcset)
const mainSrc = computed(() => img(props.src, { height: props.height, quality: 75 }))

// Generate responsive sources
const responsiveSizes = computed(() => {
  return img.getSizes(props.src, {
    sizes: 'xs:100vw sm:100vw md:80vw lg:60vw xl:50vw',
    modifiers: {
      format: 'webp',
      quality: 75,
      height: props.height // Apply height modifier to maintain aspect ratio
    }
  })
})
</script>
```

---

## 5. Contributing

Contributions are welcome! Please read the [Nuxt contribution guide](https://nuxt.com/docs/community/contribution) first.

### How to contribute?

1.  Clone the [nuxt/image](https://github.com/nuxt/image) repository.
2.  Enable Corepack: `corepack enable`
3.  Install dependencies: `pnpm install`
4.  Generate type stubs: `pnpm dev:prepare`

#### Nuxt Image Development

*   Start the playground in development mode: `pnpm dev`
*   Make your code changes in the `src/` directory.
*   Add tests in the `test/` directory.
*   Run tests: `pnpm test`
*   Check code style: `pnpm lint`
*   Build before submitting: `pnpm build` (ensure no errors).

#### Documentation Development

*   Start the documentation site locally: `pnpm docs:dev`
*   Open [http://localhost:3000](http://localhost:3000).
*   Edit content in the `docs/content/` directory.

---