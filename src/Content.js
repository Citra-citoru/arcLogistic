import React, {useContext,useEffect,useCallback,useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Header, Footer} from './components';
import {SideNavInnerToolbar as SideNavBarLayout} from './layouts';
import appInfo from './app-info';
import ordersRoute from './components/top-navigation/orders/routes';
import shipmentsRoute from './components/top-navigation/shipments/routes';
import settingsRoute from './components/top-navigation/settings/routes';
import { NavbarContext } from './contexts/top-navigation';

export default function () {
    const menu = useContext(NavbarContext);
    console.log("menuID in content"+menu.menuID);
    const Routes = () => {
        switch(menu.menuID){
            case 'orders':
                return(
                    ordersRoute.map(({path, component}) => (<Route exact key={path} path={path} component={component}/>))
                );
            case 'shipments':
                return(
                    shipmentsRoute.map(({path, component}) => (<Route exact key={path} path={path} component={component}/>))
                );
            case 'settings':
                return(
                    settingsRoute.map(({path, component}) => (<Route exact key={path} path={path} component={component}/>))
                );
            default:
                return(
                    ordersRoute.map(({path, component}) => (<Route exact key={path} path={path} component={component}/>))
                );
        }
    }

    return (
        <React.Fragment>
            <SideNavBarLayout title={appInfo.title}>
                <Switch>
                    <Routes />
                </Switch>
                <Footer>
                    Copyright © 2020 {appInfo.title} Inc.
                    <br/>
                    All trademarks or registered trademarks are property of their respective owners.
                </Footer>
            </SideNavBarLayout>
        </React.Fragment>
    );
}
