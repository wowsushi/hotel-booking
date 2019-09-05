import React from 'react'
import { Link } from 'react-router-dom'

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

export default TopBar