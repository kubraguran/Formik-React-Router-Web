import React, { useState } from 'react'
import { FaAlignRight, FaTimes, FaSistrix } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link, Switch, Button, Redirect } from "react-router-dom";
import images from '../Styles/images/images.jpg'
import Styles from '../Styles/styles.scss'


const Dashboard = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className={click ? 'navbar_dropDown' : 'navbar'}>
        <a href='#' className='logo'>Join</a>
        <div className='navbar_bars' onClick={handleClick}>
         {click ? <FaTimes /> : <FaAlignRight/>} 
        </div>
        <div className='navbar_menu'>
          <div className='menu_links'>
          <span >
          <input type= 'search'  placeholder= 'Search...' className='input'></input>
          </span>
          <ul>
            <li> 
            <Link to = "/dashboard">HOME</Link> 
            </li>
            <li>
            <Link to = "/destination" >DESTINATION</Link>
            </li>
            <li>
            <Link to = "/crew" >CREW</Link>
            </li>
            <li>
            <Link to = "/technology" >TECHNOLOGY</Link>
            </li>
          </ul>
          </div>
        </div>
        </nav>
        <div className='hero'>
        <div className='hero_container'>
          <div className='container_left'>
            <h1>Are You Ready</h1>
            <h2>Be Ready</h2>
            <p>In sed finibus tellus. Sed tempor finibus urna quis facilisis. Maecenas viverra maximus quam. Praesent nibh justo, lacinia eget tincidunt nec, eleifend et ex. Morbi pellentesque tellus sed erat tempor, at facilisis augue iaculis. Praesent sed neque at elit dignissim lacinia. In at molestie est. Nam dictum a ipsum id luctus. Quisque non tellus sit amet augue luctus commodo. Donec venenatis metus eu dui lobortis, efficitur aliquam lacus interdum. Sed eu quam massa. Aliquam eleifend id nisl ac tempus. Aenean maximus erat augue, eget euismod libero rhoncus sit amet.</p>
            <button className='container_btn'>
              <p3>Join Now</p3>
            </button>
          </div>
          <div className='container_right'>
            <img src = {images} alt = 'coming...' className='container_img' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard


{/* 



*/}