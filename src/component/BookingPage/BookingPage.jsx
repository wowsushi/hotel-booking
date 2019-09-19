import React from 'react'
import { Link } from 'react-router-dom'

import Input from '../Input'
import TopBar from '../TopBar'
import Calander from '../Calendar'

const fullFormat = 'YYYY年MM月DD日';

class BookingPage extends React.Component {
  handleSubmit = () => {

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
    subtotal,
    guest,
    handleValueChange
   } = this.props

   if (!selectedRoom.imageUrl) return null

   return (
     <main className="booking-page">
       <h2 className="title">訂單內容</h2>
       <section className="booking-banner">
         <img src={selectedRoom.imageUrl[0]} alt="room" className="banner-img"/>
         <TopBar
             room={selectedRoom}
             buttonName="取消"
             linkTo="/"
         />
         <div className="content">
           <h3>總價 NT {subtotal}</h3>
           <ul>
             <li><i className="fas fa-calendar-alt"></i>入住日期：
              { startValue? startValue.format(fullFormat) : ''} ~ { endValue? endValue.format(fullFormat) : ''}
            </li>
             <li><i className="fas fa-user"></i>入住人數：大人 {guest.adult} 人，小孩 {guest.child} 人</li>
             <li><i className="fas fa-utensils"></i>不含早餐</li>
           </ul>
           <p>{selectedRoom.description}</p>
         </div>
       </section>
       <section className="notice">
         <div><i className="fas fa-star"></i>確保預訂資格無需任何費用。您將於入住期間付款。</div>
       </section>
       <form>
         <span className="tag">訂房資料</span>
         <Calander
          startValue={startValue}
          endValue={endValue}
          startOpen={startOpen}
          endOpen={endOpen}
          onStartOpenChange={onStartOpenChange}
          onEndOpenChange={onEndOpenChange}
          onStartChange={onStartChange}
          onEndChange={onEndChange}
          disabledStartDate={disabledStartDate}
          getSubTotal={this.props.getSubTotal}
         />
         <p className="des">歡迎您的蒞臨，誠摯為您服務2晚。</p>
         <Input
           type="text"
           id="lastName"
           label="姓氏(英文)"
           placeholder="例：Weng"
           handleValueChange={handleValueChange}
         />
         <Input
           type="text"
           id="firstName"
           label="姓名(英文)"
           placeholder="例：Yuri-Han"
           handleValueChange={handleValueChange}
         />
         <Input
           type="select"
           id="title"
           label="稱謂"
           handleValueChange={handleValueChange}
           />
         <Input
           type="phone"
           id="phone"
           label="聯絡電話"
           placeholder="例：0932-123-123"
           handleValueChange={handleValueChange}
         />
         <Input
           type="email"
           id="email"
           label="電子信箱"
           placeholder="小心不要打錯了，訂房確認函會寄到電子信箱喔"
           handleValueChange={handleValueChange}
         />
         <div className="extra">
           <h4>額外加價服務</h4>
           <Input
             type="checkbox"
             id="breakfast"
             label="早餐 $ 320 / 1人"
           />
           <Input
             type="checkbox"
             id="rentVent"
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
