import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    tools: defineCollection({
      source: 'tools/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional()
      })
    })
  }
})