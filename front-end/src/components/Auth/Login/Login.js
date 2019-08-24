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

    componentDidMount() {
        axios.get(`${API_URL}/users/`)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handlleSubmit = (event) => {
        event.preventDefault();
        const userInfo = this.state;
        axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
            .then(res => this.props.setCurrentUser(res.data.id))
            .catch(err => this.setState({ error: err.response.data.message }));
    };

    render() {
        return (
            <div className="login-row">
                <section id="login" className="alert">
                    {this.state.error}
                    <h1>Login</h1>
                    <Link to="/"><button>X</button></Link>

                    <form onSubmit={this.handleSubmit} method="POST" action={`${API_URL}/users`}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={this.state.email} onChange={this.handleChange} className="auth-input" type="email" id="email" name="email" placeholder="example@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={this.state.password} onChange={this.handleChange} className="auth-input" type="password" id="password" name="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Login</button>
                    </form>
                </section>
            </div>
        );
    };
};

export default Login;