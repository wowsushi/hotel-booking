import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../../assect/img/logo.svg';

const WelcomeBlock = ({allRooms}) => {
  const roomPhotos = []

  if (allRooms) {
    allRooms.map((room, index) => {
      roomPhotos.push(
        <div className="photo-block" key={room.id}>
          <Link to={`room/${room.id}`}>
            <img
              src={room.imageUrl}
              alt={room.name}
              />
            <div className="overlay"></div>
            <div className="hover-content">
              <h3>{room.name}</h3>
              <p>{`$${room.normalDayPrice} ~ $${room.holidayPrice}`}</p>
              <button>more<span></span></button>
            </div>
          </Link>
        </div>
      )

      return null
    })
  }

  return (
    <section className="col">
      <header className="header header-home">
        <img src={logo} alt=""/>
        <h1>綠柳宿旅</h1>
        <h2>Green Willow Lodge</h2>
      </header>
      <div className="room-list">
        <div className="title">客房介紹</div>
        {roomPhotos}
      </div>
    </section>
  )

}

export default WelcomeBlock
