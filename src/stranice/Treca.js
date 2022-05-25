
import YoutubeEmbed from '../YoutubeEmbed';  
import '../App.css';
import Header from '../Header';
import Footer from '../Footer';

export default function Treca() {
  return (
    <div className="App">
        <Header></Header>
        <div className='invis'></div>
        
        <div className = "divv"> 
          <h1>Joshiraku - Nippon Egao Hyakkei</h1>
          <YoutubeEmbed embedId="eZIMFWAxMxQ" />
          <br></br>
          <h1>Nyanpasu - AYabure Kabure </h1>
          <YoutubeEmbed embedId="wmWX6ZGSzuE" />
          <br></br>
          <h1>Renai Circulation - Kana Hanazawa</h1>
          <YoutubeEmbed embedId = "0nVJFi29NdE" />
        </div>
        <Footer></Footer>
      </div>
  );
}

