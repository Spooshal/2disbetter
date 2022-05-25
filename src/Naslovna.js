import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import React, { useContext } from "react"; 
import ThemeContextProvider, {ThemeContext} from "./stranice/theme/ThemeContext";
import Parallax from './parallax';
import ThemeToggle from './stranice/theme/ThemeToggle';
import Ostatak from './Ostatak';

function Naslovna() {

  const theme = useContext(ThemeContext)

  return (
    <div className="Naslovna">
      

      
      <ThemeContextProvider>
      <Header></Header>
     <Parallax/>
    
     <Ostatak/>
     <ThemeToggle/>
     <Footer></Footer>
     </ThemeContextProvider>



     
    </div>
  );
}

export default Naslovna;
