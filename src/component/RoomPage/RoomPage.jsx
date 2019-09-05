import React from 'react'
import axios from 'axios'

import Input from '../Input'
import TopBar from '../TopBar'
import Calendar from '../Calendar'

import {BASE_URL, amenities, bed} from '../../constant'

class RoomPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      room: ''
    }
  }
  
  componentDidMount() {
    const id = this.props.routeProps.match.params.id
    axios
      .get(`${BASE_URL}/room/${id}`)
      .then(res => { 
        this.setState({room: res.data.room[0]})    
    }).catch(err => console.log(err))
  }
  
  getAmenities = room => {
   if (!room) return

    let amenityList = []
    for (let [key, value] of Object.entries(room.amenities)) {
      amenityList.push(
        <li>{amenities[key]}：{value? '有' : '無'}</li>
      )
    }
    return amenityList;
  }
  
  getRoomInfo = room => {
    if (!room) return
    
    let roomInfo = []
    const bedType = room.descriptionShort.Bed[0]
    roomInfo = (
      <ul>
        <li>床型：{bed[bedType]}</li>
        <li>房客人數限制：{room.descriptionShort.GuestMin}~{room.descriptionShort.GuestMax} 人</li>
        <li>衛浴數量：{room.descriptionShort['Private-Bath']} 間</li>
        <li>房間大小：{room.descriptionShort.Footage} 平方公尺</li>
        <li>假日(五~日)價格：{room.holidayPrice}</li>
        <li>平日(一~四)價格：{room.normalDayPrice}</li>
      </ul>
    )
    return roomInfo;
  }
  
  getCheckInAndOut = room => {
    if (!room) return
    const {checkInEarly, checkInLate, checkOut} = room.checkInAndOut
    const checkInW =  ( +checkInLate.slice(0, 2) - +checkInEarly.slice(0, 2) ) / 24 * 100
    const checkInPos =  +checkInEarly.slice(0, 2) / 24 * 100
    const checkOutW = +checkOut.slice(0, 2) / 24 * 100
    
    let root = document.documentElement;
    root.style.setProperty('--checkInW', checkInW + '%');
    root.style.setProperty('--checkOutW', checkOutW + '%');
     root.style.setProperty('--checkInPos', checkInPos + '%');
    
    return (
      <React.Fragment>
        <div>
          <span>Check In 時間</span>
          <div className="check-bar" >
            <div className="inner-wrapper checkIn-wrapper" >
              <span className="start">{checkInEarly}</span>
              <span className="end">{checkInLate}</span>
            </div>
          </div>
        </div>
        <div>
          <span>Check Out 時間</span>
          <div className="check-bar">
            <div className="inner-wrapper checkOut-wrapper">
              <span className="end">{checkOut}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  
  render() {
    const { room } = this.state
    
    let imgList = ''
    
    if (room.imageUrl) {
       imgList = room.imageUrl.map((image, index) => 
       <img src={image} alt={`room-${index}`} />
       )
    }
    
      
    return (
      <main className="room-page">
          <TopBar
            room={room}
            buttonName="預訂"
            linkTo={`/booking/${this.props.routeProps.match.params.id}`}
          />
          <section className="photos-panel">
           {imgList}
          </section>
          <section className="booking-bar">
            <Calendar/>          
             <Input 
              type="select"
              id="roomAmount"
              label="客房"
              unit="間"
            />
            <Input 
              type="select"
              id="adultAmount"
              label="成人"
              unit="人"
            />
            <Input 
              type="select"
              id="childAmount"
              label="小孩"
              unit="人"
            />           
          </section>
          <section class="main-info">
            <ul className="amenities">
              {this.getAmenities(room)}
            </ul>
            <div className="subtotal">
              總價：NT 3200
            </div>
            <p className="description">{room.description}</p>
            <aside className="room-info">
              {this.getRoomInfo(room)}
            </aside>
            <div className="check-time">
              {this.getCheckInAndOut(room)}
            </div>
          </section>
        </main>          
    )
  }
}

export default RoomPage