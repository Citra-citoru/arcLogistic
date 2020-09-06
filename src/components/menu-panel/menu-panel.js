import React, {useMemo} from 'react';
import './menu-panel.scss';
import {useHistory, Link, Route, Switch, NavLink} from "react-router-dom";
import Button from 'devextreme-react/button';


export default function ({menuMode}) {
    return (
        <React.Fragment>
            <ul className="nav">
                <li>Onboard</li>
                <li>Insights</li>
                <li>
                    <NavLink className="link" to="/awaiting-payment" activeClassName="navlink-active">Orders</NavLink>
                </li>
                <li>Shipment</li>
                <li>Products</li>
                <li>Customers</li>
                <li>Scans</li>
            </ul>
            <Switch></Switch>
        </React.Fragment>
    )
}
