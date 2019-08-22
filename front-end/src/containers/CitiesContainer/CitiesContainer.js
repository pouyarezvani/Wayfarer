import React, { Component } from 'react';
// internal components
import Aside from '../../components/Aside/Aside';
import CityPosts from '../../components/CityPosts/CityPosts';
// styles
import './CitiesContainer.css'

class CitiesContainer extends Component {
    state = {
        posts: [],
        users: [{
            username: 'Pouya',
            city: 'San Francisco',
        }]
    }

    render() {
        return (
            <div className="cities-container">
                <div className="aside">
                    <Aside />
                </div>
                <div className="city-posts">
                    <CityPosts posts={this.state.posts} />
                </div>

            </div>
        )
    }
}

export default CitiesContainer