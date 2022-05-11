import React, { Component, useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
var axios = require('axios');

const MyBooking = () => {

    const data = JSON.parse(window.localStorage.getItem("data"));

    const [bookingListState, setBookingListState] = useState({bookings: [],
        id: data.id,
        type: data.type
    });

    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        getBookings();
    },[])


    const getBookings = () => {
        setLoading(true);

        const { type, id } = bookingListState;
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
                console.log(response);
                setBookingListState({
                    ...bookingListState,
                    bookings: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });

            setLoading(false);

    }

    const cancelBooking = (id) => {
        setLoading(true);

        // const { type, id } = bookingListState;
        const url = `https://hotelmanagementapplication.herokuapp.com/api/booking/${id}`;

        var config = {
            method: 'delete',
            url: url,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmNkZWZnIiwiaWF0IjoxNjUyMjM1NTM4LCJleHAiOjE2NTIzMjE5Mzh9.GfJPsNNlS_-asKLZ-6LfJlRQHXgDrlhPHO6fe7_0emO9_NJ_b6GH52aiQsOm7Zqn1bG1grppFOXfMCMw30zqQQ'
            }
        };

        axios(config)
            .then(function (response) {
                console.log(response);
                let bookingListDeepcopy = JSON.parse(JSON.stringify(bookingListState))
                const index = bookingListDeepcopy.findIndex(element => element.id === id); // 1

                //now use splice() method
                const result = bookingListDeepcopy.splice(index, 1);
                console.log('AFter deletion', result);
                setBookingListState(result);
                // setBookingListState({
                //     ...bookingListState,
                //     bookings: response.data
                // })
            })
            .catch(function (error) {
                console.log(error);
            });

            setLoading(false);
    } 
    return (
        <div style={{paddingTop: '100px'}}>
        {!loading && (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Hotel Name</TableCell>
                    <TableCell align="right">Room Type</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Start Date</TableCell>
                    <TableCell align="right">End Date</TableCell>
                    <TableCell align="right">Total Rooms</TableCell>

                    <TableCell align="right"># Adults</TableCell>
                    <TableCell align="right"># Children</TableCell>
                    <TableCell align="right">Actions</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {bookingListState.bookings.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {data.username}
                        </TableCell>
                        <TableCell align="right">{row.hotel.hotelname}</TableCell>
                        <TableCell align="right">{row.room.name}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.startDate}</TableCell>

                        <TableCell align="right">{row.endDate}</TableCell>
                        <TableCell align="right">{row.totalRooms}</TableCell>
                        <TableCell align="right">{row.noOfAdults}</TableCell>
                        <TableCell align="right">{row.noOfChilderns}</TableCell>
                        <TableCell align="right">
                            <Button onClick={() => cancelBooking(row.id)}>Cancel Booking</Button>
                        </TableCell>
                        

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)}
    </div>
    )
}

export default MyBooking;