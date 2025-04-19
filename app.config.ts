// app.config.ts
export default defineAppConfig({
    ui: {
      // Set your primary and gray colors (optional, defaults shown)
      // These should match the Tailwind color names you have configured
      colors: {
        primary: 'sky', // Example: 'blue', 'sky', etc.
        neutral: 'zinc', // Example: 'zinc', 'gray', etc.
      },
  
      // You can add global component overrides here if needed
      // Example for card:
      card: {
        // background: 'bg-white dark:bg-gray-900',
        // ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
        // divide: 'divide-y divide-gray-200 dark:divide-gray-800',
        // rounded: 'rounded-lg',
        // shadow: 'shadow',
        // body: {
        //   padding: 'px-4 py-5 sm:p-6'
        // },
        // header: {
        //   padding: 'px-4 py-5 sm:px-6'
        // },
        // footer: {
        //   padding: 'px-4 py-4 sm:px-6'
        // }
      },
       button: {
        // Define default variants for buttons if desired
        // defaultVariants: {
        //   color: 'primary',
        //   size: 'sm',
        //   variant: 'solid'
        // }
      },
      // ... other component overrides
    }
  })
  