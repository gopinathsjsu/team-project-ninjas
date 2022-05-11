// import React, { Component } from 'react'
// import items from './data';
// const RoomContext = React.createContext();


// export default class RoomProvider extends Component {
//     constructor() {
//         this.state = {
//             hotels: {}
//         }
//     }
//     componentDidMount() {

//         var axios = require('axios');

//         var config = {
//             method: 'get',
//             url: 'http://hotelmanagementapplication.herokuapp.com/api/hotel/',
//             headers: {
//                 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXBsb3llZSIsImlhdCI6MTY1MjE5NDIwOSwiZXhwIjoxNjUyMjgwNjA5fQ.OI3WHSyIgZ1EaWVfElJwoWhOvrfHJBIslcXg3cPT-UMn9BlqkRnI85PY-icJgrjovgzYWi0OX-wMF70mSA9a-Q'
//             }
//         };

//         axios(config)
//             .then(function (response) {
//                 this.setState({ hotels: response.data })
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }

//     // handleChange = event => {
//     //     const target = event.target;
//     //     const value = target.type === 'checkbox' ? target.checked : target.value;
//     //     const name = event.target.name;
//     //     this.setState(
//     //         {
//     //             [name]: value
//     //         }, this.filterRooms)
//     // }

//     render() {
//         return (
//             // <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
//             <RoomContext.Provider value={{ ...this.state }}>
//                 { this.props.children }
//             </RoomContext.Provider >
//         )
//     }
// }
// const RoomConsumer = RoomContext.Consumer;

// export function withRoomConsumer(Component) {
//     return function ConsumerWrapper(props) {
//         return <RoomConsumer>
//             {value => <Component {...props} context={value} />}
//         </RoomConsumer>
//     }
// }

// export { RoomProvider, RoomConsumer, RoomContext }
