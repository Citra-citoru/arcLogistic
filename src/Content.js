import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Header, Footer} from './components';
import {SideNavInnerToolbar as SideNavBarLayout} from './layouts';
import appInfo from './app-info';
import routes from './app-routes';
export default function () {
    return (
        <React.Fragment>
            <SideNavBarLayout title={appInfo.title}>
                <Switch>
                    {routes.map(({path, component}) => (<Route exact key={path} path={path} component={component}/>))}
                </Switch>
                <Footer>
                    Copyright © 2020 {appInfo.title}
                    Inc.
                    <br/>
                    All trademarks or registered trademarks are property of their respective owners.
                </Footer>
            </SideNavBarLayout>
        </React.Fragment>
    );
}
