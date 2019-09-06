
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios'

import './assect/css/normalize.css'
import './App.scss';

import Home from './component/Home'
import RoomPage from './component/RoomPage'
import BookingPage from './component/BookingPage'
import OrderCompletePage from './component/OrderCompletePage'
import Menu from './component/Menu'
import Footer from './component/Footer'

import { BASE_URL } from './constant'
import bg2 from './assect/img/bg2.png';


axios.defaults.headers.common['Authorization'] = 'Bearer qEyzXLEKxPOg751ZX4Klr7ahFxj4ggcnNjtLcT2142MCh7sAb3mshqLuiALu';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      allRooms: '',
      guest: {
        adult: 0,
        child: 0
      },
      bookedRoom: 0,
      subtotal: 0,
      startValue: null,
      endValue: null,
      startOpen: false,
      endOpen: false,
      form: {
        lastName: {
          value: '',
          valid: false,
          error: ''
        },
        firstName: {
          value: '',
          valid: false,
          error: ''
        },
        title: {
          value: '',
          valid: false,
          error: ''
        },
        phone: {
          value: '',
          valid: false,
          error: ''
        },
        email: {
          value: '',
          valid: false,
          error: ''
        },
        bookBreakfast: false,
        bookRentalCar: false
      }
    }
  }
  
  componentDidMount() {
    axios
      .get(`${BASE_URL}/rooms`)
      .then(res => { 
        this.setState({allRooms: res.data.items})    
    })
  }
  
  setBG = () => {
    if (this.props.location.pathname === "/") {
      document.querySelector('#root').classList.add('has-bg')
    } else {
      document.querySelector('#root').classList.remove('has-bg')
    }
  }

  onStartOpenChange = (startOpen) => {
    this.setState({
      startOpen,
    });
  }

  onEndOpenChange = (endOpen) => {
    this.setState({
      endOpen,
    });
  }

  onStartChange = (value) => {
    this.setState({
      startValue: value[0],
      startOpen: false,
      endOpen: true,
    });
  }

  onEndChange = (value) => {
    this.setState({
      endValue: value[1],
    });
  }

  disabledStartDate = (endValue) => {
    if (!endValue) {
      return false;
    }
    const startValue = this.state.startValue;
    if (!startValue) {
      return false;
    }
    return endValue.diff(startValue, 'days') < 0;
  }

  render() {
    const {
      allRooms,  
      startValue,
      endValue,
      startOpen,
      endOpen 
    } = this.state
    
    this.setBG()

    return (
      <React.Fragment>
        <img className="bg2" src={bg2} alt=""></img>
        <Route 
          path="/"
          render={props => (
            <Menu
              routeProps={props}  
            />
          )}
         />
        <Route 
          exact path="/" 
          render={(props) => (
            <Home
              allRooms={allRooms}
            />
          )}
        />
        <Route 
          path="/room/:id" 
          render={(props) => (
            <RoomPage
              routeProps={props}
              startValue={startValue}
              endValue={endValue}
              startOpen={startOpen}
              endOpen={endOpen}
              onStartOpenChange={this.onStartOpenChange}
              onEndOpenChange={this.onEndOpenChange}
              onStartChange={this.onStartChange}
              onEndChange={this.onEndChange}
              disabledStartDate={this.disabledStartDate}
            />
          )}
        />
        <Route 
          path="/booking/:id" 
          render={(props) => (
            <BookingPage
              routeProps={props}
              routeProps={props}
              startValue={startValue}
              endValue={endValue}
              startOpen={startOpen}
              endOpen={endOpen}
              onStartOpenChange={this.onStartOpenChange}
              onEndOpenChange={this.onEndOpenChange}
              onStartChange={this.onStartChange}
              onEndChange={this.onEndChange}
              disabledStartDate={this.disabledStartDate}
            />
          )}
        />
        <Route 
          path="/orderComplete" 
          render={(props) => (
            <OrderCompletePage
              routeProps={props}
            />
          )}
          />
        <Footer/>       
      </React.Fragment>
    )
  }
}

export default withRouter(App);