
import '../../App.css';

function TrecePitanje() {
  return (
    <div className="TrecePitanje">
        <div>
       <p className='text-pitanje'>
                Define life:
            </p>
            <div className = "checklist">
              <div>
      
      <label class="custom-button lefttop">
          
          <input type="radio" value = "11" name="z" id = "11" />
          <span class="checkmark"></span>
      </label>

      <label class="custom-button righttop">
        
          <input type="radio" value="12" name="z" id="12"/>
          <span class="checkmark"></span>
      </label>

      <label class="custom-button leftbottom">
        
          <input type="radio" value="13" name="z" id="13"/>
          <span class="checkmark"></span>
      </label>

      <label class="custom-button rightbottom">
        
          <input type="radio" value="14" name="z" id="14"/>
          <span class="checkmark"></span>
      </label>
      <label class="custom-button rightbottom">
        
          <input type="radio" value="15" name="z" id="15"/>
          <span class="checkmark"></span>
      </label>

      </div>
            </div>
            </div>
    </div>
  );
}

export default TrecePitanje;