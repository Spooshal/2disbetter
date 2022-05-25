
import './App.css';

import React, { useContext } from "react";
import { ThemeContext } from './stranice/theme/ThemeContext';

function Footer() {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
  return (
    <div className="Ostatak" style={{background: theme.bg}}>
            <div className="card" style={{color: theme.text}}>
          <div className="cards left" style={{background: theme.background, border: theme.border, boxShadow: theme.shadow}}>

            <h1 className="card-h1">
                List
            </h1>
            <p className="card-text">Find out about my top waifus for the year</p>
            <img src={theme.smol1} className = "card-img" ></img>
          </div>
          <div className="cards right" style={{background: theme.background, border: theme.border, boxShadow: theme.shadow}}>

            <h1 className="card-h1">
                Test
            </h1>
            <p className="card-text">What girl resembles you the most?</p>
            <img src={theme.smol2} className = "card-img"></img>

          
          </div>
      
      <br></br>
      <div className="cards left" style={{background: theme.background, border: theme.border, boxShadow: theme.shadow}}>
      <h1 className="card-h1">
                Music
            </h1>
            <p className="card-text">Trending waifu music</p>
            <img src={theme.smol3} className = "card-img two"></img>

      </div>


      <div className="cards right bot" style={{background: theme.background, border: theme.border, boxShadow: theme.shadow}}>
      <h1 className="card-h1">
                2D
            </h1>
            <p className="card-text">Reasons 2D over 3D</p>
            <img src={theme.smol4} className = "card-img two"></img>

      </div>
      </div>
    </div>  
  );
}

export default Footer;