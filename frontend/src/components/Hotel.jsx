import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';

export default function Hotel(props) {
    const { hotelname, state, country, id, price,rating } = props.hotel;
    return (
        <div className="col-md-4 col-12 mx-auto p-2">
            <div className="card shadow-lg border-0 room">
                <img src={defaultImg} alt="single room" className="img-fluid" />
                <div className="price-top-left">
                    <h6>${price} per night</h6>
                    <h6>{state}, {country}</h6>
                </div>
                <div className="price-top-right">
                    <h6>{rating} stars</h6>
                </div>
                <Link to={`/rooms/${id}`} className="btn-warning room-link text-center" >Features</Link>
                <p className="room-info">{hotelname}</p>
            </div>
        </div>
    )
}