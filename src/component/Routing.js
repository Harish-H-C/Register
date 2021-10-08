import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Signin from './Signin';
import Register from './Register';
import Dashboard from '../AWSDashboards/Dashboard';
import Detaildashboard from '../AWSDashboards/DetailDashboard';
import TouchDownReport from '../AWSDashboards/TouchDownReport';
import CardDetails from '../AWSDashboards/CardDetails';
import Deviation from '../AWSDashboards/Deviation';
import SensorHealth from '../AWSDashboards/SensorHealth';
import CardIndDisplay from '../AWSDashboards/CardIndDisplay';
import AppointmentChart from '../AWSDashboards/Charts/AppMismatch';
import DurationChart from '../AWSDashboards/Charts/DurationMismatch';
import NotBilledChart from '../AWSDashboards/Charts/NotBilled';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path = "/" component={Home}></Route>
            <Route path = "/signin" component={Signin}></Route>
            <Route path = "/register" component={Register}></Route>
            <Route path = "/dashboard" component={Dashboard}></Route>
            <Route path = "/detail/dashboard" component={Detaildashboard}></Route>
            <Route path = "/detail/touchdown" component={TouchDownReport}></Route>
            <Route path = "/detail/card" component={CardDetails}></Route>
            <Route path = "/detail/deviation" component={Deviation}></Route>
            <Route path = "/detail/sensor" component={SensorHealth}></Route>
            <Route path = "/individual" component={CardIndDisplay}></Route>
            <Route path = "/appntmismatch" component={AppointmentChart}></Route>
            <Route path = "/durmismatch" component={DurationChart}></Route>
            <Route path = "/notbilled" component={NotBilledChart}></Route>
        </BrowserRouter>
    )
}

export default Routing;

/*
<Route path = "/appntmismatch" component={CardIndDisplay}></Route>
            <Route path = "/durmismatch" component={CardIndDisplay}></Route>
            <Route path = "/notbilled" component={CardIndDisplay}></Route>
*/