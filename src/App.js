import { useState } from 'react';
import './App.css';
import imageSrc from './assets/Frame47911.png';

function App() {
  const [inputs, setInputs] = useState({
    state: "",
    city : "",
    pincode: 0,
    college: "",
    branch:"",
    year:0,
    refferal:"",
    how:"",
    degree:"",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className='wrapper'>
      
      <form onSubmit={handleSubmit} className='form'>
        <div className='heading'>
          <h2 className='heading'>SPP REGISTRATION</h2>
        </div>
        <div className='content'>
        <label className='state'>State<span className="required"></span>:
        <input 
          type="text" 
          name="state" 
          value={inputs.state || ""} 
          onChange={handleChange}
          required
          className='inp instate'
        />
        </label>
         
        

        <label className='city'>City<span className="required"></span>:
          <br/>
          <input 
            type="text" 
            name="city" 
            value={inputs.city || ""} 
            onChange={handleChange}
            required
            className='inp incity'
          />
        </label>
         
         
        <label className='pincode'>Pincode<span className="required"></span>:
          <br/>
          <input 
            type="number" 
            name="pincode" 
            value={inputs.pincode || ""} 
            onChange={handleChange}
            required
            className='inp inpincode'
          />
        </label>
         
         

        <label className='college'>College<span className="required"></span>:
        <input 
          type="text" 
          name="college" 
          value={inputs.college|| ""} 
          onChange={handleChange}
          required
          className='inp incollege'
        />
        </label>
         
         

        <div className='fifth'>
          <label for="degree" className='degree'>Degree<span className="required"></span>:
            <br/>
            <select id="degree" name="degree" required className='sel seldegree'>
              <option value="" disabled selected></option>
              <option value="B.tech.">B.tech.</option>
              <option value="M.tech">M.tech</option>
              <option value="B.Sc.">B.Sc.</option>
              <option value="M.Sc.">M.Sc.</option>
              <option value="B.com.">B.com.</option>
              <option value="BBA.">BBA.</option>
              <option value="MBA.">MBA.</option>
              <option value="LLB">LLB</option>
              <option value="other">other</option>
            </select> 
          </label>
          
          
          <label className='year'>Year Of Graduation<span className="required"></span>:
          <br/>
          <input 
            type="number" 
            name="year" 
            value={inputs.year || ""} 
            onChange={handleChange}
            required
            className='inp inyear'
          />
          </label>
        </div>

        <label className='branch' >Branch<span className="required"></span>:
        <input 
          type="text" 
          name="branch" 
          value={inputs.branch || ""} 
          onChange={handleChange}
          required
          className='inp inbranch'
        /><p>(Fill N/A if there is no branch)</p> 
        </label>
         
         

        <label className='Referral'>Referral:
        <input 
          type="text" 
          name="refferal" 
          value={inputs.refferal || ""} 
          onChange={handleChange}
          className='inp inRefferal'
        />
        </label>
         
         

        <label for="how" className='how'>How did you get to know about Cogni<span className="required"></span>:
          <select id="how" name="how" required className='sel selhow'>
          <option value="" disabled selected></option>
          <option value="Website">Website</option>
          <option value="Social Media">Social Media</option>
          <option value="Student Partner">Student Partner</option>
          <option value="Friends">Friends</option>
          <option value="Relative">Relative</option>
          </select> 
        </label>
        
         
          
          <input type="submit" value="Register for SPP"/>
        </div>
      </form>

      <img src={imageSrc} alt="Frame" className="frame"/>
      </div>
    )
  }

  export default App;
