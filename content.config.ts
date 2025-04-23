import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { asOgImageCollection } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
    tools: defineCollection(
      asOgImageCollection(
        asSitemapCollection({
          source: 'tools/*.md',
          type: 'page',
          schema: z.object({
            title: z.string(),
            description: z.string(),
            tags: z.array(z.string()),
            image: z.string().optional()
          })
        })
      )
    )
  }
})