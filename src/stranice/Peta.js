
import { Component } from 'react';
import '../App.css';
import Header from '../Header';

export class Peta extends Component { 
  
  state  ={
    ime:'',
    prezime:'',
    lozinka:'',
  }
  onSubmit=() => {console.log(this.state)}
  render()
  { 
    return(
      <div className = "Component">
        <Header></Header>
        <div className = "divv">
          <h1>Moje ime je {this.state.ime}</h1>
          <form>
            <input placeholder = 'Title' value = {this.state.ime} onChange = {e =>this.setState({ime: e.target.value})}/>
            <input placeholder = 'prezime' value = {this.state.prezime} onChange = {e =>this.setState({prezime: e.target.value})}/>
            <input placeholder = 'lozika' value = {this.state.lozinka} onChange = {e =>this.setState({lozinka: e.target.value})}/>
            <button onClick = {()=>this.onSubmit()}>Potvrdi</button>
          </form>
        </div>
    </div>
    );
    
  }
}

export default Peta;