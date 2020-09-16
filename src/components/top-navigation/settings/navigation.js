export const SettingsNavigation = [
  {
    text: 'Account',
    icon: 'user',
    items: [
        {
            text: '👨🏻‍💼 My Profile',
            path: '/settings/my-profile'
        },
        {
            text: '🖥️ Display Options',
            path: '/settings/display-options'
        },
        {
            text: '💼 Subscriptions',
            path: '/settings/subscription-plans'
        },
        {
            text: '⛮ User Management',
            path: '/settings/users'
        },
        {
            text: '🔗 API Settings',
            path: '/settings/api'
        },
        {
            text: '⏳ Workflow Settings',
            path: '/settings/workflow'
        }
        ],
    },
    {
        text: 'Selling Channels',
        icon: 'cart',
        items: [
          {
            text: '🏪 Store Setup',
            path: '/settings/stores'
          }
        ]
    },
    {
        text: 'Automation',
        icon: 'refresh',
        items: [
          {
            text: '🗑️ Order Filters',
            path: '/settings/filters'
          },
          {
            text: '📏 Automation Rules',
            path: '/settings/automationrules'
          }
        ]
    },
    {
        text: 'Shipping',
        icon: 'box',
        items: [
          {
            text: '📍 Ships From Locations',
            path: '/settings/warehouses'
          },
          {
            text: '⛟ Carriers and Fullfillment',
            path: '/settings/providers'
          },
          {
            text: '📦 Packages',
            path: '/settings/packages'
          },
          {
            text: '⬅️ Returns',
            path: '/settings/returns'
          },
          {
            text: '🌐 International Settings',
            path: '/settings/international'
          }
        ]
    },
    {
        text: 'Printing',
        icon: 'print',
        items: [
            {
                text: '🖨️ Printing Set Up',
                path: '/settings/printing'
            },
            {
                text: '🔌 Ship Station Connect',
                path: '/settings/connect'
            },
        ]
    },
    {
        text: 'Templates',
        icon: 'message',
        items: [
            {
                text: '✉️ Email Templates',
                path: '/settings/emailtemplates'
            },
            {
                text: '📦 Packing Slips',
                path: '/settings/packingslips'
            }
        ]
    },
    {
        text: 'Inventory Management',
        icon: 'selectall',
        items: [
            {
                text: '⚙️ Inventory Settings',
                path: '/settings/inventorysettings'
            },
            {
                text: '🔖 Allocation Strategy',
                path: '/settings/allocationstrategy'
            },
            {
                text: '🏚️ Inventory Warehouses',
                path: '/settings/inventorywarehouses'
            }
        ]
    },
    {
        text: 'Integrations',
        icon: 'smalliconslayout',
        items: [
            {
                text: '🎎 Integration Partners',
                path: '/settings/integrations'
            }
        ]
     },
     {
        text: 'Branded Customer Pages',
        icon: 'group',
        items: [
            {
                text: '🥇 Branding Defaults',
                path: '/settings/trackingpages'
            }
        ]
     }

];
