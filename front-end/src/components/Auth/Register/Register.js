import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../constants';

// import styles
import './Register.css';


class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        errors: [],
        text: '',
        shouldComponentDisplayErrors: false
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = this.state;
        axios.post(`${API_URL}/auth/signup`, newUser)
            .then(res => {
                console.log(res);
                this.props.history.push('/login')
            })
            .catch(error => {
                console.log(error);
                // this.setState({ errors: error, shouldComponentDisplayErrors: true });
            })
    };

    render() {
        return (
            <div className="register-row">
                {/* {this.state.shouldComponentDisplayErrors && this.state.errors.map((e, i) => (
                    <div className="alert" role="alert" key={i}>
                        {e.message}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                ))} */}
                <section id="register">
                    <h2>Register</h2>
                    <Link to="/"><button>X</button></Link>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="username" id="username" name="username" value={this.state.username} onChange={this.handleChange} className="auth-input" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="auth-input" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="auth-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} className="auth-input" />
                        </div>
                        <button type="submit" className="auth-btn">Register</button>
                    </form>
                </section>
            </div>
        )
    }
};

export default Register;

