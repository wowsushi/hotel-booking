import React from 'react'
import { Link } from 'react-router-dom'

import { fullFormat } from '../../constant'

class OrderCompletePage extends React.Component {
  render() {
    const {
      routeProps,
      selectedRoom,
      startValue,
      endValue,
      guest,
      subtotal,
      form
   } = this.props

   if (!selectedRoom) {
    routeProps.history.replace('/')
    return null
  }

    return (
      <main className="complete-page">
        <section>
          <div className="col">
            <img src={selectedRoom.imageUrl[0]} alt="room" className="room" />
            <h4>{selectedRoom.name}</h4>
            <p>入住日期：{startValue.format(fullFormat)}~{endValue.format(fullFormat)}</p>
            <p>入住人數：大人：{guest.adult} 人，小孩：{guest.child} 人</p>
            <h3>總價 $ {subtotal}</h3>
          </div>
           <span className={routeProps.match.params.status.includes('success')? "tag success" : "tag fail"}>
             {
               routeProps.match.params.status.includes('success')
                ? '完成訂單'
                : '訂單失敗'
             }
          </span>
          <div className="col">
            <h3>親愛的 {form.lastName.value}：</h3>
            <h2>
              {
                routeProps.match.params.status.includes('success')
                 ? '訂單編號：1920181017'
                 : '預約時間已被人預訂'
              }
            </h2>
            <p className="des">
              {
                routeProps.match.params.status.includes('success')
                ? `您已成功預約了 ${selectedRoom.name} 此房型，期待您當天的蒞臨。訂房確認函已寄至 ${form.email.value} ，請立即前往查詢訂單。`
                : `抱歉，由於 ${selectedRoom.name} 此房型太熱門了，您晚了一步，已被其他房客預約走了，不妨看看我們其他房型喔，相信其他房型也不會讓您失望的，讓您有賓至如歸的感覺。`
              }
            </p>
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

export default OrderCompletePage
