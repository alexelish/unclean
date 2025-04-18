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
    <!-- Header section with nice gradient background -->
    <UCard class="mb-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
      <div class="text-center py-4">
        <h1 class="text-3xl font-extrabold mb-2 text-primary-600 dark:text-primary-400">Traffic Tools</h1>
        <p class="text-gray-600 dark:text-gray-300">Discover and utilize our collection of traffic analysis tools</p>
      </div>
    </UCard>
    
    <!-- Tag Filter in a nice card -->
    <UCard class="mb-8">
      <template #header>
        <div class="flex items-center">
          <h2 class="text-lg font-medium">Filter by Tags</h2>
        </div>
      </template>
      <div class="flex gap-2 flex-wrap">
        <!-- Fixed filter buttons using UButton instead of UChip -->
        <UButton 
          v-for="tag in allTags" 
          :key="tag"
          :label="tag"
          :color="activeTag === tag ? 'primary' : 'gray'"
          :variant="activeTag === tag ? 'soft' : 'ghost'"
          size="sm"
          @click="activeTag = activeTag === tag ? null : tag"
        />
      </div>
    </UCard>

    <!-- Tools Grid with improved styling -->
    <div v-if="filteredTools && filteredTools.length">
      <UDivider class="my-6" label="Available Tools" />
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="tool in filteredTools"
          :key="tool.path"
          class="h-full transition-all hover:shadow-lg"
          :ui="{ body: { padding: 'p-4' }, header: { padding: 'pb-0 px-4 pt-4' } }"
        >
          <template #header>
            <NuxtLink :to="tool.path" class="no-underline">
              <div class="pb-3 border-b border-gray-100 dark:border-gray-800">
                <h2 class="text-xl font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">
                  {{ tool.title }}
                </h2>
              </div>
            </NuxtLink>
          </template>

          <div class="space-y-4 pt-2">
            <!-- Tool image if available -->
            <div v-if="tool.image" class="aspect-video rounded-md overflow-hidden">
              <img :src="tool.image" :alt="tool.title" class="w-full h-full object-cover">
            </div>
            
            <p class="text-gray-700 dark:text-gray-300">{{ tool.description }}</p>
            
            <div v-if="tool.tags && tool.tags.length" class="flex gap-1.5 flex-wrap">
              <UBadge
                v-for="tag in tool.tags"
                :key="tag"
                variant="subtle"
                color="gray"
                size="xs"
                class="font-normal"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
          
          <template #footer>
            <NuxtLink :to="tool.path" class="no-underline">
              <UButton
                color="primary"
                variant="ghost"
                icon="i-heroicons-arrow-right"
                trailing
                block
              >
                Explore Tool
              </UButton>
            </NuxtLink>
          </template>
        </UCard>
      </div>
    </div>
    
    <!-- Empty state with illustration -->
    <div v-else class="text-center py-12">
      <UIcon name="i-heroicons-folder-open" class="text-gray-400 mx-auto h-16 w-16 mb-4" />
      <h3 class="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No tools found</h3>
      <p class="text-gray-500 dark:text-gray-400">
        Try selecting a different tag or clear your filter
      </p>
      <UButton 
        v-if="activeTag" 
        color="gray" 
        variant="soft" 
        class="mt-4"
        @click="activeTag = null"
      >
        Clear Filter
      </UButton>
    </div>
  </UContainer>
</template>