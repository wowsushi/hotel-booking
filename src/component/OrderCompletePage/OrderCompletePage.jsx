import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { BASE_URL, id } from '../../constant'

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

export default OrderCompletePage