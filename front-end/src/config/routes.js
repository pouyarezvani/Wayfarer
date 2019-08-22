import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// internal components
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PostContainer from '../containers/PostContainer/PostContainer';
import Home from '../pages/Home/Home';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cities/:id" render={(props) => <PostContainer {...props} id={props.match.params.id} />} />
            <Route path="/cities/:name" render={(props) => <CitiesContainer {...props} name={props.match.params.name} />} />
            <Route path="/cities" component={CitiesContainer} />
            <Route path="/profile" component={ProfileContainer} />
        </Switch>
    )
}
export default Routes;
