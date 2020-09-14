import React, {useContext,useEffect,useCallback,useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Header, Footer} from './components';
import {SideNavInnerToolbar as SideNavBarLayout} from './layouts';
import appInfo from './app-info';
import ordersRoute from './components/top-navigation/orders/routes';
import shipmentsRoute from './components/top-navigation/shipments/routes';
import { NavbarContext } from './contexts/top-navigation';

export default function () {
    const menu = useContext(NavbarContext);
    console.log("menuID in content"+menu.menuID);
    return (
        <React.Fragment>
            <SideNavBarLayout title={appInfo.title}>
                <Switch>
                { menu.menuID === 'orders'?
                    ordersRoute.map(({path, component}) => (<Route exact key={path} path={path} component={component}/>))
                    : shipmentsRoute.map(({path, component}) => (<Route exact key={path} path={path} component={component}/>))
                }
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
