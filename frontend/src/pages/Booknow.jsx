import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from '../images/room-3.jpeg';

const axios = require('axios');

const Booknow = (props) => {
    const [loading, setLoading] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [checked, setChecked] = useState(Array(0))
    const [price, setPrice] = useState(0)

    const [bookingState, setBookingState] = useState({
        hotelId: props.match.params.hotel_id,
        roomId: props.match.params.room_id,
        room: {},
        amenities: [],
        startDate: new Date(),
        endDate: new Date(),
    })

    const handleChange = (index) => {

    }

    useEffect(() => {
        getRoomDetails();
    }, [])

    const getRoomDetails = () => {
        setLoading(true);

        const { hotelId, roomId } = bookingState;

        var config = {
            method: 'get',
            url: 'https://hotelmanagementapplication.herokuapp.com/api/hotel/' + hotelId,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXBsb3llZSIsImlhdCI6MTY1MjE5NDIwOSwiZXhwIjoxNjUyMjgwNjA5fQ.OI3WHSyIgZ1EaWVfElJwoWhOvrfHJBIslcXg3cPT-UMn9BlqkRnI85PY-icJgrjovgzYWi0OX-wMF70mSA9a-Q'
            }
        };

        axios(config)
            .then(function (response) {
                setBookingState({
                    ...bookingState,
                    room: response.data.rooms.filter(room => room.id === parseInt(roomId))[0],
                    hotel: response.data,
                    amenities: response.data.amenities,
                })
                setChecked(Array(response.data.amenities.length).fill(false))
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const handleChangeStart = (date) => {
        setBookingState({
            ...bookingState,
            startDate: date
        });
    }
    const handleChangeEnd = (date) => {
        setBookingState({
            ...bookingState,
            endDate: date
        });
    }

    const createBooking = () => {
        const { hotelId, roomId, startDate,endDate } = bookingState
        const data = JSON.parse(localStorage.getItem("data"))
        var booking = JSON.stringify({
            "hotel_id": hotelId,
            "room_id": roomId,
            "user_id": data.id,
            "price": price,
            "noOfAdults": 1,
            "noOfChildrens": 2,
            "totalRooms": 3,
            "amenities_id": [
                1,
                2,
                3
            ],
            "startDate": startDate.toISOString().substring(0,10),
            "endDate": endDate.toISOString().substring(0,10),
            "rewardPoints": 0
        });

        var config = {
            method: 'post',
            url: 'https://hotelmanagementapplication.herokuapp.com/api/booking/addBooking',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmNkIiwiaWF0IjoxNjUyMjE5NzIyLCJleHAiOjE2NTIzMDYxMjJ9.f9Gigp-6YaYn6harhojV-tpgjjDRm_ZvSIw2ql_7UI9j8QMNe93dNciboS5MMubcPrR-A-wLhccWO0FJtYnrSg',
                'Content-Type': 'application/json'
            },
            data: booking
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const calculateDaysLeft = (startDate, endDate) => {

        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        const daysLeft = endDate.diff(startDate, "days")
        if (daysLeft > 7 || daysLeft < 1) {
            setDisabled(false);
            setPrice(0)
        }
        else {
            setPrice(hotel.price * daysLeft);
        }
        return daysLeft;
    }


    const { startDate, endDate, room, hotel } = bookingState;
    const daysLeft = calculateDaysLeft(startDate, endDate);
    if (!room) {
        return (
            <>
                {!loading && (
                    <div className="container roomerror">
                        <div className="row my-5">
                            <div className="col-md-6 col-12 mx-auto">
                                <div className="card shadow-lg border-0 p-4 error">
                                    <h1 className="text-center display-4">SORRY</h1>
                                    <h3>No such room could be found...</h3>
                                    <Link to="/hotels" className="btn btn-warning mt-4 ">Back to hotels</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
    else {
        return (
            <>
                {!loading && (
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                                <div>
                                    <h1 className="display-4">Booking</h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12 my-auto">
                                        <img src={defaultBcg} className="img-fluid" alt="selected room" />
                                    </div>
                                    <div className="col-md-6 col-12 ">
                                        <h1>Hotel Details - {hotel.hotelName}</h1>
                                        <table className="table">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Room Type</th>
                                                    <td>{room.name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Available Rooms</th>
                                                    <td>{room.capacity}</td>
                                                </tr>


                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>
                                            <DatePicker selected={bookingState.startDate} onChange={handleChangeStart} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>
                                            <DatePicker selected={bookingState.endDate} onChange={handleChangeEnd} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h6 className="font-weight-bolder">Number of days : {daysLeft}</h6>
                                        <mark>Please make sure Checkin is done by 10 AM</mark>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <h6 className="font-weight-bold">Price per day : <span className="badge badge-info">$ {room.price}</span></h6>
                                        <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">price</span></h6>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="col-md-6 col-12"> */}
                                    <h6 className="font-weight-bolder">Amenities</h6>
                                    {
                                        bookingState.amenities.map((item, index) => {
                                            return (<div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" name={item.name} id={item.name} checked={checked[index]} onChange={() => handleChange(index)} />
                                                <label htmlFor={item.name} className="custom-control-label">{item.name}</label>
                                            </div>)
                                        })
                                    }
                                    {/* </div >
                                    <div className="col-md-6 col-12">
                                        <Slider
                                            min={0}
                                            max={10}
                                            step={1}
                                            marks
                                            size="small"
                                            defaultValue={1}
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                        />
                                    </div> */}

                                </div>

                                <div className="row my-4">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="payment" className="font-weight-bolder">Payment Options</label>
                                            <select className="form-control">
                                                <option disabled>Select payment option</option>
                                                <option value="Credit">Credit Card</option>
                                                <option value="Debit">Debit Card</option>
                                                <option value="checkin">Pay during Checkin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 my-auto">
                                        <div className="col-md-6 col-12 float-right">
                                            <button disabled={disabled} onClick={createBooking} className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks">Confirm Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="thanks">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body p-4">
                                        <h3>Thank you </h3>
                                        <p className="lead">Your room is booked successfully....</p>
                                    </div>
                                    <div className="modal-footer">
                                        <Link to="/" className="btn btn-dark">Goto Home</Link>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

export default Booknow;