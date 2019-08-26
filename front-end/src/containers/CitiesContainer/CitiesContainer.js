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
        user: {
            admin: Boolean,
            email: '',
            image_url: '',
            username: ''
        },
        cities: [],
        defaultCity: {
            id: 1,
            name: 'Chicago',
            image: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'
        },
        posts: [],
        cityAsProp: {},
        title: '',
        content: '',

    };

    componentDidMount() {
        if (this.props.cityName) {
            return this.sendCityProp();
        };
        this.getCities();
        this.getCurrentUserData();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cityName !== this.props.cityName) {
            this.sendCityProp();
            this.getCities();
        };
    };

    sendCityProp = () => {
        this.state.cities.forEach(city => {
            if (city.slug === this.props.cityName) {
                this.setState({ cityAsProp: city })
            };
        });
    };


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleEdit = event => {
        event.preventDefault();
        // editPost();
    }
    handleDelete = event => {
        event.preventDefault();
        this.deletePost();
        this.props.history.push(`/cities/${this.state.cityAsProp.slug}`);
    }


    // API Calls via Axios
    getCurrentUserData = () => {
        axios.get(`${API_URL}/users/${this.props.currentUser}`)
            .then(response => {
                this.setState({
                    user: {
                        admin: response.data.data.admin,
                        email: response.data.data.email,
                        image_url: response.data.data.image_url,
                        username: response.data.data.username
                    }
                })

            })
            .catch(error => console.log(error.response));
    }

    getCities = () => {
        axios.get(`${API_URL}/cities`)
            .then(response => {
                this.setState({ cities: response.data })
            })
            .catch(error => console.log(error));
    }

    submitPost = event => {
        event.preventDefault();
        axios.post(`${API_URL}/posts/`, {
            username: this.state.user.username,
            city_slug: this.props.cityName,
            title: this.state.title,
            content: this.state.content
        }, { withCredentials: true })
            .then(res => {
                this.getCities()
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    deletePost = event => {
        event.preventDefault();
        axios.delete(`${API_URL}/posts/${this.props.deletePost}`)
            .then(response => this.getCities())
            .catch(error => console.log(error.response));

    }

    render() {
        console.log(this.props)
        return (
            <div className="cities-container">
                {this.props.deletePost
                    && <div>
                        <Link to='/cities'> <button>Cancel</button> </Link>
                        <button onClick={this.deletePost}>Delete</button>
                    </div>}
                <div className="aside">
                    <Aside cities={this.state.cities} />
                </div>
                <div className="city-posts">

                    {this.props.cityName
                        ? <CityPosts
                            currentUser={this.props.currentUser}
                            name={this.state.cityAsProp.name}
                            image={this.state.cityAsProp.image}
                            posts={this.state.cityAsProp.posts}
                            slug={this.state.cityAsProp.slug}
                            postImage={this.state.user.image_url}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
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
                            <label>Title</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                            <label>Content</label>
                            <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                            <button onClick={this.submitPost}>Submit</button>
                        </form>
                    </div>
                }
            </div>
        );
    };
};

export default CitiesContainer