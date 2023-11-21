import React, { useState } from 'react'
import '../styles/navbar.css'
import TbwLogo from "../assets/logo/TBW_White_Transparent.png"

function NavBar() {
  // -----navbar scroll state-----
  const [navBar, setNavBar] = useState(false);

  const scrollNavbar = () => {
    if(window.scrollY >= 25){
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', scrollNavbar);  

  return (
    <div>
      <nav id="nav-bar" className={navBar ? "nav-bar active": "nav-bar"}>
        <div className="nav-width">
          <a style={{fontSize: "0"}} href="/"> 
            <img className="tbw-logo" src={TbwLogo} alt="logo"/> 
          </a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar