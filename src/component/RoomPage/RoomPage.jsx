import React from 'react'

import Input from '../Input'
import TopBar from '../TopBar'
import Calendar from '../Calendar'

import { amenities, bed} from '../../constant'

class RoomPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      room: ''
    }
  }

  componentDidMount() {
    this.props.getSelectedRoom(this.props.routeProps.match.params.id)
  }

  getAmenities = room => {
   if (!room) return

    let amenityList = []
    // eslint-disable-next-line
    for (let [key, value] of Object.entries(room.amenities)) {
      amenityList.push(
        <li key={key}>{amenities[key]}：{value? '有' : '無'}</li>
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
    const {
      selectedRoom,
      startValue,
      endValue,
      startOpen,
      endOpen,
      onStartOpenChange,
      onEndOpenChange,
      onStartChange,
      onEndChange,
      disabledStartDate,
    } = this.props

    let imgList = ''

    if (selectedRoom.imageUrl) {
       imgList = selectedRoom.imageUrl.map((image, index) =>
       <img key={index} src={image} alt={`room-${index}`} />
       )
    }


    return (
      <main className="room-page">
          <TopBar
            room={selectedRoom}
            buttonName="預訂"
            linkTo={`/booking/${this.props.routeProps.match.params.id}`}
          />
          <section className="photos-panel">
           {imgList}
          </section>
          <section className="booking-bar">
             <Calendar
              startValue={startValue}
              endValue={endValue}
              startOpen={startOpen}
              endOpen={endOpen}
              onStartOpenChange={onStartOpenChange}
              onEndOpenChange={onEndOpenChange}
              onStartChange={onStartChange}
              onEndChange={onEndChange}
              disabledStartDate={disabledStartDate}
             />
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
          <section className="main-info">
            <ul className="amenities">
              {this.getAmenities(selectedRoom)}
            </ul>
            <div className="subtotal">
              總價：NT 3200
            </div>
            <p className="description">{selectedRoom.description}</p>
            <aside className="room-info">
              {this.getRoomInfo(selectedRoom)}
            </aside>
            <div className="check-time">
              {this.getCheckInAndOut(selectedRoom)}
            </div>
          </section>
        </main>
    )
  }
}

export default RoomPage
