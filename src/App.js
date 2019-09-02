
import React from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import axios from 'axios'

import './App.scss';

import Home from './component/Home.js'
import qrCode from './assect/img/qrCode.png';
import bg2 from './assect/img/bg2.png';
import logo from './assect/img/logo.svg';


axios.defaults.headers.common['Authorization'] = 'Bearer qEyzXLEKxPOg751ZX4Klr7ahFxj4ggcnNjtLcT2142MCh7sAb3mshqLuiALu';
const id ='3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu'
const BASE_URL = 'https://challenge.thef2e.com/api/thef2e2019/stage6'
const amenities = {
  'Wi-Fi': 'Wi-Fi',
  'Breakfast': '早餐',
  'Mini-Bar': '迷你吧檯',
  'Room-Service': '客房服務',
  'Television': '電視',
  'Air-Conditioner': '空調',
  'Refrigerator': '冰箱',
  'Sofa': '沙發',
  'Great-View': '良好視野',
  'Smoke-Free': '禁止吸菸',
  'Child-Friendly': '適合兒童',
  'Pet-Friendly': '可帶寵物'
}
const bed = {
  'Single': '單人床',
  'Small Double': '小型雙人床',
  'Double': '雙人床',
  'Queen': '豪華雙人床'
}

const Menu = props => {
  const  routeAtHome = props.routeProps.match.isExact
  
  const className = routeAtHome? 'home' : 'inner' 

  return (
    <nav className={`nav-${className}`}>
      {routeAtHome || (
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo"/>
            <h1>綠柳宿旅</h1>
          </div>    
        </Link>
      )}
     
      <ul className={`menu menu-${className}`}>
          <li><Link to="/"><i class="fas fa-user-tie"></i>關於我們</Link></li>
          <li><Link to="/"><i class="fas fa-bed"></i>客房介紹</Link></li>
          <li><Link to="/"><i class="fas fa-wine-glass"></i>住宿服務</Link></li>
          <li><Link to="/"><i class="fas fa-map-marked-alt"></i>交通指引</Link></li>
          <li><Link to="/"><i class="far fa-newspaper"></i>最新消息</Link></li>
      </ul>  
    </nav>
  )
}

const Input = (props) => {
  switch (props.type) {
    case 'date':
    case 'email':
    case 'phone':
    case 'text': {
      return (
        <div className={`form-group ${props.id}`}>
          <label for={props.id}>{props.label}</label>
          <input type={props.type} id={props.id} placeholder={props.placeholder} />
        </div>
      )    
    }
    case 'checkbox': {
      return (
        <div className={`form-group ${props.id}`}>
          <input type={props.type} id={props.id} />
          <label for={props.id}>{props.label}</label>   
        </div>
      )    
    }
    case 'select': {
      let options = []
      
      if (props.id === "title") {
        options.push(
          <option value="ms" >女士</option>,
          <option value="mr" >先生</option>
        )  
      } else {
        for (let i=0; i<10; i++) {
          if (props.unit !== "人" && i === 0) continue

          options.push(
            <option value={`${i}${props.unit}`} >{`${i}${props.unit}`}</option>
          )  
        }
      }
 
      return (
        <div className={`form-group ${props.id}`}>
          <label for={props.id}>{props.label}</label>
          <select>
            {options}
          </select>
        </div>
      )
    }
    default: {
      console.log('error')
    }
  }
}

const TopBar = props => {
  const { room, buttonName, linkTo } = props
  return (
    <section className="top-bar">
      <span className="hot-tag">hot</span>
      <h2>房型名稱：{room.name}</h2>
      <Link to={linkTo}>
        <button>{buttonName}</button>
      </Link>
    </section>
  )
}

const Footer = props => {
  return (
    <footer>
      <img className="qr-code" src={qrCode} alt="qr-code"></img>
      <p className="tel">Tel： 02-24884712</p>
      <p className="fax">Fax： 02-84884712</p>
      <p className="email">Email： reloading.hotel@gmail.com</p>
      <p className="add">Add： 新北市小山區五月鄉三雲裡5號之1</p>
      <ul className="languages">
        <li>繁體中文</li>
        <li>简体中文</li>
        <li>English</li>
        <li>한국어</li>
      </ul>
    </footer>
  )
}



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
            <Input 
              type="date"
              id="checking"
              label="入住日期"
            />
            <Input 
              type="date"
              id="checkout"
              label="退房日期"
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

class BookingPage extends React.Component {
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
    
    render() {
    const { room } = this.state
    if (!room.imageUrl) return null
    
    return (
      <main className="booking-page">
        <h2 className="title">訂單內容</h2>
        <section className="booking-banner">
          <img src={room.imageUrl[0]} alt="room" className="banner-img"/>
          <TopBar
              room={room}
              buttonName="取消"
              linkTo="/"
          />
          <div className="content">
            <h3>總價 NT 3200</h3>
            <ul>
              <li><i class="fas fa-calendar-alt"></i>入住日期：2019年2月12日~2019年2月14日</li>
              <li><i class="fas fa-user"></i>入住人數：1人</li>
              <li><i class="fas fa-utensils"></i>不含早餐</li>
            </ul>
            <p>{room.description}</p>
          </div>
        </section>
        <section className="notice">
          <div><i class="fas fa-star"></i>確保預訂資格無需任何費用。您將於入住期間付款。</div>
        </section>
        <form>
          <span className="tag">訂房資料</span>
          <Input 
            type="date"
            id="checking"
            label="入住日期"
          />
          <Input 
            type="date"
            id="checkout"
            label="退房日期"
          />
          <p className="des">歡迎您的蒞臨，誠摯為您服務2晚。</p>
          <Input 
            type="text"
            id="last-name"
            label="姓氏(英文)"
            placeholder="例：Weng"
          />
          <Input 
            type="text"
            id="first-name"
            label="姓名(英文)"
            placeholder="例：Yuri-Han"
          />
          <Input 
            type="select"
            id="title"
            label="稱謂"
            />
          <Input 
            type="phone"
            id="phone"
            label="聯絡電話"
            placeholder="例：0932-123-123"
          />
          <Input 
            type="email"
            id="email"
            label="電子信箱"
            placeholder="小心不要打錯了，訂房確認函會寄到電子信箱喔"
          />
          <div className="extra">
            <h4>額外加價服務</h4>
            <Input 
              type="checkbox"
              id="brackfast"
              label="早餐 $ 320 / 1人"
            />
            <Input 
              type="checkbox"
              id="rent-vent"
              label="租車旅遊 $ 2,500 / 1日"
            />
          </div>
          <Link to="/orderComplete">
            <button>確認訂房</button>
          </Link>
        </form>
      </main>
    )
  }
}

class OrderCompletePage extends React.Component { 
  constructor(props) {
    super(props)
    this.state={
      room: ''
    }
  }
  
  componentDidMount() {
    //const id = this.props.routeProps.match.params.id
    axios
      .get(`${BASE_URL}/room/${id}`)
      .then(res => { 
        this.setState({room: res.data.room[0]})    
    }).catch(err => console.log(err))
  }
  
  render() {
    const { room } = this.state
    if (!room) return null
    
    return (
      <main className="complete-page">
        <section>        
          <div className="col">
            <img src={room.imageUrl[0]} alt="room" className="room" />
            <h4>{room.name}</h4>
            <p>入住日期：2019年2月12日~2019年2月14日</p>
            <p>入住人數：1人</p>
            <h3>總價 $ 3200</h3>
          </div>
           <span className="tag">完成訂單</span>
          <div className="col">
            <h3>親愛的Weng女士：</h3>
            <h2>訂單編號：1920181017</h2>
            <p className="des">您已成功預約了{room.name}此房型，期待您當天的蒞臨。訂房確認函已寄至sry55423@gmail.com，請立即前往查詢訂單。</p>
            <Link to="/">
              <button>返回首頁</button>
            </Link>
            <p className="mark">如有任何變更或取消需求，請撥打客服專線0800-520-141</p>
          </div>
        </section>
      </main>
    )
  }
}

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