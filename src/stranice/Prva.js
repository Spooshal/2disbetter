import { Component } from 'react';
import '../App.css';
import Dijete from '../Dijete';
import Header from '../Header';
import Footer from '../Footer';
import para2 from '../slike/para2.png';
import bread from '../slike/bread.jpg';
import twond from '../slike/2ndpic.png';
import grompo from '../slike/smite.jpg';
import bunny from '../slike/bunny.jpg';

export class Prva extends Component {

  state = {
    ime: '',
    prezime: '',
    lozinka: '',
  }



  render() {

    const an1 = {
      name: "Yatogami",
      prezime: "Tohka"
    }
    const an2 = {
      name: "Kuriyama",
      prezime: "Mirai"
    }
    const an3 = {
      name: "Lord",
      prezime: "Grompulus"
    }
    const an4 = {
      name: "Sakurajima",
      prezime: "Mai"
    }


    return (
      <div className="App">
        
        <Header></Header>
       
       <div className='invis'></div>

        <table className='tablee'>
          <tr>
            <td rowSpan={1}><h1 className="likes-text1">Likes alot of bread <br></br> Enjoyes spending time <br></br> with the MC</h1> </td>
            <td rowSpan={4}><p><Dijete slanje1={an1} slanje2={an2} slanje3={an3} slanje4={an4}></Dijete></p></td>
          </tr>
          <tr>
            <td><h1 className="likes-text2">A bit quirky<br></br> Wants to kill the MC</h1></td>
          </tr>
          <tr>
            <td><h1 className="likes-text3">Amazing <br></br> Beautiful</h1></td>
          </tr>
          <tr>
            <td><h1 className="likes-text4">No one can see her<br></br> Plays hard to get <br></br>with the MC</h1></td>
          </tr>
        </table>

        <Footer></Footer>
      </div>
    );
  }
}

export default Prva;