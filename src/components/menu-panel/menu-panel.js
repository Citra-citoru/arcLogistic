import React, { useMemo } from 'react';
import './menu-panel.scss';
import { useHistory } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import Home from '../../pages/home/home';
import Button from 'devextreme-react/button';
export default function ({ menuMode }) {
return (
<React.Fragment>
 <ul className="nav">
     <li>Onboard</li>
     <li>Insights</li>
     <li><Link className="link" to="/awaitingpayments">Orders</Link></li>
     <li>Shipment</li>
 </ul> 
  <Switch>
  <Route exact path="/home" component={Home} />
</Switch>
</React.Fragment> 
)
}
