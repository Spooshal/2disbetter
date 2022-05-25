

import '../App.css';
import Header from '../Header';
import Footer from '../Footer';
import File from './File';
import React, {useState, useEffect, useRef} from 'react';

function Naslovna() {
    const [data, setData] = useState([{textt: '2d girls age really well, 3d girls dont.'}]);
    const [other, setOther] = useState(0);
    const broj = 1;
    const Send = (textt) =>{
      setData([...data, {textt:textt}])

    }
    
    const counter = useRef(0)
    const [counter2, setCounter2] = useState(0);

    const ref = useRef();

    useEffect(() => {
      counter.current = counter.current + 1;
      setCounter2((counter2) => counter2 + 1);
     
    }, [data])

    useEffect(() => {
      counter.current = 0;
      
    }, [])



  return (
    <div className="App">
        <Header></Header>
        <div className='invis'></div>
      
        <div className = "divv">
          <h1>Post reasons why 2d girls are better than 3d girls</h1>
          	<ol type='1'>
          <li> 2d girls are more attractive. Even deformed 2d girls are attractive (like Hanako from Katawa Shoujo) but there is only a small amount of women who are attractive without makeup.</li>
          <li> 2d girls have perfect proportions and aren't fat, the majority of 3d girls are fat and have bad proportions.</li>
          <li> 2d girls are not shallow and have loyalty, 2d girls will accept an ugly short male but 3d girls won't, and if a 3d girl did, she would cheat on him the moment someone who isn't ugly and short showed interest in her.</li>
          <li> 2d girls are usually virgins but 3d girls have usually had 10 partners at least by their mid 20s. Usually even more than that too because they spend their youth having sex with as many attractive males as possible ("exploring their sexuality").</li>
          <li> 2d girls have perfect personalities. They don't lie, they are kind, understanding, caring, etc. 3d girls lie often and are not kind, understanding or caring.</li>
          <li> 2d girls don't see relationships pragmatically like 3d girls. To a 3d female, relationships are a way to better their lives. Dating a very high tall guy will get them status so they will date one just for that reason. Dating a rich guy will get them easy money so they will date one just for that reason. Most 3d girls see men as tools to better their lives and if you no longer serve the purpose you had when she got in a relationship with you, you will be replaced with someone else. 2d girls aren't like this.</li>
          <li> 2d girls dress and act better. 3d girls think dressing with as little clothes as possible is desirable, when really, it looks terrible and very generic, since nearly every 3d girl dresses the same way. 2d girls also do not complain just for the sake of complaining and act better (less swearing, less drunk, etc.)</li>
          <li> 2d girls look more unique. All hair colors and eye colors are common with 2d girls making them have more unique appearances. Most 3d girls look very similar, especially if they are from the same race.</li>
          <li> 2d girls have interests. Like reading, chess, art, etc. Most 3d girls do not. They're "hobbies" are talking a lot and using social media.</li>
          <li> 2d girls are funny, 3d girls aren't.</li>
    
          {data.map(objectdata => (<li>{objectdata.textt}</li>))}
            </ol>
         
          <br />
          <h1 className = "p"> 2d girls are objectively better than 3d girls both appearance and personality wise. The only con to them is you can't talk to them or touch them.</h1>

          
         <File send={Send}></File>
         <p>How many you have added</p>
          <p>{counter.current}</p>
        </div>

        <Footer></Footer>
    </div>
  );
}

export default Naslovna;