<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('tools').path(route.path).first()
})
if (page.value?.ogImage) {
  defineOgImage(page.value.ogImage)
}
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>