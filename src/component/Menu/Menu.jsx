import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assect/img/logo.svg';

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
          <li><Link to="/"><i className="fas fa-user-tie"></i>關於我們</Link></li>
          <li><Link to="/"><i className="fas fa-bed"></i>客房介紹</Link></li>
          <li><Link to="/"><i className="fas fa-wine-glass"></i>住宿服務</Link></li>
          <li><Link to="/"><i className="fas fa-map-marked-alt"></i>交通指引</Link></li>
          <li><Link to="/"><i className="far fa-newspaper"></i>最新消息</Link></li>
      </ul>  
    </nav>
  )
}

export default Menu