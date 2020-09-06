import {withNavigationWatcher} from './contexts/navigation';
import {
    AwaitingPaymentPage,
    OnHoldPage,
    ShippedPage,
    AwaitingShipmentPage,
    OrderedAlertPage,
    CanceledPage,
    ProfilePage
} from './pages';

const routes = [
    {
        path: '/',
        component: AwaitingPaymentPage
    },
    {
        path: '/awaiting-payment',
        component: AwaitingPaymentPage
    }, {
        path: '/onhold',
        component: OnHoldPage
    }, {
        path: '/awaiting-shipment',
        component: AwaitingShipmentPage
    }, {
        path: '/shipped',
        component: ShippedPage
    }, {
        path: '/ordered-alert',
        component: OrderedAlertPage
    }, {
        path: '/cancelled',
        component: CanceledPage
    }, {
        path: '/profile',
        component: ProfilePage
    }
];

export default routes.map(route => {
    return {
        ...route,
        component: withNavigationWatcher(route.component)
    };
});
