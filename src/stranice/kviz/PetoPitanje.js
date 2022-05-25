
import '../../App.css';

function PetPitanje() {
  return (
    <div className="PetPitanje">
      <div>
       <p className='text-pitanje'>
              Whos more superior?
            </p>
            <div className = "checklist">
            <div>
      
      <label class="custom-button lefttop">
          
          <input type="radio" value = "16" name="z" id = "21" />
          <span class="checkmark"></span>
      </label>

      <label class="custom-button righttop">
        
          <input type="radio" value="17" name="z" id="22"/>
          <span class="checkmark"></span>
      </label>

      <label class="custom-button leftbottom">
        
          <input type="radio" value="18" name="z" id="23"/>
          <span class="checkmark"></span>
      </label>

      <label class="custom-button rightbottom">
        
          <input type="radio" value="19" name="z" id="24"/>
          <span class="checkmark"></span>
      </label>
      <label class="custom-button rightbottom">
        
          <input type="radio" value="20" name="z" id="25"/>
          <span class="checkmark"></span>
      </label>

      </div>
            </div>
            </div>
    </div>
  );
}

export default PetPitanje;