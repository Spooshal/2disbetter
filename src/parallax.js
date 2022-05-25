import Header from './Header'
import React, { useContext } from "react";
import { ThemeContext } from './stranice/theme/ThemeContext';
import './App.css';

function Footer() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;


  return (
    <div className="Para">
        <Header></Header>
        <div class="parallax" style={{backgroundImage: `url(${theme.src})`, color: theme.text}}>
        <div class="mainn">
          <h1>
            Welcome <br></br> and enjoy!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;