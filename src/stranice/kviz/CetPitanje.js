
import '../../App.css';

function CetPitanje() {
  return (
    <div className="CetPitanje">
      <div>
       <p className='text-pitanje'>
              Whos more superior?
            </p>
            <div className = "checklist">
            <div>
      
      <label class="custom-button lefttop">
          
          <input type="radio" value = "16" name="z" id = "16" />
          <span class="checkmark"></span>
      </label>

      <label class="custom-button righttop">
        
          <input type="radio" value="17" name="z" id="17"/>
          <span class="checkmark"></span>
      </label>

      <label class="custom-button leftbottom">
        
          <input type="radio" value="18" name="z" id="18"/>
          <span class="checkmark"></span>
      </label>

      <label class="custom-button rightbottom">
        
          <input type="radio" value="19" name="z" id="19"/>
          <span class="checkmark"></span>
      </label>
      <label class="custom-button rightbottom">
        
          <input type="radio" value="20" name="z" id="20"/>
          <span class="checkmark"></span>
      </label>

      </div>
            </div>
            </div>
    </div>
  );
}

export default CetPitanje;