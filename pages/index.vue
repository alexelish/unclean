<script setup lang="ts">
// Get all tools with selected fields
const { data: tools } = await useAsyncData('tools-list', () => {
  return queryCollection('tools')
    .select('title', 'path', 'description', 'tags', 'image')
    .all()
})

// State for active tag filter
const activeTag = useState('active-tag', () => null)

// Filter tools by active tag
const filteredTools = computed(() => {
  if (!tools.value) return []
  if (!activeTag.value) return tools.value
  return tools.value.filter(tool =>
    tool.tags?.includes(activeTag.value)
  ) || []
})

// Get all unique tags from tools
const allTags = computed(() => {
  const tags = new Set<string>()
  tools.value?.forEach(tool => {
    tool.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})
</script>

<template>
  <UContainer class="py-8 px-4">
    <!-- Header Section -->
    <UCard
      class="mb-8"
      :ui="{
        background: 'bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-950', // Adjusted dark gradient slightly
        body: { padding: 'p-0 sm:p-0' } // Remove base padding if using inner div
      }"
    >
      <div class="text-center py-6 px-4 sm:px-6">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Traffic Tools
        </h1>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Discover and utilize our collection of traffic analysis tools.
        </p>
      </div>
    </UCard>

    <!-- Tag Filter Card -->
    <UCard class="mb-8">
      <template #header>
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Filter by Tags
        </h3>
      </template>
      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="tag in allTags"
          :key="tag"
          :label="tag"
          :color="activeTag === tag ? 'primary' : 'gray'"
          :variant="activeTag === tag ? 'solid' : 'outline'"
          size="sm"
          @click="activeTag = activeTag === tag ? null : tag"
        />
         <UButton
          v-if="activeTag"
          icon="i-heroicons-x-mark-20-solid"
          color="gray"
          variant="ghost"
          size="sm"
          aria-label="Clear filter"
          @click="activeTag = null"
        />
      </div>
    </UCard>

    <!-- Tools Grid Section -->
    <div v-if="filteredTools && filteredTools.length">
      <UDivider label="Available Tools" class="my-6" />

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Tool Card -->
        <UCard
          v-for="tool in filteredTools"
          :key="tool.path"
          class="flex flex-col"
          :ui="{
            base: 'h-full hover:ring-1 hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow hover:shadow-md',
            body: { padding: 'p-4', base: 'flex-grow' }, // Makes body take available space
            header: { padding: 'p-4 pb-0' },
            footer: { padding: 'p-4 pt-0' }
          }"
        >
          <template #header>
            <NuxtLink :to="tool.path" class="focus:outline-none">
              <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-white truncate hover:text-primary-600 dark:hover:text-primary-400">
                {{ tool.title }}
              </h3>
            </NuxtLink>
            <UDivider class="mt-3 mb-0" />
          </template>

          <!-- Card Body Content -->
          <div class="space-y-3">
             <!-- Image -->
             <div v-if="tool.image" class="aspect-video -mx-4 -mt-4 mb-3 overflow-hidden rounded-t-md">
               <img
                 :src="tool.image"
                 :alt="`Preview of ${tool.title}`"
                 class="w-full h-full object-cover"
                 loading="lazy"
               >
             </div>
            <!-- Description -->
            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {{ tool.description }}
            </p>
            <!-- Tags -->
            <div v-if="tool.tags && tool.tags.length" class="flex flex-wrap gap-1.5">
              <UBadge
                v-for="tag in tool.tags"
                :key="tag"
                variant="subtle"
                color="gray"
                size="xs"
                class="font-medium"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>

          <template #footer>
             <!-- Explore Button -->
             <div class="mt-auto pt-4"> <!-- Push footer content down -->
              <NuxtLink :to="tool.path" class="focus:outline-none">
                <UButton
                  label="Explore Tool"
                  color="primary"
                  variant="link"
                  icon="i-heroicons-arrow-right-20-solid"
                  trailing
                  :padded="false"
                />
              </NuxtLink>
            </div>
          </template>
        </UCard>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <UIcon name="i-heroicons-circle-stack" class="mx-auto size-12 text-gray-400 dark:text-gray-500" aria-hidden="true" />
      <h3 class="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
        No tools found
      </h3>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        No tools match the selected tag "{{ activeTag }}".
      </p>
      <div class="mt-6">
        <UButton
          color="white"
          variant="solid"
          label="Clear Filter"
          @click="activeTag = null"
        />
      </div>
    </div>
  </UContainer>
</template>