import React, { Component } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

class FormSignup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      password2: "",
      phoneNumber: "",
      address: ""
    }
    this.handleChange = this.handleChange.bind()
    this.handleSubmit = this.handleSubmit.bind()
  }

  handleSubmit = () => {
    const { username, email, password, phoneNumber, address } = this.state;
    var axios = require('axios');
    var data = JSON.stringify({
      "username": username,
      "email": email,
      "password": password,
      "rewardPoints": 100,
      "phoneNumber": phoneNumber,
      "address": address
    });

    var config = {
      method: 'post',
      url: 'https://hotelmanagementapplication.herokuapp.com/api/auth/signup',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  handleChange = (value, type) => {
    if (type === "username") {
      this.setState({ username: value })
    }
    else if (type === 'email') {
      this.setState({ email: value })
    }
    else if (type === 'password') {
      this.setState({ password: value })
    }
    else if (type === "password2") {
      this.setState({ password2: value })
    }
    else if (type === "phone") {
      this.setState({ phoneNumber: value })
    }
    else if (type === "address") {
      this.setState({ address: value })
    }
  }

  render() {
    const { username, password, password2, email, phoneNumber, address } = this.state
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
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={email}
              onChange={(event) => this.handleChange(event.target.value, 'email')}
            />
            {/* {errors.email && <p>{errors.email}</p>} */}
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
          <div className='form-inputs'>
            <label className='form-label'>Confirm Password</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={password2}
              onChange={(event) => this.handleChange(event.target.value, 'password2')}
            />
            {/* {errors.password2 && <p>{errors.password2}</p>} */}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Phone Number</label>
            <input
              className='form-input'
              type='number'
              name='username'
              placeholder='Enter your Phone Number'
              value={phoneNumber}
              onChange={(event) => this.handleChange(event.target.value, 'phone')}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Address</label>
            <input
              className='form-input'
              type='number'
              name='address'
              placeholder='Enter your address'
              value={address}
              onChange={(event) => this.handleChange(event.target.value, 'address')}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
          <button className='form-input-btn' type='submit'>
            Sign up
          </button>
          <span className='form-input-login'>
            Already have an account? Login <a href='#'>here</a>
          </span>
        </form>
      </div>
    );
  };

}
export default FormSignup;
