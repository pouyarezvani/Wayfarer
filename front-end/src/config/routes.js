import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// internal components
import CitiesContainer from '../containers/CitiesContainer'
import Home from '../pages/Home/Home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cities" component={CitiesContainer} />
        </Switch>
    )
}
export default withRouter(Routes);
