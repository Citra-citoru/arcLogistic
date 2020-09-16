export const OrdersNavigation = [
    {
        text: 'Awaiting Payment',
        icon: 'money',
        items: [
            {
                text: 'Manual Orders',
                path: '/orders/awaiting-payment'
            }
        ]
    }, {
        text: 'On Hold',
        icon: 'save',
        items: [
            {
                text: 'Manual Orders',
                path: '/orders/onhold'
            }
        ]
    }, {
        text: 'Awaiting Shipment',
        icon: 'box',
        items: [
            {
                text: 'Manual Orders',
                path: '/orders/awaiting-shipment'
            }
        ]
    }, {
        text: 'Shipped',
        icon: 'gift',
        items: [
            {
                text: 'Manual Orders',
                path: '/orders/shipped'
            }
        ]
    }, {
        text: 'Cancelled',
        icon: 'close',
        items: [
            {
                text: 'Manual Orders',
                path: '/orders/cancelled'
            }
        ]
    }, {
        text: 'Ordered Alert',
        icon: 'warning',
        items: [
            {
                text: 'Manual Orders',
                path: '/orders/ordered-alert'
            }
        ]
    }
];
