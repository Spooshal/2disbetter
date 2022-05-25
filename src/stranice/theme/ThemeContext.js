import React, { Component, createContext } from "react";
import slia1 from '../../slike/para.png'
import slia2 from '../../slike/para2.png'
import slia3 from '../../slike/purp1.jpg'
import slia4 from '../../slike/purp2.jpg'
import slia5 from '../../slike/purp3.jpg'
import slia6 from '../../slike/purp4.jpg'
import smoll1 from '../../slike/smol1.jpg';
import smoll2 from '../../slike/smol2.jpg';
import smoll3 from '../../slike/smol3.jpg';  
import smoll4 from '../../slike/smol4.jpg'; 

export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {bg: "#f4c0c0", src: slia1, smol1: smoll1, smol2: smoll2, smol3: smoll3, smol4: smoll4},
    dark: { text: 'white', background: 'rgb(63, 11, 48)', bg: "rgb(39, 7, 30)", src: slia2, nav: 'transparent', border: 'solid rgb(63, 11, 48) 1px', shadow: '10px 10px 5px rgb(63, 11, 48)', smol1: slia3,smol2: slia4,smol3: slia5,smol4: slia6}
  };
  toggleTheme = () => {
    
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;