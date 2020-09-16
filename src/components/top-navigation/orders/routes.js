import {withNavigationWatcher} from '../../../contexts/navigation';
import {
    AwaitingPaymentPage,
    OnHoldPage,
    ShippedPage,
    AwaitingShipmentPage,
    OrderedAlertPage,
    CanceledPage
} from '../../../pages/Orders';

const OrdersRoutes = [
    {
        path: '/orders/awaiting-payment',
        component: AwaitingPaymentPage
    }, {
        path: '/orders/onhold',
        component: OnHoldPage
    }, {
        path: '/orders/awaiting-shipment',
        component: AwaitingShipmentPage
    }, {
        path: '/orders/shipped',
        component: ShippedPage
    }, {
        path: '/orders/ordered-alert',
        component: OrderedAlertPage
    }, {
        path: '/orders/cancelled',
        component: CanceledPage
    }
];

export default OrdersRoutes.map(route => {
    return {
        ...route,
        component: withNavigationWatcher(route.component)
    };
});
