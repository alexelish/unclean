<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Tools',
    icon: 'i-lucide-book-open',
    active: true,
    to: '/',
    children: [
      {
        label: 'All Traffic Tools',
        description: 'Traffic Directory home - best tools for entrepreneur and traffic professionals',
        icon: 'i-lucide-house',
        to: '/'
      },
      {
        label: 'Ads Platforms',
        description: 'Best traffic sources',
        icon: 'i-lucide-cloud-download',
        to: '/'
      },
      {
        label: 'Traffic Trackers',
        icon: 'i-lucide-smile',
        description: 'Track your campaigns',
        to: '/'
      },
      {
        label: 'Anti-bot platforms',
        icon: 'i-lucide-swatch-book',
        description: 'Never pay for Bots',
        to: '/'
      },
      {
        label: 'Add your tool',
        icon: 'i-lucide-cog',
        description: 'You got a tool or platform you feel is a match for us?',
        to: '/'
      }
    ]
  },
  {
    label: 'What we do',
    icon: 'i-lucide-database',
    to: '/',
    active: false,
    children: [
      {
        label: 'Portfolio',
        icon: 'i-lucide-file-text',
        description: 'Websites and Apps we built',
        to: '/'
      },
      {
        label: 'Services',
        icon: 'i-lucide-file-text',
        description: 'Need to build stuff? We could be a great match for you.',
        to: '/'
      },
      {
        label: 'Sell in ChatGPT, Claude, Perplexity, and Future LLMs.',
        icon: 'i-lucide-file-text',
        description: 'LLM Marketing Service',
        to: '/'
      }
    ]
  },
  {
    label: 'About',
    icon: 'i-lucide-box',
    to: '/',
    active: false,
    children: [
      {
        label: 'About Elish Team',
        icon: 'i-lucide-file-text',
        description: 'Alex and Anastasia - 2 person dev squad',
        to: '/'
      },
      {
        label: 'About Traffic Tools Directory',
        icon: 'i-lucide-file-text',
        description: 'Why traffic? Best next step for Elish clients of course!',
        to: '/'
      },
      {
        label: 'Our Tech - Webflow and Nuxt',
        icon: 'i-lucide-file-text',
        description: 'Why we choose Webflow and Nuxt for our projects',
        to: '/'
      },
      {
        label: 'Get in touch',
        icon: 'i-lucide-file-text',
        description: 'Tell what your project needs, we can serve your goals',
        to: '/'
      }
    ]
  }
])
</script>


<template>
  <UApp>
    <div class="flex items-center justify-center w-full mx-auto">
      <UNavigationMenu trailing-icon="i-lucide-arrow-down" :items="items" class="w-1/2 flex justify-center" />
      <div class="ml-4"> <!-- Add space between the menu and the color switch -->
        <UColorModeSwitch />
      </div>
    </div>
    <NuxtPage />
  </UApp>
</template>
