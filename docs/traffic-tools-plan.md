# Plan for Traffic Tools Content Structure

This document outlines the plan for structuring the content for the new "traffic tools" directory within the Nuxt Content project, based on the project requirements and Nuxt Content documentation.

## 1. Folder Structure

- A new directory will be created at the project root: `content/`.
- Inside `content/`, a subdirectory will be created specifically for the traffic tools: `content/tools/`.
- Each individual traffic tool will be represented by a separate markdown file within the `content/tools/` directory (e.g., `content/tools/tool-name.md`).

## 2. Configuration File (`content.config.ts`)

- To leverage the benefits of collections, such as type inference and better querying, a `content.config.ts` file will be created at the project root.
- This file will define a collection specifically for the traffic tools.

## 3. Collection and Schema Definition

- Within `content.config.ts`, a collection named `tools` will be defined.
- The `source` for this collection will be set to `'tools/*.md'` to include all markdown files within the `content/tools/` directory.
- A schema will be defined for the frontmatter of each tool markdown file using `zod`, as recommended by the Nuxt Content documentation. This schema will ensure a consistent structure for the data needed to display the tool cards and detail pages.

```typescript
// content.config.ts
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod' // Assuming zod is available or will be installed if needed

export default defineContentConfig({
  collections: {
    tools: defineCollection({
      source: 'tools/*.md',
      type: 'page', // Each tool will be a separate page
      schema: z.object({
        title: z.string(), // Title of the tool
        description: z.string(), // Short description for cards and detail page
        tags: z.array(z.string()), // Array of tags for sorting/filtering
        image: z.string().optional() // Optional image path for the card/detail page
      })
    })
  }
})
```

## 4. Individual Tool Markdown Files

- Each markdown file in `content/tools/` will start with frontmatter that adheres to the defined schema.
- The content below the frontmatter will be the detailed information for the specific tool.

```markdown
---
title: "Example Traffic Tool"
description: "A brief description of the example tool."
tags: ["example", "traffic", "utility"]
image: "/images/example-tool-icon.png"
---

# Example Traffic Tool

This section contains the detailed content about the example traffic tool. You can include headings, paragraphs, lists, code blocks, etc.
```

## File Structure Diagram

```mermaid
graph LR
    A[Project Root] --> B(content/)
    B --> C(tools/)
    C --> D(tool-1.md)
    C --> E(tool-2.md)
    C --> F(...)
    A --> G(content.config.ts)