import React from 'react'
import logo from '../../Images/react.png';

function Header() {
  return (
    <div>
      <img src={logo} alt="" style={{height:"35px",verticalAlign:"top"}}></img>{" "}
      <span className = "h2 pt-4 text-white-50">React Course - ReduxOpedia</span>
    </div>
  )
}

export default Header
