
import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, withRouter} from 'react-router-dom';
import axios from 'axios'


import bg1 from '../assect/img/bg1.png';
import bg2 from '../assect/img/bg2.png';
import logo from '../assect/img/logo.svg';


const Tag = props => {
  return (
    <aside className="aside">
      <span></span>
      <div className="tag">訂房</div>
      <i class="fas fa-phone-volume"></i>
      <i class="far fa-comments"></i>     
    </aside>
  )
}

class WelcomeBlock extends React.Component {  
  render() { 
    const { allRooms } = this.props
    const roomPhotos = []

    if (allRooms) {
      allRooms.map((room, index) => {
        roomPhotos.push(        
          <div className="photo-block">
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
      })
    }

    return (
      <section className="col">
        <header className="header header-home">
          <img src={logo}/>
          <h1>綠柳宿旅</h1>
          <h2>Green Willow Lodge</h2>
        </header>
        <div className="room-list">
          <caption>客房介紹</caption>
          {roomPhotos}
        </div>
      </section>
    )
  }

} 

class Home extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    console.log(this.props)
    const {allRooms} = this.props
    return (
      <div className="home">
        <Tag/>
        <main>       
          <WelcomeBlock
            allRooms={allRooms}
          />
        </main>      
      </div> 
       
    )
  }
}

export default withRouter(Home);