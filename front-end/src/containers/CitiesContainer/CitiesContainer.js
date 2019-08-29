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
        user: {},
        cities: [],
        posts: [],
        cityAsProp: {},
        title: '',
        content: '',
        deletedPost: []
    };

    componentDidMount() {
        if (this.props.cityName) {
            return this.setCityProp();
        };
        this.getCities();
        this.getCurrentUserData();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cityName !== this.props.cityName) {
            this.setCityProp();
            this.getCities();
        };
        if (prevState.cityAsProp !== this.state.cityAsProp) {
            this.getCities();
        };
    };

    setCityProp = () => {
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
    }
    handleDelete = (event, id) => {
        event.preventDefault();
        this.deletePost(event, id);
        this.getCities();
    }


    // API Calls via Axios
    getCurrentUserData = () => {
        axios.get(`${API_URL}/users/${this.props.currentUser}`)
            .then(response => {
                this.setState({ user: response.data.data });
            })
            .catch(error => console.log(error.response));
    }

    getCities = () => {
        axios.get(`${API_URL}/cities`)
            .then(response => {
                this.setState({ cities: response.data })
                this.setState({ posts: this.state.cityAsProp.posts})
            })
            .catch(error => console.log(error));
    }

    submitPost = event => {
        event.preventDefault();
        const currentPosts = this.state.posts;
        axios.post(`${API_URL}/posts/`, {
            username: this.state.user.username,
            city_slug: this.props.cityName,
            title: this.state.title,
            content: this.state.content
        }, { withCredentials: true })
            .then(res => {
                currentPosts.push(res.data.data);
                this.setState({ posts: currentPosts });
                this.getCities();
                this.props.goBack();
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    deletePost = (event, id) => {
        // event.preventDefault();
        axios.delete(`${API_URL}/posts/${id}`)
            .then(response => {
                let updatedPosts = this.state.cityAsProp.posts.filter(post => post._id !== id);
                this.setState({ posts: updatedPosts})
                this.getCities();
                this.props.goBack();
            })
            .catch(error => console.log(error.response));

    }

    render() {
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

                    {this.props.cityName &&
                        <CityPosts
                            currentUser={this.props.currentUser}
                            cityAsProp={this.state.cityAsProp}
                            posts={this.state.posts}
                            postImage={this.state.user.image_url}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            refreshPosts={this.refreshPosts}
                        />
                    }
                </div>

                {this.props.addPost
                    && <div className="add-post">
                        <Link onClick={() => this.props.goBack()}>x</Link>
                        <form>
                            <label>Title</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                            <label>Content</label>
                            <input id="add-post-content" type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                            <button onClick={this.submitPost}>Submit</button>
                        </form>
                    </div>
                }
            </div>
        );
    };
};

export default CitiesContainer