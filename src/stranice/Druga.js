import "../App.css";
import Header from "../Header";
import "../druga.css";
import Footer from "../Footer";
import React, { useState } from "react";
import tohka from '../slike/tohkakviz.jpg';
import yor from '../slike/yorkviz.jpg';
import mai from '../slike/maikviz.jpg';
import kaguya from '../slike/kaguyakviz.jpg';
import mugi from '../slike/mugikviz.jpg';
import qstn from '../slike/qstn.png';

let counterr = 0; 
var count1 = 3;
var count2 = 3;
var count3 = 3;
var count4 = 3;
var count5 = 3;
function Druga() {
  let text = "Next";

  const [page, setPage] = useState(0);

  const Pitanja = ["Start the game?", "Jedan", "Dva", "Tri", "Cetvrto", "Peto", "Hey, ready?","This is you!"];

  
  function check1() {
    var which = document.getElementsByName("q");
    var len = which.length;

    for (var i = 0; i < len; i++) {
      if (which[i].checked) {
        if (which[i].value === "1") {
          count1 = 1;
        } else if (which[i].value === "2") {
          count1 = 2;
        } else if (which[i].value === "3") {
          count1 = 3;
        } else if (which[i].value === "4") {
          count1 = 4;
        } else {
          count1 = 5;
        }
      }
    }
    console.log(count1);
  }


  function check2() {
    var which = document.getElementsByName("z");
    var len = which.length;

    for (var i = 0; i < len; i++) {
      if (which[i].checked) {
        if (which[i].value === "6") {
          count2 = 1;
        } else if (which[i].value === "7") {
          count2 = 2;
        } else if (which[i].value === "8") {
          count2 = 3;
        } else if (which[i].value === "9") {
          count2 = 4;
        } else {
          count2 = 5;
        }
      }
    }
    console.log(count2);
  }


  function check3() {
    var which = document.getElementsByName("a");
    var len = which.length;

    for (var i = 0; i < len; i++) {
      if (which[i].checked) {
        if (which[i].value === "11") {
          count3 = 1;
        } else if (which[i].value === "12") {
          count3 = 2;
        } else if (which[i].value === "13") {
          count3 = 3;
        } else if (which[i].value === "14") {
          count3 = 4;
        } else {
          count3 = 5;
        }
      }
    }
    console.log(count3);
  }


  function check4() {
    var which = document.getElementsByName("b");
    var len = which.length;

    for (var i = 0; i < len; i++) {
      if (which[i].checked) {
        if (which[i].value === "16") {
          count4 = 1;
        } else if (which[i].value === "17") {
          count4 = 2;
        } else if (which[i].value === "18") {
          count4 = 3;
        } else if (which[i].value === "19") {
          count4 = 4;
        } else {
          count4 = 5;
        }
      }
    }
    console.log(count4);
  }

  
  function check5() {
    var which = document.getElementsByName("j");
    var len = which.length;

    for (var i = 0; i < len; i++) {
      if (which[i].checked) {
        if (which[i].value === "21") {
          count5 = 1;
        } else if (which[i].value === "22") {
          count5 = 2;
        } else if (which[i].value === "23") {
          count5 = 3;
        } else if (which[i].value === "24") {
          count5 = 4;
        } else {
          count5 = 5;
        }
      }
    }
    console.log(count5);
  }

  function Next() {
    if (page == 6) {
        myFunction();
    } 
    counterr = count1 + count2 + count3 + count4 + count5
      setPage((currpage) => currpage + 1);
      
      console.log(counterr)
    
  }

  const PageDisplay = () => {
    if (page == 0) {
      text = "Start";

     
    } else if (page == 1) {
      text = "Next";

      return document.getElementById("prvopit").style.display = "block";
    } else if (page == 2) {
      return (
 
        document.getElementById("drugopit").style.display = "block",
        document.getElementById("prvopit").style.display = "none"

      );
    } else if (page == 3) {
      return (
    
        document.getElementById("trecepit").style.display = "block",
        document.getElementById("drugopit").style.display = "none"
      );
    } else if (page == 4) {
      return (
        
        document.getElementById("cetpit").style.display = "block",
        document.getElementById("trecepit").style.display = "none"
      );
    } else if (page == 5) {
      text = "Calculate";
      return (
        
        document.getElementById("petopit").style.display = "block",
        document.getElementById("cetpit").style.display = "none"
      );
    }else if (page == 6) {
      
      return (
       
        document.getElementById("petopit").style.display = "none",
        document.getElementById("sestopit").style.display = "block"
      );
    }
    else if (page == 7) {
      
      return (
       
        document.getElementById("sestopit").style.display = "none",
        document.getElementById("sedmopit").style.display = "block"
      );
    }
  };



  return (
    <div className="App">
      <Header></Header>

      <div className="invis"></div>

      <div className="form">
        <div className="form-container">
          <div className="titlee">
            <h1>{Pitanja[page]}</h1>
          </div>
          <div className="bodyy">
            <div style={{display:'none'}}>{PageDisplay()}</div>
              
            <div id="prvopit">
              <p className="text-pitanje">
                If you had to punch someone, who would you punch?
              </p>
              <div className="checklist">
                <div>
                  1
                  <label class="custom-button lefttop">
                    <label></label>
                    <input
                      type="radio"
                      value="1"
                      name="q"
                      id="1"
                      onClick={() => {
                        check1();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom-button righttop">
                    <label></label>
                    <input
                      type="radio"
                      value="2"
                      name="q"
                      id="2"
                      onClick={() => {
                        check1();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom-button leftbottom">
                    <input
                      type="radio"
                      value="3"
                      name="q"
                      id="3"
                      onClick={() => {
                        check1();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="4"
                      name="q"
                      id="4"
                      onClick={() => {
                        check1();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="5"
                      name="q"
                      id="5"
                      onClick={() => {
                        check1();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  5
                </div>
              </div>
            </div>

            <div id="drugopit">
              <p className="text-pitanje">
                Picture a scenario: A big dinosaur is in front of you, what do
                you do?
              </p>
              <div className="checklist">
                <div>
                  1
                  <label class="custom-button lefttop">
                    <input
                      type="radio"
                      value="6"
                      name="z"
                      id="6"
                      onClick={() => {
                        check2();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button righttop">
                    <input
                      type="radio"
                      value="7"
                      name="z"
                      id="7"
                      onClick={() => {
                        check2();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button leftbottom">
                    <input
                      type="radio"
                      value="8"
                      name="z"
                      id="8"
                      onClick={() => {
                        check2();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="9"
                      name="z"
                      id="9"
                      onClick={() => {
                        check2();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="10"
                      name="z"
                      id="10"
                      onClick={() => {
                        check2();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  5
                </div>
              </div>
            </div>

            <div id="trecepit">
              <p className="text-pitanje">Define life:</p>
              <div className="checklist">
                <div>
                  1
                  <label class="custom-button lefttop">
                    <input
                      type="radio"
                      value="11"
                      name="a"
                      id="11"
                      onClick={() => {
                        check3();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button righttop">
                    <input
                      type="radio"
                      value="12"
                      name="a"
                      id="12"
                      onClick={() => {
                        check3();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button leftbottom">
                    <input
                      type="radio"
                      value="13"
                      name="a"
                      id="13"
                      onClick={() => {
                        check3();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="14"
                      name="a"
                      id="14"
                      onClick={() => {
                        check3();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="15"
                      name="a"
                      id="15"
                      onClick={() => {
                        check3();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  5
                </div>
              </div>
            </div>

            <div id="cetpit">
              <p className="text-pitanje">Whos more superior?</p>
              <div className="checklist">
                <div>
                  1
                  <label class="custom-button lefttop">
                    <input
                      type="radio"
                      value="16"
                      name="b"
                      id="16"
                      onClick={() => {
                        check4();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button righttop">
                    <input
                      type="radio"
                      value="17"
                      name="b"
                      id="17"
                      onClick={() => {
                        check4();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button leftbottom">
                    <input
                      type="radio"
                      value="18"
                      name="b"
                      id="18"
                      onClick={() => {
                        check4();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="19"
                      name="b"
                      id="19"
                      onClick={() => {
                        check4();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="20"
                      name="b"
                      id="20"
                      onClick={() => {
                        check4();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  5
                </div>
              </div>
            </div>

            <div id="petopit">
              <p className="text-pitanje">Whos more superior?</p>
              <div className="checklist">
                <div>
                  1
                  <label class="custom-button lefttop">
                    <input
                      type="radio"
                      value="21"
                      name="j"
                      id="21"
                      onClick={() => {
                        check5();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button righttop">
                    <input
                      type="radio"
                      value="22"
                      name="j"
                      id="22"
                      onClick={() => {
                        check5();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button leftbottom">
                    <input
                      type="radio"
                      value="23"
                      name="j"
                      id="23"
                      onClick={() => {
                        check5();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="24"
                      name="j"
                      id="24"
                      onClick={() => {
                        check5();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom-button rightbottom">
                    <input
                      type="radio"
                      value="25"
                      name="j"
                      id="25"
                      onClick={() => {
                        check5();
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                  5
                </div>
              </div>
            </div>
            <div id="sestopit">
                      <h1>Ready to see the results?</h1>
                      <img src={qstn} className = "qsn"></img>
            </div>
            <div id="sedmopit">
              <div id = "test"><img src = {tohka} id = "sl1"/> <img src= {yor} id = "sl2"></img> <img src= {mai} id = "sl3"></img> <img src= {kaguya} id = "sl4"></img> <img src= {mugi} id = "sl5"></img></div>
              <div id = "texts"></div>
            </div>
          </div>
          <div id="foooter">
            <button
              disabled={page == Pitanja.length - 1}
              onClick={Next}
              className="btnkviz button button1"
              id="btnnn"
            >
              {text}
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
const myFunction = () => {

  console.log("hello")

  if (counterr <= 8) {
    let node = document.createTextNode("etooooo");
    document.getElementById("texts").append(node);
    console.log(node);
    document.getElementById("sl1").style.display = "block";
  } else if (counterr <= 13) {
    let node = document.createTextNode("No normal");
    document.getElementById("texts").append(node);
    console.log(node);
    document.getElementById("sl2").style.display = "block";
  } else if (counterr <= 18) {
    let node = document.createTextNode("You're pretty normal.");
    document.getElementById("texts").append(node);
    console.log(node);
    document.getElementById("sl3").style.display = "block";
  } else if (counterr <= 22) {
    let node = document.createTextNode("You're pretty normal.");
    document.getElementById("texts").append(node);
    console.log(node);
    document.getElementById("sl4").style.display = "block";
  } else if (counterr <= 25) {
    let node = document.createTextNode("You're pretty normal.");
    document.getElementById("texts").append(node);
    console.log(node);
    document.getElementById("sl5").style.display = "block";
  } 
};

export default Druga;
