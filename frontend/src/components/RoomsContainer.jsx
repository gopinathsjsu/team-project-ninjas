import React, { Component } from 'react'
// import RoomsFilter from './RoomsFilter';
import HotelList from './HotelList';
import Loading from './Loading';

class RoomsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            hotels: null,
            state: "",
            country: ""
        }
        this.getHotels();

    }

    getHotels = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://hotelmanagementapplication.herokuapp.com/api/hotel/',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXBsb3llZSIsImlhdCI6MTY1MjIxMTQ0OCwiZXhwIjoxNjUyMjk3ODQ4fQ.ZKksdhjBkml-bWrpbMEWrEmwCJ-4OSudcN1MP09mKhyaea_IRAQB8NJaugex9ianYnqKKrfihgMkglkPnU06SA',
                "Access-Control-Allow-Origin": "*"
            }
        };

        axios(config)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ hotels: response.data, loading: false })
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { hotels, loading } = this.state
        return (
            !!loading
                ? <Loading />
                : <>
                    {/* <RoomsFilter rooms={rooms} /> */}
                    <HotelList hotels={hotels} />
                </>
        )
    }
}
export default RoomsContainer
