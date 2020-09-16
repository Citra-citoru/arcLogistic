export const ShipmentsNavigation = [
    {
        text: 'Shipped',
        icon: 'box',
        items: [
            {
                text: 'Recents',
                path: '/shipments/shipped-recents'
            },
            {
                text: 'In Transit',
                path: '/shipments/shipped-intransit'
            },
            {
                text: 'Delivered',
                path: '/shipments/shipped-delivered'
            },
            {
                text: 'Delivery Exceptions',
                path: '/shipments/shipped-delivery-exceptions'
            },
            {
                text: 'Voided',
                path: '/shipments/shipped-voided'
            }
        ]
    },
    {
        text: 'Returns',
        icon: 'undo',
        path: '/shipments/returns'
    }, {
        text: 'End Of Day',
        icon: 'repeat',
        path: '/shipments/end-of-day'
    }, {
        text: 'USPS Pickups',
        icon: 'car',
        path: '/shipments/usps-pickups'
    }, {
        text: 'Carrier Pickups',
        icon: 'cart',
        path: '/shipments/scheduled-pickups'
    }, {
        text: 'Batches',
        icon: 'bulletlist',
        items: [
            {
                text: 'Open',
                path: '/shipments/batches/open'
            },
            {
                text: 'Processed',
                path: '/shipments/batches/processes'
            },
            {
                text: 'Archived',
                path: '/shipments/batches/archived'
            }
        ]
    }
];
