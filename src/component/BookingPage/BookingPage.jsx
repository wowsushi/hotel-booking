import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import Input from '../Input'
import TopBar from '../TopBar'
import Calendar from '../Calendar'
import { BASE_URL, fullFormat } from '../../constant'

class BookingPage extends React.Component {
  handleSubmit = () => {
    const { form, match, validateCheck } = this.props
    let errorMsg = []
    // eslint-disable-next-line
    for (let obj in form) {
      const currentObj = validateCheck( obj, form[obj].value)
      if (!currentObj.valid) {
      errorMsg.push(currentObj.error)
      }
    }
    if (errorMsg.length > 0) {
      alert(errorMsg.join('\n'))
    } else {
      let dates = this.props.getBookedDates()
      let formData = new FormData()
      formData.append('name', form.lastName.value)
      formData.append('tel', form.phone.value)
      for (let i = 0; i < dates.length; i++) {
        formData.append(`date[${i}]`, dates[i] )
      }

      // axios({
      //   method: 'post',
      //   url: `${BASE_URL}/room/${match.params.id}`,
      //   data: formData,
      //   headers: {
      //     'Authorization':'Bearer qEyzXLEKxPOg751ZX4Klr7ahFxj4ggcnNjtLcT2142MCh7sAb3mshqLuiALu',
      //     'Accept': 'application/json,'
      //   }
      // })
      fetch(`${BASE_URL}/room/${match.params.id}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization':'Bearer qEyzXLEKxPOg751ZX4Klr7ahFxj4ggcnNjtLcT2142MCh7sAb3mshqLuiALu',
          'Accept': 'application/json,'
        }
      })
      .then(res => {
        console.log('success')
        return res.json()
      }).then(jsonData => {
        console.log(jsonData)
        jsonData.success
        ? this.props.history.replace('/orderComplete/success')
        : this.props.history.replace('/orderComplete/fail')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }


   render() {
   const {
    history,
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
    handleValueChange,
    form: {
      haveBreakfast,
      haveRentalCar
    }
   } = this.props

   if (!selectedRoom) {
     history.replace('/')
     return null
   }
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
             <li><i className="fas fa-utensils"></i>
              {haveBreakfast? '含早餐' : '不含早餐'}
            </li>
           </ul>
           <p>{selectedRoom.description}</p>
         </div>
       </section>
       <section className="notice">
         <div><i className="fas fa-star"></i>確保預訂資格無需任何費用。您將於入住期間付款。</div>
       </section>
       <form>
         <span className="tag">訂房資料</span>
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
          getSubTotal={this.props.getSubTotal}
         />
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
             id="haveBreakfast"
             label="早餐 $ 320 / 1人"
             haveBreakfast={haveBreakfast}
             handleValueChange={handleValueChange}
           />
           <Input
             type="checkbox"
             id="haveRentalCar"
             label="租車旅遊 $ 2,500 / 1日"
             haveRentalCar={haveRentalCar}
             handleValueChange={handleValueChange}
           />
         </div>
           <button onClick={this.handleSubmit}>確認訂房</button>
       </form>
     </main>
   )
 }
}

export default withRouter(BookingPage)
