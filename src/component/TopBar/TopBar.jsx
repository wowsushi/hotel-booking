import React from 'react'
import { withRouter } from 'react-router-dom'

class TopBar extends React.Component {
  handleSubmit = e => {
    if (this.props.isGuestValid) {
      if (this.props.isGuestValid()) {
        this.props.history.push(this.props.linkTo)
      } else {
        alert('大人加小孩人數超過房間人數限制，或未選擇人數，請重新選擇人數。')
      }
    } else {
      this.props.history.push(this.props.linkTo)
    }
  }

  render() {
    const { room, buttonName } = this.props
    return (
      <section className="top-bar">
        <span className="hot-tag">hot</span>
        <h2>房型名稱：{room.name}</h2>
          <button onClick={this.handleSubmit}>{buttonName}</button>
      </section>
    )
  }
}

export default withRouter(TopBar)
