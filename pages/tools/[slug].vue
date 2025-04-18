<script setup lang="ts">
const route = useRoute()
const { data: tool } = await useAsyncData(route.path, () => {
  return queryCollection('tools').path(route.path).first()
})
</script>

<template>
  <div v-if="tool">
    <UContainer>
      <UCard>
        <template #header>
          <UAvatar
            :src="tool.image"
            :alt="tool.title"
            size="xl"
            class="mb-4"
          />
          <h1 class="text-2xl font-bold">{{ tool.title }}</h1>
          <p class="text-gray-500 dark:text-gray-400">{{ tool.description }}</p>
          
          <div class="flex gap-2 mt-2">
            <UBadge
              v-for="tag in tool.tags"
              :key="tag"
              variant="subtle"
            >
              {{ tag }}
            </UBadge>
          </div>
        </template>

        <Prose :value="tool" />
      </UCard>
    </UContainer>
  </div>
</template>