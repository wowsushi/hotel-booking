import React from 'react'

import qrCode from '../../assect/img/qrCode.png';
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

export default Footer