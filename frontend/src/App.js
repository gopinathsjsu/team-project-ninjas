import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import SingleRoom from './pages/SingleRoom.js';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Booknow from './pages/Booknow';
import Login from './pages/Login';
import SignUp from "./pages/SignUp"
import MyBooking from "./pages/MyBooking"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/hotels/" component={Hotels} />
          <Route exact path="/Login/" component={Login} />
          <Route exact path="/SignUp/" component={SignUp} />
          <Route exact path="/rooms/:id" component={SingleRoom} />
          <Route exact path="/mybooking/" component={MyBooking} />
          <Route exact path="/booking/hotel_id=:hotel_id/room_id=:room_id" component={Booknow} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
