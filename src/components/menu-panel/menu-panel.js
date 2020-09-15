import React, { useContext }from 'react';
import './menu-panel.scss';
import {Switch, Route, Redirect,NavLink, Link } from 'react-router-dom';
import Button from 'devextreme-react/button';
import {NavbarContext} from '../../contexts/top-navigation';

export default function () {
    const menu = useContext(NavbarContext);
    return (
        <React.Fragment>
            <ul className="nav">
                <li><NavLink className="link" to="/onboards" activeClassName="navlink-active">Onboard</NavLink></li>
                <li><NavLink className="link" to="/dashboard" activeClassName="navlink-active">Insight</NavLink></li>
                <li>
                    <NavLink onClick={e=>menu.setMenuID("orders")} className="link" to="/orders/awaiting-payment" activeClassName="navlink-active">Orders</NavLink>
                </li>
                <li><NavLink onClick={e=>menu.setMenuID("shipments")} className="link" to="/shipments/shipped-recents" activeClassName="navlink-active">Shipments</NavLink></li>
                <li><NavLink className="link" to="/products" activeClassName="navlink-active">products</NavLink></li>
                <li><NavLink className="link" to="/customers" activeClassName="navlink-active">Customers</NavLink></li>
                <li><NavLink className="link" to="/scan" activeClassName="navlink-active">Scans</NavLink></li>
            </ul>
        </React.Fragment>
    )
}
