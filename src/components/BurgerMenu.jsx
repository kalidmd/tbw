import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/burgermenu.css'
// ---PAGES---
import Home from '../pages/Home';
import Attend from '../pages/Attend';
import Videos from '../pages/Videos';
import Blog from '../pages/Blog';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';

function BurgerMenu(props) {
  return (
    <BrowserRouter>
        <Menu>
            <NavLink className={"menu-item"} to={"/"}>
                HOME
            </NavLink>
            <NavLink className={"menu-item"} to={"/attend"}>
                ATTEND
            </NavLink>
            <NavLink className={"menu-item"} to={"/videos"}>
                VIDEOS
            </NavLink>
            <NavLink className={"menu-item"} to={"/blog"}>
                BLOG
            </NavLink>
        </Menu>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/attend" element={<Attend/>}/>
            <Route path="/videos" element={<Videos/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default BurgerMenu