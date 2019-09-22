
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

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

const now = moment()
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
      bookedDates: [],
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
        haveBreakfast: false,
        haveRentalCar: false
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

    if (endValue.diff(now, 'days') > 90) {
      return false;
    }

    if (startValue.diff(now, 'days') < 0) {
      return false;
    }

    return endValue.diff(startValue, 'days') < 0;
  }

  getDiffStartEndDate = (startValue, endValue) => {
    if (!startValue || !endValue) return

    return ( ( Date.parse(endValue) - Date.parse(startValue) ) ) / msInDay
  }

  getBookedDates = () => {
    let { startValue, endValue } = this.state
    const diff = this.getDiffStartEndDate(startValue, endValue)
    const bookedDates = []

    for (let i = 0; i <= diff; i++) {
      let date = new Date(startValue)
      bookedDates.push(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`)
      startValue += msInDay
    }
    return bookedDates
  }

  getSubTotal = () => {
    const {
      startValue,
      endValue,
      bookedRoom,
      form: {
        haveBreakfast,
        haveRentalCar
      },
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
    if (haveBreakfast) subtotal += 320
    if (haveRentalCar) subtotal += 2500

    this.setState({ subtotal: this.convertToThousandth(subtotal) })
  }

  convertToThousandth = num => {
    return num.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1,")
  }

  handleValueChange = (field, value) => {
    const { guest, form } = this.state
    const newFieldObj =  this.validateCheck(field, value);

    if (!newFieldObj) return

    switch (field) {
      case 'room':
        this.setState({ bookedRoom: value})
        break
      case 'lastName':
      case 'firstName':
      case 'phone':
      case 'address':
      case 'email':
        this.setState({
          form: {
            ...form,
            [field]: newFieldObj
          }
        });
        break
      case 'haveBreakfast':
      case 'haveRentalCar':
        console.log(field, value)
        this.setState({
          form: {
            ...form,
            [field]: value
          }
        })
        break
      default:
        this.setState({
          guest: {
            ...guest,
            [field]: value
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

  validateCheck = (field, value) => {
    const newFieldObj = {value, valid: true, error: ''};

    switch (field) {
      case 'lastName': {
        if (value.length === 0) {
          newFieldObj.error = '請輸入姓氏（ 英文 ）';
          newFieldObj.valid = false;
        }
        break;
      }
      case 'firstName': {
        if (value.length === 0) {
          newFieldObj.error = '請輸入姓名（ 英文 ）';
          newFieldObj.valid = false;
        }
        break;
      }
      case 'phone': {
        if (!value.match(/^09\d{8}$/)) {
          newFieldObj.error = '手機號碼格式錯誤';
          newFieldObj.valid = false;
        }
        break;
      }
      case 'email': {
        if (!value.match(/^.*@.*\.com$/)) {
          newFieldObj.error = 'Email格式錯誤';
          newFieldObj.valid = false;
        }
        break;
      }
      default: {
        console.log('no check item')
      }
    }
    return newFieldObj
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
      subtotal,
      form
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
              convertToThousandth={this.convertToThousandth}
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
              convertToThousandth={this.convertToThousandth}
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
              handleValueChange={this.handleValueChange}
              form={form}
              validateCheck={this.validateCheck}
              getBookedDates={this.getBookedDates}
            />
          )}
        />
        <Route
          path="/orderComplete/:status"
          render={(props) => (
            <OrderCompletePage
              routeProps={props}
              selectedRoom={selectedRoom}
              startValue={startValue}
              endValue={endValue}
              guest={guest}
              subtotal={subtotal}
              form={form}
            />
          )}
          />
        <Footer/>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
