import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            name: 'Chicago',
            image: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'
        },
        posts: [],
        cityAsProp: {},
        newPost: {
            title: '',
            content: ''
        }
    };

    componentDidMount() {
        if (this.props.cityName) {
            return this.sendCityProp();
        };
        this.getCities();
        this.setState({ displayPosts: true });
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

    // API Calls via Axios
    getCities = () => {
        axios.get(`${API_URL}/cities`)
            .then(response => {
                this.setState({ cities: response.data })
            })
            .catch(error => console.log(error));
    }

    submitPost = event => {
        event.preventDefault();
        axios.post(`${API_URL}/posts`, {
            username: '',
            city_slug: this.cityAsProp.slug,
            title: this.state.newPost.postTitle,
            content: this.state.newPost.content
        })
            .then(res => console.log(res));
    }


    render() {
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
                            posts={this.state.cityAsProp.posts}
                            slug={this.state.cityAsProp.slug}
                            cities={this.state.cities}
                            users={this.state.users}
                        />
                        : <CityPosts
                            name={this.state.defaultCity.name}
                            image={this.state.defaultCity.image}
                            posts={this.state.posts} />}
                </div>
                {this.props.addPost
                    && <div className="add-post">
                        <Link to='/cities'>x</Link>
                        <form>
                            <label>Name</label>
                            <input type="text" />
                            <label>Content</label>
                            <input type="text" />
                        </form>
                    </div>
                }

            </div>
        );
    };
};

export default CitiesContainer