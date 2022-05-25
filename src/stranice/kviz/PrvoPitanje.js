import React, { useState } from 'react';
import '../../App.css';



function PrvoPitanje({}) {

  const  [counter1, setCounter1] = useState(3)
  
  
  var count1 = 0
  function check(){
    var which = document.getElementsByName("q");
    var len = which.length

    for(var i=0; i < len; i++){
      if(which[i].checked){
        if(which[i].value  === "1"){
          count1 = 1
        }else if(which[i].value  === "2"){
          count1 = 2
        }else if(which[i].value  === "3"){
          count1 = 3
        }else if(which[i].value  === "4"){
          count1 = 4
        }else{
          count1 = 5
        }
    
        setCounter1(count1)
        
        
  
      }
      
  }

  
  }

  


  console.log(counter1)
 
  

  return (
    <div className="PrvoPitanje">
      <div>
      <p className='text-pitanje'>
        If you had to punch someone, who would you punch?
      </p>
      <div className="checklist">
      

        <div>
        1
        <label class="custom-button lefttop">
            <label></label>
            <input type="radio" value = "1" name="q" id = "1" onClick={(e) => {check();}}/>
            <span class="checkmark"></span>
        </label>

        <label class="custom-button righttop">
        <label></label>
            <input type="radio" value="2" name="q" id="2" onClick={(e) => {check();}}/>
            <span class="checkmark"></span>
        </label>

        <label class="custom-button leftbottom">
          
            <input type="radio" value="3" name="q" id="3" onClick={(e) => {check();}}/>
            <span class="checkmark"></span>
        </label>

        <label class="custom-button rightbottom">
          
            <input type="radio" value="4" name="q" id="4" onClick={(e) => {check();}}/>
            <span class="checkmark"></span>
        </label>
        <label class="custom-button rightbottom">
          
            <input type="radio" value="5" name="q" id="5" onClick={(e) => {check();}}/>
            <span class="checkmark"></span>
        </label>
        5
        </div>

















        
      </div>

      </div>
    </div>
  );
}




export default PrvoPitanje;