import React, { useState } from 'react'
import { FaAlignRight, FaTimes,FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link, Switch, Button, Redirect } from "react-router-dom";
import tech from '../Styles/tech/tech.jpg';
import data from '../data/data';


const Technology = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [index,setIndex] = useState(0);
  const {text, image} = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    else if (number < 0 ){
      return data.length - 1
    }
    return number;
  }
  

  const nextData = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  const prevData = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }
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
            <h1>OUR CENTURY!</h1>
            <h2>Are You With Us?</h2>
            <p>{text}</p>
            <button className='container_btn' onClick={prevData}>
            <FaArrowLeft/>
            </button>
            <button className='container_btn' onClick={nextData}>
            <FaArrowRight/>
            </button>
          </div>
          <div className='container_right'>
            <img src = {image} alt = 'coming...' className='container_img' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Technology