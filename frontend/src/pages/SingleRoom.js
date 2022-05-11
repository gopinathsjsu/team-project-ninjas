import React, { Component, useEffect, useState } from 'react'
import Banner from '../components/Banner';
import defaultBcg from '../images/room-3.jpeg';
import defaultImg from '../images/room-1.jpeg';
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero';
var axios = require('axios');

const SingleRoom = (props) => {
    const [roomState, setRoomState] = useState({
        id: props.match.params.id,
        hotelName: "",
        state: "",
        country: "",
        rooms: [],
        amenities: [],
        rating: 0,
        price: 0,
    })
    const getHotel = async () => {

        const { id } = roomState;
        var config = {
            method: 'get',
            url: 'https://hotelmanagementapplication.herokuapp.com/api/hotel/' + id,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXBsb3llZSIsImlhdCI6MTY1MjIxMDg3NiwiZXhwIjoxNjUyMjk3Mjc2fQ.AexVcdNhcnQ_HvQ3DENM7FMKp7gWGoX47lrHIQrPTZrb9IIIineczzhHcMljYM1woM7Gf2S6o9ryCJRdYNsMWw'
            }
        };

        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    setRoomState({
                        ...roomState,
                        hotelName: response.data.hotelname,
                        state: response.data.state,
                        country: response.data.country,
                        rooms: response.data.rooms,
                        amenities: response.data.amenities,
                        rating: response.data.rating,
                        price: response.data.price,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        getHotel();
    }, [])

    const { id, hotelName, state, country, rooms, amenities, rating } = roomState
    console.log(roomState);
    return (
        !true
            ? <div className="container roomerror">
                <div className="row my-5">
                    <div className="col-md-6 col-12 mx-auto">
                        <div className="card shadow-lg border-0 p-4 error">
                            <h1 className="text-center display-4">SORRY</h1>
                            <h3>No such room could be found...</h3>
                            <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
                        </div>
                    </div>
                </div>
            </div>
            : <>
                <StyledHero img={defaultBcg}>
                    <Banner title={hotelName + " ," + state + " ," + country}>
                        <Link to="/rooms" className="btn btn-primary">Back To Rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room container">
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Donec enim diam vulputate ut pharetra sit amet aliquam. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Leo a diam sollicitudin tempor.</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Rating : {rating}</h6>
                            <h6>Available Amenities  : </h6>
                            <ul>
                                {amenities.map(item => {
                                    return <li key={item.id}>{item.name}</li>
                                })}
                            </ul>
                        </article>
                    </div>
                    <div className="row">
                        {rooms.map((item, index) => {
                            return (
                                <div className="col-md-4 col-12 mx-auto p-2">
                                    <div className="card shadow-lg border-0 room">
                                        <img src={defaultImg} alt="single room" className="img-fluid" />
                                        <div className="price-top-left">
                                            <h6>${item.price} per night</h6>
                                            <h6>Available Rooms: {item.availableRooms}</h6>
                                        </div>
                                        <Link to={'/booking/hotel_id=' + id + '/room_id=' + item.id} className="btn btn-outline-primary btn-block btn-lg float-right ">Book Now</Link>
                                        <p className="room-info">{item.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </section>
            </>
    )
}

export default SingleRoom;