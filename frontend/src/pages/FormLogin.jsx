import React, { Component } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
// import {Navigate} from  'react-router';
// import HotelList from '../components/HotelList';

class FormLogin extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind()
        this.handleSubmit = this.handleSubmit.bind()
    }

    handleSubmit = () => {
        const { username, password } = this.state;

        var axios = require('axios');
        var data = JSON.stringify({
            "username": username,
            "password": password
        });

        var config = {
            method: 'post',
            url: 'https://hotelmanagementapplication.herokuapp.com/api/auth/signin',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                localStorage.setItem('accessToken', response.data.accessToken)
                const data = {
                    username: response.data.username,
                    id: response.data.id,
                    rewardPoints: response.data.rewardPoints,
                    address: response.data.address,
                    isLoyal: response.data.address,
                    phoneNumber: response.data.phoneNumber,
                    type: response.data.roles[0] === "ROLE_USER" ? "user" : "employee"
                }
                localStorage.setItem('data', JSON.stringify(data))
                // navigate.push('/hotel');
                // return <Navigate to='/hotels' replace={true} />
                // return <Navigate to="/hotels" />
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    handleChange = (value, type) => {
        if (type === "username") {
            this.setState({ username: value })
        }
        else if (type === 'password') {
            this.setState({ password: value })
        }
    }

    render() {
        const { username, password } = this.state
        return (
            <div className='form-content-right'>
                <form onSubmit={this.handleSubmit} className='form' noValidate>
                    <div className='form-inputs'>
                        <label className='form-label'>Username</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={username}
                            onChange={(event) => this.handleChange(event.target.value, 'username')}
                        />
                        {/* {errors.username && <p>{errors.username}</p>} */}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(event) => this.handleChange(event.target.value, 'password')}
                        />
                        {/* {errors.password && <p>{errors.password}</p>} */}
                    </div>
                    <button className='form-input-btn' type='submit'>
                        Login
                    </button>
                    <span className='form-input-login'>
                        Want to create Account? <a href='#'>Sign Up here</a>
                    </span>
                </form>
            </div>
        );
    };

}
export default FormLogin;
