import {withNavigationWatcher} from '../../../contexts/navigation';
import {
    BatchesArchivedPage,
    BatchesOpenPage,
    BatchesProcessedPage,
    CarrierPickUpsPage,
    EndOfDayPage,
    ReturnsPage,
    ShippedDeliveryExceptionsPage,
    ShippedDeliveredPage,
    ShippedInTransitPage,
    ShippedRecentPage,
    USPSPickUpsPage,
    ShippedVoidedPage
} from '../../../pages/Shipments/index';

const ShipmentsRoutes = [
    {
        path: '/shipments/shipped-recents',
        component: ShippedRecentPage
    },
    {
        path: '/shipments/shipped-intransit',
        component: ShippedInTransitPage
    },
    {
        path: '/shipments/shipped-delivered',
        component: ShippedDeliveredPage
    },
    {
        path: '/shipments/shipped-delivery-exceptions',
        component: ShippedDeliveryExceptionsPage
    }, 
    {
        path: '/shipments/shipped-voided',
        component: ShippedVoidedPage
    },
    {
        path: '/shipments/returns',
        component: ReturnsPage
    },
    {
        path: '/shipments/end-of-day',
        component: EndOfDayPage
    },
    {
        path: '/shipments/usps-pickups',
        component: USPSPickUpsPage   
    },
    {
        path: '/shipments/scheduled-pickups',
        component: CarrierPickUpsPage

    }, 
    {
        path: '/shipments/batches/open',
        component: BatchesOpenPage
    }, {
        path: '/shipments/batches/processes',
        component: BatchesProcessedPage
    },
    {
        path: '/shipments/batches/archived',
        component: BatchesArchivedPage
    }
];

export default ShipmentsRoutes.map(route => {
    return {
        ...route,
        component: withNavigationWatcher(route.component)
    };
});
