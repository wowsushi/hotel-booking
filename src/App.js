
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
      form: {
        startDate: {
          value: '',
          valid: false,
          error: ''
        },
        endDate: {
          value: '',
          valid: false,
          error: ''
        },
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

  render() {
    const {allRooms} = this.state
    
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
            />
          )}
        />
        <Route 
          path="/booking/:id" 
          render={(props) => (
            <BookingPage
              routeProps={props}
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