import React, { useContext } from "react";
import { ThemeContext } from './stranice/theme/ThemeContext';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
function Header() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;


  const [navbar, setNavbar] = useState(false)
 
  //navbar scroll changeBackground function
  const changeBackground = () => {
    if(window.scrollY >= 200){
      console.log(window.scrollY)
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className = {navbar ? 'Header' : 'Header active'} style={{background: theme.nav}}>
      <Link to = '/'><button class="button button1" style={{background: theme.background, color: theme.text}}>Home</button></Link>
        <Link to = '/prva'><button class="button button1" style={{background: theme.background, color: theme.text}}>List</button></Link>
        <Link to = '/druga'><button class="button button1" style={{background: theme.background, color: theme.text}}>Character test</button></Link>
        <Link to = '/treca'><button class="button button1" style={{background: theme.background, color: theme.text}}>Music</button></Link>
        <Link to = '/cetvrta'><button class="button button1" style={{background: theme.background, color: theme.text}}>2D girls</button></Link>
            </div>
  );
}


export default Header;  