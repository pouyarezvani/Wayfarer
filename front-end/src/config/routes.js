import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// internal components
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import CityPosts from '../components/CityPosts/CityPosts'
import Home from '../pages/Home/Home';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cities/:name" render={(props) => <CitiesContainer {...props} name={props.match.params.name} />} />
            <Route path="/cities" component={CitiesContainer} />
            <Route path="/profile" component={ProfileContainer} />
        </Switch>
    )
}
export default Routes;
