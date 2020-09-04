import { withNavigationWatcher } from './contexts/navigation';
import { AwaitingPaymentPages, OnHoldPage, ShippedPage, AwaitingShipmentPage, OrderedAlertPage, CanceledPage, ProfilePage } from './pages';

const routes = [
  {
    path: '/awaitingpayments',
    component: AwaitingPaymentPages
  },
  {
    path: '/onhold',
    component: OnHoldPage
  },
  { 
    path: '/awaitingshipment',
    component:AwaitingShipmentPage
  },
  {
    path: '/shipped',
    component: ShippedPage
  },
  {
    path: '/orderedalert',
    component: OrderedAlertPage
  },
  {
    path: '/cancelled',
    component: CanceledPage
  },
  {
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
