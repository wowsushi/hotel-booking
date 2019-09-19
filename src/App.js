
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

import { BASE_URL , msInDay} from './constant'
import bg2 from './assect/img/bg2.png';

axios.defaults.headers.common['Authorization'] = 'Bearer qEyzXLEKxPOg751ZX4Klr7ahFxj4ggcnNjtLcT2142MCh7sAb3mshqLuiALu';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      allRooms: '',
      selectedRoom: '',
      guest: {
        adult: 0,
        child: 0
      },
      bookedRoom: 1,
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

  componentWillMount() {
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

  getSelectedRoom = (id) => {
    axios
      .get(`${BASE_URL}/room/${id}`)
      .then(res => {
        this.setState({selectedRoom: res.data.room[0]})
    }).catch(err => console.log(err))
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

  getDiffStartEndDate = (startValue, endValue) => {
    if (!startValue || !endValue) return

    return ( ( Date.parse(endValue) - Date.parse(startValue) ) ) / msInDay
  }

  getSubTotal = () => {
    const {
      startValue,
      endValue,
      bookedRoom,
      selectedRoom: {
        holidayPrice,
        normalDayPrice
      }
    } = this.state
    const diff = this.getDiffStartEndDate(startValue, endValue)

    let subtotal = 0
    let start = Date.parse(startValue)

    for (let i=0; i<diff; i++) {
      (new Date(start).getDay() === 5 || new Date(start).getDay() === 6)
      ? subtotal += holidayPrice
      : subtotal += normalDayPrice
      start += msInDay
    }
    subtotal *= bookedRoom

    this.setState({ subtotal: this.convertToThousandth(subtotal) })
  }

  convertToThousandth = num => {
    return num.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1,")
  }

  handleValueChange = type => e => {
    const { guest } = this.state

    switch (type) {
      case 'room':
        this.setState({ bookedRoom: e.target.value})
        break
      default:
        this.setState({
          guest: {
            ...guest,
            [type]: e.target.value
          }
        })
        break
    }
  }

  isGuestValid = () => {
    if (!this.state.selectedRoom) return null
    const {
      guest: {
        adult,
        child
      },
      bookedRoom
    } = this.state
    const GuestMax = this.state.selectedRoom.descriptionShort.GuestMax
    const GuestMin = this.state.selectedRoom.descriptionShort.GuestMin

    if (+adult === 0 && +child === 0) return false
    return !(+adult + +child > GuestMax * bookedRoom)
            &&  !(+adult + +child < GuestMin * bookedRoom)
  }

  render() {

    const {
      allRooms,
      selectedRoom,
      bookedRoom,
      guest,
      startValue,
      endValue,
      startOpen,
      endOpen,
      subtotal
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
              getSelectedRoom={this.getSelectedRoom}
              selectedRoom={selectedRoom}
              startValue={startValue}
              endValue={endValue}
              startOpen={startOpen}
              endOpen={endOpen}
              onStartOpenChange={this.onStartOpenChange}
              onEndOpenChange={this.onEndOpenChange}
              onStartChange={this.onStartChange}
              onEndChange={this.onEndChange}
              disabledStartDate={this.disabledStartDate}
              getSubTotal={this.getSubTotal}
              subtotal={subtotal}
              handleValueChange={this.handleValueChange}
              bookedRoom={bookedRoom}
              guest={guest}
              isGuestValid={this.isGuestValid}
            />
          )}
        />
        <Route
          path="/booking/:id"
          render={(props) => (
            <BookingPage
              routeProps={props}
              selectedRoom={selectedRoom}
              startValue={startValue}
              endValue={endValue}
              startOpen={startOpen}
              endOpen={endOpen}
              onStartOpenChange={this.onStartOpenChange}
              onEndOpenChange={this.onEndOpenChange}
              onStartChange={this.onStartChange}
              onEndChange={this.onEndChange}
              disabledStartDate={this.disabledStartDate}
              getSubTotal={this.getSubTotal}
              subtotal={subtotal}
              guest={guest}
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
