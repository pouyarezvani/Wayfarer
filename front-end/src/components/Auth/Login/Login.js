import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Login.css'
import { API_URL } from '../../../constants';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handlleSubmit = (event) => {
        event.preventDefault();
        const userInfo = this.state;
        axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
            .then(res => {
                this.props.setCurrentUser(res.data.id);
                this.props.history.push('/cities');
            })

            .catch(err => {
                this.setState({ error: err.response.data.message })
            });
    };

    render() {
        return (
            <div className="container login">
                <h1>Login</h1>
                <Link className="exit-form" to="/">x</Link>
                <div className="row text-center">
                    <div className="col-md-6 offset-md-3">
                        {this.state.error}
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={this.state.email} onChange={this.handleChange} className="form-control" type="email" id="email" name="email" placeholder="example@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input value={this.state.password} onChange={this.handleChange} className="form-control" type="password" id="password" name="password" placeholder="Password" />
                            </div>
                            <button onClick={this.handlleSubmit} className="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default Login;