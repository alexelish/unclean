<script setup lang="ts">
defineOgImageComponent('NuxtSeo', {
  title: 'Traffic Tools Directory 👋',
  description: 'Elish Team - Kick-ass developers with Webflow And Nuxt',
  headline: 'Elish Team',
  theme: '#ff0000',
  colorMode: 'dark',
})

// Get all tools with selected fields
const { data: tools } = await useAsyncData('tools-list', () => {
  return queryCollection('tools')
    .select('title', 'path', 'description', 'tags', 'image')
    .all()
})

// State for active tag filter
const activeTag = useState<string | null>('active-tag', () => null)

// Filter tools by active tag - no errors by Alex and GPT
const filteredTools = computed(() => {
  if (!tools.value) return []

  const tag = activeTag.value
  if (!tag) return tools.value

  return tools.value.filter(tool =>
    tool.tags?.includes(tag)
  )
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
  <UContainer class="text-center py-8 px-4">
    <!-- Header Section -->
    <UCard>
    <template #header>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Traffic Tools Directory by Elish Team
        </h1>
    </template>
    <div class="text-center py-6 px-4 sm:px-6">
        
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Discover our collection of big-moneys-ROI, website-leads-getting-getting tools. And build your next project with Elish team.
        </p>
      </div>

    <template #footer>
      <p class="text-center font-bold tracking-tight text-gray-100 dark:text-white sm:text-xl">
          Or Alex will haunt your dreams!
      </p>
    </template>
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
        :color="activeTag === tag ? 'secondary' : undefined"
        :variant="activeTag === tag ? 'outline' : undefined"
        size="md"
        @click="activeTag = activeTag === tag ? null : tag"
/>
         <UButton
          v-if="activeTag"
          icon="i-heroicons-x-mark-20-solid"
          size="md"
          color="secondary"
          variant="outline"
          label="Clear filter"
          @click="activeTag = null"
        />
      </div>
    </UCard>

    <!-- Tools Grid Section -->
    <div v-if="filteredTools && filteredTools.length">

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Tool Card -->
        <UCard
          v-for="tool in filteredTools"
          :key="tool.path"
          class="flex flex-col"
          :ui="{
            body: 'p-4 flex-grow',
            header: 'p-4 pb-0',
            footer: 'p-4 pt-0'
            }"
        >
          <template #header>
            <NuxtLink :to="tool.path" class="focus:outline-none">
              <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-white truncate hover:text-primary-600 dark:hover:text-primary-400">
                {{ tool.title }}
              </h3>
            </NuxtLink>
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
                color="secondary"
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
          color="secondary"
          variant="solid"
          label="Clear Filter"
          @click="activeTag = null"
        />
      </div>
    </div>
  </UContainer>
</template>