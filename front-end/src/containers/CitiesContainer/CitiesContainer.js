import React, { Component } from 'react';
// internal components
import Aside from '../../components/Aside/Aside';
import CityPosts from '../../components/CityPosts/CityPosts';
// styles
import './CitiesContainer.css'

class CitiesContainer extends Component {
    render() {
        return (
            <div className="cities-container">
                <div className="aside">
                    <Aside />
                </div>
                <div className="city-posts">
                    <CityPosts />
                </div>

            </div>
        )
    }
}

export default CitiesContainer