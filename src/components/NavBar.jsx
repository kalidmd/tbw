import React, { useState } from 'react'
import '../styles/navbar.css'
import TbwLogo from "../assets/logo/TBW_White_Transparent.png"
// import DarkModeIcon from "../assets/icon/sun-white.png";
// import YoutubeIcon from "../assets/icon/youtube-white.png";

function NavBar(props) {

  // -----navbar scroll state-----
  const [navBar, setNavBar] = useState(false);
  
  const scrollNavbar = () => {
    if(window.scrollY >= 30){
      setNavBar(true)
    }
    else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', scrollNavbar);  
  

  return (
      <nav className={navBar ? "nav-bar active": "nav-bar"}>
        <div className="nav-width">
          <img className="tbw-logo" src={TbwLogo} alt="logo"/>
        </div>
      </nav>
  )
}

export default NavBar