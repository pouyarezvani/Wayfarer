import React, { Component } from 'react';
// internal components
import NavBar from './components/NavBar/NavBar';
import Routes from './config/routes'
import './App.css';
import { withRouter } from 'react-router-dom';
import { API_URL } from './constants';
import axios from 'axios';

class App extends Component {
    state = {
        currentUser: localStorage.getItem('uid'),
    };

    setCurrentUser = (userId) => {
        localStorage.setItem('uid', userId)
        this.setState({ currentUser: userId });
    };

    handleLogout = () => {
        console.log('click');
        localStorage.removeItem('uid');
        axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
            .then(() => {
                this.setState({ currentUser: null });
                this.props.history.push('/login');
            })
            .catch(error => console.log(error.response))
    };

    render() {
        return (
            <div className="App">
                <NavBar logout={this.handleLogout} currentUser={this.state.currentUser} />
                <Routes setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />
            </div>
        );
    };
};

export default withRouter(App);
