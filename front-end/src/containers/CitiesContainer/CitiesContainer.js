import React, { Component } from 'react';
// internal components
import Aside from '../../components/Aside/Aside';
import CityPosts from '../../components/CityPosts/CityPosts';
// styles
import './CitiesContainer.css'

class CitiesContainer extends Component {
    state = {
        users: [],
        cities: [],
        posts: [],
        cityAsProp: {},
    };

    componentDidMount() {
        if (this.props.cityName) {
            return this.sendCityProp();
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cityName !== this.props.cityName) {
            this.sendCityProp();
        };
    };

    sendCityProp = () => {
        this.state.cities.forEach(city => {
            if (city.cityName === this.props.cityName) {
                this.setState({ cityAsProp: city })
            };
        });
    };

    render() {
        return (
            <div className="cities-container">
                <div className="aside">
                    <Aside cities={this.state.cities} />
                </div>
                <div className="city-posts">
                    {this.props.cityName
                        ? <CityPosts
                            name={this.state.cityAsProp.cityName}
                            image={this.state.cityAsProp.imageUrl}
                            posts={this.state.posts}
                            cities={this.state.cities}
                            users={this.state.users}
                        />
                        : <CityPosts
                            name={this.state.cities[0].cityName}
                            image={this.state.cities[0].imageUrl}
                            posts={this.state.posts} />}
                </div>
            </div>
        );
    };
};

export default CitiesContainer