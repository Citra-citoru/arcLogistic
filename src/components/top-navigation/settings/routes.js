import {withNavigationWatcher} from '../../../contexts/navigation';
import {
    MyProfilePage,
    DisplayOptionsPage,
    SubscriptionPage,
    UserManagementPage,
    ApiSettingsPage,
    WorkflowSettingsPage,
    StoreSetupPage,
    OrderFiltersPage,
    AutomationRulesPage,
    ShipFromLocationPage,
    CarrierAndFullfillmentPage,
    PackagesPage,
    ReturnsPage,
    InternationalSettingsPage,
    PrintingSetupPage,
    ShipStationConnectPage,
    EmailTemplatePage,
    packingSlipsPage,
    InventorySettingsPage,
    AllocationStrategyPage,
    InventoryWareHousePage,
    IntegrationPartnersPage,
    BrandedCustomerPage
} from '../../../pages/settings/index';

const SettingsRoutes = [
    {
        path: '/settings/my-profile',
        component: MyProfilePage
    },
    {
        path: '/settings/display-options',
        component: DisplayOptionsPage
    },
    {
        path: '/settings/subscription-plans',
        component: SubscriptionPage
    },
    {
        path: '/settings/users',
        component: UserManagementPage
    },
    {
        path: '/settings/api',
        component: ApiSettingsPage
    },
    {
        path: '/settings/workflow',
        component: WorkflowSettingsPage
    },
    {
        path: '/settings/stores',
        component: StoreSetupPage
    },
    {
        path: '/settings/filters',
        component: OrderFiltersPage
    },
    {
        path: '/settings/automationrules',
        component: AutomationRulesPage
    },
    {
        path: '/settings/warehouses',
        component: ShipFromLocationPage
    },
    {
        path: '/settings/providers',
        component: CarrierAndFullfillmentPage
    },
    {
        path: '/settings/packages',
        component: PackagesPage
    },
    {
        path: '/settings/returns',
        component: ReturnsPage
    },
    {
        path: '/settings/international',
        component: InternationalSettingsPage
    },
    {
        path: '/settings/printing',
        component: PrintingSetupPage
    },
    {
        path: '/settings/connect',
        component: ShipStationConnectPage
    },
    {
        path: '/settings/emailtemplates',
        component: EmailTemplatePage
    },
    {
        path: '/settings/packingslips',
        component: packingSlipsPage
    },
    {
        path: '/settings/inventorysettings',
        component: InventorySettingsPage
    },
    {
        path: '/settings/allocationstrategy',
        component: AllocationStrategyPage
    },
    {
        path: '/settings/inventorywarehouses',
        component: InventoryWareHousePage
    },
    {
        path: '/settings/integrations',
        component: IntegrationPartnersPage
    },
    {
        path: '/settings/trackingpages',
        component: BrandedCustomerPage
    }
];

export default SettingsRoutes.map(route => {
    return {
        ...route,
        component: withNavigationWatcher(route.component)
    };
});
