import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// internal components
import NavBar from './components/NavBar/NavBar';
import Routes from './config/routes'
import './App.css';
import { withRouter } from 'react-router-dom';
// import { API_URL } from './constants';

class App extends Component {
    state = {
        currentUser: localStorage.getItem('uid'),
    };

    setCurrentUser = (userId) => {
        localStorage.setItem('uid', userId)
        this.setState({ currentUser: userId });
    };

    // handleLogout = (userId) => {
    //     localStorage.removeItem('uid');
    //     Axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
    //         .then(() => {
    //             this.setState({ currentUser: null });
    //             this.props.history.push('/login');
    //         });
    // };

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
