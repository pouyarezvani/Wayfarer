import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// internal components
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import Home from '../pages/Home/Home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cities" component={CitiesContainer} />
            <Route path="/profile" component={ProfileContainer} />
        </Switch>
    )
}
export default withRouter(Routes);
