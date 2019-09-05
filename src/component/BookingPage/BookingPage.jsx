import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Input from '../Input'
import TopBar from '../TopBar'

import { BASE_URL } from '../../constant'

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

export default BookingPage