import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// internal components
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PostContainer from "../containers/PostContainer/PostContainer";
import Home from '../pages/Home/Home';





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
            <Route path='/login' render={(props) => <Home {...props} login={props.match.path} setCurrentUser={setCurrentUser} {...history} />} />
            <Route path='/register' render={(props) => <Home {...props} register={props.match.path} />} />
            <Route path="/post/:id" render={(props) => <PostContainer {...props} id={props.match.params.id} />} />
            <Route path="/cities/:city_name" render={(props) => <CitiesContainer {...props} cityName={props.match.params.city_name} />} />
            <Route path="/cities" component={CitiesContainer} />

            <PrivateRoute path="/add_post" render={(props) => <CitiesContainer {...props} addPost={true} />} />
            <PrivateRoute path="/profile" render={(props) => <ProfileContainer {...props} user_id={props.match.params.user_id} />} />

        </Switch>
    );
};
export default withRouter(Routes);
