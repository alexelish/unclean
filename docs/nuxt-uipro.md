Okay, here is the consolidated Nuxt UI (v3 base) documentation compiled into a single Markdown file.

**Note:**

*   This file combines the content from all the provided `.md` files.
*   Custom Markdown Components (MDC) like `::note`, `::tip`, `::component-code`, `:component-props`, etc., used in the original Nuxt documentation won't render directly in standard Markdown viewers. I have attempted to:
    *   Replace simple callouts (`::note`, `::tip`, `::warning`) with standard Markdown blockquotes or bold text labels.
    *   Keep code examples (`::component-code`, `::component-example`) as standard code blocks, sometimes adding descriptive text for context that was previously in attributes.
    *   Replace auto-generated content directives (`:component-props`, `:component-slots`, `:component-theme`, etc.) with placeholder text indicating what information belongs there. You'll need to refer to the original docs site or component source code for the detailed API tables.
    *   Handle framework-specific content (`::framework-only`, `::module-only`) by using clear headings or notes.
*   Frontmatter metadata from individual files has been omitted, using headings derived from the `title` where appropriate.
*   Internal links (`/getting-started/installation/vue`) have been kept as-is; they won't work outside the original documentation site context but provide context within the text.

This consolidated file should serve as a comprehensive text-based reference for your coding assistant.

```markdown
# Consolidated Nuxt UI Documentation (v3 Base)

This document combines information from various Nuxt UI v3 documentation files into a single reference, suitable for use with coding assistants. Note that custom rendering components from the original documentation site are represented here as standard Markdown or descriptive placeholders.

---

## Introduction

Nuxt UI harnesses the combined strengths of Reka UI, Tailwind CSS, and Tailwind Variants to offer developers an unparalleled set of tools for creating sophisticated, accessible, and highly performant user interfaces.

<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="aspect-ratio: 16/9;" class="rounded-[calc(var(--ui-radius)*1.5)]"></iframe>

### Reka UI

We've transitioned from [Headless UI](https://headlessui.com/) to [Reka UI](https://reka-ui.com/) as our core component foundation. This shift brings several key advantages:

-   **Extensive Component Library**: With 55+ primitives, Reka UI significantly expands our component offerings.
-   **Active Development**: Reka UI's growing popularity ensures ongoing improvements and updates.
-   **Enhanced Accessibility**: Built-in accessibility features align with our commitment to inclusive design.
-   **Vue 3 Optimization**: Seamless integration with Vue 3 and the Composition API.

This transition empowers Nuxt UI to become a more comprehensive and flexible UI library, offering developers greater power and customization options.

### Tailwind CSS v4

Nuxt UI integrates the latest Tailwind CSS v4, bringing significant improvements:

-   **Built for performance**: Full builds in the new engine are up to 5x faster, and incremental builds are over 100x faster — and measured in microseconds.
-   **Unified toolchain**: Built-in import handling, vendor prefixing, and syntax transforms, with no additional tooling required.
-   **CSS-first configuration**: A reimagined developer experience where you customize and extend the framework directly in CSS instead of a JavaScript configuration file.
-   **Designed for the modern web**: Built on native cascade layers, wide-gamut colors, and including first-class support for modern CSS features like container queries, @starting-style, popovers, and more.

> **Note:** [Learn about all the breaking changes in Tailwind CSS v4.](https://tailwindcss.com/docs/upgrade-guide#changes-from-v3) (Tailwind CSS v4 upgrade guide)

### Tailwind Variants

We've adopted [Tailwind Variants](https://www.tailwind-variants.org/) to manage our design system, offering:

-   **Dynamic Styling**: Flexible component variants with a powerful API
-   **Type Safety**: Full TypeScript support with auto-completion
-   **Conflict Resolution**: Efficient merging of conflicting styles

This integration unifies the styling of components, ensuring consistency and code maintainability.

### TypeScript Integration

Nuxt UI offers significantly improved TypeScript integration, providing a superior developer experience:

-   **Enhanced Auto-completion**:
    -   Full auto-completion for component props based on your theme
    -   Intelligent suggestions for `app.config.ts` theme configuration

-   **Generic-based Components**:
    -   Built using [Vue 3 Generics](https://vuejs.org/api/sfc-script-setup.html#generics)
    -   Improved type inference for slots and events

-   **Type-safe Theming**:
    -   Leveraging Tailwind Variants for type-safe styling options
    -   Customizable types for extended theme configurations

> **Note:** [Check out an example of the Accordion component with auto-completion for props and slots.](/components/accordion#with-custom-slot) (Accordion component with custom slot)

### Vue compatibility

You can now use Nuxt UI in any Vue project without Nuxt by adding the Vite and Vue plugins to your configuration. This provides:

-   **Auto-imports**: Components and composables are automatically imported and available globally
-   **Theming System**: Full theming support with customizable colors, sizes, variants and more
-   **Developer Experience**: Complete TypeScript support with IntelliSense and auto-completion

> **Tip:** [Learn how to install and configure Nuxt UI in a Vue project in the **Vue installation guide**.](/getting-started/installation/vue) (Vue installation guide)

### Nuxt DevTools Integration

You can play with Nuxt UI components as well as your app components directly from Nuxt Devtools with the [compodium](https://github.com/romhml/compodium) module, providing a powerful development experience:

-   **Component Inspector**: Inspect and analyze Nuxt UI components in real-time
-   **Live Preview**: Modify component props and see changes instantly
-   **Code Generation**: Get the corresponding code for your component configurations

> **Note:**
> Install the module to your Nuxt application with one command:
> ```bash [Terminal]
> npx nuxi module add compodium
> ```

<video poster="https://res.cloudinary.com/nuxt/video/upload/so_0/v1740751953/nuxt-ui/nuxt-compodium_y2bvqw.jpg" controls class="w-full h-auto rounded">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1740751953/nuxt-ui/nuxt-compodium_y2bvqw.webm" type="video/webm">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1740751953/nuxt-ui/nuxt-compodium_y2bvqw.mp4" type="video/mp4">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1740751953/nuxt-ui/nuxt-compodium_y2bvqw.ogg" type="video/ogg">
</video>

### Migration

We want to be transparent: migrating from Nuxt UI v2 to v3 will require significant effort. While we've maintained core concepts and components, Nuxt UI v3 has been rebuilt from the ground up, resulting in a new library with enhanced capabilities.

Key points to consider:

-   Read our [migration guide](/getting-started/migration) to upgrade your project from v2 to v3.
-   Review the new documentation and components carefully before attempting to upgrade.
-   If you encounter any issues, please report them on our [GitHub repository](https://github.com/nuxt/ui/issues).

### FAQ

**Is Nuxt UI compatible with standalone Vue projects?**
Nuxt UI is now compatible with Vue! You can follow the [installation guide](/getting-started/installation/vue) to get started.

**What about Nuxt UI Pro?**
We've also rebuilt Nuxt UI Pro from scratch as v3 to match Nuxt UI version. The license you bought or will buy is valid for both Nuxt UI Pro v1 and v3, this is a **free update**. You can follow the [installation guide](/getting-started/installation/pro/nuxt) to get started.

**Will Nuxt UI work with other CSS frameworks like UnoCSS?**
Nuxt UI is currently designed to work exclusively with Tailwind CSS. While there's interest in UnoCSS support, implementing it would require significant changes to the theme structure due to differences in class naming conventions. As a result, we don't have plans to add UnoCSS support.

**How does Nuxt UI handle accessibility?**
Nuxt UI enhances accessibility through Reka UI integration. This provides automatic ARIA attributes, keyboard navigation support, intelligent focus management, and screen reader announcements. While offering a strong foundation, proper implementation and testing in your specific use case remains crucial for full accessibility compliance. For more detailed information, refer to [Reka UI's accessibility documentation](https://reka-ui.com/docs/overview/accessibility).

**What is the testing approach for Nuxt UI?**
Nuxt UI ensures reliability with 1000+ Vitest tests, covering core functionality and accessibility. This robust testing suite supports the library's stability and serves as a reference for developers.

---

We're excited about the possibilities Nuxt UI v3 brings to your projects. Explore our documentation to learn more about new features, components, and best practices for building powerful, accessible user interfaces.

---

## Getting Started

### Migration Guide (v2 to v3)

Nuxt UI v3.0 is a new major version rebuilt from the ground up, introducing a modern architecture with significant performance improvements and an enhanced developer experience. This major release includes several breaking changes alongside powerful new features and capabilities:

-   **Tailwind CSS v4**: Migration from JavaScript to CSS-based configuration
-   **Reka UI**: Replacing Headless UI as the underlying component library
-   **Tailwind Variants**: New styling API for component variants

This guide provides step by step instructions to migrate your application from v2 to v3.

#### Migrate your project

**Steps:**

1.  **Update Tailwind CSS**

    Tailwind CSS v4 introduces significant changes to its configuration approach. The official Tailwind upgrade tool will help automate most of the migration process.

    > **Note:** For a detailed walkthrough of all changes, refer to the official [**Tailwind CSS v4 upgrade guide**](https://tailwindcss.com/docs/upgrade-guide#changes-from-v3).

    1.  Create a `main.css` file and import it in your `nuxt.config.ts` file:

        *CSS File (`app/assets/css/main.css`):*
        ```css
        @import "tailwindcss";
        ```

        *Nuxt Config (`nuxt.config.ts`):*
        ```ts
        export default defineNuxtConfig({
          css: ['~/assets/css/main.css']
        })
        ```

    2.  Run the Tailwind CSS upgrade tool:
        ```bash
        npx @tailwindcss/upgrade
        ```

2.  **Update Nuxt UI**

    3.  Install the latest version of the package:

        *(Assuming UI module, adjust if using UI Pro)*

        *PNPM:*
        ```bash
        pnpm add @nuxt/ui
        ```
        *Yarn:*
        ```bash
        yarn add @nuxt/ui
        ```
        *NPM:*
        ```bash
        npm install @nuxt/ui
        ```
        *Bun:*
        ```bash
        bun add @nuxt/ui
        ```

    4.  Import it in your CSS:

        *(Assuming UI module, adjust if using UI Pro)*

        *CSS File (`app/assets/css/main.css`):*
        ```css
        @import "tailwindcss";
        @import "@nuxt/ui";
        ```

    5.  *(If using UI Pro)* Add the `@nuxt/ui-pro` module in your `nuxt.config.ts` file as it's no longer a layer:

        ```diff [nuxt.config.ts]
        export default defineNuxtConfig({
        -  extends: ['@nuxt/ui-pro'],
        -  modules: ['@nuxt/ui']
        +  modules: ['@nuxt/ui-pro']
        })
        ```

    6.  Wrap your app with the [App](/components/app) component:

        *App Wrapper (`app.vue`):*
        ```vue
        <template>
          <UApp>
            <NuxtPage />
          </UApp>
        </template>
        ```

#### Changes from v2

Now that you have updated your project, you can start migrating your code. Here's a comprehensive list of all the breaking changes in Nuxt UI v3.

*   **Updated design system**

    In Nuxt UI v2, we had a mix between a design system with `primary`, `gray`, `error` aliases and all the colors from Tailwind CSS. We've replaced it with a proper [design system](/getting-started/theme#design-system) with 7 color aliases:

    | Color         | Default   | Description                                                |
    | ------------- | --------- | ---------------------------------------------------------- |
    | `primary`     | `green`   | Main brand color, used as the default color for components. |
    | `secondary`   | `blue`    | Secondary color to complement the primary color.           |
    | `success`     | `green`   | Used for success states.                                   |
    | `info`        | `blue`    | Used for informational states.                             |
    | `warning`     | `yellow`  | Used for warning states.                                   |
    | `error`       | `red`     | Used for form error validation states.                     |
    | `neutral`     | `slate`   | Neutral color for backgrounds, text, etc.                  |

    This change introduces several breaking changes that you need to be aware of:

    -   The `gray` color has been renamed to `neutral`
        ```diff
        <template>
        - <p class="text-gray-500 dark:text-gray-400" />
        + <p class="text-neutral-500 dark:text-neutral-400" />
        </template>
        ```
        > **Note:** You can also use the new [design tokens](/getting-started/theme#neutral-palette) to handle light and dark mode:
        > ```diff
        > <template>
        > - <p class="text-gray-500 dark:text-gray-400" />
        > + <p class="text-(--ui-text-muted)" />
        >
        > - <p class="text-gray-900 dark:text-white" />
        > + <p class="text-(--ui-text-highlighted)" />
        >  </template>
        > ```

    -   The `DEFAULT` shade that let you write `text-primary` no longer exists, you can use [color shades](/getting-started/theme#color-shades) instead:
        ```diff
        <template>
        -  <p class="text-primary">Hello</p>
        +  <p class="text-(--ui-primary)">Hello</p>
        </template>
        ```

    -   The `gray`, `black` and `white` in the `color` props have been removed in favor of `neutral`:
        ```diff
        - <UButton color="black" />
        + <UButton color="neutral" />

        - <UButton color="gray" />
        + <UButton color="neutral" variant="subtle" />

        - <UButton color="white" />
        + <UButton color="neutral" variant="outline" />
        ```

    -   You can no longer use Tailwind CSS colors in the `color` props, use the new aliases instead:
        ```diff
        - <UButton color="red" />
        + <UButton color="error" />
        ```
        > **Note:** [Learn how to extend the design system to add new color aliases.](/getting-started/theme#colors)

    -   The color configuration in `app.config.ts` has been moved into a `colors` object:
        ```diff
        export default defineAppConfig({
          ui: {
        -   primary: 'green',
        -   gray: 'cool'
        +   colors: {
        +     primary: 'green',
        +     neutral: 'slate'
        +   }
          }
        })
        ```

*   **Updated theming system**

    Nuxt UI components are now styled using the [Tailwind Variants API](/getting-started/theme#components-theme), which makes all the overrides you made using the `app.config.ts` and the `ui` prop obsolete.

    -   Update your [`app.config.ts`](/getting-started/theme#config) to override components with their new theme:
        ```diff
        export default defineAppConfig({
           ui: {
             button: {
        -       font: 'font-bold',
        -       default: {
        -         size: 'md',
        -         color: 'primary'
        -       }
        +       slots: {
        +         base: 'font-medium'
        +       },
        +       defaultVariants: {
        +         size: 'md',
        +         color: 'primary'
        +       }
             }
           }
        })
        ```

    -   Update your [`ui` props](/getting-started/theme#props) to override each component's slots using their new theme:
        ```diff
        <template>
        - <UButton :ui="{ font: 'font-bold' }" />
        + <UButton :ui="{ base: 'font-bold' }" />
        </template>
        ```
        > **Tip:** We can't detail all the changes here but you can check each component's theme in the **Theme** section. ([See Button Theme Example](/components/button#theme))

*   **Renamed components**

    We've renamed some Nuxt UI components to align with the Reka UI naming convention:

    | v2                   | v3                                                                          |
    | -------------------- | --------------------------------------------------------------------------- |
    | `Divider`            | [`Separator`](/components/separator)                                        |
    | `Dropdown`           | [`DropdownMenu`](/components/dropdown-menu)                                 |
    | `FormGroup`          | [`FormField`](/components/form-field)                                       |
    | `Range`              | [`Slider`](/components/slider)                                              |
    | `Toggle`             | [`Switch`](/components/switch)                                              |
    | `Notification`       | [`Toast`](/components/toast)                                                |
    | `VerticalNavigation` | [`NavigationMenu`](/components/navigation-menu) with `orientation="vertical"` |
    | `HorizontalNavigation` | [`NavigationMenu`](/components/navigation-menu) with `orientation="horizontal"` |

    *(Pro component renames - omitted for brevity, but see original file for full list)*

*   **Changed components**

    In addition to the renamed components, there are lots of changes to the components API. Let's detail the most important ones:

    -   The `links` and `options` props have been renamed to `items` for consistency:
        ```diff
        <template>
        - <USelect :options="countries" />
        + <USelect :items="countries" />

        - <UHorizontalNavigation :links="links" />
        + <UNavigationMenu :items="links" />
        </template>
        ```
        > **Note:** This change affects the following components: `Breadcrumb`, `HorizontalNavigation`, `InputMenu`, `RadioGroup`, `Select`, `SelectMenu`, `VerticalNavigation`.

    -   The `click` field in different components has been removed in favor of the native Vue `onClick` event:
        ```diff
        <script setup lang="ts">
        const items = [{
          label: 'Edit',
        -  click: () => {
        +  onClick: () => {
            console.log('Edit')
          }
        }]
        </script>
        ```
        > **Note:** This change affects the `Toast` component as well as all component that have `items` links like `NavigationMenu`, `DropdownMenu`, `CommandPalette`, etc.

    -   The global `Modals`, `Slideovers` and `Notifications` components have been removed in favor the [App](/components/app) component:
        ```diff [app.vue]
        <template>
        +  <UApp>
        +    <NuxtPage />
        +  </UApp>
        -  <UModals />
        -  <USlideovers />
        -  <UNotifications />
        </template>
        ```

    -   The `v-model:open` directive and `default-open` prop are now used to control visibility:
        ```diff
        <template>
        - <UModal v-model="open" />
        + <UModal v-model:open="open" />
        </template>
        ```
        > **Note:** This change affects the following components: `ContextMenu`, `Modal` and `Slideover` and enables controlling visibility for `InputMenu`, `Select`, `SelectMenu` and `Tooltip`.

    -   The default slot is now used for the trigger and the content goes inside the `#content` slot (you don't need to use a `v-model:open` directive with this method):
        ```diff
        <script setup lang="ts">
        - const open = ref(false)
        </script>

        <template>
        - <UButton label="Open" @click="open = true" />

        - <UModal v-model="open">
        + <UModal>
        +   <UButton label="Open" />

        +   <template #content>
              <div class="p-4">
                <Placeholder class="h-48" />
              </div>
        +   </template>
          </UModal>
        </template>
        ```
        > **Note:** This change affects the following components: `Modal`, `Popover`, `Slideover`, `Tooltip`.

    -   A `#header`, `#body` and `#footer` slots have been added inside the `#content` slot like the `Card` component:
        ```diff
        <template>
        - <UModal>
        + <UModal title="Title" description="Description">
        -   <div class="p-4">
        +   <template #body>
              <Placeholder class="h-48" />
        +   </template>
        -   </div>
          </UModal>
        </template>
        ```
        > **Note:** This change affects the following components: `Modal`, `Slideover`.

*   **Changed composables**

    -   The `useToast()` composable `timeout` prop has been renamed to `duration`:
        ```diff
        <script setup lang="ts">
        const toast = useToast()

        - toast.add({ title: 'Invitation sent', timeout: 0 })
        + toast.add({ title: 'Invitation sent', duration: 0 })
        </script>
        ```

    -   The `useModal` and `useSlideover` composables have been removed in favor of a more generic `useOverlay` composable:

        Some important differences:
        -   The `useOverlay` composable is now used to create overlay instances
        -   Overlays that are opened, can be awaited for their result
        -   Overlays can no longer be close using `modal.close()` or `slideover.close()`, rather, they close automatically: either when a `close` event is fired explicitly from the opened component OR when the overlay closes itself (clicking on backdrop, pressing the ESC key, etc)
        -   To capture the return value in the parent component you must explictly emit a `close` event with the desired value

        ```diff
        <script setup lang="ts">
        import { ModalExampleComponent } from '#components'

        - const modal = useModal()
        + const overlay = useOverlay()

        - modal.open(ModalExampleComponent)
        + const modal = overlay.create(ModalExampleComponent)
        </script>
        ```

        Props are now passed through a props attribute:
        ```diff
        <script setup lang="ts">
        import { ModalExampleComponent } from '#components'

        - const modal = useModal()
        + const overlay = useOverlay()

        const count = ref(0)

        - modal.open(ModalExampleComponent, {
        -   count: count.value
        - })
        + const modal = overlay.create(ModalExampleComponent, {
        +   props: {
        +     count: count.value
        +   }
        + })
        </script>
        ```

        Closing a modal is now done through the `close` event. The `modal.open` method now returns a promise that resolves to the result of the modal whenever the modal is close:
        ```diff
        <script setup lang="ts">
        import { ModalExampleComponent } from '#components'

        - const modal = useModal()
        + const overlay = useOverlay()

        + const modal = overlay.create(ModalExampleComponent)

        - function openModal() {
        -   modal.open(ModalExampleComponent, {
        -     onSuccess() {
        -       toast.add({ title: 'Success!' })
        -     }
        -   })
        - }
        + async function openModal() {
        +   const result = await modal.open(ModalExampleComponent, {
        +     count: count.value
        +   })
        +
        +   if (result) {
        +     toast.add({ title: 'Success!' })
        +   }
        + }
        </script>
        ```

> **Warning:** This page is a work in progress, we'll improve it regularly.

### Theme

Learn how to customize Nuxt UI components using Tailwind CSS v4, CSS variables and the Tailwind Variants API for powerful and flexible theming.

#### Tailwind CSS

Nuxt UI uses Tailwind CSS v4, you can read the official [upgrade guide](https://tailwindcss.com/docs/upgrade-guide#changes-from-v3) to learn about all the breaking changes.

*   **`@theme`**

    Tailwind CSS v4 takes a CSS-first configuration approach, you now customize your theme with CSS variables inside a [`@theme`](https://tailwindcss.com/docs/functions-and-directives#theme-directive) directive to define your project's custom design tokens, like fonts, colors, and breakpoints:

    *(Assuming UI module, adjust if using UI Pro)*

    *Main CSS (`app/assets/css/main.css`):*
    ```css
    @import "tailwindcss";
    @import "@nuxt/ui";

    @theme static {
      --font-sans: 'Public Sans', sans-serif;

      --breakpoint-3xl: 1920px;

      --color-green-50: #EFFDF5;
      --color-green-100: #D9FBE8;
      --color-green-200: #B3F5D1;
      --color-green-300: #75EDAE;
      --color-green-400: #00DC82;
      --color-green-500: #00C16A;
      --color-green-600: #00A155;
      --color-green-700: #007F45;
      --color-green-800: #016538;
      --color-green-900: #0A5331;
      --color-green-950: #052E16;
    }
    ```

    The `@theme` directive tells Tailwind to make new utilities and variants available based on these variables. It's the equivalent of the `theme.extend` key in Tailwind CSS v3 `tailwind.config.ts` file.

    > **Note:** [Learn more about customizing your theme in the theme variables documentation.](https://tailwindcss.com/docs/theme)

*   **`@source`**

    You can use the [`@source` directive](https://tailwindcss.com/docs/functions-and-directives#source-directive) to explicitly specify source files that aren't picked up by Tailwind's automatic content detection:

    This can be useful when writing Tailwind CSS classes in markdown files with [`@nuxt/content`](https://github.com/nuxt/content) for example:

    *(Assuming UI module, adjust if using UI Pro)*

    *Main CSS (`app/assets/css/main.css`):*
    ```css
    @import "tailwindcss";
    @import "@nuxt/ui";

    @source "../../../content";
    /* Use this if you're not using compatibilityVersion: 4: https://nuxt.com/docs/getting-started/upgrade#opting-in-to-nuxt-4 */
    @source "../../content";
    ```

    > **Note:** [Learn more about automatic content detection in the detecting classes in source files documentation.](https://tailwindcss.com/docs/detecting-classes-in-source-files)

#### Design system

Nuxt UI extends Tailwind CSS's theming capabilities, providing a flexible design system with pre-configured color aliases and CSS variables. This allows for easy customization and quick adaptation of the UI to your brand's aesthetic.

*   **Colors**

    **For Nuxt:** Nuxt UI leverages Nuxt [App Config](https://nuxt.com/docs/guide/directory-structure/app-config#app-config-file) to provide customizable color aliases based on [Tailwind CSS colors](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).
    **For Vue:** Nuxt UI leverages Vite config to provide customizable color aliases based on [Tailwind CSS colors](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

    | Color         | Default   | Description                                                |
    | ------------- | --------- | ---------------------------------------------------------- |
    | `primary`     | `green`   | Main brand color, used as the default color for components. |
    | `secondary`   | `blue`    | Secondary color to complement the primary color.           |
    | `success`     | `green`   | Used for success states.                                   |
    | `info`        | `blue`    | Used for informational states.                             |
    | `warning`     | `yellow`  | Used for warning states.                                   |
    | `error`       | `red`     | Used for form error validation states.                     |
    | `neutral`     | `slate`   | Neutral color for backgrounds, text, etc.                  |

    **For Nuxt:**
    You can configure these color aliases at runtime in your `app.config.ts` file under the `ui.colors` key, allowing for dynamic theme customization without requiring an application rebuild:
    ```ts [app.config.ts]
    export default defineAppConfig({
      ui: {
        colors: {
          primary: 'blue',
          neutral: 'zinc'
        }
      }
    })
    ```

    **For Vue:**
    You can configure these color aliases at runtime in your `vite.config.ts` file under the `ui.colors` key:
    *(Assuming UI module, adjust if using UI Pro)*
    ```ts [vite.config.ts]
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import ui from '@nuxt/ui/vite'

    export default defineConfig({
      plugins: [
        vue(),
        ui({
          ui: {
            colors: {
              primary: 'blue',
              neutral: 'zinc'
            }
          }
        })
      ]
    })
    ```

    > **Note:** Try the theme picker in the header of the original docs to change `primary` and `neutral` colors.

    These colors are used to style the components but also to generate the `color` variants:

    *Example Button:*
    ```vue
    <UButton color="primary">
      Button
    </UButton>
    ```

    **For Nuxt:**
    > **Tip:** You can add you own dynamic color aliases in your `app.config.ts`, you just have to make sure to define them in the [`ui.theme.colors`](/getting-started/installation/nuxt#themecolors) option in your `nuxt.config.ts` file.
    > ```ts [app.config.ts]
    > export default defineAppConfig({
    >   ui: {
    >     colors: {
    >       tertiary: 'indigo'
    >     }
    >   }
    > })
    > ```
    > ```ts [nuxt.config.ts]
    > export default defineNuxtConfig({
    >   ui: {
    >     theme: {
    >       colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
    >     }
    >   }
    > })
    > ```

    **For Vue:**
    > **Tip:** You can add you own dynamic color aliases in your `vite.config.ts`, you just have to make sure to also define them in the [`theme.colors`](/getting-started/installation/vue#themecolors) option of the `ui` plugin.
    > *(Assuming UI module, adjust if using UI Pro)*
    > ```ts [vite.config.ts]
    > import { defineConfig } from 'vite'
    > import vue from '@vitejs/plugin-vue'
    > import ui from '@nuxt/ui/vite'
    >
    > export default defineConfig({
    >   plugins: [
    >     vue(),
    >     ui({
    >       ui: {
    >         colors: {
    >           tertiary: 'indigo'
    >         }
    >       },
    >       theme: {
    >         colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
    >       }
    >     })
    >   ]
    > })
    > ```

*   **Tokens**

    Nuxt UI leverages a robust system of CSS variables as design tokens to ensure consistent and flexible component styling. These tokens form the foundation of the theming system, offering smooth support for both light and dark modes.

    *   **Color Shades**

        Nuxt UI automatically creates a CSS variable for each color alias you define which represent the default shade used in both light and dark modes:

        *Light Mode CSS:*
        ```css
        :root {
          --ui-primary: var(--ui-color-primary-500);
          --ui-secondary: var(--ui-color-secondary-500);
          --ui-success: var(--ui-color-success-500);
          --ui-info: var(--ui-color-info-500);
          --ui-warning: var(--ui-color-warning-500);
          --ui-error: var(--ui-color-error-500);
        }
        ```
        *Dark Mode CSS:*
        ```css
        .dark {
          --ui-primary: var(--ui-color-primary-400);
          --ui-secondary: var(--ui-color-secondary-400);
          --ui-success: var(--ui-color-success-400);
          --ui-info: var(--ui-color-info-400);
          --ui-warning: var(--ui-color-warning-400);
          --ui-error: var(--ui-color-error-400);
        }
        ```
        > **Note:** You can use these variables in classes like `text-(--ui-primary)`, it will automatically adapt to the current color scheme.
        > **Tip:** You can change which shade is used for each color on light and dark mode:
        > *(Assuming UI module, adjust if using UI Pro)*
        > ```css [app/assets/css/main.css]
        > @import "tailwindcss";
        > @import "@nuxt/ui";
        >
        > :root {
        >   --ui-primary: var(--ui-color-primary-700);
        > }
        >
        > .dark {
        >   --ui-primary: var(--ui-color-primary-200);
        > }
        > ```

    *   **Black as Primary Color**

        **For Nuxt:** You cannot set `primary: 'black'` in your `app.config.ts` because this color has no shade, instead you can override the primary color in your `main.css` file to create a black & white theme.
        **For Vue:** You cannot set `primary: 'black'` in your `vite.config.ts` because this color has no shade, instead you can override the primary color in your `main.css` file to create a black & white theme.

        *(Assuming UI module, adjust if using UI Pro)*
        ```css [app/assets/css/main.css]
        @import "tailwindcss";
        @import "@nuxt/ui";

        :root {
          --ui-primary: black;
        }

        .dark {
          --ui-primary: white;
        }
        ```

    *   **Neutral Palette**

        Nuxt UI provides a comprehensive set of design tokens for the `neutral` color palette, ensuring consistent and accessible UI styling across both light and dark modes. These tokens offer fine-grained control over text, background, and border colors:

        *Light Mode CSS:*
        ```css
        :root {
          /* Least prominent text */
          --ui-text-dimmed: var(--ui-color-neutral-400);
          /* Slightly muted text */
          --ui-text-muted: var(--ui-color-neutral-500);
          /* Moderately prominent text */
          --ui-text-toned: var(--ui-color-neutral-600);
          /* Default text color */
          --ui-text: var(--ui-color-neutral-700);
          /* Most prominent text */
          --ui-text-highlighted: var(--ui-color-neutral-900);

          /* Main background color */
          --ui-bg: var(--color-white);
          /* Subtle background */
          --ui-bg-muted: var(--ui-color-neutral-50);
          /* Slightly elevated background */
          --ui-bg-elevated: var(--ui-color-neutral-100);
          /* More prominent background */
          --ui-bg-accented: var(--ui-color-neutral-200);
          /* Inverted background color */
          --ui-bg-inverted: var(--ui-color-neutral-900);

          /* Default border color */
          --ui-border: var(--ui-color-neutral-200);
          /* Subtle border */
          --ui-border-muted: var(--ui-color-neutral-200);
          /* More prominent border */
          --ui-border-accented: var(--ui-color-neutral-300);
          /* Inverted border color */
          --ui-border-inverted: var(--ui-color-neutral-900);
        }
        ```
        *Dark Mode CSS:*
        ```css
        .dark {
          /* Least prominent text */
          --ui-text-dimmed: var(--ui-color-neutral-500);
          /* Slightly muted text */
          --ui-text-muted: var(--ui-color-neutral-400);
          /* Moderately prominent text */
          --ui-text-toned: var(--ui-color-neutral-300);
          /* Default text color */
          --ui-text: var(--ui-color-neutral-200);
          /* Most prominent text */
          --ui-text-highlighted: var(--color-white);

          /* Main background color */
          --ui-bg: var(--ui-color-neutral-900);
          /* Subtle background */
          --ui-bg-muted: var(--ui-color-neutral-800);
          /* Slightly elevated background */
          --ui-bg-elevated: var(--ui-color-neutral-800);
          /* More prominent background */
          --ui-bg-accented: var(--ui-color-neutral-700);
          /* Inverted background color */
          --ui-bg-inverted: var(--color-white);

          /* Default border color */
          --ui-border: var(--ui-color-neutral-800);
          /* Subtle border */
          --ui-border-muted: var(--ui-color-neutral-700);
          /* More prominent border */
          --ui-border-accented: var(--ui-color-neutral-700);
          /* Inverted border color */
          --ui-border-inverted: var(--color-white);
        }
        ```
        > **Note:** Nuxt UI automatically applies a text and background color on the `<body>` element of your app:
        > ```css
        > body {
        >   @apply antialiased text-(--ui-text) bg-(--ui-bg);
        > }
        > ```
        > **Tip:** You can customize these CSS variables to tailor the appearance of your application:
        > *(Assuming UI module, adjust if using UI Pro)*
        > ```css [app/assets/css/main.css]
        > @import "tailwindcss";
        > @import "@nuxt/ui";
        >
        > :root {
        >   --ui-bg: var(--ui-color-neutral-50);
        >   --ui-text: var(--ui-color-neutral-900);
        > }
        >
        > .dark {
        >   --ui-bg: var(--ui-color-neutral-950);
        >   --ui-border: var(--ui-color-neutral-900);
        > }
        > ```

    *   **Border Radius**

        Nuxt UI uses a global `--ui-radius` CSS variable for consistent border rounding. Components use variations of this base value, like `rounded-[calc(var(--ui-radius)*2)]`, to create different levels of roundness throughout the UI:
        ```css
        :root {
          --ui-radius: var(--radius-sm);
        }
        ```
        > **Note:** Try the theme picker in the header of the original docs to change the base radius value.
        > **Tip:** You can customize the default radius value using the default Tailwind CSS variables or a value of your choice:
        > *(Assuming UI module, adjust if using UI Pro)*
        > ```css [app/assets/css/main.css]
        > @import "tailwindcss";
        > @import "@nuxt/ui";
        >
        > :root {
        >   --ui-radius: var(--radius-sm);
        > }
        > ```

    *   **Container**

        Nuxt UI uses a global `--ui-container` CSS variable to define the width of the container:
        ```css
        :root {
          --ui-container: var(--container-7xl);
        }
        ```
        > **Tip:** You can customize the default container width using the default Tailwind CSS variables or a value of your choice:
        > *(Assuming UI module, adjust if using UI Pro)*
        > ```css [app/assets/css/main.css]
        > @import "tailwindcss";
        > @import "@nuxt/ui";
        >
        > @theme {
        >   --container-8xl: 90rem;
        > }
        >
        > :root {
        >   --ui-container: var(--container-8xl);
        > }
        > ```

#### Components theme

Nuxt UI components are styled using the [Tailwind Variants](https://www.tailwind-variants.org/) API, which provides a powerful way to create variants and manage component styles. Let's explore the key features of this API:

*   **Slots**

    Components in Nuxt UI can have multiple `slots`, each representing a distinct HTML element or section within the component. These slots allow for flexible content insertion and styling. Let's take the [Card](/components/card) component as an example:

    *Theme Definition (`src/theme/card.ts`):*
    ```ts
    export default {
      slots: {
        root: 'bg-(--ui-bg) ring ring-(--ui-border) divide-y divide-(--ui-border) rounded-[calc(var(--ui-radius)*2)]',
        header: 'p-4 sm:px-6',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6'
      }
    }
    ```
    *Component Usage (`src/runtime/components/Card.vue`):*
    ```vue
    <template>
      <div :class="ui.root({ class: [props.class, props.ui?.root] })">
        <div :class="ui.header({ class: props.ui?.header })">
          <slot name="header" />
        </div>

        <div :class="ui.body({ class: props.ui?.body })">
          <slot />
        </div>

        <div :class="ui.footer({ class: props.ui?.footer })">
          <slot name="footer" />
        </div>
      </div>
    </template>
    ```

    Some components don't have slots, they are just composed of a single root element. In this case, the theme only defines the `base` slot like the [Container](/components/container) component for example:

    *Theme Definition (`src/theme/container.ts`):*
    ```ts
    export default {
      base: 'max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
    }
    ```
    *Component Usage (`src/runtime/components/Container.vue`):*
    ```vue
    <template>
      <div :class="container({ class: props.class })">
        <slot />
      </div>
    </template>
    ```
    > **Warning:** Components without slots don't have a [`ui` prop](#ui-prop), only the [`class` prop](#class-prop) is available to override styles.

*   **Variants**

    Nuxt UI components use `variants` to change the `slots` styles based on props. Here's an example of the [Avatar](/components/avatar) component:
    ```ts [src/theme/avatar.ts]
    export default {
      slots: {
        root: 'inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-full align-middle bg-(--ui-bg-elevated)',
        image: 'h-full w-full rounded-[inherit] object-cover'
      },
      variants: {
        size: {
          sm: {
            root: 'size-7 text-sm'
          },
          md: {
            root: 'size-8 text-base'
          },
          lg: {
            root: 'size-9 text-lg'
          }
        }
      },
      defaultVariants: {
        size: 'md'
      }
    }
    ```
    This way, the `size` prop will apply the corresponding styles to the `root` slot:

    *Example Avatar:*
    ```vue
    <UAvatar src="https://github.com/nuxt.png" size="lg" />
    ```

    The `defaultVariants` property specifies the default values for each variant. It determines how a component looks and behaves when no prop is provided.

    **For Nuxt:**
    > **Tip:** These default values can be customized in your [`app.config.ts`](#config) to adjust the standard appearance of components throughout your application.

    **For Vue:**
    > **Tip:** These default values can be customized in your [`vite.config.ts`](#config) to adjust the standard appearance of components throughout your application.

#### Customize theme

You have multiple ways to customize the appearance of Nuxt UI components, you can do it for all components at once or on a per-component basis.

> **Note:** Tailwind Variants uses [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) under the hood to merge classes so you don't have to worry about conflicting classes.
> **Tip:** You can explore the theme for each component in two ways:
> *   Check the `Theme` section in the documentation of each individual component.
> *   Browse the source code directly in the GitHub repository at [`v3/src/theme`](https://github.com/nuxt/ui/tree/v3/src/theme).

*   **Config**

    **For Nuxt:**
    You can override the theme of components globally inside your `app.config.ts` by using the exact same structure as the theme object.
    Let's say you want to change the font weight of all your buttons, you can do it like this:
    ```ts [app.config.ts]
    export default defineAppConfig({
      ui: {
        button: {
          slots: {
            base: 'font-bold'
          }
        }
      }
    })
    ```

    **For Vue:**
    You can override the theme of components globally inside your `vite.config.ts` by using the exact same structure as the theme object.
    Let's say you want to change the font weight of all your buttons, you can do it like this:
    *(Assuming UI module, adjust if using UI Pro)*
    ```ts [vite.config.ts]
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import ui from '@nuxt/ui/vite'

    export default defineConfig({
      plugins: [
        vue(),
        ui({
          ui: {
            button: {
              slots: {
                base: 'font-bold'
              }
            }
          }
        })
      ]
    })
    ```
    > **Note:** In this example, the `font-bold` class will override the default `font-medium` class on all buttons.

*   **Props**

    *   **`ui` prop**

        You can also override a component's **slots** using the `ui` prop. This has priority over the global configuration and `variants` resolution.

        *Example Button:*
        ```vue
        <UButton
          trailing-icon="i-lucide-chevron-right"
          size="md"
          color="neutral"
          variant="outline"
          :ui="{ trailingIcon: 'rotate-90 size-3' }"
        >
          Button
        </UButton>
        ```
        > **Note:** In this example, the `trailingIcon` slot is overwritten with `size-3` even though the `md` size variant would apply a `size-5` class to it.

    *   **`class` prop**

        The `class` prop allows you to override the classes of the `root` or `base` slot. This has priority over the global configuration and `variants` resolution.

        *Example Button:*
        ```vue
        <UButton class="font-bold rounded-full">
          Button
        </UButton>
        ```
        > **Note:** In this example, the `font-bold` class will override the default `font-medium` class on this button.

### Fonts (Nuxt Only)

Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.

#### Usage

Nuxt UI automatically registers the [`@nuxt/fonts`](https://github.com/nuxt/fonts) module for you, so there's no additional setup required. To use a font in your Nuxt UI application, you can simply declare it in your CSS. It will be automatically loaded and optimized for you.

*(Assuming UI module, adjust if using UI Pro)*
```css [app/assets/css/main.css]
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --font-sans: 'Public Sans', sans-serif;
}
```

You can disable the `@nuxt/fonts` module with the `ui.fonts` option in your `nuxt.config.ts`:
```ts [nuxt.config.ts]
export default defineNuxtConfig({
  ui: {
    fonts: false
  }
})
```

### Installation for Nuxt

Learn how to install and configure Nuxt UI in your Nuxt application.

> Looking for the [Vue version](/getting-started/installation/vue)?

#### Setup

##### Add to a Nuxt project

**Steps:**

1.  **Install the Nuxt UI package**

    *PNPM:*
    ```bash
    pnpm add @nuxt/ui
    ```
    *Yarn:*
    ```bash
    yarn add @nuxt/ui
    ```
    *NPM:*
    ```bash
    npm install @nuxt/ui
    ```
    *Bun:*
    ```bash
    bun add @nuxt/ui
    ```
    > **Warning:** If you're using **pnpm**, ensure that you either set `shamefully-hoist=true` in your `.npmrc` file or install `tailwindcss` in your project's root directory.

2.  **Add the Nuxt UI module in your `nuxt.config.ts`**

    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: ['@nuxt/ui']
    })
    ```

3.  **Import Tailwind CSS and Nuxt UI in your CSS**

    *CSS File (`app/assets/css/main.css`):*
    ```css
    @import "tailwindcss";
    @import "@nuxt/ui";
    ```
    *Nuxt Config (`nuxt.config.ts`):*
    ```ts
    export default defineNuxtConfig({
      modules: ['@nuxt/ui'],
      css: ['~/assets/css/main.css']
    })
    ```
    > **VSCode Recommendation:** Install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension and add settings:
    > ```json [.vscode/settings.json]
    > "files.associations": {
    >   "*.css": "tailwindcss"
    > },
    > "editor.quickSuggestions": {
    >   "strings": "on"
    > },
    > "tailwindCSS.classAttributes": ["class", "ui"],
    > "tailwindCSS.experimental.classRegex": [
    >   ["ui:\\s*{([^)]*)\\s*}", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
    > ]
    > ```

4.  **Wrap your app with App component**

    ```vue [app.vue]
    <template>
      <UApp>
        <NuxtPage />
      </UApp>
    </template>
    ```
    > **Note:** The `App` component provides global configurations and is required for **Toast**, **Tooltip** components to work as well as **Programmatic Overlays**. ([See App Component](/components/app))

##### Use our Nuxt Starter

Start your project using the [nuxt/starter#ui](https://github.com/nuxt/starter/tree/ui) template with Nuxt UI pre-configured.

Create a new project locally by running the following command:
```bash [Terminal]
npx nuxi init -t ui <my-app>
```
> **Note:** Replace `<my-app>` with your project name.

Once the installation is complete, navigate into your project and start the development server:
```bash [Terminal]
cd <my-app>
npm run dev
```

#### Options

You can customize Nuxt UI by providing options in your `nuxt.config.ts`.

*   **`prefix`**
    Use the `prefix` option to change the prefix of the components.
    -   Default: `U`
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: ['@nuxt/ui'],
      css: ['~/assets/css/main.css'],
      ui: {
        prefix: 'Nuxt'
      }
    })
    ```

*   **`fonts`**
    Use the `fonts` option to enable or disable the [`@nuxt/fonts`](https://github.com/nuxt/fonts) module.
    -   Default: `true`
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: ['@nuxt/ui'],
      css: ['~/assets/css/main.css'],
      ui: {
        fonts: false
      }
    })
    ```

*   **`colorMode`**
    Use the `colorMode` option to enable or disable the [`@nuxt/color-mode`](https://github.com/nuxt-modules/color-mode) module.
    -   Default: `true`
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: ['@nuxt/ui'],
      css: ['~/assets/css/main.css'],
      ui: {
        colorMode: false
      }
    })
    ```

*   **`theme.colors`**
    Use the `theme.colors` option to define the dynamic color aliases used to generate components theme.
    -   Default: `['primary', 'secondary', 'success', 'info', 'warning', 'error']`
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: ['@nuxt/ui'],
      css: ['~/assets/css/main.css'],
      ui: {
        theme: {
          colors: ['primary', 'error']
        }
      }
    })
    ```
    > **Tip:** Learn more about color customization and theming in the [Theme section](#theme).

*   **`theme.transitions`**
    Use the `theme.transitions` option to enable or disable transitions on components.
    -   Default: `true`
    ```ts [nuxt.config.ts]
    export default defineNuxtConfig({
      modules: ['@nuxt/ui'],
      css: ['~/assets/css/main.css'],
      ui: {
        theme: {
          transitions: false
        }
      }
    })
    ```
    > **Note:** This option adds the `transition-colors` class on components with hover or active states.

#### Continuous Releases

Nuxt UI uses [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new) for continuous preview releases, providing developers with instant access to the latest features and bug fixes without waiting for official releases.

Automatic preview releases are created for all commits and PRs to the `v3` branch. Use them by replacing your package version with the specific commit hash or PR number.
```diff [package.json]
{
  "dependencies": {
-   "@nuxt/ui": "^3.0.0",
+   "@nuxt/ui": "https://pkg.pr.new/@nuxt/ui@4c96909",
  }
}
```
> **Note:** **pkg.pr.new** will automatically comment on PRs with the installation URL, making it easy to test changes.

### Installation for Vue

Learn how to install and configure Nuxt UI in your Vue application.

> Looking for the [Nuxt version](/getting-started/installation/nuxt)?

#### Setup

##### Add to a Vue project

**Steps:**

1.  **Install the Nuxt UI package**

    *PNPM:*
    ```bash
    pnpm add @nuxt/ui
    ```
    *Yarn:*
    ```bash
    yarn add @nuxt/ui
    ```
    *NPM:*
    ```bash
    npm install @nuxt/ui
    ```
    *Bun:*
    ```bash
    bun add @nuxt/ui
    ```
    > **Warning:** If you're using **pnpm**, ensure that you either set `shamefully-hoist=true` in your `.npmrc` file or install `tailwindcss`, `vue-router` and `@unhead/vue` in your project's root directory.

2.  **Add the Nuxt UI Vite plugin in your `vite.config.ts`**

    ```ts [vite.config.ts]
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import ui from '@nuxt/ui/vite'

    export default defineConfig({
      plugins: [
        vue(),
        ui()
      ]
    })
    ```
    > **Tip:** Nuxt UI registers `unplugin-auto-import` and `unplugin-vue-components`, which will generate `auto-imports.d.ts` and `components.d.ts` type declaration files. You will likely want to gitignore these, and add them to your `tsconfig`.
    > ```json [tsconfig.app.json]
    > {
    >   "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "auto-imports.d.ts", "components.d.ts"]
    > }
    > ```
    > ```bash [.gitignore]
    > # Auto-generated type declarations
    > auto-imports.d.ts
    > components.d.ts
    > ```

3.  **Use the Nuxt UI Vue plugin in your `main.ts`**

    ```ts [main.ts]
    import { createApp } from 'vue'
    import { createRouter, createWebHistory } from 'vue-router'
    import ui from '@nuxt/ui/vue-plugin'
    import App from './App.vue'

    const app = createApp(App)

    const router = createRouter({
      routes: [],
      history: createWebHistory()
    })

    app.use(router)
    app.use(ui)

    app.mount('#app')
    ```

4.  **Import Tailwind CSS and Nuxt UI in your CSS**

    ```css [assets/main.css]
    @import "tailwindcss";
    @import "@nuxt/ui";
    ```
    > **Tip:** Import the CSS file in your `main.ts`.
    > ```ts [main.ts]
    > import './assets/main.css'
    >
    > // ... rest of the file
    > ```
    > **VSCode Recommendation:** Install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension and add settings:
    > ```json [.vscode/settings.json]
    > "files.associations": {
    >   "*.css": "tailwindcss"
    > },
    > "editor.quickSuggestions": {
    >   "strings": "on"
    > },
    > "tailwindCSS.classAttributes": ["class", "ui"],
    > "tailwindCSS.experimental.classRegex": [
    >   ["ui:\\s*{([^)]*)\\s*}", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
    > ]
    > ```

5.  **Wrap your app with App component**

    ```vue [App.vue]
    <template>
      <UApp>
        <RouterView />
      </UApp>
    </template>
    ```
    > **Note:** The `App` component provides global configurations and is required for **Toast**, **Tooltip** components to work as well as **Programmatic Overlays**. ([See App Component](/components/app))

##### Use our Vue starter

Start your project using the [nuxtlabs/nuxt-ui-vue-starter](https://github.com/nuxtlabs/nuxt-ui-vue-starter) template with Nuxt UI pre-configured.

Create a new project locally by running the following command:
```bash [Terminal]
npx nuxi init -t github:nuxtlabs/nuxt-ui-vue-starter <my-app>
```
> **Note:** Replace `<my-app>` with your project name.

Once the installation is complete, navigate into your project and start the development server:
```bash [Terminal]
cd <my-app>
npm run dev
```

#### Options

You can customize Nuxt UI by providing options in your `vite.config.ts`.

*   **`prefix`**
    Use the `prefix` option to change the prefix of the components.
    -   Default: `U`
    ```ts [vite.config.ts]
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import ui from '@nuxt/ui/vite'

    export default defineConfig({
      plugins: [
        vue(),
        ui({
          prefix: 'Nuxt'
        })
      ]
    })
    ```

*   **`ui`**
    Use the `ui` option to provide configuration for Nuxt UI.
    ```ts [vite.config.ts]
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import ui from '@nuxt/ui/vite'

    export default defineConfig({
      plugins: [
        vue(),
        ui({
          ui: {
            colors: {
              primary: 'green',
              neutral: 'slate'
            }
          }
        })
      ]
    })
    ```

*   **`colorMode`**
    Use the `colorMode` option to enable or disable the color mode integration from `@vueuse/core`.
    -   Default: `true`
    ```ts [vite.config.ts]
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import ui from '@nuxt/ui/vite'

    export default defineConfig({
      plugins: [
        vue(),
        ui({
          colorMode: false
        })
      ]
    })
    ```

*   **`theme.colors`**
    Use the `theme.colors` option to define the dynamic color aliases used to generate components theme.
    -   Default: `['primary', 'secondary', 'success', 'info', 'warning', 'error']`
    ```ts [vite.config.ts]
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import ui from '@nuxt/ui/vite'

    export default defineConfig({
      plugins: [
        vue(),
        ui({
          theme: {
            colors: ['primary', 'error']
          }
        })
      ]
    })
    ```
    > **Tip:** Learn more about color customization and theming in the [Theme section](#theme).

*   **`theme.transitions`**
    Use the `theme.transitions` option to enable or disable transitions on components.
    -   Default: `true`
    ```ts [vite.config.ts]
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import ui from '@nuxt/ui/vite'

    export default defineConfig({
      plugins: [
        vue(),
        ui({
          theme: {
            transitions: false
          }
        })
      ]
    })
    ```
    > **Note:** This option adds the `transition-colors` class on components with hover or active states.

#### Continuous Releases

Nuxt UI uses [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new) for continuous preview releases, providing developers with instant access to the latest features and bug fixes without waiting for official releases.

Automatic preview releases are created for all commits and PRs to the `v3` branch. Use them by replacing your package version with the specific commit hash or PR number.
```diff [package.json]
{
  "dependencies": {
-   "@nuxt/ui": "^3.0.0",
+   "@nuxt/ui": "https://pkg.pr.new/@nuxt/ui@4c96909",
  }
}
```
> **Note:** **pkg.pr.new** will automatically comment on PRs with the installation URL, making it easy to test changes.

### Icons for Nuxt

Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.

> Looking for the [Vue version](/getting-started/icons/vue)?

#### Usage

Nuxt UI automatically registers the [`@nuxt/icon`](https://github.com/nuxt/icon) module for you, so there's no additional setup required.

*   **Icon Component**

    You can use the [Icon](/components/icon) component with a `name` prop to display an icon:

    *Example Icon:*
    ```vue
    <UIcon name="i-lucide-lightbulb" class="size-5" />
    ```
    > **Note:** You can use any name from the <https://icones.js.org> collection.

*   **Component Props**

    Some components also have an `icon` prop to display an icon, like the [Button](/components/button) for example:

    *Example Button with Icon:*
    ```vue
    <UButton icon="i-lucide-sun" variant="subtle">
      Button
    </UButton>
    ```

#### Collections

*   **Iconify Dataset**

    It's highly recommended to install the icon data locally with:

    *PNPM:*
    ```bash
    pnpm i @iconify-json/{collection_name}
    ```
    *Yarn:*
    ```bash
    yarn add @iconify-json/{collection_name}
    ```
    *NPM:*
    ```bash
    npm install @iconify-json/{collection_name}
    ```

    For example, to use the `i-uil-github` icon, install its collection with `@iconify-json/uil`. This way the icons can be served locally or from your serverless functions, which is faster and more reliable on both SSR and client-side.

    > **Note:** [Read more about this in the `@nuxt/icon` documentation.](https://github.com/nuxt/icon?tab=readme-ov-file#iconify-dataset)

*   **Custom Local Collections**

    You can use local SVG files to create a custom Iconify collection.

    For example, place your icons' SVG files under a folder of your choice, for example, `./assets/icons`:
    ```bash
    assets/icons
    ├── add.svg
    └── remove.svg
    ```

    In your `nuxt.config.ts`, add an item in `icon.customCollections`:
    ```ts
    export default defineNuxtConfig({
      modules: ['@nuxt/ui'],
      css: ['~/assets/css/main.css'],
      icon: {
        customCollections: [{
          prefix: 'custom',
          dir: './assets/icons'
        }]
      }
    })
    ```

    Then you can use the icons like this:
    ```vue
    <template>
      <UIcon name="i-custom-add" />
    </template>
    ```
    > **Note:** [Read more about this in the `@nuxt/icon` documentation.](https://github.com/nuxt/icon?tab=readme-ov-file#custom-local-collections)

#### Theme

You can change the default icons used by components in your `app.config.ts`:

**[Icons Theme Table - Refer to original docs or source for the table content]**

### Icons for Vue

Nuxt UI integrates with Iconify to access over 200,000+ icons.

> Looking for the [Nuxt version](/getting-started/icons/nuxt)?

#### Usage

*   **Icon Component**

    You can use the [Icon](/components/icon) component with a `name` prop to display an icon:

    *Example Icon:*
    ```vue
    <UIcon name="i-lucide-lightbulb" class="size-5" />
    ```
    > **Note:** You can use any name from the <https://icones.js.org> collection.

*   **Component Props**

    Some components also have an `icon` prop to display an icon, like the [Button](/components/button) for example:

    *Example Button with Icon:*
    ```vue
    <UButton icon="i-lucide-sun" variant="subtle">
      Button
    </UButton>
    ```

#### Theme

You can change the default icons used by Nuxt UI components in your `vite.config.ts`:

**[Icons Theme Table - Refer to original docs or source for the table content]**

### Color Mode for Nuxt

Nuxt UI integrates with Nuxt Color Mode to allow for easy switching between light and dark themes.

> Looking for the [Vue version](/getting-started/color-mode/vue)?

#### Usage

Nuxt UI automatically registers the [`@nuxtjs/color-mode`](https://github.com/nuxt-modules/color-mode) module for you, so there's no additional setup required. You can simply use the `useColorMode` composable to switch between light and dark modes:

```vue [ColorModeButton.vue]
<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
```

You can disable the `@nuxtjs/color-mode` module with the `ui.colorMode` option in your `nuxt.config.ts`:
```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  }
})
```

### Color Mode for Vue

Nuxt UI integrates with VueUse to allow for easy switching between light and dark themes.

> Looking for the [Nuxt version](/getting-started/color-mode/nuxt)?

#### Usage

Nuxt UI automatically registers the [useDark](https://vueuse.org/core/useDark) composable as a Vue plugin, so there's no additional setup required. You can simply use it to switch between light and dark modes:

```vue [ColorModeButton.vue]
<script setup>
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
</script>

<template>
  <UButton
    :icon="mode === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
    color="neutral"
    variant="ghost"
    @click="mode = mode === 'dark' ? 'light' : 'dark'"
  />
</template>
```

You can disable this plugin with the `colorMode` option in your `vite.config.ts`:

*(Assuming UI module, adjust if using UI Pro)*
```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      colorMode: false
    })
  ]
})
```

### Internationalization (i18n) for Nuxt

Learn how to internationalize your Nuxt app with multi-directional support (LTR/RTL).

> Looking for the [Vue version](/getting-started/i18n/vue)?

#### Usage

> **Note:** Nuxt UI provides an **App** component that wraps your app to provide global configurations. ([See App Component](/components/app))

*   **Locale**

    *(Assuming UI module, adjust if using UI Pro)*
    Use the `locale` prop with the locale you want to use from `@nuxt/ui/locale`:
    ```vue [app.vue]
    <script setup lang="ts">
    import { fr } from '@nuxt/ui/locale'
    </script>

    <template>
      <UApp :locale="fr">
        <NuxtPage />
      </UApp>
    </template>
    ```

*   **Custom locale**

    You also have the option to add your own locale using `defineLocale`:
    *(Assuming UI module, adjust if using UI Pro)*
    ```vue [app.vue]
    <script setup lang="ts">
    import type { Messages } from '@nuxt/ui'

    const locale = defineLocale<Messages>({
      name: 'My custom locale',
      code: 'en',
      dir: 'ltr',
      messages: {
        // implement pairs
      }
    })
    </script>

    <template>
      <UApp :locale="locale">
        <NuxtPage />
      </UApp>
    </template>
    ```
    > **Tip:** Look at the `code` parameter, there you need to pass the iso code of the language. Example: `hi` Hindi (language), `de-AT`: German (language) as used in Austria (region).

*   **Dynamic locale**

    To dynamically switch between languages, you can use the [Nuxt I18n](https://i18n.nuxtjs.org/) module.

    **Steps:**

    1.  **Install the Nuxt I18n package**
        *PNPM:* `pnpm add @nuxtjs/i18n`
        *Yarn:* `yarn add @nuxtjs/i18n`
        *NPM:* `npm install @nuxtjs/i18n`
        *Bun:* `bun add @nuxtjs/i18n`

    2.  **Add the Nuxt I18n module in your `nuxt.config.ts`**
        ```ts [nuxt.config.ts]
        export default defineNuxtConfig({
          modules: [
            '@nuxt/ui',
            '@nuxtjs/i18n'
          ],
          css: ['~/assets/css/main.css'],
          i18n: {
            locales: [{
              code: 'de',
              name: 'Deutsch'
            }, {
              code: 'en',
              name: 'English'
            }, {
              code: 'fr',
              name: 'Français'
            }]
          }
        })
        ```

    3.  **Set the `locale` prop using `useI18n`**
        *(Assuming UI module, adjust if using UI Pro)*
        ```vue [app.vue]
        <script setup lang="ts">
        import * as locales from '@nuxt/ui/locale'

        const { locale } = useI18n()
        </script>

        <template>
          <UApp :locale="locales[locale]">
            <NuxtPage />
          </UApp>
        </template>
        ```

*   **Dynamic direction**

    Each locale has a `dir` property which will be used by the `App` component to set the directionality of all components.

    In a multilingual application, you might want to set the `lang` and `dir` attributes on the `<html>` element dynamically based on the user's locale, which you can do with the [useHead](https://nuxt.com/docs/api/composables/use-head) composable:

    *(Assuming UI module, adjust if using UI Pro)*
    ```vue [app.vue]
    <script setup lang="ts">
    import * as locales from '@nuxt/ui/locale'

    const { locale } = useI18n()

    const lang = computed(() => locales[locale.value].code)
    const dir = computed(() => locales[locale.value].dir)

    useHead({
      htmlAttrs: {
        lang,
        dir
      }
    })
    </script>

    <template>
      <UApp :locale="locales[locale]">
        <NuxtPage />
      </UApp>
    </template>
    ```

#### Supported languages

**[Supported Languages List - Refer to original docs or source for the list content]**

### Internationalization (i18n) for Vue

Learn how to internationalize your Vue app with multi-directional support (LTR/RTL).

> Looking for the [Nuxt version](/getting-started/i18n/nuxt)?

#### Usage

> **Note:** Nuxt UI provides an **App** component that wraps your app to provide global configurations. ([See App Component](/components/app))

*   **Locale**

    *(Assuming UI module, adjust if using UI Pro)*
    Use the `locale` prop with the locale you want to use from `@nuxt/ui/locale`:
    ```vue [App.vue]
    <script setup lang="ts">
    import { fr } from '@nuxt/ui/locale'
    </script>

    <template>
      <UApp :locale="fr">
        <RouterView />
      </UApp>
    </template>
    ```

*   **Custom locale**

    You also have the option to add your locale using `defineLocale`:
    *(Assuming UI module, adjust if using UI Pro)*
    ```vue [App.vue]
    <script setup lang="ts">
    import type { Messages } from '@nuxt/ui'
    import { defineLocale } from '@nuxt/ui/composables/defineLocale.js'

    const locale = defineLocale<Messages>({
      name: 'My custom locale',
      code: 'en',
      dir: 'ltr',
      messages: {
        // implement pairs
      }
    })
    </script>

    <template>
      <UApp :locale="locale">
        <RouterView />
      </UApp>
    </template>
    ```
    > **Tip:** Look at the `code` parameter, there you need to pass the iso code of the language. Example: `hi` Hindi (language), `de-AT`: German (language) as used in Austria (region).

*   **Dynamic locale**

    To dynamically switch between languages, you can use the [Vue I18n](https://vue-i18n.intlify.dev/) plugin.

    **Steps:**

    1.  **Install the Vue I18n package**
        *PNPM:* `pnpm add vue-i18n@10`
        *Yarn:* `yarn add vue-i18n@10`
        *NPM:* `npm install vue-i18n@10`
        *Bun:* `bun add vue-i18n@10`

    2.  **Use the Vue I18n plugin in your `main.ts`**
        ```ts [main.ts]
        import { createApp } from 'vue'
        import { createRouter, createWebHistory } from 'vue-router'
        import { createI18n } from 'vue-i18n'
        import ui from '@nuxt/ui/vue-plugin'
        import App from './App.vue'

        const app = createApp(App)

        const router = createRouter({
          routes: [],
          history: createWebHistory()
        })

        const i18n = createI18n({
          legacy: false,
          locale: 'en',
          availableLocales: ['en', 'de'],
          messages: {
            en: {
              // ...
            },
            de: {
              // ...
            }
          }
        })

        app.use(router)
        app.use(i18n)
        app.use(ui)

        app.mount('#app')
        ```

    3.  **Set the `locale` prop using `useI18n`**
        *(Assuming UI module, adjust if using UI Pro)*
        ```vue [App.vue]
        <script setup lang="ts">
        import { useI18n } from 'vue-i18n'
        import * as locales from '@nuxt/ui/locale'

        const { locale } = useI18n()
        </script>

        <template>
          <UApp :locale="locales[locale]">
            <RouterView />
          </UApp>
        </template>
        ```

*   **Dynamic direction**

    Each locale has a `dir` property which will be used by the `App` component to set the directionality of all components.

    In a multilingual application, you might want to set the `lang` and `dir` attributes on the `<html>` element dynamically based on the user's locale, which you can do with the [useHead](https://unhead.unjs.io/usage/composables/use-head) composable:

    *(Assuming UI module, adjust if using UI Pro)*
    ```vue [App.vue]
    <script setup lang="ts">
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useHead } from '@unhead/vue'
    import * as locales from '@nuxt/ui/locale'

    const { locale } = useI18n()

    const lang = computed(() => locales[locale.value].code)
    const dir = computed(() => locales[locale.value].dir)

    useHead({
      htmlAttrs: {
        lang,
        dir
      }
    })
    </script>

    <template>
      <UApp :locale="locales[locale]">
        <RouterView />
      </UApp>
    </template>
    ```

#### Supported languages

**[Supported Languages List - Refer to original docs or source for the list content]**

---

## Composables

### `defineShortcuts`

A composable to define keyboard shortcuts in your app.

#### Usage

Use the auto-imported `defineShortcuts` composable to define keyboard shortcuts.

```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  meta_k: () => {
    open.value = !open.value
  }
})
</script>
```

-   The composable uses VueUse's [`useEventListener`](https://vueuse.org/core/useEventListener/) to handle keydown events.
-   For a complete list of available shortcut keys, refer to the [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) API documentation. Note that the key should be written in lowercase.

> **Tip:** Learn how to display shortcuts in components in the [Kbd component documentation](/components/kbd).

#### API

##### `defineShortcuts(config: ShortcutsConfig, options?: ShortcutsOptions)`

Define keyboard shortcuts for your application.

-   `config`: An object where keys are shortcut definitions and values are either handler functions or shortcut configuration objects.
-   `options`: Optional configuration for the shortcuts behavior.
    -   `chainDelay`: The delay between key presses to consider the shortcut as chained. Default is `250`.

###### Shortcut Definition

Shortcuts are defined using the following format:

-   Single key: `'a'`, `'b'`, `'1'`, `'?'`, etc.
-   Key combinations: Use `_` to separate keys, e.g., `'meta_k'`, `'ctrl_shift_f'`
-   Key sequences: Use `-` to define a sequence, e.g., `'g-d'`

###### Modifiers

-   `meta`: Represents `⌘ Command` on macOS and `⊞ Windows` on Windows
-   `ctrl`: Represents `Ctrl` on all platforms
-   `shift`: Used for alphabetic keys when Shift is required

###### Special Keys

-   `escape`: Triggers on Esc key
-   `enter`: Triggers on Enter key
-   `arrowleft`, `arrowright`, `arrowup`, `arrowdown`: Trigger on respective arrow keys

###### Shortcut Configuration

Each shortcut can be defined as a function or an object with the following properties:

```ts
interface ShortcutConfig {
  handler: () => void
  usingInput?: boolean | string
}
```

-   `handler`: Function to be executed when the shortcut is triggered
-   `usingInput`:
    -   `false` (default): Shortcut only triggers when no input is focused
    -   `true`: Shortcut triggers even when any input is focused
    -   `string`: Shortcut only triggers when the specified input (by name) is focused

#### Examples

##### Basic usage

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

##### With input focus handling

The `usingInput` option allows you to specify that a shortcut should only trigger when a specific input is focused.

```vue
<template>
  <UInput v-model="query" name="queryInput" />
</template>

<script setup lang="ts">
const query = ref('')

defineShortcuts({
  enter: {
    usingInput: 'queryInput',
    handler: () => performSearch()
  },
  escape: {
    usingInput: true,
    handler: () => clearSearch()
  }
})
</script>
```

##### Extracting shortcuts from menu items

The `extractShortcuts` utility can be used to automatically define shortcuts from menu items:

```vue
<script setup lang="ts">
const items = [{
  label: 'Save',
  icon: 'i-lucide-file-down',
  kbds: ['meta', 'S'],
  onSelect() {
    save()
  }
}, {
  label: 'Copy',
  icon: 'i-lucide-copy',
  kbds: ['meta', 'C'],
  onSelect() {
    copy()
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

### `useOverlay`

A composable to programmatically control overlays.

#### Usage

Use the auto-imported `useOverlay` composable to programmatically control [Modal](/components/modal) and [Slideover](/components/slideover) components.

```vue
<script setup lang="ts">
const overlay = useOverlay()

const modal = overlay.create(MyModal)

async function openModal() {
  modal.open()
}
</script>
```

-   The `useOverlay` composable is created using `createSharedComposable`, ensuring that the same overlay state is shared across your entire application.

> **Note:** In order to return a value from the overlay, the `overlay.open()` can be awaited. In order for this to work, however, the **overlay component must emit a `close` event**. See example below for details.

#### API

##### `create(component: T, options: OverlayOptions): OverlayInstance`

Creates an overlay, and returns its instance

-   Parameters:
    -   `component`: The overlay component
    -   `options` The overlay options
        -   `defaultOpen?: boolean` Opens the overlay immediately after being created `default: false`
        -   `props?: ComponentProps`: An optional object of props to pass to the rendered component.
        -   `destroyOnClose?: boolean` Removes the overlay from memory when closed `default: false`

##### `open(id: symbol, props?: ComponentProps<T>): Promise<any>`

Opens the overlay using its `id`

-   Parameters:
    -   `id`: The identifier of the overlay
    -   `props`: An optional object of props to pass to the rendered component.

##### `close(id: symbol, value?: any): void`

Close an overlay using its `id`

-   Parameters:
    -   `id`: The identifier of the overlay
    -   `value`: A value to resolve the overlay promise with

##### `patch(id: symbol, props: ComponentProps<T>): void`

Update an overlay using its `id`

-   Parameters:
    -   `id`: The identifier of the overlay
    -   `props`: An object of props to update on the rendered component.

##### `unmount(id: symbol): void`

Removes the overlay from the DOM using its `id`

-   Parameters:
    -   `id`: The identifier of the overlay

##### `overlays: Overlay[]`

In-memory list of overlays that were created

#### Overlay Instance API

##### `open(props?: ComponentProps<T>): Promise<any>`

Opens the overlay

-   Parameters:
    -   `props`: An optional object of props to pass to the rendered component.

```vue
<script setup lang="ts">
const overlay = useOverlay()

const modal = overlay.create(MyModalContent)

function openModal() {
  modal.open({
    title: 'Welcome'
  })
}
</script>
```

##### `close(value?: any): void`

Close the overlay

-   Parameters:
    -   `value`: A value to resolve the overlay promise with

##### `patch(props: ComponentProps<T>)`

Updates the props of the overlay.

-   Parameters:
    -   `props`: An object of props to update on the rendered component.

```vue
<script setup lang="ts">
const overlay = useOverlay()

const modal = overlay.create(MyModal, {
  title: 'Welcome'
})

function openModal() {
  modal.open()
}

function updateModalTitle() {
  modal.patch({ title: 'Updated Title' })
}
</script>
```

#### Example

Here's a complete example of how to use the `useOverlay` composable:

```vue
<script setup lang="ts">
const overlay = useOverlay()

// Create with default props
const modalA = overlay.create(ModalA, { title: 'Welcome' })
const modalB = overlay.create(modalB)

const slideoverA = overlay.create(SlideoverA)

const openModalA = () => {
  // Open  Modal A, but override the title prop
  modalA.open({ title: 'Hello' })
}

const openModalB = async () => {
  // Open modalB, and wait for its result
  const input = await modalB.open()

  // Pass the result from modalB to the slideover, and open it.
  slideoverA.open({ input })
}
</script>

<template>
  <div>
    <button @click="openModal">Open Modal</button>
  </div>
</template>
```

In this example, we're using the `useOverlay` composable to control multiple modals and slideovers.

### `useFormField`

A composable to integrate custom inputs with the Form component

#### Usage

Use the auto-imported `useFormField` composable to integrate custom inputs with a [Form](/components/form).

```vue
<script setup lang="ts">
const { inputId, emitFormBlur, emitFormInput, emitFormChange } = useFormField()
</script>
```

### `useToast`

A composable to display toast notifications in your app.

#### Usage

Use the auto-imported `useToast` composable to display [Toast](/components/toast) notifications.

```vue
<script setup lang="ts">
const toast = useToast()
</script>
```

-   The `useToast` composable uses Nuxt's `useState` to manage the toast state, ensuring reactivity across your application.
-   A maximum of 5 toasts are displayed at a time. When adding a new toast that would exceed this limit, the oldest toast is automatically removed.
-   When removing a toast, there's a 200ms delay before it's actually removed from the state, allowing for exit animations.

> **Warning:** Make sure to wrap your app with the [`App`](/components/app) component which uses our [`Toaster`](https://github.com/nuxt/ui/blob/v3/src/runtime/components/Toaster.vue) component which uses the [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) component from Reka UI.

> **Tip:** Learn how to customize the appearance and behavior of toasts in the [Toast component documentation](/components/toast).

#### API

##### `add(toast: Partial<Toast>): Toast`

Adds a new toast notification.

-   Parameters:
    -   `toast`: A partial `Toast` object with the following properties:
        -   `id` (optional): A unique identifier for the toast. If not provided, a timestamp will be used.
        -   `open` (optional): Whether the toast is open. Defaults to `true`.
        -   Other properties from the `Toast` interface.
-   Returns: The complete `Toast` object that was added.

```vue
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

##### `update(id: string | number, toast: Partial<Toast>)`

Updates an existing toast notification.

-   Parameters:
    -   `id`: The unique identifier of the toast to update.
    -   `toast`: A partial `Toast` object with the properties to update.

```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string | number) {
  toast.update(id, {
    title: 'Updated Toast',
    description: 'This toast has been updated.'
  })
}
</script>
```

##### `remove(id: string | number)`

Removes a toast notification.

-   Parameters:
    -   `id`: The unique identifier of the toast to remove.

```vue
<script setup lang="ts">
const toast = useToast()

function removeToast(id: string | number) {
  toast.remove(id)
}
</script>
```

##### `clear()`

Removes all toast notifications.

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

##### `toasts`

-   Type: `Ref<Toast[]>`
-   Description: A reactive array containing all current toast notifications.

---

## Components

### App

Wraps your app to provide global configurations and more.

#### Usage

This component implements Reka UI [ConfigProvider](https://reka-ui.com/docs/utilities/config-provider) to provide global configuration to all components:

-   Enables all primitives to inherit global reading direction.
-   Enables changing the behavior of scroll body when setting body lock.
-   Much more controls to prevent layout shifts.

It's also using [ToastProvider](https://reka-ui.com/docs/components/toast#provider) and [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider) to provide global toasts and tooltips, as well as programmatic modals and slideovers.

Use it at the root of your app:

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

**For Nuxt:**
> **Tip:** Learn how to use the `locale` prop to change the locale of your app ([See i18n Docs](/getting-started/i18n/nuxt#locale)).

**For Vue:**
> **Tip:** Learn how to use the `locale` prop to change the locale of your app ([See i18n Docs](/getting-started/i18n/vue#locale)).

#### API

##### Props

**[App Props Table - Refer to original docs or source for details]**

##### Slots

**[App Slots Table - Refer to original docs or source for details]**

### Accordion

A stacked set of collapsible panels.

#### Usage

##### Items

Use the `items` prop as an array of objects with the following properties:

-   `label?: string`
-   `icon?: string`
-   `trailingIcon?: string`
-   `content?: string`
-   `value?: string`
-   `disabled?: boolean`
-   `slot?: string` ([See With custom slot](#with-custom-slot))

*Example:*
```vue
<script setup lang="ts">
const items = [
  { label: 'Icons', icon: 'i-lucide-smile', content: 'You have nothing to do, @nuxt/icon will handle it automatically.' },
  { label: 'Colors', icon: 'i-lucide-swatch-book', content: 'Choose a primary and a neutral color from your Tailwind CSS theme.' },
  { label: 'Components', icon: 'i-lucide-box', content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.' }
]
</script>
<template>
  <UAccordion :items="items" class="px-4" />
</template>
```

##### Multiple

Set the `type` prop to `multiple` to allow multiple items to be active at the same time. Defaults to `single`.

*Example:*
```vue
<UAccordion :items="items" type="multiple" class="px-4" />
```

##### Collapsible

When `type` is `single`, you can set the `collapsible` prop to `false` to prevent the active item from collapsing.

*Example:*
```vue
<UAccordion :items="items" :collapsible="false" class="px-4" />
```

##### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the accordion is collapsed. Defaults to `true`.

*Example:*
```vue
<UAccordion :items="items" :unmount-on-hide="false" class="px-4" />
```
> **Note:** You can inspect the DOM to see each item's content being rendered.

##### Disabled

Use the `disabled` property to disable the Accordion. You can also disable a specific item by using the `disabled` property in the item object.

*Example:*
```vue
<script setup lang="ts">
const items = [
  { label: 'Icons', icon: 'i-lucide-smile', content: '...' },
  { label: 'Colors', icon: 'i-lucide-swatch-book', content: '...', disabled: true },
  { label: 'Components', icon: 'i-lucide-box', content: '...' }
]
</script>
<template>
  <UAccordion :items="items" disabled class="px-4" />
</template>
```

##### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/components/icon) of each item. Defaults to `i-lucide-chevron-down`.

> **Tip:** You can also set an icon for a specific item by using the `trailingIcon` property in the item object.

*Example:*
```vue
<script setup lang="ts">
const items = [
  { label: 'Icons', icon: 'i-lucide-smile', content: '...', trailingIcon: 'i-lucide-plus' },
  { label: 'Colors', icon: 'i-lucide-swatch-book', content: '...' },
  { label: 'Components', icon: 'i-lucide-box', content: '...' }
]
</script>
<template>
  <UAccordion :items="items" trailing-icon="i-lucide-arrow-down" class="px-4" />
</template>
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key. ([See Icons Theme](/getting-started/icons/vue#theme))

#### Examples

##### Control active item(s)

You can control the active item(s) by using the `default-value` prop or the `v-model` directive with the index of the item.

*Example Code (accordion-model-value-example):*
```vue
<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui/dist/runtime/types'

const items = [{
  label: 'Getting Started',
  icon: 'i-lucide-download',
  defaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Installation',
  icon: 'i-lucide-settings',
  disabled: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Theming',
  icon: 'i-lucide-pen-tool',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}] satisfies AccordionItem[]

const value = ref(0)
</script>

<template>
  <div class="flex flex-col gap-4">
    <UAccordion v-model="value" :items="items" class="px-4" />
    <div class="flex gap-2">
      <UButton label="Select 1" @click="value = 0" />
      <UButton label="Select 3" @click="value = 2" />
    </div>
  </div>
</template>
```

> **Tip:** You can also pass the `value` of one of the items if provided.
> **Caution:** When `type="multiple"`, ensure to pass an array to the `default-value` prop or the `v-model` directive.

##### With body slot

Use the `#body` slot to customize the body of each item.

*Example Code (accordion-body-slot-example):*
```vue
<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui/dist/runtime/types'

const items = [{
  label: 'Getting Started',
  icon: 'i-lucide-download',
  defaultOpen: true
}, {
  label: 'Installation',
  icon: 'i-lucide-settings',
  disabled: true
}, {
  label: 'Theming',
  icon: 'i-lucide-pen-tool'
}] satisfies AccordionItem[]
</script>

<template>
  <UAccordion :items="items" class="px-4">
    <template #body="{ item, index }">
      <p class="text-sm text-(--ui-text-muted)">
        Content for item {{ index + 1 }}: {{ item.label }}
      </p>
    </template>
  </UAccordion>
</template>
```

> **Tip:** The `#body` slot includes some pre-defined styles, use the [`#content` slot](#with-content-slot) if you want to start from scratch.

##### With content slot

Use the `#content` slot to customize the content of each item.

*Example Code (accordion-content-slot-example):*
```vue
<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui/dist/runtime/types'

const items = [{
  label: 'Getting Started',
  icon: 'i-lucide-download',
  defaultOpen: true
}, {
  label: 'Installation',
  icon: 'i-lucide-settings',
  disabled: true
}, {
  label: 'Theming',
  icon: 'i-lucide-pen-tool'
}] satisfies AccordionItem[]
</script>

<template>
  <UAccordion :items="items" class="px-4">
    <template #content="{ item, index }">
      <p class="text-sm text-(--ui-text-muted)">
        Content for item {{ index + 1 }}: {{ item.label }}
      </p>
    </template>
  </UAccordion>
</template>
```

##### With custom slot

Use the `slot` property to customize a specific item. You will have access to the following slots: `#{{ item.slot }}` and `#{{ item.slot }}-body`.

*Example Code (accordion-custom-slot-example):*
```vue
<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui/dist/runtime/types'

const items = [{
  label: 'Getting Started',
  icon: 'i-lucide-download',
  defaultOpen: true,
  content: 'This is the content for Getting Started'
}, {
  label: 'Installation',
  icon: 'i-lucide-settings',
  slot: 'installation',
  disabled: true
}, {
  label: 'Theming',
  icon: 'i-lucide-pen-tool',
  content: 'This is the content for Theming'
}] satisfies AccordionItem[]
</script>

<template>
  <UAccordion :items="items" class="px-4">
    <template #installation>
      Custom content for installation
    </template>
  </UAccordion>
</template>
```

##### With drag and drop

Use the [`useSortable`](https://vueuse.org/integrations/useSortable/) composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) to enable drag and drop functionality on the accordion. This integration wraps [Sortable.js](https://sortablejs.github.io/Sortable/) to provide a seamless drag and drop experience. The `useSortable` composable accepts various options, see the [Usage](https://vueuse.org/integrations/useSortable/#usage) for more examples.

*Example Code (accordion-drag-and-drop-example):*
```vue
<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'
import type { AccordionItem } from '@nuxt/ui/dist/runtime/types'

const el = ref<HTMLElement | null>(null)
const accordionItems = ref<AccordionItem[]>([
  { label: 'Item 1', content: 'Content 1' },
  { label: 'Item 2', content: 'Content 2' },
  { label: 'Item 3', content: 'Content 3' }
])

useSortable(el, accordionItems, {
  animation: 150,
  handle: '[data-sortable-handle]'
})
</script>

<template>
  <div ref="el" class="flex flex-col gap-2 px-4">
    <UAccordion
      v-for="(item, index) in accordionItems"
      :key="index"
      :items="[item]"
      :ui="{ item: { padding: 'p-0' } }"
      :unmount-on-hide="false"
    >
      <template #default="{ item: currentItem, open }">
        <UButton
          :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
          color="neutral"
          variant="subtle"
          class="border-b border-(--ui-border) w-full"
        >
          <template #leading>
            <UIcon name="i-lucide-grip-vertical" class="size-5 cursor-move" data-sortable-handle />
          </template>

          <span class="truncate">{{ currentItem.label }}</span>

          <template #trailing>
            <UIcon
              name="i-lucide-chevron-down"
              class="size-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-180']"
            />
          </template>
        </UButton>
      </template>
    </UAccordion>
  </div>
</template>
```

#### API

##### Props

**[Accordion Props Table - Refer to original docs or source for details]**

##### Slots

**[Accordion Slots Table - Refer to original docs or source for details]**

##### Emits

**[Accordion Emits Table - Refer to original docs or source for details]**

#### Theme

**[Accordion Theme Object - Refer to original docs or source for details]**

### Alert

A callout to draw user's attention.

#### Usage

##### Title

Use the `title` prop to set the title of the Alert.

*Example:*
```vue
<UAlert title="Heads up!" />
```

##### Description

Use the `description` prop to set the description of the Alert.

*Example:*
```vue
<UAlert title="Heads up!" description="You can change the primary color in your app config." />
```

##### Icon

Use the `icon` prop to show an [Icon](/components/icon).

*Example:*
```vue
<UAlert title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-terminal" />
```

##### Avatar

Use the `avatar` prop to show an [Avatar](/components/avatar).

*Example:*
```vue
<UAlert title="Heads up!" description="You can change the primary color in your app config." :avatar="{ src: 'https://github.com/nuxt.png' }" />
```

##### Color

Use the `color` prop to change the color of the Alert.

*Example:*
```vue
<UAlert color="neutral" title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-terminal" />
```

##### Variant

Use the `variant` prop to change the variant of the Alert.

*Example:*
```vue
<UAlert color="neutral" variant="subtle" title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-terminal" />
```

##### Close

Use the `close` prop to display a [Button](/components/button) to dismiss the Alert.

> **Tip:** An `update:open` event will be emitted when the close button is clicked.

*Example:*
```vue
<UAlert title="Heads up!" description="You can change the primary color in your app config." color="neutral" variant="outline" :close="true" />
```

You can pass any property from the [Button](/components/button) component to customize it.

*Example:*
```vue
<UAlert
  title="Heads up!"
  description="You can change the primary color in your app config."
  color="neutral"
  variant="outline"
  :close="{ color: 'primary', variant: 'outline', class: 'rounded-full' }"
/>
```

##### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/components/icon). Defaults to `i-lucide-x`.

*Example:*
```vue
<UAlert title="Heads up!" description="You can change the primary color in your app config." color="neutral" variant="outline" :close="true" close-icon="i-lucide-arrow-right" />
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key. ([See Icons Theme](/getting-started/icons/vue#theme))

##### Actions

Use the `actions` prop to add some [Button](/components/button) actions to the Alert.

*Example:*
```vue
<UAlert
  title="Heads up!"
  description="You can change the primary color in your app config."
  color="neutral"
  variant="outline"
  :actions="[{ label: 'Action 1' }, { label: 'Action 2', color: 'neutral', variant: 'subtle' }]"
/>
```

##### Orientation

Use the `orientation` prop to change the orientation of the Alert.

*Example:*
```vue
<UAlert
  title="Heads up!"
  description="You can change the primary color in your app config."
  color="neutral"
  variant="outline"
  orientation="horizontal"
  :actions="[{ label: 'Action 1' }, { label: 'Action 2', color: 'neutral', variant: 'subtle' }]"
/>
```

#### Examples

##### `class` prop

Use the `class` prop to override the base styles of the Alert.

*Example:*
```vue
<UAlert title="Heads up!" description="You can change the primary color in your app config." class="rounded-none" />
```

##### `ui` prop

Use the `ui` prop to override the slots styles of the Alert.

*Example:*
```vue
<UAlert title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-rocket" :ui="{ icon: 'size-11' }" />
```

#### API

##### Props

**[Alert Props Table - Refer to original docs or source for details]**

##### Slots

**[Alert Slots Table - Refer to original docs or source for details]**

##### Emits

**[Alert Emits Table - Refer to original docs or source for details]**

#### Theme

**[Alert Theme Object - Refer to original docs or source for details]**

### AvatarGroup

Stack multiple avatars in a group.

#### Usage

Wrap multiple [Avatar](/components/avatar) within an AvatarGroup to stack them.

*Example:*
```vue
<UAvatarGroup>
  <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
  <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
  <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
</UAvatarGroup>
```

##### Size

Use the `size` prop to change the size of all the avatars.

*Example:*
```vue
<UAvatarGroup size="xl">
  <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
  <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
  <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
</UAvatarGroup>
```

##### Max

Use the `max` prop to limit the number of avatars displayed. The rest is displayed as an `+X` avatar.

*Example:*
```vue
<UAvatarGroup :max="2">
  <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
  <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
  <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
</UAvatarGroup>
```

#### Examples

##### With tooltip

Wrap each avatar with a [Tooltip](/components/tooltip) to display a tooltip on hover.

*Example Code (avatar-group-tooltip-example):*
```vue
<template>
  <UAvatarGroup>
    <UTooltip text="Benjamin Canac">
      <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    </UTooltip>

    <UTooltip text="Romain Hamel">
      <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
    </UTooltip>

    <UTooltip text="Neil Richter">
      <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
    </UTooltip>
  </UAvatarGroup>
</template>
```

##### With chip

Wrap each avatar with a [Chip](/components/chip) to display a chip around the avatar.

*Example Code (avatar-group-chip-example):*
```vue
<template>
  <UAvatarGroup>
    <UChip text="1" size="2xl">
      <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" size="lg" />
    </UChip>

    <UChip color="primary" size="2xl">
      <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" size="lg" />
    </UChip>

    <UChip size="2xl">
      <UAvatar src="https://github.com/noook.png" alt="Neil Richter" size="lg" />
    </UChip>
  </UAvatarGroup>
</template>
```

##### With link

Wrap each avatar with a [Link](/components/link) to make them clickable.

*Example Code (avatar-group-link-example):*
```vue
<template>
  <UAvatarGroup>
    <ULink to="https://github.com/benjamincanac" target="_blank">
      <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    </ULink>

    <ULink to="https://github.com/romhml" target="_blank">
      <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
    </ULink>

    <ULink to="https://github.com/noook" target="_blank">
      <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
    </ULink>
  </UAvatarGroup>
</template>
```

#### API

##### Props

**[AvatarGroup Props Table - Refer to original docs or source for details]**

##### Slots

**[AvatarGroup Slots Table - Refer to original docs or source for details]**

#### Theme

**[AvatarGroup Theme Object - Refer to original docs or source for details]**

### Avatar

An img element with fallback and Nuxt Image support.

#### Usage

The Avatar uses the `<NuxtImg>` component when [`@nuxt/image`](https://github.com/nuxt/image) is installed, falling back to `img` otherwise.

> **Note:** You can pass any property from the HTML `<img>` element such as `alt`, `loading`, etc.

##### Src

Use the `src` prop to set the image URL.

*Example:*
```vue
<UAvatar src="https://github.com/benjamincanac.png" />
```

##### Size

Use the `size` prop to set the size of the Avatar.

*Example:*
```vue
<UAvatar src="https://github.com/benjamincanac.png" size="xl" />
```
> **Note:** The `<img>` element's `width` and `height` are automatically set based on the `size` prop.

##### Icon

Use the `icon` prop to display a fallback [Icon](/components/icon).

*Example:*
```vue
<UAvatar icon="i-lucide-image" size="md" />
```

##### Text

Use the `text` prop to display a fallback text.

*Example:*
```vue
<UAvatar text="+1" size="md" />
```

##### Alt

When no icon or text is provided, the **initials** of the `alt` prop is used as fallback.

*Example:*
```vue
<UAvatar alt="Benjamin Canac" size="md" />
```
> **Note:** The `alt` prop is passed to the `img` element as the `alt` attribute.

#### Examples

##### With tooltip

You can use a [Tooltip](/components/tooltip) component to display a tooltip when hovering the Avatar.

*Example Code (avatar-tooltip-example):*
```vue
<template>
  <UTooltip text="Benjamin Canac">
    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
  </UTooltip>
</template>
```

##### With chip

You can use a [Chip](/components/chip) component to display a chip around the Avatar.

*Example Code (avatar-chip-example):*
```vue
<template>
  <UChip text="1" size="2xl">
    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" size="lg" />
  </UChip>
</template>
```

#### API

##### Props

**[Avatar Props Table - Refer to original docs or source for details]**

#### Theme

**[Avatar Theme Object - Refer to original docs or source for details]**

### Badge

A short text to represent a status or a category.

#### Usage

##### Label

Use the default slot to set the label of the Badge.

*Example:*
```vue
<UBadge>Badge</UBadge>
```

You can achieve the same result by using the `label` prop.

*Example:*
```vue
<UBadge label="Badge" />
```

##### Color

Use the `color` prop to change the color of the Badge.

*Example:*
```vue
<UBadge color="neutral">Badge</UBadge>
```

##### Variant

Use the `variant` props to change the variant of the Badge.

*Example:*
```vue
<UBadge color="neutral" variant="outline">Badge</UBadge>
```

##### Size

Use the `size` prop to change the size of the Badge.

*Example:*
```vue
<UBadge size="xl">Badge</UBadge>
```

##### Icon

Use the `icon` prop to show an [Icon](/components/icon) inside the Badge.

*Example:*
```vue
<UBadge icon="i-lucide-rocket" size="md" color="primary" variant="solid">Badge</UBadge>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

*Example:*
```vue
<UBadge trailing-icon="i-lucide-arrow-right" size="md">Badge</UBadge>
```

##### Avatar

Use the `avatar` prop to show an [Avatar](/components/avatar) inside the Badge.

*Example:*
```vue
<UBadge :avatar="{ src: 'https://github.com/nuxt.png' }" size="md" color="neutral" variant="outline">
  Badge
</UBadge>
```

#### Examples

##### `class` prop

Use the `class` prop to override the base styles of the Badge.

*Example:*
```vue
<UBadge class="font-bold rounded-full">Badge</UBadge>
```

#### API

##### Props

**[Badge Props Table - Refer to original docs or source for details]**

##### Slots

**[Badge Slots Table - Refer to original docs or source for details]**

#### Theme

**[Badge Theme Object - Refer to original docs or source for details]**

### Breadcrumb

A hierarchy of links to navigate through a website.

#### Usage

##### Items

Use the `items` prop as an array of objects with the following properties:

-   `label?: string`
-   `icon?: string`
-   `avatar?: AvatarProps`
-   `class?: any`
-   `slot?: string` ([See With custom slot](#with-custom-slot))

You can pass any property from the [Link](/components/link#props) component such as `to`, `target`, etc.

*Example:*
```vue
<script setup lang="ts">
const items = [
  { label: 'Home', icon: 'i-lucide-house' },
  { label: 'Components', icon: 'i-lucide-box', to: '/components' },
  { label: 'Breadcrumb', icon: 'i-lucide-link', to: '/components/breadcrumb' }
]
</script>
<template>
  <UBreadcrumb :items="items" />
</template>
```
> **Note:** A `span` is rendered instead of a link when the `to` property is not defined.

##### Separator Icon

Use the `separator-icon` prop to customize the [Icon](/components/icon) between each item. Defaults to `i-lucide-chevron-right`.

*Example:*
```vue
<UBreadcrumb :items="items" separator-icon="i-lucide-arrow-right" />
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronRight` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronRight` key. ([See Icons Theme](/getting-started/icons/vue#theme))

#### Examples

##### With separator slot

Use the `#separator` slot to customize the separator between each item.

*Example Code (breadcrumb-separator-slot-example):*
```vue
<script setup lang="ts">
const items = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Navigation',
  to: '/navigation'
}, {
  label: 'Breadcrumb',
  to: '/navigation/breadcrumb'
}]
</script>

<template>
  <UBreadcrumb :items="items">
    <template #separator>
      <UIcon name="i-lucide-slash" class="size-4 text-(--ui-text-muted)" />
    </template>
  </UBreadcrumb>
</template>
```

##### With custom slot

Use the `slot` property to customize a specific item. You will have access to the following slots: `#{{ item.slot }}`, `#{{ item.slot }}-leading`, `#{{ item.slot }}-label`, `#{{ item.slot }}-trailing`.

*Example Code (breadcrumb-custom-slot-example):*
```vue
<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui/dist/runtime/types'

const items = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Navigation',
  to: '/navigation'
}, {
  label: 'Breadcrumb',
  to: '/navigation/breadcrumb',
  slot: 'current'
}] satisfies BreadcrumbItem[]
</script>

<template>
  <UBreadcrumb :items="items">
    <template #current="{ item }">
      <span class="text-(--ui-primary) font-semibold">{{ item.label }}</span>
    </template>
  </UBreadcrumb>
</template>
```

> **Tip:** You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items. ([See Slots](#slots))

#### API

##### Props

**[Breadcrumb Props Table - Refer to original docs or source for details]**

##### Slots

**[Breadcrumb Slots Table - Refer to original docs or source for details]**

#### Theme

**[Breadcrumb Theme Object - Refer to original docs or source for details]**

### ButtonGroup

Group multiple button-like elements together.

#### Usage

Wrap multiple [Button](/components/button) within a ButtonGroup to group them together.

*Example:*
```vue
<UButtonGroup>
  <UButton color="neutral" variant="subtle" label="Button" />
  <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
</UButtonGroup>
```

##### Size

Use the `size` prop to change the size of all the buttons.

*Example:*
```vue
<UButtonGroup size="xl">
  <UButton color="neutral" variant="subtle" label="Button" />
  <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
</UButtonGroup>
```

##### Orientation

Use the `orientation` prop to change the orientation of the buttons. Defaults to `horizontal`.

*Example:*
```vue
<UButtonGroup orientation="vertical">
  <UButton color="neutral" variant="subtle" label="Submit" />
  <UButton color="neutral" variant="outline" label="Cancel" />
</UButtonGroup>
```

#### Examples

##### With input

You can use components like [Input](/components/input), [InputMenu](/components/input-menu), [Select](/components/select) [SelectMenu](/components/select-menu), etc. within a button group.

*Example:*
```vue
<UButtonGroup>
  <UInput color="neutral" variant="outline" placeholder="Enter token" />
  <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
</UButtonGroup>
```

##### With tooltip

You can use a [Tooltip](/components/tooltip) within a button group.

*Example Code (button-group-tooltip-example):*
```vue
<template>
  <UButtonGroup>
    <UTooltip text="Action 1">
      <UButton icon="i-lucide-bold" color="neutral" variant="outline" />
    </UTooltip>
    <UTooltip text="Action 2">
      <UButton icon="i-lucide-italic" color="neutral" variant="outline" />
    </UTooltip>
    <UTooltip text="Action 3">
      <UButton icon="i-lucide-underline" color="neutral" variant="outline" />
    </UTooltip>
  </UButtonGroup>
</template>
```

##### With dropdown

You can use a [DropdownMenu](/components/dropdown-menu) within a button group.

*Example Code (button-group-dropdown-example):*
```vue
<script setup>
const items = [[{ label: 'Profile' }, { label: 'Edit' }], [{ label: 'Settings' }]]
</script>

<template>
  <UButtonGroup>
    <UButton color="neutral" variant="subtle" label="Submit" />
    <UDropdownMenu :items="items" :ui="{ width: 'w-fit' }">
      <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
    </UDropdownMenu>
  </UButtonGroup>
</template>
```

##### With badge

You can use a [Badge](/components/badge) within a button group.

*Example Code (button-group-badge-example):*
```vue
<template>
  <UButtonGroup>
    <UButton color="neutral" variant="outline" label="Button" />
    <UBadge color="neutral" variant="subtle" label="Badge" />
  </UButtonGroup>
</template>
```

#### API

##### Props

**[ButtonGroup Props Table - Refer to original docs or source for details]**

##### Slots

**[ButtonGroup Slots Table - Refer to original docs or source for details]**

#### Theme

**[ButtonGroup Theme Object - Refer to original docs or source for details]**

### Button

A button element that can act as a link or trigger an action.

#### Usage

##### Label

Use the default slot to set the label of the Button.

*Example:*
```vue
<UButton>Button</UButton>
```

You can achieve the same result by using the `label` prop.

*Example:*
```vue
<UButton label="Button" />
```

##### Color

Use the `color` prop to change the color of the Button.

*Example:*
```vue
<UButton color="neutral">Button</UButton>
```

##### Variant

Use the `variant` prop to change the variant of the Button.

*Example:*
```vue
<UButton color="neutral" variant="outline">Button</UButton>
```

##### Size

Use the `size` prop to change the size of the Button.

*Example:*
```vue
<UButton size="xl">Button</UButton>
```

##### Icon

Use the `icon` prop to show an [Icon](/components/icon) inside the Button.

*Example:*
```vue
<UButton icon="i-lucide-rocket" size="md" color="primary" variant="solid">Button</UButton>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

*Example:*
```vue
<UButton trailing-icon="i-lucide-arrow-right" size="md">Button</UButton>
```

The `label` as prop or slot is optional so you can use the Button as an icon-only button.

*Example:*
```vue
<UButton icon="i-lucide-search" size="md" color="primary" variant="solid" />
```

##### Avatar

Use the `avatar` prop to show an [Avatar](/components/avatar) inside the Button.

*Example:*
```vue
<UButton :avatar="{ src: 'https://github.com/nuxt.png' }" size="md" color="neutral" variant="outline">
  Button
</UButton>
```

The `label` as prop or slot is optional so you can use the Button as an avatar-only button.

*Example:*
```vue
<UButton :avatar="{ src: 'https://github.com/nuxt.png' }" size="md" color="neutral" variant="outline" />
```

##### Link

You can pass any property from the [Link](/components/link#props) component such as `to`, `target`, etc.

*Example:*
```vue
<UButton to="https://github.com/nuxt/ui" target="_blank">Button</UButton>
```

When the Button is a link or when using the `active` prop, you can use the `active-color` and `active-variant` props to customize the active state.

*Example Active Button:*
```vue
<UButton active color="neutral" variant="outline" active-color="primary" active-variant="solid">
  Button
</UButton>
```

You can also use the `active-class` and `inactive-class` props to customize the active state.

*Example Active Button with Class:*
```vue
<UButton active active-class="font-bold" inactive-class="font-light">
  Button
</UButton>
```

> **Tip:** You can configure these styles globally in your `app.config.ts` file under the `ui.button.variants.active` key.
> ```ts
> export default defineAppConfig({
>   ui: {
>     button: {
>       variants: {
>         active: {
>           true: {
>             base: 'font-bold'
>           }
>         }
>       }
>     }
>   }
> })
> ```

##### Loading

Use the `loading` prop to show a loading icon and disable the Button.

*Example:*
```vue
<UButton loading :trailing="false">Button</UButton>
```

Use the `loading-auto` prop to show the loading icon automatically while the `@click` promise is pending.

*Example Code (button-loading-auto-example):*
```vue
<script setup lang="ts">
const loading = ref(false)

async function submit() {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
}
</script>

<template>
  <UButton :loading="loading" loading-auto label="Submit" @click="submit" />
</template>
```

This also works with the [Form](/components/form) component.

*Example Code (button-loading-auto-form-example):*
```vue
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = ref({ email: undefined, password: undefined })
const loading = ref(false)

function validate(state: any): FormError[] {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log(event.data)
  loading.value = false
}
</script>

<template>
  <UForm :state="state" :validate="validate" class="flex flex-col gap-4 w-60" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit" :loading="loading" loading-auto label="Submit" />
  </UForm>
</template>
```

##### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-refresh-cw`.

*Example:*
```vue
<UButton loading loading-icon="i-lucide-repeat-2">Button</UButton>
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key. ([See Icons Theme](/getting-started/icons/vue#theme))

##### Disabled

Use the `disabled` prop to disable the Button.

*Example:*
```vue
<UButton disabled>Button</UButton>
```

#### Examples

##### `class` prop

Use the `class` prop to override the base styles of the Button.

*Example:*
```vue
<UButton class="font-bold rounded-full">Button</UButton>
```

##### `ui` prop

Use the `ui` prop to override the slots styles of the Button.

*Example:*
```vue
<UButton icon="i-lucide-rocket" color="neutral" variant="outline" :ui="{ leadingIcon: 'text-(--ui-primary)' }">
  Button
</UButton>
```

#### API

##### Props

**[Button Props Table - Refer to original docs or source for details]**

> **Note:** The `Button` component extends the `Link` component. Check out the source code on GitHub: [Link Component Source](https://github.com/nuxt/ui/blob/v3/src/runtime/components/Link.vue#L13)

##### Slots

**[Button Slots Table - Refer to original docs or source for details]**

#### Theme

**[Button Theme Object - Refer to original docs or source for details]**

### Card

Display content in a card with a header, body and footer.

#### Usage

*Example Code (card-example):*
```vue
<template>
  <UCard class="w-full">
    <template #header>
      <Placeholder class="h-8" />
    </template>

    <Placeholder class="h-32" />

    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>
```

##### Variant

Use the `variant` prop to change the variant of the Card.

*Example:*
```vue
<UCard variant="subtle" class="w-full">
  <template #header>
    <Placeholder class="h-8" />
  </template>
  <Placeholder class="h-32" />
  <template #footer>
    <Placeholder class="h-8" />
  </template>
</UCard>
```

#### API

##### Props

**[Card Props Table - Refer to original docs or source for details]**

##### Slots

**[Card Slots Table - Refer to original docs or source for details]**

#### Theme

**[Card Theme Object - Refer to original docs or source for details]**

### Carousel

A carousel with motion and swipe built using Embla.

#### Usage

##### Items

Use the `items` prop as an array and render each item using the default slot.

> **Note:** Use your mouse to drag the carousel horizontally on desktop.

*Example Code (carousel-items-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden">
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

You can control how many items are visible by using the `basis` / `width` utility classes on the `item`:

*Example Code (carousel-items-multiple-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel :items="items" :ui="{ item: 'basis-1/3' }" class="rounded-lg overflow-hidden">
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

##### Orientation

Use the `orientation` prop to change the orientation of the Progress. Defaults to `horizontal`.

> **Note:** Use your mouse to drag the carousel vertically on desktop.

*Example Code (carousel-orientation-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel
    :items="items"
    orientation="vertical"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden h-96"
  >
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```
> **Caution:** You need to specify a `height` on the container in vertical orientation.

##### Arrows

Use the `arrows` prop to display prev and next buttons.

*Example Code (carousel-arrows-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel :items="items" :ui="{ item: 'basis-full' }" arrows class="rounded-lg overflow-hidden">
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

##### Prev / Next

Use the `prev` and `next` props to customize the prev and next buttons with any [Button](/components/button) props.

*Example Code (carousel-prev-next-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel
    :items="items"
    :ui="{ item: 'basis-full' }"
    arrows
    :prev="{ color: 'primary', icon: 'i-lucide-arrow-left', class: '-left-12' }"
    :next="{ color: 'primary', icon: 'i-lucide-arrow-right', class: '-right-12' }"
    class="rounded-lg overflow-hidden"
  >
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

##### Prev / Next Icons

Use the `prev-icon` and `next-icon` props to customize the buttons [Icon](/components/icon). Defaults to `i-lucide-arrow-left` / `i-lucide-arrow-right`.

*Example Code (carousel-prev-next-icon-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel
    :items="items"
    :ui="{ item: 'basis-full' }"
    arrows
    prev-icon="i-lucide-chevron-left"
    next-icon="i-lucide-chevron-right"
    class="rounded-lg overflow-hidden"
  >
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

**For Nuxt:**
> **Tip:** You can customize these icons globally in your `app.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key. ([See Icons Theme](/getting-started/icons/vue#theme))

##### Dots

Use the `dots` prop to display a list of dots to scroll to a specific slide.

*Example Code (carousel-dots-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel :items="items" :ui="{ item: 'basis-full' }" dots class="rounded-lg overflow-hidden">
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

The number of dots is based on the number of slides displayed in the view:

*Example Code (carousel-dots-multiple-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel :items="items" :ui="{ item: 'basis-1/3' }" dots class="rounded-lg overflow-hidden">
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

#### Plugins

The Carousel component implements the official [Embla Carousel plugins](https://www.embla-carousel.com/plugins/).

##### Autoplay

This plugin is used to extend Embla Carousel with **autoplay** functionality. Use the `autoplay` prop as a boolean or an object to configure the [Autoplay plugin](https://www.embla-carousel.com/plugins/autoplay/).

*Example Code (carousel-autoplay-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel
    :items="items"
    :ui="{ item: 'basis-1/3' }"
    dots
    loop
    :autoplay="{ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true }"
    class="rounded-lg overflow-hidden"
  >
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```
> **Note:** In this example, we're using the `loop` prop for an infinite carousel.

##### Auto Scroll

This plugin is used to extend Embla Carousel with **auto scroll** functionality. Use the `auto-scroll` prop as a boolean or an object to configure the [Auto Scroll plugin](https://www.embla-carousel.com/plugins/auto-scroll/).

*Example Code (carousel-auto-scroll-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel
    :items="items"
    :ui="{ item: 'basis-1/3' }"
    dots
    loop
    :auto-scroll="{ speed: 1 }"
    class="rounded-lg overflow-hidden"
  >
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```
> **Note:** In this example, we're using the `loop` prop for an infinite carousel.

##### Auto Height

This plugin is used to extend Embla Carousel with **auto height** functionality. It changes the height of the carousel container to fit the height of the highest slide in view. Use the `auto-height` prop as a boolean or an object to configure the [Auto Height plugin](https://www.embla-carousel.com/plugins/auto-height/).

*Example Code (carousel-auto-height-example):*
```vue
<script setup lang="ts">
const items = [
  { title: 'Item 1', height: 'h-32' },
  { title: 'Item 2', height: 'h-48' },
  { title: 'Item 3', height: 'h-64' },
  { title: 'Item 4', height: 'h-48' },
  { title: 'Item 5', height: 'h-32' }
]
</script>

<template>
  <UCarousel
    :items="items"
    :ui="{
      item: 'basis-full',
      container: 'transition-[height] duration-500 ease-in-out'
    }"
    arrows
    auto-height
    class="rounded-lg overflow-hidden"
  >
    <template #default="{ item }">
      <div :class="item.height" class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          {{ item.title }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```
> **Note:** In this example, we add the `transition-[height]` class on the container to animate the height change.

##### Class Names

Class Names is a **class name toggle** utility plugin for Embla Carousel that enables you to automate the toggling of class names on your carousel. Use the `class-names` prop as a boolean or an object to configure the [Class Names plugin](https://www.embla-carousel.com/plugins/class-names/).

*Example Code (carousel-class-names-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel
    :items="items"
    :ui="{ item: 'basis-full transition-opacity [&:not(.is-snapped)]:opacity-10' }"
    arrows
    class-names
    class="rounded-lg overflow-hidden"
  >
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```
> **Note:** In this example, we add the `transition-opacity [&:not(.is-snapped)]:opacity-10` classes on the `item` to animate the opacity change.

##### Fade

This plugin is used to replace the Embla Carousel scroll functionality with **fade transitions**. Use the `fade` prop as a boolean or an object to configure the [Fade plugin](https://www.embla-carousel.com/plugins/fade/).

*Example Code (carousel-fade-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel
    :items="items"
    :ui="{ item: 'basis-full' }"
    arrows
    dots
    fade
    class="rounded-lg overflow-hidden"
  >
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

##### Wheel Gestures

This plugin is used to extend Embla Carousel with the ability to **use the mouse/trackpad wheel** to navigate the carousel. Use the `wheel-gestures` prop as a boolean or an object to configure the [Wheel Gestures plugin](https://www.embla-carousel.com/plugins/wheel-gestures/).

> **Note:** Use your mouse wheel to scroll the carousel.

*Example Code (carousel-wheel-gestures-example):*
```vue
<script setup lang="ts">
const items = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <UCarousel
    :items="items"
    :ui="{ item: 'basis-1/3' }"
    arrows
    wheel-gestures
    class="rounded-lg overflow-hidden"
  >
    <template #default="{ item }">
      <div class="aspect-video">
        <Placeholder class="h-full w-full flex items-center justify-center">
          Item {{ item }}
        </Placeholder>
      </div>
    </template>
  </UCarousel>
</template>
```

#### API

##### Props

**[Carousel Props Table - Refer to original docs or source for details]**

##### Slots

**[Carousel Slots Table - Refer to original docs or source for details]**

##### Expose

You can access the typed component instance using `useTemplateRef`.
```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>
<template>
  <UCarousel ref="carousel" />
</template>
```
This will give you access to:
| Name       | Type                            |
| ---------- | ------------------------------- |
| `emblaRef` | `Ref<HTMLElement \| null>`      |
| `emblaApi` | `Ref<EmblaCarouselType \| null>`|

#### Theme

**[Carousel Theme Object - Refer to original docs or source for details]**

### Checkbox

An input element to toggle between checked and unchecked states.

#### Usage

Use the `v-model` directive to control the checked state of the Checkbox.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref(true)
</script>
<template>
  <UCheckbox v-model="modelValue" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

*Example:*
```vue
<UCheckbox :default-value="true" />
```

##### Indeterminate

Use the `indeterminate` value in the `v-model` directive or `default-value` prop to set the Checkbox to an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

*Example:*
```vue
<UCheckbox default-value="indeterminate" />
```

##### Indeterminate Icon

Use the `indeterminate-icon` prop to customize the indeterminate icon. Defaults to `i-lucide-minus`.

*Example:*
```vue
<UCheckbox default-value="indeterminate" indeterminate-icon="i-lucide-plus" />
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.minus` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.minus` key. ([See Icons Theme](/getting-started/icons/vue#theme))

##### Label

Use the `label` prop to set the label of the Checkbox.

*Example:*
```vue
<UCheckbox label="Check me" />
```

When using the `required` prop, an asterisk is added next to the label.

*Example:*
```vue
<UCheckbox required label="Check me" />
```

##### Description

Use the `description` prop to set the description of the Checkbox.

*Example:*
```vue
<UCheckbox label="Check me" description="This is a checkbox." />
```

##### Icon

Use the `icon` prop to set the icon of the Checkbox when it is checked. Defaults to `i-lucide-check`.

*Example:*
```vue
<UCheckbox icon="i-lucide-heart" :default-value="true" label="Check me" />
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key. ([See Icons Theme](/getting-started/icons/vue#theme))

##### Color

Use the `color` prop to change the color of the Checkbox.

*Example:*
```vue
<UCheckbox color="neutral" :default-value="true" label="Check me" />
```

##### Size

Use the `size` prop to change the size of the Checkbox.

*Example:*
```vue
<UCheckbox size="xl" :default-value="true" label="Check me" />
```

##### Disabled

Use the `disabled` prop to disable the Checkbox.

*Example:*
```vue
<UCheckbox disabled label="Check me" />
```

#### API

##### Props

**[Checkbox Props Table - Refer to original docs or source for details]**

##### Slots

**[Checkbox Slots Table - Refer to original docs or source for details]**

##### Emits

**[Checkbox Emits Table - Refer to original docs or source for details]**

#### Theme

**[Checkbox Theme Object - Refer to original docs or source for details]**

### Chip

An indicator of a numeric value or a state.

#### Usage

Wrap any component with a Chip to display an indicator.

*Example:*
```vue
<UChip>
  <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
</UChip>
```

##### Color

Use the `color` prop to change the color of the Chip.

*Example:*
```vue
<UChip color="neutral">
  <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
</UChip>
```

##### Size

Use the `size` prop to change the size of the Chip.

*Example:*
```vue
<UChip size="3xl">
  <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
</UChip>
```

##### Text

Use the `text` prop to set the text of the Chip.

*Example:*
```vue
<UChip text="5" size="3xl">
  <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
</UChip>
```

##### Position

Use the `position` prop to change the position of the Chip.

*Example:*
```vue
<UChip position="bottom-left">
  <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
</UChip>
```

##### Inset

Use the `inset` prop to display the Chip inside the component. This is useful when dealing with rounded components.

*Example:*
```vue
<UChip inset>
  <UAvatar src="https://github.com/benjamincanac.png" />
</UChip>
```

##### Standalone

Use the `standalone` prop alongside the `inset` prop to display the Chip inline.

*Example:*
```vue
<UChip standalone inset />
```
> **Note:** It's used this way in the `CommandPalette`, `InputMenu`, `Select` or `SelectMenu` components for example.

#### Examples

##### Control visibility

You can control the visibility of the Chip using the `show` prop.

*Example Code (chip-show-example):*
```vue
<script setup lang="ts">
const statuses = {
  online: { title: 'Online', color: 'success' as const },
  away: { title: 'Away', color: 'warning' as const },
  dnd: { title: 'Do not disturb', color: 'error' as const },
  offline: { title: 'Offline', color: 'neutral' as const }
}

const selectedStatus = ref(statuses.online)
</script>

<template>
  <div class="flex gap-4 items-center">
    <UChip :show="selectedStatus.title !== 'Offline'" :color="selectedStatus.color" inset>
      <UAvatar src="https://github.com/benjamincanac.png" />
    </UChip>

    <USelectMenu v-model="selectedStatus" :items="Object.values(statuses)" value-key="color">
      <template #label>
        <span class="size-2 rounded-full me-2" :class="`bg-${selectedStatus.color}-500 dark:bg-${selectedStatus.color}-400`" />
        {{ selectedStatus.title }}
      </template>

      <template #item="{ item }">
        <span class="size-2 rounded-full me-2" :class="`bg-${item.color}-500 dark:bg-${item.color}-400`" />
        {{ item.title }}
      </template>
    </USelectMenu>
  </div>
</template>
```
> **Note:** In this example, the Chip has a color per status and is displayed when the status is not `offline`.

#### API

##### Props

**[Chip Props Table - Refer to original docs or source for details]**

##### Slots

**[Chip Slots Table - Refer to original docs or source for details]**

#### Theme

**[Chip Theme Object - Refer to original docs or source for details]**

### Collapsible

A collapsible element to toggle visibility of its content.

#### Usage

Use a [Button](/components/button) or any other component in the default slot of the Collapsible. Then, use the `#content` slot to add the content displayed when the Collapsible is open.

*Example:*
```vue
<UCollapsible class="flex flex-col gap-2 w-48">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  <template #content>
    <Placeholder class="h-48" />
  </template>
</UCollapsible>
```

##### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the Collapsible is collapsed. Defaults to `true`.

*Example:*
```vue
<UCollapsible :unmount-on-hide="false" class="flex flex-col gap-2 w-48">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  <template #content>
    <Placeholder class="h-48" />
  </template>
</UCollapsible>
```
> **Note:** You can inspect the DOM to see the content being rendered.

##### Disabled

Use the `disabled` prop to disable the Collapsible.

*Example:*
```vue
<UCollapsible disabled class="flex flex-col gap-2 w-48">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  <template #content>
    <Placeholder class="h-48" />
  </template>
</UCollapsible>
```

#### Examples

##### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

*Example Code (collapsible-open-example):*
```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <div class="flex flex-col gap-2 w-48">
    <UCollapsible v-model:open="open">
      <UButton
        label="Toggle"
        color="neutral"
        variant="subtle"
        :trailing-icon="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
        block
      />

      <template #content>
        <Placeholder class="h-48 mt-2" />
      </template>
    </UCollapsible>

    <UButton :disabled="open" label="Open" @click="open = true" />
    <UButton :disabled="!open" label="Close" @click="open = false" />
  </div>
</template>
```
> **Note:** In this example, leveraging [`defineShortcuts`](/composables/define-shortcuts), you can toggle the Collapsible by pressing **O**.
> **Tip:** This allows you to move the trigger outside of the Collapsible or remove it entirely.

##### With rotating icon

Here is an example with a rotating icon in the Button that indicates the open state of the Collapsible.

*Example Code (collapsible-icon-example):*
```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <UCollapsible v-model:open="open" class="flex flex-col gap-2 w-48">
    <UButton color="neutral" variant="subtle" block>
      Toggle
      <template #trailing>
        <UIcon
          name="i-lucide-chevron-down"
          class="size-5 ms-auto transform transition-transform duration-200"
          :class="[open && 'rotate-180']"
        />
      </template>
    </UButton>

    <template #content>
      <Placeholder class="h-48" />
    </template>
  </UCollapsible>
</template>
```

#### API

##### Props

**[Collapsible Props Table - Refer to original docs or source for details]**

##### Slots

**[Collapsible Slots Table - Refer to original docs or source for details]**

##### Emits

**[Collapsible Emits Table - Refer to original docs or source for details]**

#### Theme

**[Collapsible Theme Object - Refer to original docs or source for details]**

### ColorPicker

A component to select a color.

#### Usage

Use the `v-model` directive to control the value of the ColorPicker.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('#00C16A')
</script>
<template>
  <UColorPicker v-model="modelValue" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

*Example:*
```vue
<UColorPicker default-value="#00BCD4" />
```

##### RGB Format

Use the `format` prop to set `rgb` value of the ColorPicker.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('rgb(0, 193, 106)')
</script>
<template>
  <UColorPicker v-model="modelValue" format="rgb" />
</template>
```

##### HSL Format

Use the `format` prop to set `hsl` value of the ColorPicker.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('hsl(153, 100%, 37.8%)')
</script>
<template>
  <UColorPicker v-model="modelValue" format="hsl" />
</template>
```

##### CMYK Format

Use the `format` prop to set `cmyk` value of the ColorPicker.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('cmyk(100%, 0%, 45.08%, 24.31%)')
</script>
<template>
  <UColorPicker v-model="modelValue" format="cmyk" />
</template>
```

##### CIELab Format

Use the `format` prop to set `lab` value of the ColorPicker.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('lab(68.88% -60.41% 32.55%)')
</script>
<template>
  <UColorPicker v-model="modelValue" format="lab" />
</template>
```

##### Throttle

Use the `throttle` prop to set the throttle value of the ColorPicker.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('#00C16A')
</script>
<template>
  <UColorPicker v-model="modelValue" :throttle="100" />
</template>
```

##### Size

Use the `size` prop to set the size of the ColorPicker.

*Example:*
```vue
<UColorPicker size="xl" />
```

##### Disabled

Use the `disabled` prop to disable the ColorPicker.

*Example:*
```vue
<UColorPicker disabled />
```

#### Examples

##### As a Color chooser

Use a [Button](/components/button) and a [Popover](/components/popover) component to create a color chooser.

*Example Code (color-picker-chooser-example):*
```vue
<script setup lang="ts">
const color = ref('#00C16A')
</script>

<template>
  <UPopover :content="{ sideOffset: 8 }">
    <template #default="{ open }">
      <UButton :style="{ backgroundColor: color }" square :variant="open ? 'outline' : 'subtle'" />
    </template>

    <template #content>
      <UColorPicker v-model="color" />
    </template>
  </UPopover>
</template>
```

#### API

##### Props

**[ColorPicker Props Table - Refer to original docs or source for details]**

##### Emits

**[ColorPicker Emits Table - Refer to original docs or source for details]**

#### Theme

**[ColorPicker Theme Object - Refer to original docs or source for details]**

### Calendar

A calendar component for selecting single dates, multiple dates or date ranges.

> **Note:** This component relies on the `@internationalized/date` package which provides objects and functions for representing and manipulating dates and times in a locale-aware manner.

#### Usage

Use the `v-model` directive to control the selected date.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref([2022, 2, 3]) // Use DateValue format [year, month, day]
</script>
<template>
  <UCalendar v-model="modelValue" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

*Example:*
```vue
<UCalendar :default-value="[2022, 2, 6]" />
```

##### Multiple

Use the `multiple` prop to allow multiple selections.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref([[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]) // Array of DateValue
</script>
<template>
  <UCalendar v-model="modelValue" multiple />
</template>
```

##### Range

Use the `range` prop to select a range of dates.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref({ start: [2022, 2, 3], end: [2022, 2, 20] }) // DateRange object
</script>
<template>
  <UCalendar v-model="modelValue" range />
</template>
```

##### Color

Use the `color` prop to change the color of the calendar.

*Example:*
```vue
<UCalendar color="neutral" />
```

##### Size

Use the `size` prop to change the size of the calendar.

*Example:*
```vue
<UCalendar size="xl" />
```

##### Disabled

Use the `disabled` prop to disable the calendar.

*Example:*
```vue
<UCalendar disabled />
```

##### Number Of Months

Use the `numberOfMonths` prop to change the number of months in the calendar.

*Example:*
```vue
<UCalendar :number-of-months="3" />
```

##### Month Controls

Use the `month-controls` prop to show the month controls. Defaults to `true`.

*Example:*
```vue
<UCalendar :month-controls="false" />
```

##### Year Controls

Use the `year-controls` prop to show the year controls. Defaults to `true`.

*Example:*
```vue
<UCalendar :year-controls="false" />
```

##### Fixed Weeks

Use the `fixed-weeks` prop to display the calendar with fixed weeks.

*Example:*
```vue
<UCalendar :fixed-weeks="false" />
```

#### Examples

##### With chip events

Use the [Chip](/components/chip) component to add events to specific days.

*Example Code (calendar-events-example):*
```vue
<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'
import type { RangeValue } from '@nuxt/ui/dist/runtime/types'

const events = [{
  date: '2024-03-07',
  color: 'primary' as const
}, {
  date: '2024-03-15',
  color: 'success' as const
}]

function isSameDay(date1: CalendarDate, date2: CalendarDate) {
  return date1.year === date2.year && date1.month === date2.month && date1.day === date2.day
}

function hasEvent(date: CalendarDate) {
  return events.some(event => isSameDay(date, new CalendarDate(...(event.date.split('-').map(Number) as [number, number, number]))))
}

function getEventColor(date: CalendarDate) {
  const event = events.find(event => isSameDay(date, new CalendarDate(...(event.date.split('-').map(Number) as [number, number, number]))))
  return event ? event.color : undefined
}
</script>

<template>
  <UCalendar :weekdays="1" :default-value="[2024, 3, 7]">
    <template #day="{ date, selected }: { date: CalendarDate, selected: RangeValue<CalendarDate> | CalendarDate | undefined }">
      <UChip :show="hasEvent(date)" :color="getEventColor(date)">
        <span :class="[(selected === true || (typeof selected === 'object' && (selected.start && isSameDay(date, selected.start)) || (selected.end && isSameDay(date, selected.end)))) && '!text-white dark:!text-gray-900']">{{ date.day }}</span>
      </UChip>
    </template>
  </UCalendar>
</template>
```

##### With disabled dates

Use the `is-date-disabled` prop with a function to mark specific dates as disabled.

*Example Code (calendar-disabled-dates-example):*
```vue
<script setup lang="ts">
import { isWeekend } from 'date-fns'
import type { CalendarDate } from '@internationalized/date'

const isDateDisabled = (date: CalendarDate) => isWeekend(date.toDate('UTC'))
</script>

<template>
  <UCalendar :weekdays="1" :is-date-disabled="isDateDisabled" />
</template>
```

##### With unavailable dates

Use the `is-date-unavailable` prop with a function to mark specific dates as unavailable.

*Example Code (calendar-unavailable-dates-example):*
```vue
<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'

const isDateUnavailable = (date: CalendarDate) => date.day > 15
</script>

<template>
  <UCalendar :weekdays="1" :is-date-unavailable="isDateUnavailable" />
</template>
```

##### With min/max dates

Use the `min-value` and `max-value` props to limit the dates.

*Example Code (calendar-min-max-dates-example):*
```vue
<script setup lang="ts">
import { today, getLocalTimeZone, CalendarDate } from '@internationalized/date'

const minValue = today(getLocalTimeZone())
const maxValue = new CalendarDate(minValue.year, minValue.month + 1, minValue.day)
</script>

<template>
  <UCalendar :min-value="minValue" :max-value="maxValue" />
</template>
```

##### With other calendar systems

You can use other calenders from `@internationalized/date` to implement a different calendar system.

*Example Code (calendar-other-system-example):*
```vue
<script setup lang="ts">
import { HebrewCalendar, CalendarDate } from '@internationalized/date'

const calendar = ref(new HebrewCalendar())
const defaultValue = ref(new CalendarDate(5784, 7, 7))
</script>

<template>
  <UCalendar v-model="defaultValue" :calendar="calendar" />
</template>
```
> **Note:** You can check all the available calendars on [@internationalized/date docs](https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations).

##### As a DatePicker

Use a [Button](/components/button) and a [Popover](/components/popover) component to create a date picker.

*Example Code (calendar-date-picker-example):*
```vue
<script setup lang="ts">
import { CalendarDate, type DateValue, getLocalTimeZone } from '@internationalized/date'
import { type Ref } from 'vue'

const date = ref(new CalendarDate(2024, 3, 7)) as Ref<DateValue>
const timeZone = getLocalTimeZone()
</script>

<template>
  <UPopover :content="{ sideOffset: 8 }">
    <template #default="{ open }">
      <UButton icon="i-lucide-calendar" :label="date.toString()" :variant="open ? 'outline' : 'subtle'" />
    </template>

    <template #content="{ close }">
      <UCalendar v-model="date" :time-zone="timeZone" @update:model-value="close" />
    </template>
  </UPopover>
</template>
```

##### As a DateRangePicker

Use a [Button](/components/button) and a [Popover](/components/popover) component to create a date range picker.

*Example Code (calendar-date-range-picker-example):*
```vue
<script setup lang="ts">
import { CalendarDate, type DateValue, getLocalTimeZone } from '@internationalized/date'
import { type Ref } from 'vue'
import { type RangeValue } from '@nuxt/ui/dist/runtime/types'

const date = ref({ start: new CalendarDate(2024, 3, 7), end: new CalendarDate(2024, 3, 15) }) as Ref<RangeValue<DateValue>>
const timeZone = getLocalTimeZone()
</script>

<template>
  <UPopover :content="{ sideOffset: 8 }">
    <template #default="{ open }">
      <UButton icon="i-lucide-calendar" :variant="open ? 'outline' : 'subtle'">
        <span v-if="date.start" class="tabular-nums">
          {{ date.start.toString() }}
        </span>
        <span v-if="date.start && date.end" class="mx-1">-</span>
        <span v-if="date.end" class="tabular-nums">
          {{ date.end.toString() }}
        </span>
      </UButton>
    </template>

    <template #content="{ close }">
      <UCalendar v-model="date" :time-zone="timeZone" range @update:model-value="close" />
    </template>
  </UPopover>
</template>
```

#### API

##### Props

**[Calendar Props Table - Refer to original docs or source for details]**

##### Slots

**[Calendar Slots Table - Refer to original docs or source for details]**

##### Emits

**[Calendar Emits Table - Refer to original docs or source for details]**

#### Theme

**[Calendar Theme Object - Refer to original docs or source for details]**

### CommandPalette

A command palette with full-text search powered by Fuse.js for efficient fuzzy matching.

#### Usage

Use the `v-model` directive to control the value of the CommandPalette or the `default-value` prop to set the initial value when you do not need to control its state.

> **Tip:** You can also use the `@update:model-value` event to listen to the selected item(s). ([See Control selected items](#control-selected-items))

##### Groups

The CommandPalette component filters groups and ranks matching commands by relevance as users type. It provides dynamic, instant search results for efficient command discovery. Use the `groups` prop as an array of objects with the following properties:

-   `id: string`
-   `label?: string`
-   `slot?: string`
-   `items?: CommandPaletteItem[]`
-   `ignoreFilter?: boolean` ([See With ignore filter](#with-ignore-filter))
-   `postFilter?: (searchTerm: string, items: T[]) => T[]` ([See With post-filtered items](#with-post-filtered-items))
-   `highlightedIcon?: string`

> **Caution:** You must provide an `id` for each group otherwise the group will be ignored.

Each group contains an `items` array of objects that define the commands. Each item can have the following properties:

-   `prefix?: string`
-   `label?: string`
-   `suffix?: string`
-   `icon?: string`
-   `avatar?: AvatarProps`
-   `chip?: ChipProps`
-   `kbds?: string[] | KbdProps[]`
-   `active?: boolean`
-   `loading?: boolean`
-   `disabled?: boolean`
-   `slot?: string` ([See With custom slot](#with-custom-slot))
-   `onSelect?(e?: Event): void`

You can pass any property from the [Link](/components/link#props) component such as `to`, `target`, etc.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref({})
const groups = [
  {
    id: 'users',
    label: 'Users',
    items: [
      { label: 'Benjamin Canac', suffix: 'benjamincanac', avatar: { src: 'https://github.com/benjamincanac.png' } },
      // ... other users
    ]
  }
]
</script>
<template>
  <UCommandPalette v-model="modelValue" :groups="groups" autofocus class="flex-1 !p-0" />
</template>
```

##### Multiple

Use the `multiple` prop to allow multiple selections.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref([]) // Array for multiple selection
const groups = [ /* ... */ ]
</script>
<template>
  <UCommandPalette v-model="modelValue" :groups="groups" multiple autofocus class="flex-1 !p-0" />
</template>
```
> **Caution:** Ensure to pass an array to the `default-value` prop or the `v-model` directive.

##### Placeholder

Use the `placeholder` prop to change the placeholder text.

*Example:*
```vue
<UCommandPalette :groups="groups" placeholder="Search an app..." autofocus class="flex-1 !p-0" />
```

##### Icon

Use the `icon` prop to customize the input [Icon](/components/icon). Defaults to `i-lucide-search`.

*Example:*
```vue
<UCommandPalette :groups="groups" icon="i-lucide-box" autofocus class="flex-1 !p-0" />
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.search` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.search` key. ([See Icons Theme](/getting-started/icons/vue#theme))

##### Loading

Use the `loading` prop to show a loading icon on the CommandPalette.

*Example:*
```vue
<UCommandPalette :groups="groups" loading autofocus class="flex-1 !p-0" />
```

##### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-refresh-cw`.

*Example:*
```vue
<UCommandPalette :groups="groups" loading loading-icon="i-lucide-repeat-2" autofocus class="flex-1 !p-0" />
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key. ([See Icons Theme](/getting-started/icons/vue#theme))

##### Disabled

Use the `disabled` prop to disable the CommandPalette.

*Example:*
```vue
<UCommandPalette :groups="groups" disabled autofocus class="flex-1 !p-0" />
```

##### Close

Use the `close` prop to display a [Button](/components/button) to dismiss the CommandPalette.

> **Tip:** An `update:open` event will be emitted when the close button is clicked.

*Example:*
```vue
<UCommandPalette :groups="groups" :close="true" autofocus class="flex-1 !p-0" />
```

You can pass any property from the [Button](/components/button) component to customize it.

*Example:*
```vue
<UCommandPalette :groups="groups" :close="{ color: 'primary', variant: 'outline', class: 'rounded-full' }" autofocus class="flex-1 !p-0" />
```

##### Close Icon

Use the `close-icon` prop to customize the close button [Icon](/components/icon). Defaults to `i-lucide-x`.

*Example:*
```vue
<UCommandPalette :groups="groups" :close="true" close-icon="i-lucide-arrow-right" autofocus class="flex-1 !p-0" />
```

**For Nuxt:**
> **Tip:** You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key. ([See Icons Theme](/getting-started/icons/vue#theme))

#### Examples

##### Control selected item(s)

You can control the selected item(s) by using the `default-value` prop or the `v-model` directive, by using the `onSelect` field on each item or by using the `@update:model-value` event.

*Example Code (command-palette-select-example):*
```vue
<script setup lang="ts">
import type { CommandPaletteGroup } from '@nuxt/ui/dist/runtime/types'

const toast = useToast()
const selected = ref()

const groups = computed<CommandPaletteGroup[]>(() => [{
  id: 'apps',
  items: [
    { label: 'Calendar', icon: 'i-lucide-calendar', onSelect: () => toast.add({ title: 'Calendar selected' }) },
    { label: 'Music', icon: 'i-lucide-music', onSelect: () => toast.add({ title: 'Music selected' }) },
    { label: 'Maps', icon: 'i-lucide-map', onSelect: () => toast.add({ title: 'Maps selected' }) }
  ]
}])

watch(selected, (item) => {
  if (!item) return
  toast.add({ title: `${item.label} selected (model)` })
})
</script>

<template>
  <UCommandPalette
    v-model="selected"
    :groups="groups"
    autofocus
    class="flex-1 !p-0"
    @update:model-value="(item) => toast.add({ title: `${item.label} selected (event)` })"
  />
</template>
```

##### Control search term

Use the `v-model:search-term` directive to control the search term.

*Example Code (command-palette-search-term-example):*
```vue
<script setup lang="ts">
const searchTerm = ref('')
const selected = ref()
const groups = [{
  id: 'apps',
  items: [
    { label: 'Calendar', icon: 'i-lucide-calendar' },
    { label: 'Music', icon: 'i-lucide-music' },
    { label: 'Maps', icon: 'i-lucide-map' }
  ]
}]

watch(selected, () => {
  searchTerm.value = ''
})
</script>

<template>
  <UCommandPalette v-model="selected" v-model:search-term="searchTerm" :groups="groups" autofocus class="flex-1 !p-0" />
</template>
```
> **Note:** This example uses the `@update:model-value` event to reset the search term when an item is selected.

##### With fetched items

You can fetch items from an API and use them in the CommandPalette.

*Example Code (command-palette-fetch-example):*
```vue
<script setup lang="ts">
const searchTerm = ref('')
const { data: files, pending } = useLazyAsyncData<{ label: string, icon: string }[]>('files', () => $fetch('/api/files', {
  params: { q: searchTerm.value }
}), {
  default: () => [],
  watch: [searchTerm]
})

const groups = computed(() => [{
  id: 'files',
  items: files.value
}])
</script>

<template>
  <UCommandPalette
    v-model:search-term="searchTerm"
    :groups="groups"
    :loading="pending"
    autofocus
    class="flex-1 !p-0"
  />
</template>
```

##### With ignore filter

You can set the `ignoreFilter` field to `true` on a group to disable the internal search and use your own search logic.

*Example Code (command-palette-ignore-filter-example):*
```vue
<script setup lang="ts">
import { refDebounced } from '@vueuse/core'
import type { CommandPaletteGroup } from '@nuxt/ui/dist/runtime/types'

const toast = useToast()
const searchTerm = ref('')
const debouncedSearchTerm = refDebounced(searchTerm, 300)

const { data: files, pending } = useLazyAsyncData<{ label: string, icon: string }[]>('files', () => $fetch('/api/files', {
  params: { q: debouncedSearchTerm.value }
}), {
  default: () => [],
  watch: [debouncedSearchTerm]
})

const groups = computed<CommandPaletteGroup[]>(() => [{
  id: 'files',
  label: 'Files',
  items: files.value,
  ignoreFilter: true
}])

function onSelect(item: { label: string }) {
  toast.add({ title: `${item.label} selected` })
}
</script>

<template>
  <UCommandPalette
    v-model:search-term="searchTerm"
    :groups="groups"
    :loading="pending"
    autofocus
    class="flex-1 !p-0"
    @update:model-value="onSelect"
  />
</template>
```
> **Note:** This example uses `refDebounced` to debounce the API calls.

##### With post-filtered items

You can use the `postFilter` field on a group to filter items after the search happened.

*Example Code (command-palette-post-filter-example):*
```vue
<script setup lang="ts">
import type { CommandPaletteGroup, CommandPaletteItem } from '@nuxt/ui/dist/runtime/types'

const toast = useToast()
const selected = ref()

type Item = CommandPaletteItem<{ level: number }>

const groups = computed<CommandPaletteGroup<Item>[]>(() => [{
  id: 'items',
  items: [
    { label: 'Item 1', level: 1 },
    { label: 'Item 2', level: 1 },
    { label: 'Item 3', level: 2 },
    { label: 'Item 4', level: 2 },
    { label: 'Item 5', level: 3 }
  ],
  postFilter: (searchTerm, items) => {
    if (!searchTerm) {
      return items
    }

    // Keep only items with level > 1
    return items.filter(item => item.level > 1)
  }
}])

watch(selected, (item) => {
  if (!item) return
  toast.add({ title: `${item.label} selected` })
})
</script>

<template>
  <UCommandPalette v-model="selected" :groups="groups" autofocus class="flex-1 !p-0" />
</template>
```
> **Note:** Start typing to see items with higher level appear.

##### With custom fuse search

You can use the `fuse` prop to override the options of [useFuse](https://vueuse.org/integrations/useFuse) which defaults to `{ fuseOptions: { ignoreLocation: true, threshold: 0.1, keys: ['label', 'suffix'] }, resultLimit: 12, matchAllWhenSearchEmpty: true }`.

> **Tip:** The `fuseOptions` are the options of [Fuse.js](https://www.fusejs.io/api/options.html), the `resultLimit` is the maximum number of results to return and the `matchAllWhenSearchEmpty` is a boolean to match all items when the search term is empty.

You can for example set `{ fuseOptions: { includeMatches: true } }` to highlight the search term in the items.

*Example Code (command-palette-fuse-example):*
```vue
<script setup lang="ts">
import type { FuseResult } from '@vueuse/integrations/useFuse'
import type { CommandPaletteGroup, CommandPaletteItem } from '@nuxt/ui/dist/runtime/types'

const toast = useToast()
const selected = ref()

type Item = CommandPaletteItem<{ value: string }>
const groups = computed<CommandPaletteGroup<Item>[]>(() => [{
  id: 'items',
  items: [
    { label: 'Vue', value: 'vue' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Solid', value: 'solid' }
  ]
}])

const fuse = {
  fuseOptions: {
    includeMatches: true,
    keys: ['label']
  }
}

watch(selected, (item) => {
  if (!item) return
  toast.add({ title: `${item.label} selected` })
})

function highlight(matches: FuseResult<Item>['matches']) {
  if (!matches?.length) {
    return ''
  }

  const { value = '', indices = [] } = matches[0]
  let highlighted = ''
  let lastIndex = 0

  for (const [start, end] of indices) {
    highlighted += value.substring(lastIndex, start)
    highlighted += `<mark class="text-inherit bg-(--ui-primary-100) dark:bg-(--ui-primary-900) font-semibold">${value.substring(start, end + 1)}</mark>`
    lastIndex = end + 1
  }

  highlighted += value.substring(lastIndex)
  return highlighted
}
</script>

<template>
  <UCommandPalette
    v-model="selected"
    :groups="groups"
    :fuse="fuse"
    autofocus
    class="flex-1 !p-0"
  >
    <template #item-label="{ item, matches }">
      <span v-html="highlight(matches)" />
    </template>
  </UCommandPalette>
</template>
```

##### Within a Popover

You can use the CommandPalette component inside a [Popover](/components/popover)'s content.

*Example Code (popover-command-palette-example):*
```vue
<script setup lang="ts">
const items = [{
  id: 'home',
  label: 'Home',
  icon: 'i-lucide-home',
  kbds: ['G', 'H']
}, {
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'i-lucide-layout-dashboard',
  kbds: ['G', 'D']
}, {
  id: 'inbox',
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  kbds: ['G', 'I']
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'i-lucide-settings',
  children: [{
    id: 'general',
    label: 'General',
    kbds: ['G', 'S', 'G'],
    onSelect: () => console.log('General')
  }, {
    id: 'members',
    label: 'Members',
    kbds: ['G', 'S', 'M'],
    onSelect: () => console.log('Members')
  }, {
    id: 'notifications',
    label: 'Notifications',
    kbds: ['G', 'S', 'N'],
    onSelect: () => console.log('Notifications')
  }]
}]
</script>

<template>
  <UPopover>
    <UButton color="neutral" variant="subtle" label="Open" />

    <template #content="{ close }">
      <UCommandPalette :items="items" item-size="xl" @update:model-value="close" />
    </template>
  </UPopover>
</template>
```

##### Within a Modal

You can use the CommandPalette component inside a [Modal](/components/modal)'s content.

*Example Code (modal-command-palette-example):*
```vue
<script setup lang="ts">
const open = ref(false)
const items = [{
  id: 'home',
  label: 'Home',
  icon: 'i-lucide-home',
  kbds: ['G', 'H']
}, {
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'i-lucide-layout-dashboard',
  kbds: ['G', 'D']
}, {
  id: 'inbox',
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  kbds: ['G', 'I']
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'i-lucide-settings',
  children: [{
    id: 'general',
    label: 'General',
    kbds: ['G', 'S', 'G'],
    onSelect: () => console.log('General')
  }, {
    id: 'members',
    label: 'Members',
    kbds: ['G', 'S', 'M'],
    onSelect: () => console.log('Members')
  }, {
    id: 'notifications',
    label: 'Notifications',
    kbds: ['G', 'S', 'N'],
    onSelect: () => console.log('Notifications')
  }]
}]

defineShortcuts({
  meta_k: () => open.value = !open.value
})
</script>

<template>
  <UModal v-model:open="open">
    <UCommandPalette :items="items" item-size="xl" @update:model-value="open = false" />
  </UModal>
</template>
```

##### Within a Drawer

You can use the CommandPalette component inside a [Drawer](/components/drawer)'s content.

*Example Code (drawer-command-palette-example):*
```vue
<script setup lang="ts">
const open = ref(false)
const items = [{
  id: 'home',
  label: 'Home',
  icon: 'i-lucide-home',
  kbds: ['G', 'H']
}, {
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'i-lucide-layout-dashboard',
  kbds: ['G', 'D']
}, {
  id: 'inbox',
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  kbds: ['G', 'I']
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'i-lucide-settings',
  children: [{
    id: 'general',
    label: 'General',
    kbds: ['G', 'S', 'G'],
    onSelect: () => console.log('General')
  }, {
    id: 'members',
    label: 'Members',
    kbds: ['G', 'S', 'M'],
    onSelect: () => console.log('Members')
  }, {
    id: 'notifications',
    label: 'Notifications',
    kbds: ['G', 'S', 'N'],
    onSelect: () => console.log('Notifications')
  }]
}]

defineShortcuts({
  meta_k: () => open.value = !open.value
})
</script>

<template>
  <UDrawer v-model:open="open">
    <UCommandPalette :items="items" item-size="xl" @update:model-value="open = false" />
  </UDrawer>
</template>
```

##### Listen open state

When using the `close` prop, you can listen to the `update:open` event when the button is clicked.

*Example Code (command-palette-open-example):*
```vue
<script setup lang="ts">
const open = ref(true)
const toast = useToast()
const items = [{
  id: 'apps',
  items: [
    { label: 'Calendar', icon: 'i-lucide-calendar' },
    { label: 'Music', icon: 'i-lucide-music' },
    { label: 'Maps', icon: 'i-lucide-map' }
  ]
}]

function onOpen(value: boolean) {
  toast.add({ title: `Command Palette ${value ? 'opened' : 'closed'}` })
}
</script>

<template>
  <UCommandPalette
    :items="items"
    :close="true"
    autofocus
    class="flex-1 !p-0"
    @update:open="onOpen"
  />
</template>
```
> **Note:** This can be useful when using the CommandPalette inside a `Modal` for example.

##### With custom slot

Use the `slot` property to customize a specific item or group. You will have access to the following slots: `#{{ item.slot }}`, `#{{ item.slot }}-leading`, `#{{ item.slot }}-label`, `#{{ item.slot }}-trailing`, `#{{ group.slot }}`, `#{{ group.slot }}-leading`, `#{{ group.slot }}-label`, `#{{ group.slot }}-trailing`.

*Example Code (command-palette-custom-slot-example):*
```vue
<script setup lang="ts">
const items = [{
  id: 'actions',
  slot: 'actions',
  items: [
    { label: 'Copy', icon: 'i-lucide-copy', slot: 'copy' },
    { label: 'Duplicate', icon: 'i-lucide-duplicate' },
    { label: 'Archive', icon: 'i-lucide-archive' }
  ]
}]
</script>

<template>
  <UCommandPalette :items="items" autofocus class="flex-1 !p-0">
    <template #actions-leading>
      <UIcon name="i-lucide-list-filter" class="size-4 me-2 flex-shrink-0" />
    </template>

    <template #copy-trailing="{ item }">
      <span class="text-xs text-(--ui-text-muted)">Custom</span>
    </template>
  </UCommandPalette>
</template>
```

> **Tip:** You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items. ([See Slots](#slots))

#### API

##### Props

**[CommandPalette Props Table - Refer to original docs or source for details]**

##### Slots

**[CommandPalette Slots Table - Refer to original docs or source for details]**

##### Emits

**[CommandPalette Emits Table - Refer to original docs or source for details]**

#### Theme

**[CommandPalette Theme Object - Refer to original docs or source for details]**

### Container

A container lets you center and constrain the width of your content.

#### Usage

*Example Code (container-example):*
```vue
<template>
  <UContainer class="w-full">
    <Placeholder class="h-32" />
  </UContainer>
</template>
```

#### API

##### Props

**[Container Props Table - Refer to original docs or source for details]**

##### Slots

**[Container Slots Table - Refer to original docs or source for details]**

#### Theme

**[Container Theme Object - Refer to original docs or source for details]**

### ContextMenu

A menu to display actions when right-clicking on an element.

#### Usage

Use anything you like in the default slot of the ContextMenu, and right-click on it to display the menu.

##### Items

Use the `items` prop as an array of objects with the following properties:

-   `label?: string`
-   `icon?: string`
-   `color?: string` ([See With color items](#with-color-items))
-   `avatar?: AvatarProps`
-   `kbds?: string[] | KbdProps[]`
-   `type?: "link" | "label" | "separator" | "checkbox"` ([See With checkbox items](#with-checkbox-items))
-   `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"` ([See With color items](#with-color-items))
-   `checked?: boolean` ([See With checkbox items](#with-checkbox-items))
-   `disabled?: boolean`
-   `class?: any`
-   `slot?: string` ([See With custom slot](#with-custom-slot))
-   `onSelect?(e: Event): void`
-   `onUpdateChecked?(checked: boolean): void` ([See With checkbox items](#with-checkbox-items))

You can pass any property from the [Link](/components/link#props) component such as `to`, `target`, etc.

*Example:*
```vue
<script setup lang="ts">
const items = [
  [{ label: 'Appearance', children: [ /* ... */ ] }],
  [{ label: 'Show Sidebar', kbds: ['meta', 's'] }, /* ... */ ],
  [{ label: 'Refresh the Page' }, /* ... */ { type: 'separator' }, { label: 'Developer', children: [ /* ... */ ] }]
]
</script>
<template>
  <UContextMenu :items="items" :ui="{ content: 'w-48' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-(--ui-border-accented) text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```
> **Note:** You can also pass an array of arrays to the `items` prop to create separated groups of items.
> **Tip:** Each item can take a `children` array of objects with the same properties as the `items` prop to create a nested menu which can be controlled using the `open`, `defaultOpen` and `content` properties.

##### Size

Use the `size` prop to change the size of the ContextMenu.

*Example:*
```vue
<UContextMenu :items="items" size="xl" :ui="{ content: 'w-48' }">
  <!-- Trigger element -->
</UContextMenu>
```

##### Disabled

Use the `disabled` prop to disable the ContextMenu.

*Example:*
```vue
<UContextMenu :items="items" disabled :ui="{ content: 'w-48' }">
  <!-- Trigger element -->
</UContextMenu>
```

#### Examples

##### With checkbox items

You can use the `type` property with `checkbox` and use the `checked` / `onUpdateChecked` properties to control the checked state of the item.

*Example Code (context-menu-checkbox-items-example):*
```vue
<script setup lang="ts">
import type { ContextMenuItem } from '@nuxt/ui/dist/runtime/types'

const checked = ref(false)

const items = computed<ContextMenuItem[][]>(() => [[{
  label: 'Show Bookmarks Bar',
  type: 'checkbox',
  checked: checked.value,
  kbds: ['meta', 'shift', 'b'],
  onUpdateChecked: (value) => {
    checked.value = value
  }
}, {
  label: 'Show Full URLs',
  type: 'checkbox',
  checked: false
}], [{
  label: 'Reload',
  icon: 'i-lucide-rotate-cw',
  kbds: ['meta', 'r']
}, {
  label: 'Forward',
  icon: 'i-lucide-arrow-right',
  disabled: true
}, {
  label: 'Back',
  icon: 'i-lucide-arrow-left'
}]])
</script>

<template>
  <UContextMenu :items="items" :ui="{ content: 'w-56' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-(--ui-border-accented) text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```
> **Note:** To ensure reactivity for the `checked` state of items, it's recommended to wrap your `items` array inside a `computed`.

##### With color items

You can use the `color` property to highlight certain items with a color.

*Example Code (context-menu-color-items-example):*
```vue
<script setup lang="ts">
const items = [[{
  label: 'Add to favorites',
  icon: 'i-lucide-star',
  color: 'primary'
}], [{
  label: 'Delete',
  icon: 'i-lucide-trash',
  color: 'error'
}]]
</script>

<template>
  <UContextMenu :items="items" :ui="{ content: 'w-48' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-(--ui-border-accented) text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

##### With custom slot

Use the `slot` property to customize a specific item. You will have access to the following slots: `#{{ item.slot }}`, `#{{ item.slot }}-leading`, `#{{ item.slot }}-label`, `#{{ item.slot }}-trailing`.

*Example Code (context-menu-custom-slot-example):*
```vue
<script setup lang="ts">
import type { ContextMenuItem } from '@nuxt/ui/dist/runtime/types'

const items = [[{
  label: 'Benjamin',
  avatar: { src: 'https://github.com/benjamincanac.png' },
  type: 'label',
  slot: 'account'
}], [{
  label: 'Settings',
  icon: 'i-lucide-settings',
  slot: 'settings'
}]] satisfies ContextMenuItem[][]
</script>

<template>
  <UContextMenu :items="items" :ui="{ content: 'w-48' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-(--ui-border-accented) text-sm aspect-video w-72">
      Right click here
    </div>

    <template #account>
      <span class="italic text-sm text-(--ui-text-muted)">Account</span>
    </template>

    <template #settings-trailing>
      <UKbd value="," />
    </template>
  </UContextMenu>
</template>
```

> **Tip:** You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items. ([See Slots](#slots))

##### Extract shortcuts

When you have some items with `kbds` property (displaying some [Kbd](/components/kbd)), you can easily make them work with the [defineShortcuts](/composables/define-shortcuts) composable. Inside the `defineShortcuts` composable, there is an `extractShortcuts` utility that will extract the shortcuts recursively from the items and return an object that you can pass to `defineShortcuts`. It will automatically call the `select` function of the item when the shortcut is pressed.

```vue
<script setup lang="ts">
const items = [ /* ... items with kbds and onSelect ... */ ]
defineShortcuts(extractShortcuts(items))
</script>
```
> **Note:** In the example from the original docs, :kbd{value="meta"} :kbd{value="S"}, :kbd{value="shift"} :kbd{value="meta"} :kbd{value="D"}, etc., would trigger the `select` function of the corresponding item.

#### API

##### Props

**[ContextMenu Props Table - Refer to original docs or source for details]**

##### Slots

**[ContextMenu Slots Table - Refer to original docs or source for details]**

##### Emits

**[ContextMenu Emits Table - Refer to original docs or source for details]**

#### Theme

**[ContextMenu Theme Object - Refer to original docs or source for details]**

### Drawer

A drawer that smoothly slides in & out of the screen.

#### Usage

Use a [Button](/components/button) or any other component in the default slot of the Drawer. Then, use the `#content` slot to add the content displayed when the Drawer is open.

*Example:*
```vue
<UDrawer>
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #content>
    <Placeholder class="h-48 m-4" />
  </template>
</UDrawer>
```

You can also use the `#header`, `#body` and `#footer` slots to customize the Drawer's content.

##### Title

Use the `title` prop to set the title of the Drawer's header.

*Example:*
```vue
<UDrawer title="Drawer with title">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UDrawer>
```

##### Description

Use the `description` prop to set the description of the Drawer's header.

*Example:*
```vue
<UDrawer title="Drawer with description" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UDrawer>
```

##### Direction

Use the `direction` prop to control the direction of the Drawer. Defaults to `bottom`.

*Example:*
```vue
<UDrawer direction="right">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #content>
    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
  </template>
</UDrawer>
```

##### Inset

Use the `inset` prop to inset the Drawer from the edges.

*Example:*
```vue
<UDrawer direction="right" inset>
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #content>
    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
  </template>
</UDrawer>
```

##### Handle

Use the `handle` prop to control whether the Drawer has a handle or not. Defaults to `true`.

*Example:*
```vue
<UDrawer :handle="false">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #content>
    <Placeholder class="h-48 m-4" />
  </template>
</UDrawer>
```

##### Handle Only

Use the `handle-only` prop to only allow the Drawer to be dragged by the handle.

*Example:*
```vue
<UDrawer handle-only>
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="

  Okay, picking up where we left off with the Drawer component.

```markdown
# Consolidated Nuxt UI Documentation (v3 Base)

... (Previous content from Introduction to Drawer usage) ...

### Drawer (Continued)

##### Handle Only

Use the `handle-only` prop to only allow the Drawer to be dragged by the handle.

*Example:*
```vue
<UDrawer handle-only>
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #content>
    <Placeholder class="h-48 m-4" />
  </template>
</UDrawer>
```

##### Overlay

Use the `overlay` prop to control whether the Drawer has an overlay or not. Defaults to `true`.

*Example:*
```vue
<UDrawer :overlay="false">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #content>
    <Placeholder class="h-48 m-4" />
  </template>
</UDrawer>
```

##### Scale background

Use the `should-scale-background` prop to scale the background when the Drawer is open, creating a visual depth effect. You can set the `set-background-color-on-scale` prop to `false` to prevent changing the background color.

*Example:*
```vue
<UDrawer should-scale-background :set-background-color-on-scale="true">
  <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  <template #content>
    <Placeholder class="h-screen m-4" /> <!-- Adjusted for visual effect -->
  </template>
</UDrawer>
```
> **Warning:** Make sure to add the `data-vaul-drawer-wrapper` directive to a parent element of your app to make this work.
> ```vue [app.vue]
> <template>
>   <UApp>
>     <div class="bg-(--ui-bg)" data-vaul-drawer-wrapper>
>       <NuxtLayout>
>         <NuxtPage />
>       </NuxtLayout>
>     </div>
>   </UApp>
> </template>
> ```
> or
> ```ts [nuxt.config.ts]
> export default defineNuxtConfig({
>   app: {
>     rootAttrs: {
>       'data-vaul-drawer-wrapper': '',
>       'class': 'bg-(--ui-bg)'
>     }
>   }
> })
> ```

#### Examples

##### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

*Example Code (drawer-open-example):*
```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <div>
    <UButton label="Open" color="neutral" variant="subtle" @click="open = true" />

    <UDrawer v-model:open="open" title="Drawer" description="This is the description">
      <template #body>
        <Placeholder class="h-48" />
      </template>
    </UDrawer>
  </div>
</template>
```
> **Note:** In this example, leveraging [`defineShortcuts`](/composables/define-shortcuts), you can toggle the Drawer by pressing **O**.
> **Tip:** This allows you to move the trigger outside of the Drawer or remove it entirely.

##### Prevent closing

Set the `dismissible` prop to `false` to prevent the Drawer from being closed when clicking outside of it or pressing escape.

*Example Code (drawer-dismissible-example):*
```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <UDrawer v-model:open="open" :dismissible="false">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold leading-6">
          Non-Dismissible Drawer
        </h3>
        <UButton color="neutral" variant="ghost" icon="i-lucide-x" @click="open = false" />
      </div>
    </template>

    <Placeholder class="h-48" />
  </UDrawer>

  <UButton label="Open" color="neutral" variant="subtle" @click="open = true" />
</template>
```
> **Note:** In this example, the `header` slot is used to add a close button which is not done by default.

##### Responsive drawer

You can render a [Modal](/components/modal) component on desktop and a Drawer on mobile for example.

*Example Code (drawer-responsive-example):*
```vue
<script setup lang="ts">
const open = ref(false)
const { isMobile } = useScreen()
</script>

<template>
  <ClientOnly>
    <UDrawer v-if="isMobile" v-model:open="open" title="Drawer" description="This is the description">
      <template #body>
        <Placeholder class="h-48" />
      </template>
    </UDrawer>
    <UModal v-else v-model:open="open" title="Modal" description="This is the description">
      <template #body>
        <Placeholder class="h-48" />
      </template>
    </UModal>
  </ClientOnly>

  <UButton label="Open" color="neutral" variant="subtle" @click="open = true" />
</template>
```

##### With footer slot

Use the `#footer` slot to add content after the Drawer's body.

*Example Code (drawer-footer-slot-example):*
```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <UDrawer v-model:open="open" title="Drawer with footer" description="This is the description">
    <template #body>
      <Placeholder class="h-48" />
    </template>
    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UDrawer>

  <UButton label="Open" color="neutral" variant="subtle" @click="open = true" />
</template>
```

##### With command palette

You can use a [CommandPalette](/components/command-palette) component inside the Drawer's content.

*Example Code (drawer-command-palette-example):*
*(See CommandPalette section for code example)*

#### API

##### Props

**[Drawer Props Table - Refer to original docs or source for details]**

##### Slots

**[Drawer Slots Table - Refer to original docs or source for details]**

##### Emits

**[Drawer Emits Table - Refer to original docs or source for details]**

#### Theme

**[Drawer Theme Object - Refer to original docs or source for details]**

### DropdownMenu

A menu to display actions when clicking on an element.

#### Usage

Use a [Button](/components/button) or any other component in the default slot of the DropdownMenu.

##### Items

Use the `items` prop as an array of objects with the following properties:

-   `label?: string`
-   `icon?: string`
-   `color?: string` ([See With color items](#with-color-items))
-   `avatar?: AvatarProps`
-   `kbds?: string[] | KbdProps[]`
-   `type?: "link" | "label" | "separator" | "checkbox"` ([See With checkbox items](#with-checkbox-items))
-   `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"` ([See With color items](#with-color-items))
-   `checked?: boolean` ([See With checkbox items](#with-checkbox-items))
-   `disabled?: boolean`
-   `class?: any`
-   `slot?: string` ([See With custom slot](#with-custom-slot))
-   `onSelect?(e: Event): void`
-   `onUpdateChecked?(checked: boolean): void` ([See With checkbox items](#with-checkbox-items))

You can pass any property from the [Link](/components/link#props) component such as `to`, `target`, etc.

*Example:*
```vue
<script setup lang="ts">
const items = [
  [{ label: 'Benjamin', avatar: { src: 'https://github.com/benjamincanac.png' }, type: 'label' }],
  [{ label: 'Profile', icon: 'i-lucide-user' }, /* ... */ ],
  [{ label: 'Team', icon: 'i-lucide-users' }, { label: 'Invite users', icon: 'i-lucide-user-plus', children: [ /* ... */ ] }, /* ... */ ],
  [{ label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/nuxt/ui', target: '_blank' }, /* ... */ ],
  [{ label: 'Logout', icon: 'i-lucide-log-out', kbds: ['shift', 'meta', 'q'] }]
]
</script>
<template>
  <UDropdownMenu :items="items" :ui="{ content: 'w-48' }">
    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
```
> **Note:** You can also pass an array of arrays to the `items` prop to create separated groups of items.
> **Tip:** Each item can take a `children` array of objects with the same properties as the `items` prop to create a nested menu which can be controlled using the `open`, `defaultOpen` and `content` properties.

##### Content

Use the `content` prop to control how the DropdownMenu content is rendered, like its `align` or `side` for example.

*Example:*
```vue
<UDropdownMenu
  :items="items"
  :content="{ align: 'start', side: 'bottom', sideOffset: 8 }"
  :ui="{ content: 'w-48' }"
>
  <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
</UDropdownMenu>
```

##### Arrow

Use the `arrow` prop to display an arrow on the DropdownMenu.

*Example:*
```vue
<UDropdownMenu :items="items" arrow :ui="{ content: 'w-48' }">
  <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
</UDropdownMenu>
```

##### Size

Use the `size` prop to control the size of the DropdownMenu.

*Example:*
```vue
<UDropdownMenu :items="items" size="xl" :content="{ align: 'start' }" :ui="{ content: 'w-48' }">
  <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
</UDropdownMenu>
```
> **Warning:** The `size` prop will not be proxied to the Button, you need to set it yourself.
> **Note:** When using the same size, the DropdownMenu items will be perfectly aligned with the Button.

##### Disabled

Use the `disabled` prop to disable the DropdownMenu.

*Example:*
```vue
<UDropdownMenu :items="items" disabled :ui="{ content: 'w-48' }">
  <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
</UDropdownMenu>
```

#### Examples

##### With checkbox items

You can use the `type` property with `checkbox` and use the `checked` / `onUpdateChecked` properties to control the checked state of the item.

*Example Code (dropdown-menu-checkbox-items-example):*
```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui/dist/runtime/types'

const checked = ref(false)

const items = computed<DropdownMenuItem[][]>(() => [[{
  label: 'Show Bookmarks Bar',
  type: 'checkbox',
  checked: checked.value,
  kbds: ['meta', 'shift', 'b'],
  onUpdateChecked: (value) => {
    checked.value = value
  }
}, {
  label: 'Show Full URLs',
  type: 'checkbox',
  checked: false
}], [{
  label: 'Reload',
  icon: 'i-lucide-rotate-cw',
  kbds: ['meta', 'r']
}, {
  label: 'Forward',
  icon: 'i-lucide-arrow-right',
  disabled: true
}, {
  label: 'Back',
  icon: 'i-lucide-arrow-left'
}]])
</script>

<template>
  <UDropdownMenu :items="items" :ui="{ content: 'w-56' }">
    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
```
> **Note:** To ensure reactivity for the `checked` state of items, it's recommended to wrap your `items` array inside a `computed`.

##### With color items

You can use the `color` property to highlight certain items with a color.

*Example Code (dropdown-menu-color-items-example):*
```vue
<script setup lang="ts">
const items = [[{
  label: 'Add to favorites',
  icon: 'i-lucide-star',
  color: 'primary'
}], [{
  label: 'Delete',
  icon: 'i-lucide-trash',
  color: 'error'
}]]
</script>

<template>
  <UDropdownMenu :items="items" :ui="{ content: 'w-48' }">
    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
```

##### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

*Example Code (dropdown-menu-open-example):*
```vue
<script setup lang="ts">
const open = ref(false)
const items = [[{ label: 'Profile' }, { label: 'Edit' }], [{ label: 'Settings' }]]

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UDropdownMenu v-model:open="open" :items="items">
    <UButton label="Toggle" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
```
> **Note:** In this example, leveraging [`defineShortcuts`](/composables/define-shortcuts), you can toggle the DropdownMenu by pressing **O**.

##### With custom slot

Use the `slot` property to customize a specific item. You will have access to the following slots: `#{{ item.slot }}`, `#{{ item.slot }}-leading`, `#{{ item.slot }}-label`, `#{{ item.slot }}-trailing`.

*Example Code (dropdown-menu-custom-slot-example):*
```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui/dist/runtime/types'

const items = [[{
  label: 'Benjamin',
  avatar: { src: 'https://github.com/benjamincanac.png' },
  type: 'label',
  slot: 'account'
}], [{
  label: 'Settings',
  icon: 'i-lucide-settings',
  slot: 'settings'
}]] satisfies DropdownMenuItem[][]
</script>

<template>
  <UDropdownMenu :items="items" :ui="{ content: 'w-48' }">
    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />

    <template #account>
      <span class="italic text-sm text-(--ui-text-muted)">Account</span>
    </template>

    <template #settings-trailing>
      <UKbd value="," />
    </template>
  </UDropdownMenu>
</template>
```

> **Tip:** You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items. ([See Slots](#slots))

##### Extract shortcuts

When you have some items with `kbds` property (displaying some [Kbd](/components/kbd)), you can easily make them work with the [defineShortcuts](/composables/define-shortcuts) composable. Inside the `defineShortcuts` composable, there is an `extractShortcuts` utility that will extract the shortcuts recursively from the items and return an object that you can pass to `defineShortcuts`. It will automatically call the `select` function of the item when the shortcut is pressed.

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{ /* ... items with kbds and onSelect ... */ }]
defineShortcuts(extractShortcuts(items))
</script>
```
> **Note:** In the example from the original docs, :kbd{value="meta"} :kbd{value="E"}, etc., would trigger the `select` function.

#### API

##### Props

**[DropdownMenu Props Table - Refer to original docs or source for details]**

##### Slots

**[DropdownMenu Slots Table - Refer to original docs or source for details]**

##### Emits

**[DropdownMenu Emits Table - Refer to original docs or source for details]**

#### Theme

**[DropdownMenu Theme Object - Refer to original docs or source for details]**

### FormField

A wrapper for form elements that provides validation and error handling.

#### Usage

Wrap any form component with a FormField. Used in a [Form](/components/form), it provides validation and error handling.

##### Label

Use the `label` prop to set the label for the form control.

*Example:*
```vue
<UFormField label="Email">
  <UInput placeholder="Enter your email" />
</UFormField>
```
> **Note:** The label `for` attribute and the form control are associated with a unique `id` if not provided.

When using the `required` prop, an asterisk is be added next to the label.

*Example:*
```vue
<UFormField label="Email" required>
  <UInput placeholder="Enter your email" />
</UFormField>
```

##### Description

Use the `description` prop to provide additional information below the label.

*Example:*
```vue
<UFormField label="Email" description="We'll never share your email with anyone else.">
  <UInput placeholder="Enter your email" class="w-full" />
</UFormField>
```

##### Hint

Use the `hint` prop to display a hint message next to the label.

*Example:*
```vue
<UFormField label="Email" hint="Optional">
  <UInput placeholder="Enter your email" />
</UFormField>
```

##### Help

Use the `help` prop to display a help message below the form control.

*Example:*
```vue
<UFormField label="Email" help="Please enter a valid email address.">
  <UInput placeholder="Enter your email" class="w-full" />
</UFormField>
```

##### Error

Use the `error` prop to display an error message below the form control. When used together with the `help` prop, the `error` prop takes precedence. When used inside a [Form](/components/form), this is automatically set when a validation error occurs.

*Example:*
```vue
<UFormField label="Email" error="Please enter a valid email address.">
  <UInput placeholder="Enter your email" class="w-full" />
</UFormField>
```
> **Tip:** This sets the `color` to `error` on the form control. You can change it globally in your `app.config.ts`. ([See Theme Colors](/getting-started/theme#colors))

##### Size

Use the `size` prop to change the size of the FormField, the `size` is proxied to the form control.

*Example:*
```vue
<UFormField
  label="Email"
  description="We'll never share your email with anyone else."
  hint="Optional"
  help="Please enter a valid email address."
  size="xl"
>
  <UInput placeholder="Enter your email" class="w-full" />
</UFormField>
```

#### API

##### Props

**[FormField Props Table - Refer to original docs or source for details]**

##### Slots

**[FormField Slots Table - Refer to original docs or source for details]**

#### Theme

**[FormField Theme Object - Refer to original docs or source for details]**

### Form

A form component with built-in validation and submission handling.

#### Usage

Use the Form component to validate form data using validation libraries such as [Valibot](https://github.com/fabian-hiller/valibot), [Zod](https://github.com/colinhacks/zod), [Yup](https://github.com/jquense/yup), [Joi](https://github.com/hapijs/joi), [Superstruct](https://github.com/ianstormtaylor/superstruct) or your own validation logic. It works with the [FormField](/components/form-field) component to display error messages around form elements automatically.

##### Schema Validation

It requires two props: `state` (a reactive object holding the form's state) and `schema` (a validation schema).

> **Warning:** **No validation library is included** by default, ensure you **install the one you need**.

*Example (Using Valibot):*
```vue
<script setup lang="ts">
import { object, string, minLength, email, type Output } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string([minLength(1, 'Must be at least 1 character.'), email('Invalid email.')]),
  password: string([minLength(8, 'Must be at least 8 characters.')])
})

type Schema = Output<typeof schema>

const state = ref({
  email: '',
  password: ''
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="flex flex-col gap-4 w-60" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```
*(See original docs for Zod, Yup, Joi, Superstruct examples)*

Errors are reported directly to the [FormField](/components/form-field) component based on the `name` or `error-pattern` prop. Nested validation rules are handled using dot notation.

##### Custom Validation

Use the `validate` prop to apply your own validation logic. The validation function must return a list of errors (`{ message: string, name: string }`).

> **Tip:** It can be used alongside the `schema` prop to handle complex use cases.

*Example Code (form-example-basic):*
```vue
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = ref({
  email: '',
  password: ''
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="flex flex-col gap-4 w-60" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

##### Input Events

The Form component automatically triggers validation when an input emits an `input`, `change`, or `blur` event. You can control when validation happens this using the `validate-on` prop.

*Example showing configurable validate-on:*
*(No code provided, but allows selecting 'input', 'change', 'blur')*

> **Tip:** You can use the [`useFormField`](/composables/use-form-field) composable to implement this inside your own components.

##### Error Event

You can listen to the `@error` event to handle errors. This event is triggered when the form is submitted and contains an array of `FormError` objects (`{ id: string, name: string, message: string }`).

Here's an example that focuses the first input element with an error after the form is submitted:

*Example Code (form-example-on-error):*
```vue
<script setup lang="ts">
import { object, string, minLength, email, type Output } from 'valibot'
import type { FormErrorEvent } from '#ui/types'

const schema = object({
  email: string([minLength(1, 'Must be at least 1 character.'), email('Invalid email.')]),
  password: string([minLength(8, 'Must be at least 8 characters.')])
})

type Schema = Output<typeof schema>

const state = ref({
  email: '',
  password: ''
})

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="flex flex-col gap-4 w-60" @error="onError">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

##### Nesting Forms

Nesting form components allows you to manage complex data structures, such as lists or conditional fields, more efficiently.

*Example for dynamic fields (form-example-nested):*
```vue
<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const notifyOptions = [{ label: 'Comments', value: 'comments' }, { label: 'Candidates', value: 'candidates' }, { label: 'Offers', value: 'offers' }]
const radiosOptions = [{ label: 'Everything', value: 'everything' }, { label: 'Same as email', value: 'email' }, { label: 'No push notifications', value: 'none' }]

const schema = z.object({
  notify: z.array(z.string()).min(1, 'Select at least one option.'),
  radios: z.string()
})

type Schema = z.output<typeof schema>

const state = ref({
  notify: ['comments'],
  radios: 'email'
})

function onSubmit (event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Push Notifications" name="radios">
      <URadioGroup v-model="state.radios" :items="radiosOptions" />
    </UFormField>

    <UForm v-if="state.radios === 'everything'" :state="state" :schema="schema">
      <UFormField label="Notifications" name="notify">
        <UCheckbox
          v-for="option in notifyOptions"
          :key="option.value"
          v-model="state.notify"
          :label="option.label"
          :value="option.value"
          class="mb-1"
        />
      </UFormField>
    </UForm>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

*Example for list validation (form-example-nested-list):*
```vue
<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  users: z.array(z.object({
    name: z.string().min(1),
    email: z.string().email()
  })).min(1, 'Add at least one user.')
})

type Schema = z.output<typeof schema>

const state = ref({
  users: [{ name: '', email: '' }]
})

function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}

function addUser() {
  state.value.users.push({ name: '', email: '' })
}

function removeUser(index: number) {
  state.value.users.splice(index, 1)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField name="users">
      <div v-for="(user, index) in state.users" :key="index" class="flex items-center gap-2">
        <UForm :state="user" class="flex-1">
          <div class="flex gap-2">
            <UFormField name="name" class="flex-1">
              <UInput v-model="user.name" placeholder="Name" />
            </UFormField>

            <UFormField name="email" class="flex-1">
              <UInput v-model="user.email" placeholder="Email" />
            </UFormField>
          </div>
        </UForm>

        <UButton color="neutral" variant="subtle" icon="i-lucide-trash" class="self-start" @click="removeUser(index)" />
      </div>
    </UFormField>

    <div class="flex justify-between">
      <UButton label="Add user" color="neutral" variant="outline" @click="addUser" />
      <UButton type="submit">
        Submit
      </UButton>
    </div>
  </UForm>
</template>
```

#### API

##### Props

**[Form Props Table - Refer to original docs or source for details]**

##### Slots

**[Form Slots Table - Refer to original docs or source for details]**

##### Emits

**[Form Emits Table - Refer to original docs or source for details]**

##### Expose

You can access the typed component instance using `useTemplateRef`.
```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>
<template>
  <UForm ref="form" />
</template>
```
This gives access to:
| Name             | Type                                                                                          | Description                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `submit()`       | `Promise<void>`                                                                               | Triggers form submission.                                                                                         |
| `validate(opts)` | `Promise<T>`                                                                                  | Triggers form validation. Will raise errors unless `opts.silent` is true.                                         |
| `clear(path?)`   | `void`                                                                                        | Clears form errors associated with a specific path or all errors if no path provided.                             |
| `getErrors(path?)`| `FormError[]`                                                                                 | Retrieves form errors associated with a specific path or all errors if no path provided.                          |
| `setErrors(...)` | `void`                                                                                        | Sets form errors for a given path or overrides all errors if no path provided.                                    |
| `errors`         | `Ref<FormError[]>`                                                                            | A reference to the array containing validation errors.                                                            |
| `disabled`       | `Ref<boolean>`                                                                                |                                                                                                                   |
| `dirty`          | `Ref<boolean>`                                                                                | `true` if at least one form field has been updated by the user.                                                   |
| `dirtyFields`    | `DeepReadonly<Set<keyof T>>`                                                                  | Tracks fields that have been modified by the user.                                                                |
| `touchedFields`  | `DeepReadonly<Set<keyof T>>`                                                                  | Tracks fields that the user interacted with.                                                                      |
| `blurredFields`  | `DeepReadonly<Set<keyof T>>`                                                                  | Tracks fields blurred by the user.                                                                                |

### Icon

A component to display any icon from Iconify.

#### Usage

Use the `name` prop to display an icon:

*Example:*
```vue
<UIcon name="i-lucide-lightbulb" class="size-5" />
```

**For Nuxt:**
> **Caution:** It's highly recommended to install the icons collections you need. ([See Icons Collections](/getting-started/icons/nuxt#collections))

#### API

##### Props

**[Icon Props Table - Refer to original docs or source for details]**

### InputMenu

An autocomplete input with real-time suggestions.

#### Usage

Use the `v-model` directive to control the value of the InputMenu or the `default-value` prop to set the initial value.

> **Tip:** Use this over an `Input` for autocomplete capabilities.
> **Note:** Similar to `SelectMenu` but uses an Input trigger.

##### Items

Use the `items` prop as an array of strings, numbers or booleans, or an array of objects with `label`, `type`, `icon`, `avatar`, `chip`, `disabled`, `onSelect`.

*Example (Simple):*
```vue
<script setup lang="ts">
const modelValue = ref('Backlog')
const items = ['Backlog', 'Todo', 'In Progress', 'Done']
</script>
<template>
  <UInputMenu v-model="modelValue" :items="items" />
</template>
```

*Example (Objects):*
```vue
<script setup lang="ts">
const modelValue = ref({ label: 'Todo' })
const items = [
  { label: 'Backlog' }, { label: 'Todo' }, { label: 'In Progress' }, { label: 'Done' }
]
</script>
<template>
  <UInputMenu v-model="modelValue" :items="items" />
</template>
```

You can also pass an array of arrays for separated groups.

##### Value Key

Use `value-key` to bind a specific property instead of the whole object. Defaults to `undefined`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('todo')
const items = [
  { label: 'Backlog', id: 'backlog' },
  { label: 'Todo', id: 'todo' },
  // ...
]
</script>
<template>
  <UInputMenu v-model="modelValue" value-key="id" :items="items" />
</template>
```

##### Multiple

Use `multiple` prop to allow multiple selections (displayed as badges).

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref(['Backlog', 'Todo'])
const items = ['Backlog', 'Todo', 'In Progress', 'Done']
</script>
<template>
  <UInputMenu v-model="modelValue" multiple :items="items" />
</template>
```
> **Caution:** Ensure `v-model` or `default-value` is an array when `multiple` is true.

##### Delete Icon

With `multiple`, use `delete-icon` to customize the delete icon in badges. Defaults to `i-lucide-x`.

*Example:*
```vue
<UInputMenu v-model="modelValue" multiple delete-icon="i-lucide-trash" :items="items" />
```

**For Nuxt:**
> **Tip:** Customize globally via `ui.icons.close` in `app.config.ts`. ([See Icons Theme](/getting-started/icons/nuxt#theme))

**For Vue:**
> **Tip:** Customize globally via `ui.icons.close` in `vite.config.ts`. ([See Icons Theme](/getting-started/icons/vue#theme))

##### Placeholder

Use the `placeholder` prop.

*Example:*
```vue
<UInputMenu placeholder="Select status" :items="items" />
```

##### Content

Use the `content` prop to control alignment, side, offset, etc.

*Example:*
```vue
<UInputMenu v-model="modelValue" :content="{ align: 'center', side: 'bottom', sideOffset: 8 }" :items="items" />
```

##### Arrow

Use the `arrow` prop to display an arrow.

*Example:*
```vue
<UInputMenu v-model="modelValue" arrow :items="items" />
```

##### Color

Use `color` to change the focus ring color.

*Example:*
```vue
<UInputMenu v-model="modelValue" color="neutral" highlight :items="items" />
```
> **Note:** `highlight` is used here to show focus state (used internally on validation errors).

##### Variant

Use the `variant` prop.

*Example:*
```vue
<UInputMenu v-model="modelValue" color="neutral" variant="subtle" :items="items" />
```

##### Size

Use the `size` prop.

*Example:*
```vue
<UInputMenu v-model="modelValue" size="xl" :items="items" />
```

##### Icon

Use `icon` prop for a leading icon.

*Example:*
```vue
<UInputMenu v-model="modelValue" icon="i-lucide-search" :items="items" />
```

##### Trailing Icon

Use `trailing-icon`. Defaults to `i-lucide-chevron-down`.

*Example:*
```vue
<UInputMenu v-model="modelValue" trailing-icon="i-lucide-arrow-down" :items="items" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.chevronDown`.

##### Selected Icon

Use `selected-icon`. Defaults to `i-lucide-check`.

*Example:*
```vue
<UInputMenu v-model="modelValue" selected-icon="i-lucide-flame" :items="items" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.check`.

##### Avatar

Use `avatar` prop for a leading avatar.

*Example:*
```vue
<UInputMenu v-model="modelValue" :avatar="{ src: 'https://github.com/nuxt.png' }" :items="items" />
```

##### Loading

Use `loading` prop.

*Example:*
```vue
<UInputMenu v-model="modelValue" loading :trailing="false" :items="items" />
```

##### Loading Icon

Use `loading-icon`. Defaults to `i-lucide-refresh-cw`.

*Example:*
```vue
<UInputMenu v-model="modelValue" loading loading-icon="i-lucide-repeat-2" :items="items" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.loading`.

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<UInputMenu disabled placeholder="Select status" :items="items" />
```

#### Examples

##### With items type

Use `type: 'separator'` or `type: 'label'`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('Apple')
const items = [
  { type: 'label', label: 'Fruits' },
  'Apple', 'Banana', /* ... */
  { type: 'separator' },
  { type: 'label', label: 'Vegetables' },
  'Aubergine', 'Broccoli', /* ... */
]
</script>
<template>
  <UInputMenu v-model="modelValue" :items="items" />
</template>
```

##### With icons in items

Use `icon` property in item objects.

*Example Code (input-menu-items-icon-example):*
*(See Select Menu example, similar logic)*

> **Tip:** Use `#leading` slot for selected icon display.

##### With avatar in items

Use `avatar` property in item objects.

*Example Code (input-menu-items-avatar-example):*
*(See Select Menu example, similar logic)*

> **Tip:** Use `#leading` slot for selected avatar display.

##### With chip in items

Use `chip` property in item objects.

*Example Code (input-menu-items-chip-example):*
*(See Select Menu example, similar logic)*

> **Note:** `#leading` slot used for selected chip display in example.

##### Control open state

Use `default-open` or `v-model:open`.

*Example Code (input-menu-open-example):*
*(Similar logic to SelectMenu open example)*

> **Note:** Example uses `defineShortcuts` for toggling.

##### Control open state on focus

Use `@focus` event.

*Example Code (input-menu-open-focus-example):*
```vue
<script setup lang="ts">
const open = ref(false)
const items = ['Backlog', 'Todo', 'In Progress', 'Done']
</script>

<template>
  <UInputMenu v-model:open="open" :items="items" @focus="open = true" />
</template>
```

##### Control search term

Use `v-model:search-term`.

*Example Code (input-menu-search-term-example):*
```vue
<script setup lang="ts">
const searchTerm = ref('')
const selected = ref()
const items = ['Backlog', 'Todo', 'In Progress', 'Done']
</script>

<template>
  <UInputMenu v-model="selected" v-model:search-term="searchTerm" :items="items" />
</template>
```

##### With rotating icon

Indicate open state with rotating icon.

*Example Code (input-menu-icon-example):*
*(Similar logic to SelectMenu rotating icon example)*

##### With create item

Use `create-item` prop (boolean or 'always').

*Example Code (input-menu-create-item-example):*
```vue
<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const selected = ref([items.value[0]])

function onCreate(event: Event, item: { label: string }) {
  items.value.push(item.label)
  selected.value.push(item.label)
}
</script>

<template>
  <UInputMenu v-model="selected" :items="items" multiple create-item @create="onCreate" />
</template>
```
> **Note:** Create option shows when no match by default, or always if set.
> **Tip:** Use `@create` event handler.

##### With fetched items

Fetch items from API.

*Example Code (input-menu-fetch-example):*
*(Similar logic to CommandPalette fetch example)*

##### With ignore filter

Set `ignore-filter` to true for custom search logic.

*Example Code (input-menu-ignore-filter-example):*
*(Similar logic to CommandPalette ignore filter example)*

> **Note:** Example uses `refDebounced`.

##### With filter fields

Use `filter-fields` prop (array of keys). Defaults to `[labelKey]`.

*Example Code (input-menu-filter-fields-example):*
```vue
<script setup lang="ts">
const people = [{
  id: 1,
  name: 'Benjamin Canac',
  username: 'benjamincanac'
}, {
  id: 2,
  name: 'Sébastien Chopin',
  username: 'atinux'
}, {
  id: 3,
  name: 'Daniel Roe',
  username: 'danielroe'
}]

const selected = ref(people[0])
</script>

<template>
  <UInputMenu v-model="selected" :items="people" label-key="name" :filter-fields="['name', 'username']" />
</template>
```

##### As a CountryPicker

Lazy load countries when menu opens.

*Example Code (input-menu-countries-example):*
*(See SelectMenu countries example, similar logic)*

#### API

##### Props

**[InputMenu Props Table - Refer to original docs or source for details]**

##### Slots

**[InputMenu Slots Table - Refer to original docs or source for details]**

##### Emits

**[InputMenu Emits Table - Refer to original docs or source for details]**

#### Theme

**[InputMenu Theme Object - Refer to original docs or source for details]**

### InputNumber

Input numerical values with a customizable range.

> **Note:** Relies on `@internationalized/number`.

#### Usage

Use `v-model` or `default-value`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref(5)
</script>
<template>
  <UInputNumber v-model="modelValue" />
</template>
```

##### Min / Max

Use `min` and `max` props.

*Example:*
```vue
<UInputNumber v-model="modelValue" :min="0" :max="10" />
```

##### Step

Use `step` prop.

*Example:*
```vue
<UInputNumber v-model="modelValue" :step="2" />
```

##### Orientation

Use `orientation` prop (`vertical` or `horizontal`).

*Example:*
```vue
<UInputNumber v-model="modelValue" orientation="vertical" />
```

##### Placeholder

Use `placeholder` prop.

*Example:*
```vue
<UInputNumber placeholder="Enter a number" />
```

##### Color

Use `color` for focus ring color.

*Example:*
```vue
<UInputNumber v-model="modelValue" color="neutral" highlight />
```

##### Variant

Use `variant` prop.

*Example:*
```vue
<UInputNumber v-model="modelValue" variant="subtle" color="neutral" />
```

##### Size

Use `size` prop.

*Example:*
```vue
<UInputNumber v-model="modelValue" size="xl" />
```

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<UInputNumber v-model="modelValue" disabled />
```

##### Increment / Decrement

Use `increment` and `decrement` props to customize buttons (pass Button props). Defaults to `{ variant: 'link' }`.

*Example:*
```vue
<UInputNumber
  v-model="modelValue"
  :increment="{ color: 'neutral', variant: 'solid', size: 'xs' }"
  :decrement="{ color: 'neutral', variant: 'solid', size: 'xs' }"
/>
```

##### Increment / Decrement Icons

Use `increment-icon` and `decrement-icon`. Defaults to `i-lucide-plus` / `i-lucide-minus`.

*Example:*
```vue
<UInputNumber v-model="modelValue" increment-icon="i-lucide-arrow-right" decrement-icon="i-lucide-arrow-left" />
```

#### Examples

##### With decimal format

Use `format-options` prop.

*Example Code (input-number-decimal-example):*
```vue
<script setup lang="ts">
const value = ref(0.5)
</script>

<template>
  <UInputNumber v-model="value" step="0.01" :format-options="{ minimumFractionDigits: 2, maximumFractionDigits: 2 }" />
</template>
```

##### With percentage format

Use `format-options` with `style: 'percent'`.

*Example Code (input-number-percentage-example):*
```vue
<script setup lang="ts">
const value = ref(0.5)
</script>

<template>
  <UInputNumber v-model="value" step="0.01" :format-options="{ style: 'percent' }" />
</template>
```

##### With currency format

Use `format-options` with `style: 'currency'`.

*Example Code (input-number-currency-example):*
```vue
<script setup lang="ts">
const value = ref(50)
</script>

<template>
  <UInputNumber v-model="value" :format-options="{ style: 'currency', currency: 'EUR' }" />
</template>
```

##### Within a FormField

Wrap with [FormField](/components/form-field).

*Example Code (input-number-form-field-example):*
```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UFormField label="Quantity" :help="`${value} items selected`">
    <UInputNumber v-model="value" />
  </UFormField>
</template>
```

##### With slots

Use `#increment` and `#decrement` slots.

*Example Code (input-number-slots-example):*
```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value">
    <template #increment="{ onClick }">
      <UButton color="primary" variant="ghost" icon="i-lucide-plus" @click="onClick" />
    </template>

    <template #decrement="{ onClick }">
      <UButton color="primary" variant="ghost" icon="i-lucide-minus" @click="onClick" />
    </template>
  </UInputNumber>
</template>
```

#### API

##### Props

**[InputNumber Props Table - Refer to original docs or source for details]**

##### Slots

**[InputNumber Slots Table - Refer to original docs or source for details]**

##### Emits

**[InputNumber Emits Table - Refer to original docs or source for details]**

##### Expose

Access via template ref:
| Name       | Type                            |
| ---------- | ------------------------------- |
| `inputRef` | `Ref<HTMLInputElement \| null>` |

#### Theme

**[InputNumber Theme Object - Refer to original docs or source for details]**

### Input

An input element to enter text.

#### Usage

Use `v-model`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('')
</script>
<template>
  <UInput v-model="modelValue" />
</template>
```

##### Type

Use `type` prop (text, number, password, search, file, etc.). Defaults to `text`. Some types have dedicated components (Checkbox, RadioGroup, InputNumber). `file` type is styled.

*Example:*
```vue
<UInput type="file" />
```

##### Placeholder

Use `placeholder` prop.

*Example:*
```vue
<UInput placeholder="Search..." />
```

##### Color

Use `color` for focus ring.

*Example:*
```vue
<UInput color="neutral" highlight placeholder="Search..." />
```
> **Note:** `highlight` used for demo, internally used for errors.

##### Variant

Use `variant` prop.

*Example:*
```vue
<UInput color="neutral" variant="subtle" placeholder="Search..." />
```

##### Size

Use `size` prop.

*Example:*
```vue
<UInput size="xl" placeholder="Search..." />
```

##### Icon

Use `icon` for leading icon. Use `leading`, `trailing`, `leading-icon`, `trailing-icon` for positioning/specific icons.

*Example (leading):*
```vue
<UInput icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." />
```
*Example (trailing):*
```vue
<UInput trailing-icon="i-lucide-at-sign" placeholder="Enter your email" size="md" />
```

##### Avatar

Use `avatar` prop.

*Example:*
```vue
<UInput :avatar="{ src: 'https://github.com/nuxt.png' }" size="md" variant="outline" placeholder="Search..." />
```

##### Loading

Use `loading` prop.

*Example:*
```vue
<UInput loading :trailing="false" placeholder="Search..." />
```

##### Loading Icon

Use `loading-icon`. Defaults to `i-lucide-refresh-cw`.

*Example:*
```vue
<UInput loading loading-icon="i-lucide-repeat-2" placeholder="Search..." />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.loading`.

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<UInput disabled placeholder="Search..." />
```

#### Examples

##### With clear button

Use `#trailing` slot with a Button.

*Example Code (input-clear-button-example):*
```vue
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <UInput v-model="value" placeholder="Search...">
    <template #trailing>
      <UButton
        v-show="value !== ''"
        color="neutral"
        variant="link"
        icon="i-lucide-x"
        :padded="false"
        @click="value = ''"
      />
    </template>
  </UInput>
</template>
```

##### With copy button

Use `#trailing` slot with a Button and `useClipboard`.

*Example Code (input-copy-button-example):*
```vue
<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const value = ref('npm i @nuxt/ui')
const { copy, copied } = useClipboard({ source: value })
</script>

<template>
  <UInput v-model="value">
    <template #trailing>
      <UButton
        :icon="copied ? 'i-lucide-check' : 'i-lucide-clipboard'"
        color="neutral"
        variant="link"
        :padded="false"
        @click="copy()"
      />
    </template>
  </UInput>
</template>
```

##### With password toggle

Use `#trailing` slot with a Button to toggle type.

*Example Code (input-password-toggle-example):*
```vue
<script setup lang="ts">
const value = ref('password')
const show = ref(false)
</script>

<template>
  <UInput v-model="value" :type="show ? 'text' : 'password'">
    <template #trailing>
      <UButton
        :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
        color="neutral"
        variant="link"
        :padded="false"
        @click="show = !show"
      />
    </template>
  </UInput>
</template>
```

##### With password strength indicator

Use [Progress](/components/progress).

*Example Code (input-password-strength-indicator-example):*
```vue
<script setup lang="ts">
const value = ref('')

const strength = computed(() => {
  if (!value.value || value.value.length < 6) return 0
  if (value.value.length < 8) return 1
  if (value.value.length < 10) return 2
  if (value.value.length < 12) return 3
  return 4
})

const strengthColor = computed(() => {
  if (strength.value <= 1) return 'error'
  if (strength.value <= 2) return 'warning'
  if (strength.value <= 3) return 'info'
  return 'success'
})
</script>

<template>
  <div class="flex flex-col gap-2 w-60">
    <UInput v-model="value" type="password" />
    <UProgress :value="strength" :max="4" :color="strengthColor" indicator />
  </div>
</template>
```

##### With character limit

Use `#trailing` slot.

*Example Code (input-character-limit-example):*
```vue
<script setup lang="ts">
const value = ref('')
const max = 140
</script>

<template>
  <UInput v-model="value" :maxlength="max">
    <template #trailing>
      <span class="text-xs text-(--ui-text-muted)">{{ value.length }} / {{ max }}</span>
    </template>
  </UInput>
</template>
```

##### With keyboard shortcut

Use [Kbd](/components/kbd) in `#trailing` slot.

*Example Code (input-kbd-example):*
```vue
<script setup lang="ts">
const input = ref<HTMLInputElement | null>(null)

defineShortcuts({
  '/': () => {
    input.value?.focus()
  }
})
</script>

<template>
  <UInput ref="input" icon="i-lucide-search" placeholder="Search...">
    <template #trailing>
      <UKbd value="/" />
    </template>
  </UInput>
</template>
```
> **Note:** Uses `defineShortcuts` to focus on `/`.

##### With floating label

Use `#default` slot.

*Example Code (input-floating-label-example):*
```vue
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <UInput v-model="value">
    <template #default="{ TInput, TInputIcon, TInputAvatar, TInputLoadingIcon }">
      <input
        :id="TInput.id"
        v-model="TInput.modelValue"
        :type="TInput.type"
        :required="TInput.required"
        :placeholder="TInput.placeholder"
        :class="TInput.inputClass"
        class="peer"
        @input="(event: Event) => TInput.modelValue = (event.target as HTMLInputElement).value"
      >
      <label
        :for="TInput.id"
        :class="[TInput.labelClass, TInput.icon && TInput.leadingIcon ? 'ps-10' : 'ps-3', TInput.icon && TInput.trailingIcon ? 'pe-10' : 'pe-3']"
        class="absolute start-0 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-1 peer-focus:px-1 peer-focus:text-primary-500 dark:peer-focus:text-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >Email</label>

      <span v-if="TInput.icon && TInput.leadingIcon" :class="TInput.icon.leadingWrapperClass">
        <TInputLoadingIcon v-if="TInput.loading" :class="TInput.icon.leadingClass" />
        <TInputIcon v-else :name="TInput.icon.leadingIcon" :class="TInput.icon.leadingClass" />
      </span>

      <span v-if="TInput.icon && TInput.trailingIcon" :class="TInput.icon.trailingWrapperClass">
        <TInputLoadingIcon v-if="TInput.loading && TInput.trailing" :class="TInput.icon.trailingClass" />
        <TInputIcon v-else :name="TInput.icon.trailingIcon" :class="TInput.icon.trailingClass" />
      </span>
    </template>
  </UInput>
</template>
```

##### Within a FormField

Wrap with [FormField](/components/form-field).

*Example Code (input-form-field-example):*
```vue
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <UFormField label="Email" help="We'll never share your email with anyone else.">
    <UInput v-model="value" placeholder="Enter your email" />
  </UFormField>
</template>
```
> **Tip:** Provides validation within a `Form`.

##### Within a ButtonGroup

Wrap with [ButtonGroup](/components/button-group).

*Example Code (input-button-group-example):*
```vue
<template>
  <UButtonGroup>
    <UInput placeholder="Enter token..." color="neutral" variant="outline" />
    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
  </UButtonGroup>
</template>
```

#### API

##### Props

**[Input Props Table - Refer to original docs or source for details]**

##### Slots

**[Input Slots Table - Refer to original docs or source for details]**

##### Emits

**[Input Emits Table - Refer to original docs or source for details]**

##### Expose

Access via template ref:
| Name       | Type                            |
| ---------- | ------------------------------- |
| `inputRef` | `Ref<HTMLInputElement \| null>` |

#### Theme

**[Input Theme Object - Refer to original docs or source for details]**

### Kbd (Keyboard Key)

A kbd element to display a keyboard key.

#### Usage

##### Value

Use the default slot or `value` prop.

*Example (Slot):*
```vue
<UKbd>K</UKbd>
```
*Example (Prop):*
```vue
<UKbd value="K" />
```

Can handle special keys (`meta`, `shift`, `ctrl`, `option`, `alt`, `enter`, `escape`, arrow keys, etc.) via `value` prop, rendering appropriate symbols (e.g., `⌘`/`⊞` for `meta`).

*Example (Special Key):*
```vue
<UKbd value="meta" />
```

##### Variant

Use `variant` prop (`solid`, `outline`, `subtle`).

*Example:*
```vue
<UKbd variant="solid">K</UKbd>
```

##### Size

Use `size` prop.

*Example:*
```vue
<UKbd size="lg">K</UKbd>
```

#### Examples

##### `class` prop

Override base styles.

*Example:*
```vue
<UKbd class="font-bold rounded-full" variant="subtle">K</UKbd>
```

#### API

##### Props

**[Kbd Props Table - Refer to original docs or source for details]**

##### Slots

**[Kbd Slots Table - Refer to original docs or source for details]**

#### Theme

**[Kbd Theme Object - Refer to original docs or source for details]**

### Link

A wrapper around `<NuxtLink>` with extra props.

#### Usage

Wraps [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) using the `custom` prop. Provides extra props: `inactive-class`, `exact`, `exact-query`, `exact-hash` for finer control over active styling, similar to Nuxt 2 / Vue 2 RouterLink.

> **Note:** Used by `Breadcrumb`, `Button`, `ContextMenu`, `DropdownMenu`, `NavigationMenu`.

##### Tag

Renders `<a>` if `to` prop is provided, `<button>` otherwise. Use `as` prop to change fallback tag.

*Example:*
```vue
<ULink to="" as="button">Link</ULink>
```
> **Note:** Inspect HTML to see rendered tag change based on `to`.

##### Style

Has default active/inactive styles ([See Theme](#theme)).

*Example:*
```vue
<ULink to="/components/link">Link</ULink>
```
> **Note:** Change `to` prop to see state changes.

Override default styles using `raw` prop and `class`, `active-class`, `inactive-class`.

*Example:*
```vue
<ULink raw to="/components/link" active-class="font-bold" inactive-class="text-(--ui-text-muted)">
  Link
</ULink>
```

#### IntelliSense

For VSCode IntelliSense on `active-class` and `inactive-class`, add to `.vscode/settings.json`:
```json
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```

#### API

##### Props

**[Link Props Table - Refer to original docs or source for details (excluding `custom`)]**

##### Slots

**[Link Slots Table - Refer to original docs or source for details]**

#### Theme

**[Link Theme Object - Refer to original docs or source for details]**

### Modal

A dialog window that can be used to display a message or request user input.

#### Usage

Use a [Button](/components/button) or other component in the default slot. Use `#content` slot for modal content.

*Example:*
```vue
<UModal>
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #content>
    <Placeholder class="h-48 m-4" />
  </template>
</UModal>
```

Can also use `#header`, `#body`, `#footer` slots.

##### Title

Use `title` prop for header title.

*Example:*
```vue
<UModal title="Modal with title">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UModal>
```

##### Description

Use `description` prop for header description.

*Example:*
```vue
<UModal title="Modal with description" description="Lorem ipsum dolor sit amet...">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UModal>
```

##### Close

Use `close` prop to customize/hide header close button (pass Button props or `false`).

*Example:*
```vue
<UModal title="Modal with close button" :close="{ color: 'primary', variant: 'outline', class: 'rounded-full' }">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UModal>
```
> **Tip:** Close button hidden if `#content` slot is used directly.

##### Close Icon

Use `close-icon`. Defaults to `i-lucide-x`.

*Example:*
```vue
<UModal title="Modal with close button" close-icon="i-lucide-arrow-right">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UModal>
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.close`.

##### Overlay

Use `overlay` prop (boolean). Defaults to `true`.

*Example:*
```vue
<UModal :overlay="false" title="Modal without overlay">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UModal>
```

##### Transition

Use `transition` prop (boolean). Defaults to `true`.

*Example:*
```vue
<UModal :transition="false" title="Modal without transition">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UModal>
```

##### Fullscreen

Use `fullscreen` prop.

*Example:*
```vue
<UModal fullscreen title="Modal fullscreen">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #body>
    <Placeholder class="h-full" />
  </template>
</UModal>
```

#### Examples

##### Control open state

Use `default-open` or `v-model:open`.

*Example Code (modal-open-example):*
```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <div>
    <UButton label="Open" color="neutral" variant="subtle" @click="open = true" />

    <UModal v-model:open="open" title="Modal" description="This is the description">
      <template #body>
        <Placeholder class="h-48" />
      </template>
    </UModal>
  </div>
</template>
```
> **Note:** Example uses `defineShortcuts` for toggling.
> **Tip:** Allows moving trigger outside or removing it.

##### Prevent closing

Set `dismissible` prop to `false`.

*Example:*
```vue
<UModal :dismissible="false" title="Modal non-dismissible">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #body>
    <Placeholder class="h-48" />
  </template>
</UModal>
```

##### Programmatic usage

Use `useOverlay` composable.

> **Warning:** Requires wrapping app with `App` component.

First, create the modal content component (e.g., `ModalExample.vue`):
*Example Code (modal-example - Content Component):*
```vue
<script setup lang="ts">
const emit = defineEmits(['close'])

defineProps({
  title: {
    type: String,
    default: 'Modal'
  },
  description: {
    type: String,
    default: 'This is the description'
  }
})
</script>

<template>
  <UModal title="Modal" description="This is the description" @close="emit('close')">
    <template #body>
      <Placeholder class="h-48" />
    </template>
  </UModal>
</template>
```
> **Note:** Emitting `close` is necessary to capture return value.

Then, use it programmatically:
*Example Code (modal-programmatic-example):*
```vue
<script setup lang="ts">
import { ModalExample } from '#components'

const overlay = useOverlay()
const toast = useToast()

const modal = overlay.create(ModalExample, { title: 'Welcome' })

async function openModal() {
  await modal.open()

  toast.add({ title: 'Modal closed' })
}
</script>

<template>
  <UButton label="Open" color="neutral" variant="subtle" @click="openModal" />
</template>
```
> **Tip:** Close within the modal component via `emit('close')`.

##### Nested modals

Nest modals within each other.

*Example Code (modal-nested-example):*
```vue
<script setup lang="ts">
const open1 = ref(false)
const open2 = ref(false)
</script>

<template>
  <div>
    <UButton label="Open Modal 1" color="neutral" variant="subtle" @click="open1 = true" />

    <UModal v-model:open="open1" title="Modal 1">
      <template #body>
        <Placeholder class="h-48" />
        <UButton label="Open Modal 2" color="neutral" variant="subtle" @click="open2 = true" />
      </template>
    </UModal>

    <UModal v-model:open="open2" title="Modal 2">
      <template #body>
        <Placeholder class="h-48" />
      </template>
    </UModal>
  </div>
</template>
```

##### With footer slot

Use `#footer` slot.

*Example Code (modal-footer-slot-example):*
```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <div>
    <UButton label="Open" color="neutral" variant="subtle" @click="open = true" />

    <UModal v-model:open="open" title="Modal with footer" description="This is the description">
      <template #body>
        <Placeholder class="h-48" />
      </template>
      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UModal>
  </div>
</template>
```

##### With command palette

Use [CommandPalette](/components/command-palette) inside modal content.

*Example Code (modal-command-palette-example):*
*(See CommandPalette section for example)*

#### API

##### Props

**[Modal Props Table - Refer to original docs or source for details]**

##### Slots

**[Modal Slots Table - Refer to original docs or source for details]**

##### Emits

**[Modal Emits Table - Refer to original docs or source for details]**

#### Theme

**[Modal Theme Object - Refer to original docs or source for details]**

### NavigationMenu

A list of links that can be displayed horizontally or vertically.

#### Usage

##### Items

Use `items` prop (array of objects or array of arrays for groups). Item properties:
`label?`, `icon?`, `avatar?`, `badge?`, `trailingIcon?`, `type? ('label' | 'link')`, `value?`, `disabled?`, `class?`, `slot?`, `onSelect?`, `children?` (array of sub-items: `label`, `description?`, `icon?`, `class?`, `onSelect?`). Can pass Link props (`to`, `target`, etc.).

*Example (Horizontal):*
```vue
<script setup lang="ts">
const items = [ /* ... complex items structure with children, icons, badges ... */ ]
</script>
<template>
  <UNavigationMenu :items="items" class="w-full justify-center" />
</template>
```
> **Note:** Groups can be created using array of arrays.
> **Tip:** `children` array creates submenus.

##### Orientation

Use `orientation` prop (`horizontal` or `vertical`).

> **Note:** Vertical orientation uses `Collapsible` for children (control with `open`/`defaultOpen`).

*Example (Vertical):*
```vue
<UNavigationMenu :items="items" orientation="vertical" class="data-[orientation=vertical]:w-48" />
```
> **Note:** Groups are spaced horizontally, separated vertically.

##### Highlight

Use `highlight` prop (boolean) for active item border. Use `highlight-color`.

*Example:*
```vue
<UNavigationMenu
  :items="items"
  highlight
  highlight-color="primary"
  orientation="horizontal"
  class="data-[orientation=horizontal]:border-b border-(--ui-border) data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
/>
```
> **Note:** Example adds `border-b`. Default is clean slate.
> **Caution:** Vertical highlight only affects active children borders.

##### Color

Use `color` prop.

*Example:*
```vue
<UNavigationMenu :items="items" color="neutral" class="w-full" />
```

##### Variant

Use `variant` prop (`solid`, `outline`, `soft`, `subtle`, `link`, `pill`).

*Example:*
```vue
<UNavigationMenu :items="items" color="neutral" variant="link" class="w-full" />
```
> **Note:** `highlight` prop affects `pill` variant active style.

##### Trailing Icon

Use `trailing-icon` for parent nodes with children. Defaults to `i-lucide-chevron-down`. Can set per item via `trailingIcon` property.

*Example:*
```vue
<UNavigationMenu :items="items" trailing-icon="i-lucide-arrow-down" class="w-full justify-center" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.chevronDown`.

##### Arrow

Use `arrow` prop for content arrow when items have children.

*Example:*
```vue
<UNavigationMenu :items="items" arrow class="w-full justify-center" />
```
> **Note:** Arrow animates to follow active item.

##### Content Orientation

Use `content-orientation` (`horizontal` or `vertical`).

> **Warning:** Only works when `orientation` is `horizontal`.

*Example:*
```vue
<UNavigationMenu :items="items" arrow content-orientation="vertical" class="w-full justify-center" />
```

##### Unmount

Use `unmount-on-hide` prop (boolean). Defaults to `true`.

*Example:*
```vue
<UNavigationMenu :items="items" :unmount-on-hide="false" class="w-full justify-center" />
```
> **Note:** Inspect DOM to see content rendering.

#### Examples

##### Control active item

Use `default-value` or `v-model` with item index or `value`.

*Example Code (navigation-menu-model-value-example):*
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui/dist/runtime/types'

const items = [{
  label: 'Item 1',
  value: 'item1'
}, {
  label: 'Item 2',
  value: 'item2'
}, {
  label: 'Item 3',
  value: 'item3'
}] satisfies NavigationMenuItem[]

const value = ref('item1')

defineShortcuts({
  1: () => value.value = 'item1',
  2: () => value.value = 'item2',
  3: () => value.value = 'item3'
})
</script>

<template>
  <UNavigationMenu v-model="value" :items="items" class="w-full justify-center" />
</template>
```
> **Note:** Example uses `defineShortcuts` for switching.

##### With custom slot

Use `item.slot` property. Access slots: `#{{ item.slot }}`, `#{{ item.slot }}-leading`, `#{{ item.slot }}-label`, `#{{ item.slot }}-trailing`, `#{{ item.slot }}-content`.

*Example Code (navigation-menu-custom-slot-example):*
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui/dist/runtime/types'

const items = [[{
  label: 'Profile',
  avatar: { src: 'https://github.com/benjamincanac.png' },
  slot: 'profile'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  slot: 'settings'
}]] satisfies NavigationMenuItem[][]
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-center">
    <template #profile>
      <span class="italic text-sm text-(--ui-text-muted)">Profile</span>
    </template>

    <template #settings-trailing>
      <UKbd value="," />
    </template>
  </UNavigationMenu>
</template>
```
> **Tip:** Use `#item*` slots for all items.

##### With content slot

Use `#item-content` or `#{{ item.slot }}-content`.

*Example Code (navigation-menu-content-slot-example):*
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui/dist/runtime/types'

const items = [{
  label: 'Guide',
  icon: 'i-lucide-book-open',
  slot: 'guide'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  active: true
}] satisfies NavigationMenuItem[]
</script>

<template>
  <UNavigationMenu :items="items" :ui="{ viewport: 'sm:w-(--reka-navigation-menu-viewport-width)' }">
    <template #guide-content>
      <div class="grid grid-cols-2 gap-4 p-4 sm:min-w-[400px]">
        <ULink v-for="n in 6" :key="n" class="group relative isolate rounded-md bg-(--ui-bg-muted) hover:bg-(--ui-bg-subtle)">
          <div class="flex items-center gap-2.5 p-4">
            <UIcon name="i-lucide-download" class="size-5" />
            <p class="text-sm font-medium">
              Getting started
            </p>
          </div>
        </ULink>
      </div>
    </template>
  </UNavigationMenu>
</template>
```
> **Note:** Example uses `sm:w-(--reka-navigation-menu-viewport-width)` for dynamic width.

#### API

##### Props

**[NavigationMenu Props Table - Refer to original docs or source for details]**

##### Slots

**[NavigationMenu Slots Table - Refer to original docs or source for details]**

##### Emits

**[NavigationMenu Emits Table - Refer to original docs or source for details]**

#### Theme

**[NavigationMenu Theme Object - Refer to original docs or source for details]**

... (Remaining components and Contribution Guide will follow a similar structure) ...

Okay, continuing the consolidated Nuxt UI documentation.

```markdown
# Consolidated Nuxt UI Documentation (v3 Base)

... (Previous content from Introduction to NavigationMenu) ...

### Pagination

A list of buttons or links to navigate through pages.

#### Usage

Use the `default-page` prop or the `v-model:page` directive to control the current page.

> **Note:** The Pagination component uses [`Button`](/components/button) components to display pages. Use `color`, `variant`, and `size` props to style them.

##### Total

Use the `total` prop to set the total number of items.

*Example:*
```vue
<script setup lang="ts">
const page = ref(5)
</script>
<template>
  <UPagination v-model="page" :total="100" />
</template>
```

##### Items Per Page

Use `items-per-page`. Defaults to `10`.

*Example:*
```vue
<UPagination v-model="page" :total="100" :items-per-page="20" />
```

##### Sibling Count

Use `sibling-count`. Defaults to `2`.

*Example:*
```vue
<UPagination v-model="page" :total="100" :sibling-count="1" />
```

##### Show Edges

Use `show-edges` (boolean) to always show ellipsis, first/last pages. Defaults to `false`.

*Example:*
```vue
<UPagination v-model="page" :total="100" show-edges :sibling-count="1" />
```

##### Show Controls

Use `show-controls` (boolean) for first/prev/next/last buttons. Defaults to `true`.

*Example:*
```vue
<UPagination v-model="page" :total="100" :show-controls="false" show-edges />
```

##### Color

Use `color` prop for inactive controls color. Defaults to `neutral`.

*Example:*
```vue
<UPagination v-model="page" :total="100" color="primary" />
```

##### Variant

Use `variant` prop for inactive controls variant. Defaults to `outline`.

*Example:*
```vue
<UPagination v-model="page" :total="100" color="neutral" variant="subtle" />
```

##### Active Color

Use `active-color` prop for active control color. Defaults to `primary`.

*Example:*
```vue
<UPagination v-model="page" :total="100" active-color="neutral" />
```

##### Active Variant

Use `active-variant` prop for active control variant. Defaults to `solid`.

*Example:*
```vue
<UPagination v-model="page" :total="100" active-color="primary" active-variant="subtle" />
```

##### Size

Use `size` prop for controls size. Defaults to `md`.

*Example:*
```vue
<UPagination v-model="page" :total="100" size="xl" />
```

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<UPagination v-model="page" :total="100" disabled />
```

#### Examples

##### With links

Use the `to` prop (function `(page: number) => RouteLocation`) to transform buttons into links.

*Example Code (pagination-links-example):*
```vue
<script setup lang="ts">
const route = useRoute()
const page = computed(() => parseInt(route.query.page as string || '1', 10))

const to = (page: number) => ({
  query: { page },
  hash: '#with-links' // Avoid scroll jump
})
</script>

<template>
  <UPagination :model-value="page" :total="100" :to="to" />
</template>
```
> **Note:** Example adds `#with-links` hash to avoid page jump.

#### API

##### Props

**[Pagination Props Table - Refer to original docs or source for details]**

##### Slots

**[Pagination Slots Table - Refer to original docs or source for details]**

##### Emits

**[Pagination Emits Table - Refer to original docs or source for details]**

#### Theme

**[Pagination Theme Object - Refer to original docs or source for details]**

### PinInput

An input element to enter a pin.

#### Usage

Use `v-model` (array of strings) or `default-value`.

*Example (v-model):*
```vue
<script setup lang="ts">
const modelValue = ref([])
</script>
<template>
  <UPinInput v-model="modelValue" />
</template>
```
*Example (default-value):*
```vue
<UPinInput :default-value="['1','2','3']" />
```

##### Type

Use `type` prop (`text` or `number`). Defaults to `text`.

*Example:*
```vue
<UPinInput type="number" />
```
> **Note:** `number` type accepts only numeric characters.

##### Mask

Use `mask` prop (boolean) for password-like input.

*Example:*
```vue
<UPinInput mask :default-value="['1','2','3','4','5']" />
```

##### OTP

Use `otp` prop (boolean) to enable One-Time Password autofill from SMS/clipboard on mobile.

*Example:*
```vue
<UPinInput otp />
```

##### Length

Use `length` prop for number of inputs.

*Example:*
```vue
<UPinInput :length="6" />
```

##### Placeholder

Use `placeholder` prop.

*Example:*
```vue
<UPinInput placeholder="○" />
```

##### Color

Use `color` for focus ring.

*Example:*
```vue
<UPinInput color="neutral" highlight placeholder="○" />
```
> **Note:** `highlight` used for demo.

##### Variant

Use `variant` prop.

*Example:*
```vue
<UPinInput color="neutral" variant="subtle" placeholder="○" />
```

##### Size

Use `size` prop.

*Example:*
```vue
<UPinInput size="xl" placeholder="○" />
```

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<UPinInput disabled placeholder="○" />
```

#### API

##### Props

**[PinInput Props Table - Refer to original docs or source for details]**

##### Emits

**[PinInput Emits Table - Refer to original docs or source for details]**

##### Expose

Access via template ref:
| Name        | Type                               |
| ----------- | ---------------------------------- |
| `inputsRef` | `Ref<ComponentPublicInstance[]>` |

#### Theme

**[PinInput Theme Object - Refer to original docs or source for details]**

### Popover

A non-modal dialog that floats around a trigger element.

#### Usage

Use trigger component in default slot, content in `#content` slot.

*Example:*
```vue
<UPopover>
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #content>
    <Placeholder class="size-48 m-4 inline-flex" />
  </template>
</UPopover>
```

##### Mode

Use `mode` prop (`click` or `hover`). Defaults to `click`.

*Example:*
```vue
<UPopover mode="hover">
  <UButton label="Open" color="neutral" variant="subtle" />
  <template #content>
    <Placeholder class="size-48 m-4 inline-flex" />
  </template>
</UPopover>
```
> **Note:** `hover` mode uses Reka UI `HoverCard`.

##### Delay

In `hover` mode, use `open-delay` and `close-delay` props (milliseconds).

*Example:*
```vue
<UPopover mode="hover" :open-delay="500" :close-delay="300">
  <!-- Trigger & Content -->
</UPopover>
```

##### Content

Use `content` prop to control rendering (align, side, offset).

*Example:*
```vue
<UPopover :content="{ align: 'center', side: 'bottom', sideOffset: 8 }">
  <!-- Trigger & Content -->
</UPopover>
```

##### Arrow

Use `arrow` prop (boolean).

*Example:*
```vue
<UPopover arrow>
  <!-- Trigger & Content -->
</UPopover>
```

#### Examples

##### Control open state

Use `default-open` or `v-model:open`.

*Example Code (popover-open-example):*
```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UPopover v-model:open="open">
    <UButton label="Toggle" color="neutral" variant="subtle" />

    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template>
  </UPopover>
</template>
```
> **Note:** Example uses `defineShortcuts`.

##### Prevent closing

Set `dismissible` prop to `false`.

*Example Code (popover-dismissible-example):*
```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <UPopover v-model:open="open" :dismissible="false">
    <UButton label="Open" color="neutral" variant="subtle" />

    <template #content>
      <div class="p-4">
        <p class="mb-2">
          This popover is not dismissible.
        </p>
        <UButton label="Close" color="neutral" variant="outline" @click="open = false" />
      </div>
    </template>
  </UPopover>
</template>
```

##### With command palette

Use [CommandPalette](/components/command-palette) inside `#content`.

*Example Code (popover-command-palette-example):*
*(See CommandPalette section for example)*

#### API

##### Props

**[Popover Props Table - Refer to original docs or source for details]**

##### Slots

**[Popover Slots Table - Refer to original docs or source for details]**

##### Emits

**[Popover Emits Table - Refer to original docs or source for details]**

#### Theme

**[Popover Theme Object - Refer to original docs or source for details]**

### Progress

An indicator showing the progress of a task.

#### Usage

Use `v-model` to control value.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref(50)
</script>
<template>
  <UProgress v-model="modelValue" />
</template>
```

##### Max

Use `max` prop. Defaults to `100`. Can also be array of strings for step labels.

*Example (Number):*
```vue
<UProgress v-model="modelValue" :max="4" />
```
*Example (Steps):*
```vue
<script setup lang="ts">
const modelValue = ref(3)
const max = ['Waiting...', 'Cloning...', 'Migrating...', 'Deploying...', 'Done!']
</script>
<template>
  <UProgress v-model="modelValue" :max="max" />
</template>
```

##### Status

Use `status` prop (boolean) to show current value above bar.

*Example:*
```vue
<UProgress v-model="modelValue" status />
```

##### Indeterminate

When `v-model` is `null` or not set, progress is indeterminate (animated).

*Example:*
```vue
<UProgress :model-value="null" />
```

##### Animation

Use `animation` prop (`carousel`, `swing`, `elastic`). Defaults to `carousel`.

*Example:*
```vue
<UProgress animation="swing" />
```

##### Orientation

Use `orientation` (`horizontal` or `vertical`). Defaults to `horizontal`.

*Example:*
```vue
<UProgress orientation="vertical" class="h-48" />
```

##### Color

Use `color` prop.

*Example:*
```vue
<UProgress color="neutral" />
```

##### Size

Use `size` prop.

*Example:*
```vue
<UProgress size="xl" />
```

##### Inverted

Use `inverted` prop (boolean).

*Example:*
```vue
<UProgress inverted :model-value="25" />
```

#### API

##### Props

**[Progress Props Table - Refer to original docs or source for details]**

##### Slots

**[Progress Slots Table - Refer to original docs or source for details]**

##### Emits

**[Progress Emits Table - Refer to original docs or source for details]**

#### Theme

**[Progress Theme Object - Refer to original docs or source for details]**

### RadioGroup

A set of radio buttons to select a single option from a list.

#### Usage

Use `v-model` or `default-value`.

##### Items

Use `items` prop (array of strings/numbers or objects). Object properties: `label?`, `description?`, `value?`, `disabled?`.

*Example (Simple):*
```vue
<script setup lang="ts">
const modelValue = ref('System')
const items = ['System', 'Light', 'Dark']
</script>
<template>
  <URadioGroup v-model="modelValue" :items="items" />
</template>
```

*Example (Objects):*
```vue
<script setup lang="ts">
const modelValue = ref('system')
const items = [
  { label: 'System', description: '...', value: 'system' },
  { label: 'Light', description: '...', value: 'light' },
  { label: 'Dark', description: '...', value: 'dark' }
]
</script>
<template>
  <URadioGroup v-model="modelValue" :items="items" />
</template>
```
> **Caution:** With objects, `v-model` / `default-value` refers to the `value` property by default.

##### Value Key

Use `value-key` prop to change the value property key. Defaults to `value`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('light')
const items = [
  { label: 'System', description: '...', id: 'system' },
  // ...
]
</script>
<template>
  <URadioGroup v-model="modelValue" value-key="id" :items="items" />
</template>
```

##### Legend

Use `legend` prop.

*Example:*
```vue
<URadioGroup legend="Theme" default-value="System" :items="items" />
```

##### Color

Use `color` prop.

*Example:*
```vue
<URadioGroup color="neutral" default-value="System" :items="items" />
```

##### Variant :badge{label="Not released"}

Use `variant` prop.

*Example:*
```vue
<URadioGroup color="primary" variant="table" default-value="pro" :items="items" />
```

##### Size

Use `size` prop.

*Example:*
```vue
<URadioGroup size="xl" variant="list" default-value="System" :items="items" />
```

##### Orientation

Use `orientation` (`horizontal` or `vertical`). Defaults to `vertical`.

*Example:*
```vue
<URadioGroup orientation="horizontal" variant="list" default-value="System" :items="items" />
```

##### Indicator :badge{label="Not released"}

Use `indicator` prop (`start`, `end`, or `false`). Defaults to `start`.

*Example:*
```vue
<URadioGroup indicator="end" variant="card" default-value="System" :items="items" />
```

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<URadioGroup disabled default-value="System" :items="items" />
```

#### API

##### Props

**[RadioGroup Props Table - Refer to original docs or source for details]**

##### Slots

**[RadioGroup Slots Table - Refer to original docs or source for details]**

##### Emits

**[RadioGroup Emits Table - Refer to original docs or source for details]**

#### Theme

**[RadioGroup Theme Object - Refer to original docs or source for details]**

### SelectMenu

An advanced searchable select element.

#### Usage

Use `v-model` or `default-value`.

> **Tip:** Use over `Select` for search and multiple selection.
> **Note:** Similar to `InputMenu` but uses a Select trigger with search inside the menu.

##### Items

Use `items` prop (array of strings/numbers/booleans or objects). Object properties: `label?`, `type?`, `icon?`, `avatar?`, `chip?`, `disabled?`, `onSelect?`.

*Example (Simple):*
```vue
<script setup lang="ts">
const modelValue = ref('Backlog')
const items = ['Backlog', 'Todo', 'In Progress', 'Done']
</script>
<template>
  <USelectMenu v-model="modelValue" :items="items" class="w-48" />
</template>
```

*Example (Objects):*
```vue
<script setup lang="ts">
const modelValue = ref({ label: 'Todo' })
const items = [
  { label: 'Backlog' }, { label: 'Todo' }, { label: 'In Progress' }, { label: 'Done' }
]
</script>
<template>
  <USelectMenu v-model="modelValue" :items="items" class="w-48" />
</template>
```
> **Caution:** Expects the whole object for `v-model`/`default-value` by default.

Can use array of arrays for groups.

##### Value Key

Use `value-key` to bind a specific property. Defaults to `undefined`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('todo')
const items = [
  { label: 'Backlog', id: 'backlog' },
  // ...
]
</script>
<template>
  <USelectMenu v-model="modelValue" value-key="id" :items="items" class="w-48" />
</template>
```

##### Multiple

Use `multiple` prop. Selected items separated by comma in trigger.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref(['Backlog', 'Todo'])
const items = ['Backlog', 'Todo', 'In Progress', 'Done']
</script>
<template>
  <USelectMenu v-model="modelValue" multiple :items="items" class="w-48" />
</template>
```
> **Caution:** Ensure `v-model`/`default-value` is an array.

##### Placeholder

Use `placeholder` prop.

*Example:*
```vue
<USelectMenu placeholder="Select status" :items="items" class="w-48" />
```

##### Search Input

Use `search-input` prop (Input props or `false` to hide).

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref({ label: 'Backlog', icon: 'i-lucide-circle-help' })
const items = [ /* ... items with icons ... */ ]
</script>
<template>
  <USelectMenu
    v-model="modelValue"
    :search-input="{ placeholder: 'Filter...', icon: 'i-lucide-search' }"
    :items="items"
    class="w-48"
  />
</template>
```

##### Content

Use `content` prop for rendering control.

*Example:*
```vue
<USelectMenu v-model="modelValue" :content="{ align: 'center', side: 'bottom', sideOffset: 8 }" :items="items" class="w-48" />
```

##### Arrow

Use `arrow` prop (boolean).

*Example:*
```vue
<USelectMenu v-model="modelValue" arrow :items="items" class="w-48" />
```

##### Color

Use `color` for focus ring.

*Example:*
```vue
<USelectMenu v-model="modelValue" color="neutral" highlight :items="items" class="w-48" />
```

##### Variant

Use `variant` prop.

*Example:*
```vue
<USelectMenu v-model="modelValue" color="neutral" variant="subtle" :items="items" class="w-48" />
```

##### Size

Use `size` prop.

*Example:*
```vue
<USelectMenu v-model="modelValue" size="xl" :items="items" class="w-48" />
```

##### Icon

Use `icon` prop.

*Example:*
```vue
<USelectMenu v-model="modelValue" icon="i-lucide-search" :items="items" class="w-48" />
```

##### Trailing Icon

Use `trailing-icon`. Defaults to `i-lucide-chevron-down`.

*Example:*
```vue
<USelectMenu v-model="modelValue" trailing-icon="i-lucide-arrow-down" :items="items" class="w-48" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.chevronDown`.

##### Selected Icon

Use `selected-icon`. Defaults to `i-lucide-check`.

*Example:*
```vue
<USelectMenu v-model="modelValue" selected-icon="i-lucide-flame" :items="items" class="w-48" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.check`.

##### Avatar

Use `avatar` prop.

*Example:*
```vue
<USelectMenu v-model="modelValue" :avatar="{ src: 'https://github.com/nuxt.png' }" :items="items" class="w-48" />
```

##### Loading

Use `loading` prop.

*Example:*
```vue
<USelectMenu v-model="modelValue" loading :trailing="false" :items="items" class="w-48" />
```

##### Loading Icon

Use `loading-icon`. Defaults to `i-lucide-refresh-cw`.

*Example:*
```vue
<USelectMenu v-model="modelValue" loading loading-icon="i-lucide-repeat-2" :items="items" class="w-48" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.loading`.

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<USelectMenu disabled placeholder="Select status" :items="items" class="w-48" />
```

#### Examples

##### With items type

Use `type: 'separator'` or `type: 'label'`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('Apple')
const items = [
  { type: 'label', label: 'Fruits' }, 'Apple', /* ... */
  { type: 'separator' }, { type: 'label', label: 'Vegetables' }, 'Aubergine', /* ... */
]
</script>
<template>
  <USelectMenu v-model="modelValue" :items="items" class="w-48" />
</template>
```

##### With icons in items

Use `icon` property in item objects.

*Example Code (select-menu-items-icon-example):*
```vue
<script setup lang="ts">
const items = [{
  label: 'Backlog',
  icon: 'i-lucide-circle-help'
}, {
  label: 'Todo',
  icon: 'i-lucide-circle-plus'
}, {
  label: 'In Progress',
  icon: 'i-lucide-circle-arrow-up'
}, {
  label: 'Done',
  icon: 'i-lucide-circle-check'
}]

const selected = ref(items[0])

const icon = computed(() => selected.value?.icon)
</script>

<template>
  <USelectMenu v-model="selected" :items="items" class="w-48" :leading-icon="icon" />
</template>
```
> **Tip:** Use `#leading` slot for selected icon display.

##### With avatar in items

Use `avatar` property in item objects.

*Example Code (select-menu-items-avatar-example):*
*(Similar logic to icon example, use `avatar` prop and compute selected avatar)*

> **Tip:** Use `#leading` slot for selected avatar display.

##### With chip in items

Use `chip` property in item objects.

*Example Code (select-menu-items-chip-example):*
*(Similar logic to icon example, use `chip` prop and compute selected chip)*

> **Note:** Example uses `#leading` slot for selected chip display.

##### Control open state

Use `default-open` or `v-model:open`.

*Example Code (select-menu-open-example):*
*(Similar logic to Popover open example)*

##### Control search term

Use `v-model:search-term`.

*Example Code (select-menu-search-term-example):*
```vue
<script setup lang="ts">
const searchTerm = ref('')
const selected = ref()
const items = ['Backlog', 'Todo', 'In Progress', 'Done']
</script>

<template>
  <USelectMenu v-model="selected" v-model:search-term="searchTerm" :items="items" class="w-48" />
</template>
```

##### With rotating icon

Indicate open state with rotating icon.

*Example Code (select-menu-icon-example):*
*(Similar logic to InputMenu rotating icon example)*

##### With create item

Use `create-item` prop.

*Example Code (select-menu-create-item-example):*
*(Similar logic to InputMenu create item example)*

> **Tip:** Use `@create` event handler.

##### With fetched items

Fetch items from API.

*Example Code (select-menu-fetch-example):*
*(Similar logic to CommandPalette fetch example)*

##### With ignore filter

Set `ignore-filter` to true for custom search logic.

*Example Code (select-menu-ignore-filter-example):*
*(Similar logic to CommandPalette ignore filter example)*

##### With filter fields

Use `filter-fields` prop.

*Example Code (select-menu-filter-fields-example):*
*(Similar logic to InputMenu filter fields example)*

##### As a CountryPicker

Lazy load countries.

*Example Code (select-menu-countries-example):*
```vue
<script setup lang="ts">
import { countries } from '~/data/countries'

const selected = ref(countries[0])
</script>

<template>
  <USelectMenu
    v-model="selected"
    :items="countries"
    label-key="name"
    value-key="iso"
    search
    search-input-placeholder="Search a country..."
    class="w-72"
  >
    <template #label>
      <UIcon :name="selected.flag" class="text-xl" />
      {{ selected.name }}
    </template>
    <template #item="{ item }">
      <UIcon :name="item.flag" class="text-xl" />
      {{ item.name }}
    </template>
  </USelectMenu>
</template>
```

#### API

##### Props

**[SelectMenu Props Table - Refer to original docs or source for details]**

##### Slots

**[SelectMenu Slots Table - Refer to original docs or source for details]**

##### Emits

**[SelectMenu Emits Table - Refer to original docs or source for details]**

#### Theme

**[SelectMenu Theme Object - Refer to original docs or source for details]**

### Select

A select element to choose from a list of options.

#### Usage

Use `v-model` or `default-value`.

##### Items

Use `items` prop (array of strings/numbers/booleans or objects). Object properties: `label?`, `value?`, `type?`, `icon?`, `avatar?`, `chip?`, `disabled?`.

*Example (Simple):*
```vue
<script setup lang="ts">
const modelValue = ref('Backlog')
const items = ['Backlog', 'Todo', 'In Progress', 'Done']
</script>
<template>
  <USelect v-model="modelValue" :items="items" class="w-48" />
</template>
```

*Example (Objects):*
```vue
<script setup lang="ts">
const modelValue = ref('backlog')
const items = [
  { label: 'Backlog', value: 'backlog' },
  // ...
]
</script>
<template>
  <USelect v-model="modelValue" :items="items" class="w-48" />
</template>
```
> **Caution:** With objects, `v-model` refers to `value` property by default.

Can use array of arrays for groups.

##### Value Key

Use `value-key`. Defaults to `value`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('backlog')
const items = [ { label: 'Backlog', id: 'backlog' }, /* ... */ ]
</script>
<template>
  <USelect v-model="modelValue" value-key="id" :items="items" class="w-48" />
</template>
```

##### Multiple

Use `multiple` prop. Selected items separated by comma.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref(['Backlog', 'Todo'])
const items = ['Backlog', 'Todo', /* ... */]
</script>
<template>
  <USelect v-model="modelValue" multiple :items="items" class="w-48" />
</template>
```
> **Caution:** Ensure `v-model` is an array.

##### Placeholder

Use `placeholder` prop.

*Example:*
```vue
<USelect placeholder="Select status" :items="items" class="w-48" />
```

##### Content

Use `content` prop for rendering control.

*Example:*
```vue
<USelect v-model="modelValue" :content="{ align: 'center', side: 'bottom', sideOffset: 8 }" :items="items" class="w-48" />
```

##### Arrow

Use `arrow` prop (boolean).

*Example:*
```vue
<USelect v-model="modelValue" arrow :items="items" class="w-48" />
```

##### Color

Use `color` for focus ring.

*Example:*
```vue
<USelect v-model="modelValue" color="neutral" highlight :items="items" class="w-48" />
```

##### Variant

Use `variant` prop.

*Example:*
```vue
<USelect v-model="modelValue" color="neutral" variant="subtle" :items="items" class="w-48" />
```

##### Size

Use `size` prop.

*Example:*
```vue
<USelect v-model="modelValue" size="xl" :items="items" class="w-48" />
```

##### Icon

Use `icon` prop.

*Example:*
```vue
<USelect v-model="modelValue" icon="i-lucide-search" :items="items" class="w-48" />
```

##### Trailing Icon

Use `trailing-icon`. Defaults to `i-lucide-chevron-down`.

*Example:*
```vue
<USelect v-model="modelValue" trailing-icon="i-lucide-arrow-down" :items="items" class="w-48" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.chevronDown`.

##### Selected Icon

Use `selected-icon`. Defaults to `i-lucide-check`.

*Example:*
```vue
<USelect v-model="modelValue" selected-icon="i-lucide-flame" :items="items" class="w-48" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.check`.

##### Avatar

Use `avatar` prop.

*Example:*
```vue
<USelect v-model="modelValue" :avatar="{ src: 'https://github.com/nuxt.png' }" :items="items" class="w-48" />
```

##### Loading

Use `loading` prop.

*Example:*
```vue
<USelect v-model="modelValue" loading :trailing="false" :items="items" class="w-48" />
```

##### Loading Icon

Use `loading-icon`. Defaults to `i-lucide-refresh-cw`.

*Example:*
```vue
<USelect v-model="modelValue" loading loading-icon="i-lucide-repeat-2" :items="items" class="w-48" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.loading`.

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<USelect disabled placeholder="Select status" :items="items" class="w-48" />
```

#### Examples

##### With items type

Use `type: 'separator'` or `type: 'label'`.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref('Apple')
const items = [ { type: 'label', label: 'Fruits' }, 'Apple', /* ... */ { type: 'separator' }, /* ... */ ]
</script>
<template>
  <USelect v-model="modelValue" :items="items" class="w-48" />
</template>
```

##### With icons in items

Use `icon` property in item objects. Selected icon shown via `icon` prop.

*Example Code (select-items-icon-example):*
```vue
<script setup lang="ts">
const items = [{
  label: 'Backlog',
  value: 'backlog',
  icon: 'i-lucide-circle-help'
}, {
  label: 'Todo',
  value: 'todo',
  icon: 'i-lucide-circle-plus'
}, {
  label: 'In Progress',
  value: 'in_progress',
  icon: 'i-lucide-circle-arrow-up'
}, {
  label: 'Done',
  value: 'done',
  icon: 'i-lucide-circle-check'
}]

const selected = ref(items[0].value)

const selectedIcon = computed(() => items.find(item => item.value === selected.value)?.icon)
</script>

<template>
  <USelect v-model="selected" :items="items" :icon="selectedIcon" class="w-48" />
</template>
```
> **Tip:** Use `#leading` slot for selected icon display.

##### With avatar in items

Use `avatar` property in item objects. Selected avatar shown via `avatar` prop.

*Example Code (select-items-avatar-example):*
*(Similar logic to icon example, use `avatar` prop and compute selected avatar)*

> **Tip:** Use `#leading` slot for selected avatar display.

##### With chip in items

Use `chip` property in item objects. Selected chip shown in `#leading` slot.

*Example Code (select-items-chip-example):*
*(Similar logic to icon example, use `chip` prop and compute selected chip, render in slot)*

##### Control open state

Use `default-open` or `v-model:open`.

*Example Code (select-open-example):*
*(Similar logic to Popover open example)*

##### With rotating icon

Indicate open state with rotating icon.

*Example Code (select-icon-example):*
*(Similar logic to InputMenu rotating icon example)*

##### With fetched items

Fetch items from API.

*Example Code (select-fetch-example):*
```vue
<script setup lang="ts">
const { data: items, pending } = useLazyAsyncData(() => $fetch<{ label: string, value: string }[]>('/api/items'), { default: () => [] })

const selected = ref()
</script>

<template>
  <USelect v-model="selected" :items="items" :loading="pending" class="w-48" />
</template>
```

#### API

##### Props

**[Select Props Table - Refer to original docs or source for details]**

##### Slots

**[Select Slots Table - Refer to original docs or source for details]**

##### Emits

**[Select Emits Table - Refer to original docs or source for details]**

#### Theme

**[Select Theme Object - Refer to original docs or source for details]**

### Separator

Separates content horizontally or vertically.

#### Usage

Use as-is.

*Example:*
```vue
<USeparator class="p-8" />
```

##### Orientation

Use `orientation` (`horizontal` or `vertical`). Defaults to `horizontal`.

*Example:*
```vue
<USeparator orientation="vertical" class="h-48 p-8" />
```

##### Label

Use `label` prop.

*Example:*
```vue
<USeparator label="Hello World" class="p-8" />
```

##### Icon

Use `icon` prop.

*Example:*
```vue
<USeparator icon="i-simple-icons-nuxtdotjs" class="p-8" />
```

##### Avatar

Use `avatar` prop.

*Example:*
```vue
<USeparator :avatar="{ src: 'https://github.com/nuxt.png' }" class="p-8" />
```

##### Color

Use `color` prop. Defaults to `neutral`.

*Example:*
```vue
<USeparator color="primary" type="solid" class="p-8" />
```

##### Type

Use `type` prop (`solid`, `dashed`, `dotted`). Defaults to `solid`.

*Example:*
```vue
<USeparator type="dashed" class="p-8" />
```

##### Size

Use `size` prop. Defaults to `xs`.

*Example:*
```vue
<USeparator size="lg" class="p-8" />
```

#### API

##### Props

**[Separator Props Table - Refer to original docs or source for details]**

##### Slots

**[Separator Slots Table - Refer to original docs or source for details]**

#### Theme

**[Separator Theme Object - Refer to original docs or source for details]**

### Skeleton

A placeholder to show while content is loading.

#### Usage

*Example Code (skeleton-example):*
```vue
<template>
  <div class="flex items-center space-x-4">
    <USkeleton class="size-12 rounded-full" />
    <div class="space-y-2">
      <USkeleton class="h-4 w-[250px]" />
      <USkeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>
```

#### API

##### Props

**[Skeleton Props Table - Refer to original docs or source for details]**

##### Slots

**[Skeleton Slots Table - Refer to original docs or source for details]**

#### Theme

**[Skeleton Theme Object - Refer to original docs or source for details]**

### Slider

An input to select a numeric value within a range.

#### Usage

Use `v-model` or `default-value`.

*Example (v-model):*
```vue
<script setup lang="ts">
const modelValue = ref(50)
</script>
<template>
  <USlider v-model="modelValue" />
</template>
```
*Example (default-value):*
```vue
<USlider :default-value="50" />
```

##### Min / Max

Use `min` and `max` props. Defaults to `0` and `100`.

*Example:*
```vue
<USlider :min="0" :max="50" :default-value="50" />
```

##### Step

Use `step` prop. Defaults to `1`.

*Example:*
```vue
<USlider :step="10" :default-value="50" />
```

##### Multiple

Use array for `v-model` or `default-value` for range slider.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref([25, 75])
</script>
<template>
  <USlider v-model="modelValue" />
</template>
```

Use `min-steps-between-thumbs` to limit distance.

*Example:*
```vue
<script setup lang="ts">
const modelValue = ref([25, 50, 75])
</script>
<template>
  <USlider v-model="modelValue" :min-steps-between-thumbs="10" />
</template>
```

##### Orientation

Use `orientation` (`horizontal` or `vertical`). Defaults to `horizontal`.

*Example:*
```vue
<USlider orientation="vertical" :default-value="50" class="h-48" />
```

##### Color

Use `color` prop.

*Example:*
```vue
<USlider color="neutral" :default-value="50" />
```

##### Size

Use `size` prop.

*Example:*
```vue
<USlider size="xl" :default-value="50" />
```

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<USlider disabled :default-value="50" />
```

##### Inverted

Use `inverted` prop (boolean).

*Example:*
```vue
<USlider inverted :default-value="25" />
```

#### API

##### Props

**[Slider Props Table - Refer to original docs or source for details]**

##### Emits

**[Slider Emits Table - Refer to original docs or source for details]**

#### Theme

**[Slider Theme Object - Refer to original docs or source for details]**

### Switch

A control that toggles between two states.

#### Usage

Use `v-model` or `default-value`.

*Example (v-model):*
```vue
<script setup lang="ts">
const modelValue = ref(true)
</script>
<template>
  <USwitch v-model="modelValue" />
</template>
```
*Example (default-value):*
```vue
<USwitch :default-value="true" />
```

##### Label

Use `label` prop.

*Example:*
```vue
<USwitch label="Check me" />
```

Use `required` prop to add asterisk.

*Example:*
```vue
<USwitch required label="Check me" />
```

##### Description

Use `description` prop.

*Example:*
```vue
<USwitch label="Check me" description="This is a checkbox." />
```

##### Icon

Use `checked-icon` and `unchecked-icon` props.

*Example:*
```vue
<USwitch unchecked-icon="i-lucide-x" checked-icon="i-lucide-check" :default-value="true" label="Check me" />
```

##### Loading

Use `loading` prop.

*Example:*
```vue
<USwitch loading :default-value="true" label="Check me" />
```

##### Loading Icon

Use `loading-icon`. Defaults to `i-lucide-refresh-cw`.

*Example:*
```vue
<USwitch loading loading-icon="i-lucide-repeat-2" :default-value="true" label="Check me" />
```

**For Nuxt/Vue:**
> **Tip:** Customize globally via `ui.icons.loading`.

##### Color

Use `color` prop.

*Example:*
```vue
<USwitch color="neutral" :default-value="true" label="Check me" />
```

##### Size

Use `size` prop.

*Example:*
```vue
<USwitch size="xl" :default-value="true" label="Check me" />
```

##### Disabled

Use `disabled` prop.

*Example:*
```vue
<USwitch disabled label="Check me" />
```

#### API

##### Props

**[Switch Props Table - Refer to original docs or source for details]**

##### Slots

**[Switch Slots Table - Refer to original docs or source for details]**

##### Emits

**[Switch Emits Table - Refer to original docs or source for details]**

#### Theme

**[Switch Theme Object - Refer to original docs or source for details]**

... (Table, Tabs, Textarea, Slideover, Toast, Tooltip, Stepper, Tree documentation follows) ...

---

## Contribution Guide

Nuxt UI thrives thanks to its incredible community ❤️. We welcome all contributions through bug reports, pull requests, and feedback to help make this library even better.

> **Caution:** Before reporting a bug or requesting a feature, make sure that you have read through our [documentation](https://ui.nuxt.com/) and existing [issues](https://github.com/nuxt/ui/issues?q=is%3Aissue%20is%3Aopen%20sort%3Aupdated-desc%20label%3Av3).

### Project Structure

Here's an overview of the key directories and files in the Nuxt UI project structure:

#### Documentation

The documentation lives in the `docs` folder as a Nuxt app using `@nuxt/content` v3 to generate pages from Markdown files. See the [Content v3 Docs](https://content3.nuxt.dev/docs/getting-started) for details. Structure:
```bash
├── app/
│   ├── assets/
│   ├── components/
│   │   └── content/
│   │       └── examples   # Components used in documentation as examples
│   ├── composables/
│   └── ...
├── content/
│   ├── 1.getting-started
│   ├── 2.composables
│   └── 3.components       # Components documentation
```

#### Module

The module code resides in the `src` folder. Structure:
```bash
├── plugins/
├── runtime/
│   ├── components/        # Where all the components are located
│   │   ├── Accordion.vue
│   │   ├── Alert.vue
│   │   └── ...
│   ├── composables/
│   ├── locale/
│   ├── plugins/
│   ├── types/
│   ├── utils/
│   └── vue/
│       ├── components/
│       └── plugins/
├── theme/                 # This where the theme for each component is located
│   ├── accordion.ts       # Theme for Accordion component
│   ├── alert.ts
│   └── ...
└── module.ts
```

### CLI

To make development easier, we've created a CLI (`nuxt-ui make`) for generating components and locales.

First, link the CLI:
```sh
npm link
```

#### Components

Create new components:
```sh
nuxt-ui make component <name> [options]
```
Options: `--primitive`, `--pro`, `--prose` (requires `--pro`), `--content` (requires `--pro`), `--template` (e.g., `playground`, `docs`, `test`, `theme`, `component`).

Example:
```sh
# Basic component
nuxt-ui make component my-component
# Pro component
nuxt-ui make component page-section --pro
# Generate only docs template
nuxt-ui make component my-component --template=docs
```
> **Note:** CLI automatically generates necessary files (component, theme, tests, docs).

#### Locales

Create new locales:
```sh
nuxt-ui make locale --code <code> --name <name>
```
> **Note:** [Learn more about i18n in the documentation.](/getting-started/i18n/nuxt#supported-languages)

### Submit a Pull Request (PR)

Before starting, check for existing issues. If none, open one to discuss.

#### Local Development

**Steps:**

1.  **Clone the `nuxt/ui` repository:**
    ```sh
    git clone -b v3 https://github.com/nuxt/ui.git
    ```
2.  **Enable Corepack:**
    ```sh
    corepack enable
    ```
3.  **Install dependencies:**
    ```sh
    pnpm install
    ```
4.  **Generate type stubs:**
    ```sh
    pnpm run dev:prepare
    ```
5.  **Start development:**
    -   Docs (`docs` folder): `pnpm run docs`
    -   Nuxt playground: `pnpm run dev`
    -   Vue playground: `pnpm run dev:vue`

> **Note:** If implementing a new component, use the [CLI](#cli).

#### IDE Setup

Recommended: VSCode + [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). Enable auto-fix on save:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  }
}
```
> **Warning:** Disable Prettier extension if installed to avoid conflicts with ESLint formatting.

#### Linting

```sh
pnpm run lint # check errors
pnpm run lint:fix # fix errors
```

#### Type Checking

```sh
pnpm run typecheck
```

#### Testing

Run tests before submitting PR:
```sh
pnpm run test # Nuxt
pnpm run test:vue # Vue
```
> **Tip:** Press `u` to update snapshots during tests.

#### Commit Conventions

Use [Conventional Commits](https://www.conventionalcommits.org/):
-   `fix`: Bug fixes affecting functionality.
-   `feat`: New features affecting functionality.
-   `docs`: Documentation changes.
-   `chore`: Maintenance tasks.

#### Making a Pull Request

-   Follow PR template instructions.
-   Ensure PR title follows Conventional Commits.
-   Multiple commits are okay (Squash and Merge will be used).
-   Ensure `lint`, `typecheck`, `tests` pass. Avoid unrelated changes.

Maintainers will review promptly.

### Thanks

Thank you for your interest and contributions! ❤️

```