import React, { useState } from 'react'
import { FaAlignRight, FaTimes, FaSistrix } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link, Switch, Button, Redirect } from "react-router-dom";
import crew from '../Styles/crew/crew.jpeg'

const Crew = () => {
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
            <h1>SOMETHING INTERESTING...</h1>
            <h2>Keep reading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper ipsum erat, ac pulvinar arcu pellentesque id. Morbi ante lorem, congue quis urna vel, tempus fringilla dolor. In at pharetra nibh. Pellentesque ac lorem tellus. Cras tincidunt pharetra mi ac feugiat. Suspendisse dapibus, libero id scelerisque accumsan, dui justo consectetur mi, at facilisis ligula augue et neque. </p>
            <button className='container_btn'>
              <p3>Click For Call</p3>
            </button>
          </div>
          <div className='container_right'>
            <img src = {crew} alt = 'coming...' className='container_img' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Crew