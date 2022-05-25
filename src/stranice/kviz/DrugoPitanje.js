
import '../../App.css';

function PrvoPitanje() {
  return (
    <div className="PrvoPitanje">
      <div>       
         <p className='text-pitanje'>
              Picture a scenario: A big dinosaur is in front of you, what do you do?
            </p>
            <div className="checklist">
      

      <div>
      
      <label class="custom-button lefttop">
          
          <input type="radio" value = "6" name="z" id = "6" />
          <span class="checkmark"></span>
      </label>

      <label class="custom-button righttop">
        
          <input type="radio" value="7" name="z" id="7"/>
          <span class="checkmark"></span>
      </label>

      <label class="custom-button leftbottom">
        
          <input type="radio" value="8" name="z" id="8" />
          <span class="checkmark"></span>
      </label>

      <label class="custom-button rightbottom">
        
          <input type="radio" value="9" name="z" id="9"/>
          <span class="checkmark"></span>
      </label>
      <label class="custom-button rightbottom">
        
          <input type="radio" value="10" name="z" id="10"/>
          <span class="checkmark"></span>
      </label>

      </div>
    </div>
    </div>
    </div>
  );
}

export default PrvoPitanje;