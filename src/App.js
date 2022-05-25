
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Prva from './stranice/Prva.js';
import Druga from './stranice/Druga.js';
import Treca from './stranice/Treca.js';
import Cetvrta from './stranice/Cetvrta.js';
import Peta from './stranice/Peta.js';
import Naslovna from './Naslovna.js';
import ThemeContextProvider from './stranice/theme/ThemeContext';
import ThemeToggle from './stranice/theme/ThemeToggle';
import Para from './parallax.js';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Router>
      <Route exact path = '/' component={Naslovna}></Route>
        <Route path = '/prva' component={Prva}></Route>
        <Route path = '/druga' component = {Druga}></Route>
        <Route path = '/treca' component = {Treca}></Route>
        <Route path = '/cetvrta' component = {Cetvrta}></Route>
        <Route path = '/peta' component = {Peta}></Route>
      </Router>
      </ThemeContextProvider>

      
    </div>



    
  );
}

export default App;
