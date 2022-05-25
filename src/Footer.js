import React, { useContext } from "react";
import { ThemeContext } from './stranice/theme/ThemeContext';

import './App.css';

function Footer() {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="Footer" style={{background: theme.background}}>
      
    </div>
  );
}

export default Footer;