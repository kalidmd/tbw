import React, { useState } from 'react'
import '../styles/navbar.css'
import TbwLogo from "../assets/logo/TBW_White_Transparent.png"

function NavBar() {
  // -----navbar scroll state-----
  const [navBar, setNavBar] = useState(false);
  const [backToTop, setBackToTop] = useState(false)

  const scrollNavbar = () => {
    if(window.scrollY >= 25){
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  window.addEventListener('scroll', scrollNavbar);  

  const scrollBack = () => {
    if(window.scrollY >= 250){
      setBackToTop(true)
    } else {
      setBackToTop(false)
    }
  }

  window.addEventListener('scroll', scrollBack);    

  return (
    <div>
      <nav id="nav-bar" className={navBar ? "nav-bar active": "nav-bar"}>
        <div className="nav-width">
          <img className="tbw-logo" src={TbwLogo} alt="logo"/>
        </div>
      </nav>

      <a href="#qoute">
        <button className={backToTop ? "back-to-top active" : "back-to-top"}>
            <div className="arrow up"></div>
        </button>
      </a>
    </div>
  )
}

export default NavBar