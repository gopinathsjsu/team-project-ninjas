import React, { Component } from 'react'

export default class MyBooking extends Component {
    constructor(props) {
        super(props);
        const data = localStorage.getItem(data)
        this.state = {
            bookings: [],
            id: data.id,
            type: data.type
        }
        this.getBookings();
    }
    getBookings = () => {
        var axios = require('axios');

        const { type, id } = this.state
        const url = type === type ? 'https://hotelmanagementapplication.herokuapp.com/api/booking/user/' + id : 'http://hotelmanagementapplication.herokuapp.com/api/booking/' + id + '/getAllBookings'

        var config = {
            method: 'get',
            url: url,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXBsb3llZSIsImlhdCI6MTY1MjE1Njc5OCwiZXhwIjoxNjUyMjQzMTk4fQ.JUKg9gLrMojb3aymZ2nQClpzPYw2VaSImUUAuLEfvtV2eLonegG5d_EWZS62dxCErh64UFQ_BGaPaiLQJQYmAg'
            }
        };

        axios(config)
            .then(function (response) {
                this.setState({
                    bookings: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        const { bookings } = this.state;
        return <></>
    }
}