import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// internal components
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PostContainer from "../containers/PostContainer/PostContainer";
import Home from '../pages/Home/Home';

import Register from '../components/Auth/Register/Register';
import Login from '../components/Auth/Login/Login';



const Routes = ({ setCurrentUser, history, currentUser }) => {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            currentUser
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    );

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' render={(props) => <Home {...props} login={props.match.path} />} />
            <Route path="/post/:id" render={(props) => <PostContainer {...props} id={props.match.params.id} />} />
            <Route path="/cities/:city_name" render={(props) => <CitiesContainer {...props} cityName={props.match.params.city_name} />} />
            <Route path="/cities" component={CitiesContainer} />
            <Route path="/profile" component={ProfileContainer} />
        </Switch>
    );
};
export default withRouter(Routes);
