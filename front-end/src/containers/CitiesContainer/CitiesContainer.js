import React, { Component } from 'react';
import axios from 'axios';
// internal components
import Aside from '../../components/Aside/Aside';
import CityPosts from '../../components/CityPosts/CityPosts';
import { API_URL } from '../../constants';
// styles
import './CitiesContainer.css'

class CitiesContainer extends Component {
    state = {
        users: [],
        cities: [],
        defaultCity: {
            id: 1,
            name: 'San Francisco',
            image: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'
        },
        posts: [],
        cityAsProp: {},
    };

    componentDidMount() {
        if (this.props.cityName) {
            return this.sendCityProp();
        };
        this.getCities();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cityName !== this.props.cityName) {
            this.sendCityProp();
        };
    };

    sendCityProp = () => {
        this.state.cities.forEach(city => {
            if (city.slug === this.props.cityName) {
                this.setState({ cityAsProp: city })
            };
        });
    };

    getCities = () => {
        axios.get(`${API_URL}/cities`)
            .then(response => {
                console.log(response)
                this.setState({ cities: response.data.cities })
            })
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.cities)
        return (
            <div className="cities-container">
                <div className="aside">
                    <Aside cities={this.state.cities} />
                </div>
                <div className="city-posts">
                    {this.props.cityName
                        ? <CityPosts
                            name={this.state.cityAsProp.name}
                            image={this.state.cityAsProp.image}
                            posts={this.state.posts}
                            cities={this.state.cities}
                            users={this.state.users}
                        />
                        : <CityPosts
                            name={this.state.defaultCity.name}
                            image={this.state.defaultCity.image}
                            posts={this.state.posts} />}
                </div>
            </div>
        );
    };
};

export default CitiesContainer