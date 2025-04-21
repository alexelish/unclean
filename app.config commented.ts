export default defineAppConfig({
  ui: {
    navigationMenu: {
      slots: {
        root: 'relative flex gap-1.5 [&>div]:min-w-0',
        list: 'isolate min-w-0',
        // label: Not used (only for groups `type: 'label'`)
        item: 'min-w-0',
        link: 'group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
        linkLeadingIcon: 'shrink-0 size-5',
        // linkLeadingAvatar: Not used
        // linkTrailing: Not used (badge etc.)
        // linkTrailingBadge: Not used
        linkTrailingIcon: 'size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200', // Used for the dropdown arrow icon
        linkLabel: 'truncate',
        // linkLabelExternalIcon: Not used (no external links shown)
        childList: '', // Base class for child list container
        childItem: '', // Base class for child item container
        childLink: 'group size-full px-3 py-2 rounded-md flex items-start gap-2 text-start', // Style for links within the dropdown
        childLinkWrapper: 'flex flex-col items-start', // Wrapper around child link content
        childLinkIcon: 'size-5 shrink-0', // Icon within child link
        childLinkLabel: 'font-semibold text-sm relative inline-flex', // Label within child link
        // childLinkLabelExternalIcon: Not used
        childLinkDescription: 'text-sm text-(--ui-text-muted)', // Description within child link
        // separator: Not used (only for vertical groups)
        viewportWrapper: 'absolute top-full left-0 flex w-full', // Wrapper for the dropdown viewport
        viewport: 'relative overflow-hidden bg-(--ui-bg) shadow-lg rounded-md ring ring-(--ui-border) h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]', // The dropdown panel itself
        content: 'absolute top-0 left-0 w-full sm:w-auto', // Content area within the viewport
        // indicator: Not used (only with highlight=true)
        // arrow: Not used (only with arrow=true)
      },
      variants: {
        // Only need 'primary' as it's the default and you haven't changed it
        color: {
          primary: {
            link: 'focus-visible:before:ring-(--ui-primary)',
            childLink: 'focus-visible:outline-(--ui-primary)'
          },
          // Other colors removed
        },
        // highlightColor is irrelevant as highlight=false
        highlightColor: {
           primary: '' // Keep structure, but no styles needed
           // Other colors removed
        },
        // Only need 'pill' as it's the default and you haven't changed it
        variant: {
          pill: '',
          // link variant removed
        },
        // Only need 'horizontal' as it's the default and you haven't changed it
        orientation: {
          horizontal: {
            root: 'items-center justify-between',
            list: 'flex items-center',
            item: 'py-2',
            link: 'px-2.5 py-1.5 before:inset-x-px before:inset-y-0',
            childList: 'grid p-2' // Default for horizontal is grid
          },
          // vertical orientation removed
        },
        // Only need 'horizontal' content orientation (default)
        contentOrientation: {
          horizontal: {
            viewportWrapper: 'justify-center', // How the dropdown is positioned horizontally
            content: 'data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]' // Default animations
          },
          // vertical content orientation removed
        },
        // Need styles for active and inactive states
        active: {
          true: {
            // Styles for active child links (when parent is active, children are shown, but links themselves aren't "active" in the same way)
            // These primarily apply to the *child* links when shown. The parent 'active' state is handled by compound variants.
             childLink: 'bg-(--ui-bg-elevated) text-(--ui-text-highlighted)', // Example active style for child
             childLinkIcon: 'text-(--ui-text)'
          },
          false: {
            // Styles for inactive top-level links
            link: 'text-(--ui-text-muted)',
            linkLeadingIcon: 'text-(--ui-text-dimmed)',
            // Styles for inactive child links (hover states)
            childLink: [
              'hover:bg-(--ui-bg-elevated)/50 text-(--ui-text) hover:text-(--ui-text-highlighted)',
              'transition-colors'
            ],
            childLinkIcon: [
              'text-(--ui-text-dimmed) group-hover:text-(--ui-text)',
              'transition-colors'
            ]
          }
        },
        // disabled: Not used
        // highlight: Not used (highlight=false)
        // level: Not used (related to vertical highlight)
        // collapsed: Not used (related to vertical)
      },
      // Keep only compound variants relevant to:
      // orientation: horizontal, variant: pill, color: primary, highlight: false, active: true/false, disabled: false
      compoundVariants: [
        // Defines grid layout for children when main orientation is horizontal and content is horizontal
        {
          orientation: 'horizontal',
          contentOrientation: 'horizontal',
          class: {
            childList: 'grid-cols-2 gap-2' // You might adjust this if you want a different layout
          }
        },
         // Styles for non-disabled, inactive, pill variant links (hover effects)
        {
          disabled: false,
          active: false,
          variant: 'pill',
          class: {
            link: [
              'hover:text-(--ui-text-highlighted) hover:before:bg-(--ui-bg-elevated)/50',
              'transition-colors before:transition-colors'
            ],
            linkLeadingIcon: [
              'group-hover:text-(--ui-text)',
              'transition-colors'
            ]
          }
        },
        // Styles for non-disabled, inactive, pill variant links when dropdown is open (horizontal)
        {
          disabled: false,
          active: false,
          variant: 'pill',
          orientation: 'horizontal',
          class: {
            link: 'data-[state=open]:text-(--ui-text-highlighted)',
            linkLeadingIcon: 'group-data-[state=open]:text-(--ui-text)'
          }
        },
        // Styles for non-disabled, inactive, pill variant, non-highlighted links when dropdown is open (horizontal)
        // This applies the background when opened even if not active/highlighted
        {
          disabled: false,
          variant: 'pill',
          highlight: false, // Your case
          active: false,
          orientation: 'horizontal',
          class: {
            link: 'data-[state=open]:before:bg-(--ui-bg-elevated)/50'
          }
        },
        // Styles for active primary pill links
        {
          color: 'primary',
          variant: 'pill',
          active: true,
          class: {
            link: 'text-(--ui-primary)',
            linkLeadingIcon: 'text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)'
          }
        },
        // Styles for active pill links when highlight is off (adds background)
        {
          variant: 'pill',
          active: true,
          highlight: false, // Your case
          class: {
            link: 'before:bg-(--ui-bg-elevated)' // Background for the active pill
          }
        },
        // Other compound variants removed (for link variant, other colors, highlight=true, vertical orientation, disabled=true etc.)
      ],
      // Define the defaults you are relying on
      defaultVariants: {
        color: 'primary',
        highlightColor: 'primary', // Still need a default even if unused
        variant: 'pill'
      }
    }
  }
})

