@formkit/auto-animate/nuxt
-------------

Vue users install the Nuxt module. This makes adding transitions and animations as easy as applying an attribute. Register the plugin with your Vue app:

`// nuxt.config.ts export default defineNuxtConfig({ modules: ['@formkit/auto-animate/nuxt'], })`


Once you've registered the plugin, it can be applied anywhere in your application by adding the `v-auto-animate` directive to the parent element:

App.vue

`<script setup> import { ref } from 'vue' const items = ref(["😏","😐","😑","😒","😕", ... ]) function removeItem(toRemove) { items.value = items.value.filter((item) => item !== toRemove) } </script> <template> <h5>Click emojis to remove them.</h5> <ul v-auto-animate> <li v-for="item in items" :key="item" @click="removeItem(item)" > {{ item }} </li> </ul> </template>`

-   Vue

Click emojis to remove them.

-   😏
-   😐
-   😑
-   😒
-   😕
-   😖
-   😗
-   😘
-   😙
-   😚
-   😛
-   😜
-   😟
-   😠
-   😦
-   😨
-   😬
-   😭
-   😮
-   😰
-   😴
-   😵
-   😶

Please bare in mind that the value passed to `:key` should be a unique value, otherwise animation will not work as expected.

Vue users can pass options by directly setting the directive's value `<ul v-auto-animate="{ duration: 100 }">`

### Vue composable

As an alternative to the `v-auto-animate` directive, Vue devs can use the `useAutoAnimate` composable. This composable supports all the same great features, but also provides a mechanism to [enable and disable](https://auto-animate.formkit.com/usage-disable) animations.

Nuxt module will automatically import `useAutoAnimate` for you, you call it in `script setup` to create a [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs). Use the `ref` attribute on your parent element to store it in the template ref:

App.vue

`<script setup> import { ref } from 'vue' import { useAutoAnimate } from '@formkit/auto-animate/vue' const items = ref(["React", "Vue", "Svelte", "Angular"]) function sortAsc() { items.value.sort() } function sortDesc() { items.value.sort().reverse() } const [parent] = useAutoAnimate() </script> <template> <div> <button @click="sortAsc">Sort A-Z ↑</button> <button @click="sortDesc">Sort Z-A ↓</button> </div> <ul ref="parent"> <li v-for="item in items" :key="item" > {{ item }} </li> </ul> </template>`

-   Vue

Sort A-Z ↑Sort Z-A ↓

-   Angular
-   React
-   Solid
-   Svelte
-   Vue

Vue users can pass options directly to the composable:\
`useAutoAnimate({ duration: 100 })`