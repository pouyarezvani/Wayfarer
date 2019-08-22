import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CityPosts from '../components/CityPosts/CityPosts'

const cityContainerRoutes = () => {
    return (
        <Switch>
            <Route path="/cities" component={CityPosts} />
        </Switch>
    )
}

export default cityContainerRoutes;
